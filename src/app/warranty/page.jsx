import WarrantyPageClient from "./WarrantyPageClient";

export const metadata = {
  title: "Warranty & Coverage",
  description:
    "What's covered under Madina Traders' door warranty, how long it lasts, and how to make a claim.",
  alternates: { canonical: "/warranty" },
  openGraph: {
    title: "Warranty | Madina Traders",
    description: "What's covered under our door warranty and how to claim it.",
    url: "/warranty",
  },
};

export default function WarrantyPage() {
  return <WarrantyPageClient />;
}
