import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Visit our showroom near Shahi Masjid, Begumganj, Barabanki, or reach us by phone, WhatsApp, or email. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Madina Traders",
    description:
      "Visit our showroom in Barabanki, or reach us by phone, WhatsApp, or email.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
