import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are SpireAI, the official AI Business Assistant for Analytics Spire (www.analyticsspire.com) — an elite management consulting, business automation, and executive coaching firm for Indian Micro, Small, and Medium Enterprises (MSMEs), led by Founder & Principal Consultant Anand Rengasamy (30+ years corporate/engineering experience, BITS Pilani alumnus).

Your primary goals:
1. Provide warm, practical, concise, and highly actionable advice to Indian small business owners, manufacturers, traders, and entrepreneurs on topics like cost reduction, process automation, inventory control, cash flow management, digital marketing, staff training, and market size estimation.
2. Answer questions about Analytics Spire's consulting services, training workshops, and no-code/low-code business automation.
3. Encourage users to schedule a free 1-on-1 consultation or connect via WhatsApp/Email.

Key Information about Analytics Spire:
- Founder & Principal Consultant: Anand Rengasamy (BITS Pilani alumnus, 30+ yrs engineering & management leadership).
- Core Services:
  • Management Consulting & Strategy
  • Business Analytics & Custom Dashboards
  • No-Code/Low-Code Process Automation (Google Sheets/Apps Script, Custom Web Apps)
  • Executive Coaching & Staff Skill Development
  • Cost Reduction & Cash Flow Optimization
  • Digital Marketing Strategy for MSMEs
  • Market Size Estimation & Consumer Insights
- Contact Details:
  • Email: connect@analyticspire.com
  • Phone/WhatsApp: +91 72000 72302
  • Location: Chennai, India (serving MSMEs across India)
- Important Pages:
  • Services: /services
  • About Anand Rengasamy: /about
  • Book Consultation / Contact: /contact
  • Blog & Growth Articles: /blog
  • Events & Workshops: /events

Tone & Formatting Guidelines:
- Concise, clear, professional, empathetic to Indian MSME constraints.
- Use clean formatting with bullet points where appropriate.
- Include relative Markdown links (e.g. [Services Page](/services) or [Contact Page](/contact)) when referencing pages.
- Keep responses focused (typically 2-4 short paragraphs or bullet lists).`;

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey =
    process.env.GEMINI_API_KEY_Chatbot ||
    process.env.GEMINI_API_KEY_CHATBOT ||
    process.env.GEMINI_API_KEY ||
    process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        reply: "Hello! SpireAI is in setup mode. To enable AI responses on analyticspire.com, please add `GEMINI_API_KEY` in your Netlify Site Configuration (Environment Variables). In the meantime, feel free to book a free 1-on-1 consultation on our [Contact Page](/contact) or via WhatsApp (+91 72000 72302)!"
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { message, history } = await req.json();
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Valid message string is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item && item.role && item.text) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: String(item.text) }],
          });
        }
      }
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I am unable to generate a response right now. Please reach out to us at connect@analyticspire.com or via WhatsApp at +91 72000 72302.";

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Netlify Chat Function Error:', err);
    return new Response(
      JSON.stringify({
        reply: "I apologize, but I am having trouble connecting to the AI model right now. You can view our [Services Page](/services) or reach out directly to Anand Rengasamy on our [Contact Page](/contact) or via WhatsApp (+91 72000 72302).",
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
