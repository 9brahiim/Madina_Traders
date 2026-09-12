import ProductsPageClient from "./ProductsPageClient";

export const metadata = {
  title: "All Doors",
  description:
    "Browse our full collection of room doors, mother-son doors, main entry doors, and bathroom doors. Premium steel and wood-finish doors in Barabanki, Uttar Pradesh.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "All Doors | Madina Traders",
    description:
      "Browse our full collection of room, mother-son, main entry, and bathroom doors.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
