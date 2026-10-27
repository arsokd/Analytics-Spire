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

export const TermsOfServicePage: React.FC = () => {
  const lastUpdated = 'September 9, 2026';

  return (
    <div className="bg-gray-950 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title={`Terms of Service | ${COMPANY_NAME}`}
        description={`The terms and conditions governing use of the ${COMPANY_NAME} website, client dashboard, and paid consulting services.`}
        url="https://analyticsspire.com/terms-of-service"
        noindex={false}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3">Legal</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {lastUpdated}</p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using this website (analyticsspire.com), the client dashboard, or any
            service offered by {COMPANY_NAME}, you agree to be bound by these Terms of Service. If
            you do not agree with any part of these terms, please discontinue use of the site.
          </p>
        </Section>

        <Section title="2. Our Services">
          <p>
            {COMPANY_NAME} provides management consulting, business coaching, and process/technology
            automation services to MSMEs and enterprises, as described on our Services pages. Specific
            engagements (scope, timelines, deliverables, and fees) are governed by the individual
            proposal, quotation, or agreement issued for that engagement, which takes precedence over
            general marketing content on this site.
          </p>
        </Section>

        <Section title="3. Client Dashboard Access">
          <p>
            Access to the client dashboard is provided to clients with an active engagement.
            Credentials are personal to the individual or organization they are issued to and must not
            be shared. You are responsible for maintaining the confidentiality of your login details and
            for all activity that occurs under your account. Notify us immediately at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-400 hover:text-white underline">
              {CONTACT_EMAIL}
            </a>{' '}
            if you suspect unauthorized use of your account.
          </p>
        </Section>

        <Section title="4. Payments">
          <p>
            Payments made through our Payment page (via UPI, QR code, or an enabled online payment
            gateway) are due in full at the time of purchase unless otherwise agreed in writing. All
            fees are quoted in Indian Rupees (INR) and are exclusive of applicable taxes unless stated
            otherwise. Fees for consulting engagements outside of on-site payment (e.g., project-based
            work) are governed by the applicable proposal or invoice.
          </p>
        </Section>

        <Section title="5. Refunds & Cancellations">
          <p>
            Payments for webinars, workshops, and one-time sessions are generally non-refundable once
            the session has been delivered or access has been granted, except where required by law or
            expressly agreed by {COMPANY_NAME} in writing. Refund requests should be sent to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-400 hover:text-white underline">
              {CONTACT_EMAIL}
            </a>{' '}
            and will be reviewed on a case-by-case basis.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, frameworks, and
            methodologies — is the property of {COMPANY_NAME} or its licensors and is protected by
            applicable intellectual property laws. You may not reproduce, distribute, or create
            derivative works from this content without our prior written consent, except for personal,
            non-commercial reference.
          </p>
        </Section>

        <Section title="7. Third-Party Links & Tools">
          <p>
            Our website links to third-party tools and platforms (for example, WhatsApp, UPI payment
            apps, and our payment gateway partner where enabled). We are not responsible for the
            content, policies, or practices of these third-party services, and your use of them is
            subject to their own terms and privacy policies.
          </p>
        </Section>

        <Section title="8. AI Chatbot (SpireAI)">
          <p>
            Our website includes an AI-powered assistant that provides general information about our
            services. Responses are generated automatically and are provided for informational purposes
            only — they do not constitute formal consulting advice and should not be relied upon as a
            substitute for an engagement with our team.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, {COMPANY_NAME} shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of this website or its content.
            Our total liability arising from any paid engagement shall not exceed the fees paid for that
            specific engagement.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by the laws of India, and any disputes arising from them shall be
            subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            We may revise these Terms of Service from time to time. Continued use of the website or
            client dashboard after changes are posted constitutes acceptance of the revised terms.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            Questions about these Terms can be directed to{' '}
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
