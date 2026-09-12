export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Madina Traders website and enquiring about our door products.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden gold-surface px-6 py-20 md:px-20">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-3 flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-green-mid">
          <span className="h-px w-6 bg-green-mid" /> Legal
        </div>
        <h1 className="font-display text-4xl font-light text-ink md:text-5xl">
          Terms &amp; <em className="italic text-green-mid">Conditions</em>
        </h1>
        <p className="mt-3 text-[12px] text-ink-muted">
          Last updated: September 2026
        </p>

        <div className="mt-10 flex flex-col gap-7 text-[14px] leading-relaxed text-ink-muted">
          <p>
            These terms govern your use of the Madina Traders website. By
            browsing this site or submitting an enquiry through it, you agree to
            the terms below.
          </p>

          <Section title="About This Website">
            <p>
              This website is an informational catalogue for Madina Traders, a
              door retailer based in Barabanki, Uttar Pradesh. It's intended to
              showcase our products and let visitors get in touch — it is not an
              e-commerce checkout, and no purchase or payment is made directly
              through the site.
            </p>
          </Section>

          <Section title="Product Information">
            <p>
              Door images, dimensions, and descriptions on this site are
              provided for general reference. While we try to keep this
              information accurate and up to date, actual finish, colour, and
              stock availability may vary slightly from what's shown here.
              Please confirm exact specifications, pricing, and availability
              with our showroom before making a purchase decision.
            </p>
          </Section>

          <Section title="Enquiries and Communication">
            <p>
              When you submit an enquiry or contact form, you're giving us
              permission to contact you back by phone, WhatsApp, or email
              regarding your enquiry. Submitting a form does not create any
              order, booking, or binding agreement — it simply starts a
              conversation with our team.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              The content on this website — including text, layout, and the
              Madina Traders name and logo — belongs to Madina Traders unless
              otherwise noted, and may not be copied or reused without
              permission. Product photographs are used for illustrative
              purposes.
            </p>
          </Section>

          <Section title="No Warranty on Website Content">
            <p>
              This website is provided "as is." While we aim to keep it accurate
              and available, we don't guarantee it will always be error-free,
              uninterrupted, or fully up to date. This does not affect the
              warranty terms on our physical products, which are described on
              our{" "}
              <a
                href="/warranty"
                className="text-green-mid underline-offset-2 hover:underline"
              >
                Warranty page
              </a>
              .
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the extent permitted by law, Madina Traders is not liable for
              any indirect or incidental loss arising from your use of this
              website. Nothing here limits any statutory rights you have as a
              consumer under applicable Indian law.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These terms are governed by the laws of India, and any disputes
              will be subject to the jurisdiction of the courts in Barabanki,
              Uttar Pradesh.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We may revise these terms from time to time. Continued use of the
              website after changes are posted means you accept the updated
              terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              Questions about these terms can be sent to:
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
            This page is provided as a general template and is not a substitute
            for legal advice. We recommend having it reviewed by a qualified
            professional to confirm it meets all applicable requirements for
            your business.
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
