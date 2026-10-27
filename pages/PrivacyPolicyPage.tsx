import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-heading font-bold text-white mb-3">{title}</h2>
    <div className="text-gray-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'September 9, 2026';

  return (
    <div className="bg-gray-950 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title={`Privacy Policy | ${COMPANY_NAME}`}
        description={`How ${COMPANY_NAME} collects, uses, and protects the personal information of visitors, clients, and dashboard users.`}
        url="https://analyticsspire.com/privacy-policy"
        noindex={false}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3">Legal</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {lastUpdated}</p>

        <Section title="1. Introduction">
          <p>
            {COMPANY_NAME} ("we", "us", "our") provides management consulting, coaching, and
            automation services to MSMEs and enterprises. This Privacy Policy explains what
            information we collect through this website (analyticsspire.com), our client
            dashboard, our contact and lead forms, our payment page, and our AI chatbot ("SpireAI"),
            and how that information is used and protected.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following categories of information:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-gray-300">Contact & lead details</strong> — name, email, phone number, company, and message content submitted via our Contact page or lead forms.</li>
            <li><strong className="text-gray-300">Account credentials</strong> — email address used to sign in to the client dashboard. Passwords are verified server-side and are not stored in plain text in your browser beyond your active session.</li>
            <li><strong className="text-gray-300">Payment details</strong> — service selected and amount paid. We do not store card, UPI PIN, or net-banking credentials; payments are completed directly with your UPI app or, where enabled, our payment gateway partner.</li>
            <li><strong className="text-gray-300">Chatbot conversations</strong> — messages you send to SpireAI, used to generate a relevant response and improve service quality.</li>
            <li><strong className="text-gray-300">Usage data</strong> — pages visited, referring pages, and interaction events, collected via Google Analytics to help us understand site usage.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>To respond to enquiries submitted through our Contact page and lead forms.</li>
            <li>To authenticate you and personalize your client dashboard experience.</li>
            <li>To process and confirm payments for consulting, coaching, or training services.</li>
            <li>To operate and improve the SpireAI chatbot's responses.</li>
            <li>To analyze aggregate website traffic and improve our content and services.</li>
            <li>To communicate updates about services you have engaged, via email, phone, or WhatsApp.</li>
          </ul>
        </Section>

        <Section title="4. How We Store & Share Information">
          <p>
            Lead and account data submitted through this site is stored in a private, access-controlled
            Google Sheets database maintained by {COMPANY_NAME}. We do not sell your personal
            information to third parties. We may share limited information with service providers who
            help us operate the site (for example, hosting, analytics, and payment processing partners),
            solely to the extent necessary for them to provide that service to us.
          </p>
        </Section>

        <Section title="5. Cookies & Local Storage">
          <p>
            We use your browser's local storage to keep you signed in to the client dashboard between
            visits, and analytics cookies to understand aggregate site usage. You can clear these at any
            time via your browser settings; doing so will simply sign you out of the dashboard.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            You may request access to, correction of, or deletion of your personal information at any
            time by contacting us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-400 hover:text-white underline">
              {CONTACT_EMAIL}
            </a>
            . We will respond to verified requests within a reasonable timeframe.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We take reasonable technical and organizational measures to protect the information we
            hold, including restricted access to our data sources and encrypted transport (HTTPS) for
            all traffic to and from this website. No method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            for legal, operational, or regulatory reasons. The "Last updated" date at the top of this
            page will reflect the most recent revision.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            Questions about this Privacy Policy can be directed to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-400 hover:text-white underline">
              {CONTACT_EMAIL}
            </a>{' '}
            or via our{' '}
            <Link to="/contact" className="text-brand-400 hover:text-white underline">
              Contact page
            </Link>
            .
          </p>
        </Section>
      </div>
    </div>
  );
};
