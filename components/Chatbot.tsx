import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, Send, Bot, User, RefreshCw, ChevronDown, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const INITIAL_WELCOME_MESSAGE: Message = {
  id: 'welcome-1',
  role: 'model',
  text: "Hello! 👋 I'm **SpireAI**, your AI Business Advisor at **Analytics Spire**.\n\nI can help you with strategies to **cut costs**, **automate manual workflows**, **improve cash flow**, and **scale your MSME**.\n\nHow can I assist your business today?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const SUGGESTED_PROMPTS = [
  "How can Analytics Spire help my business?",
  "What services do you offer for MSMEs?",
  "How do I automate my manufacturing process?",
  "How can I cut operating costs and inventory waste?"
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Format history for backend API
      const history = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text.trim(),
          history,
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      let aiReply = '';

      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        aiReply = data.reply;
      } else if (contentType.includes('application/json')) {
        const data = await res.json();
        aiReply = data.reply || data.error;
      }

      if (!aiReply) {
        aiReply = "Hello! SpireAI is ready to connect. If you are viewing on your custom domain, please ensure `GEMINI_API_KEY` is configured in your Netlify Environment Settings. Alternatively, book a free consultation on our [Contact Page](/contact) or via WhatsApp (+91 72000 72302)!";
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        role: 'model',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chatbot error:', err);
      const fallbackMsg: Message = {
        id: `ai-error-${Date.now()}`,
        role: 'model',
        text: "SpireAI assistant is currently offline on static hosting. To enable AI replies on analyticspire.com, please add `GEMINI_API_KEY` in your Netlify site environment settings. You can also view our [Services Page](/services) or reach Anand Rengasamy directly on our [Contact Page](/contact) or via WhatsApp (+91 72000 72302).",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_WELCOME_MESSAGE]);
  };

  // Simple renderer for bold, bullets, linebreaks and Markdown links
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, lIdx) => {
      // Process markdown link [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        const linkText = match[1];
        const linkUrl = match[2];
        const isInternal = linkUrl.startsWith('/');

        if (isInternal) {
          parts.push(
            <Link
              key={`link-${lIdx}-${match.index}`}
              to={linkUrl}
              onClick={() => setIsOpen(false)}
              className="text-brand-400 font-semibold underline hover:text-white transition inline-flex items-center gap-0.5"
            >
              {linkText}
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`link-${lIdx}-${match.index}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 font-semibold underline hover:text-white transition inline-flex items-center gap-0.5"
            >
              {linkText}
              <ExternalLink size={12} className="inline ml-0.5" />
            </a>
          );
        }
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const content = parts.length > 0 ? parts : line;

      // Handle bullet lists
      if (typeof line === 'string' && (line.trim().startsWith('• ') || line.trim().startsWith('- '))) {
        const bulletText = line.trim().substring(2);
        return (
          <li key={lIdx} className="ml-4 list-disc text-gray-200">
            {formatBold(bulletText)}
          </li>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === '' ? 'h-2' : 'min-h-[1.25rem]'}>
          {typeof content === 'string' ? formatBold(content) : content}
        </p>
      );
    });
  };

  const formatBold = (str: string) => {
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Trigger Button (Left of WhatsApp button) */}
      <div className="fixed bottom-6 right-24 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(2,132,199,0.45)] hover:shadow-[0_6px_25px_rgba(2,132,199,0.65)] transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Open SpireAI Chatbot"
        >
          <Sparkles size={26} className="text-white group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Unread badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-gray-950 animate-pulse">
              1
            </span>
          )}

          {/* Hover Tooltip */}
          <span className="absolute bottom-16 right-0 bg-gray-900 border border-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Ask SpireAI Assistant
          </span>
        </button>
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[600px] h-[80vh] bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-gray-950/80 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center shadow-md">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-white text-sm">SpireAI</h3>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    AI Advisor
                  </span>
                </div>
                <p className="text-xs text-gray-400 flex items-center space-x-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Analytics Spire Assistant</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                title="Reset Conversation"
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-lg bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                    <Bot size={15} />
                  </div>
                )}

                <div
                  className={`relative max-w-[85%] rounded-2xl p-3.5 shadow-sm text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-tr-none'
                      : 'bg-gray-800/90 text-gray-200 border border-gray-700/60 rounded-tl-none space-y-1.5'
                  }`}
                >
                  {renderFormattedText(msg.text)}
                  <div
                    className={`text-[10px] mt-1.5 text-right ${
                      msg.role === 'user' ? 'text-brand-200' : 'text-gray-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 shrink-0 mt-0.5">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            {/* AI Thinking Animation */}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-gray-400 text-xs py-2">
                <div className="w-7 h-7 rounded-lg bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400 shrink-0">
                  <Bot size={15} />
                </div>
                <div className="bg-gray-800/90 border border-gray-700/60 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}

            {/* Quick Suggested Prompts on Initial Message */}
            {messages.length === 1 && (
              <div className="pt-2 space-y-2">
                <p className="text-xs text-gray-400 font-medium">Suggested questions:</p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left text-xs bg-gray-800/60 hover:bg-gray-800 border border-gray-700/60 hover:border-brand-500/50 text-gray-300 hover:text-white p-2.5 rounded-xl transition-all duration-200"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Area */}
          <div className="p-3 bg-gray-950/90 border-t border-gray-800 space-y-2">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask SpireAI about growth, costs, automation..."
                disabled={isLoading}
                className="w-full bg-gray-900 border border-gray-800 focus:border-brand-500 rounded-xl px-4 py-2.5 pr-11 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-1.5 p-1.5 bg-brand-600 hover:bg-brand-500 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg transition-all duration-200"
              >
                <Send size={15} />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-400 px-1 pt-1">
              <span>Powered by Gemini AI</span>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-brand-400 hover:underline font-medium flex items-center gap-1"
              >
                Book 1-on-1 Consultation &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
