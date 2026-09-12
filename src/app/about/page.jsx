import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Us",
  description:
    "15 years of crafting premium steel and architectural doors in Barabanki, Uttar Pradesh. Learn about Madina Traders' story, values, and craftsmanship.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Madina Traders",
    description:
      "15 years of crafting premium steel and architectural doors in Barabanki, Uttar Pradesh.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
