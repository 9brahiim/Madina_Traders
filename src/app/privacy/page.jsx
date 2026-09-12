export const metadata = {
  title: "Privacy Policy",
  description:
    "How Madina Traders collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden gold-surface px-6 py-20 md:px-20">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
          <span className="h-px w-6 bg-green-mid" /> Legal
        </div>
        <h1 className="font-display text-4xl font-light text-ink md:text-5xl">
          Privacy <em className="italic text-green-mid">Policy</em>
        </h1>
        <p className="mt-3 text-[12px] text-ink-muted">
          Last updated: September 2026
        </p>

        <div className="prose-legal mt-10 flex flex-col gap-7 text-[14px] leading-relaxed text-ink-muted">
          <p>
            Madina Traders (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            operates this website to showcase our door products and let visitors
            reach us for enquiries. This page explains what information we
            collect when you use the site, how we use it, and the choices you
            have.
          </p>

          <Section title="Information We Collect">
            <p>We collect information in two ways:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-ink">Information you provide.</strong>{" "}
                When you fill out an enquiry or contact form, we collect your
                name, phone number, city, the door type you&apos;re interested
                in, and any message you write. This is sent to us to respond to
                your enquiry — we don&apos;t ask for anything beyond what&apos;s
                needed for that.
              </li>
              <li>
                <strong className="text-ink">
                  Information collected automatically.
                </strong>{" "}
                If analytics is enabled on this site, we may use Google
                Analytics to understand how visitors use it (pages viewed,
                approximate location at a city/region level, device type). This
                helps us improve the site; it does not identify you personally.
              </li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                To respond to enquiries and contact you about products or
                quotes.
              </li>
              <li>
                To understand which pages and products visitors find most
                useful.
              </li>
              <li>
                To improve the website's content, design, and performance.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              Our enquiry and contact forms are processed by Web3Forms, a
              third-party form-delivery service that forwards your submission to
              our email inbox. Their handling of that data is governed by their
              own privacy policy.
            </p>
            <p>
              If analytics is enabled on this site, it may use Google Analytics
              to measure site traffic. Google's use of this data is governed by
              Google's own privacy policy.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              This site does not use cookies for advertising or tracking across
              other websites. If analytics is active, Google Analytics may set a
              small number of cookies to distinguish visits; these do not
              identify you personally. You can block cookies entirely through
              your browser's settings if you prefer.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              Enquiry details you submit are kept only as long as needed to
              respond to you and maintain our sales records, and are not used
              for any other purpose.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              You can ask us what information we hold about you, or request that
              we delete it, by emailing us at{" "}
              <a
                href="mailto:madina.traders.bbk@gmail.com"
                className="text-green-mid underline-offset-2 hover:underline"
              >
                madina.traders.bbk@gmail.com
              </a>
              . We'll respond within a reasonable time.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              This website is intended for general audiences and is not directed
              at children. We do not knowingly collect information from
              children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this policy from time to time as our website or
              practices change. The &quot;Last updated&quot; date at the top of
              this page will reflect the most recent revision.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              For any privacy-related questions, reach us at:
              <br />
              Madina Traders
              <br />
              Near Shahi Masjid, Begumganj, Barabanki, Uttar Pradesh
              <br />
              Phone: +91 9696243986 / +91 8090033986
              <br />
              Email: madina.traders.bbk@gmail.com
            </p>
          </Section>

          <p className="mt-4 border-t border-ink/10 pt-6 text-[12px] italic text-ink-muted/80">
            This policy is provided as a general template to describe our
            practices in plain language and is not a substitute for legal
            advice. We recommend having it reviewed by a qualified professional
            to confirm it meets all applicable requirements for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-xl font-normal text-ink">
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
