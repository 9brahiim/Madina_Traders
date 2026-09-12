import { SITE_URL } from "@/lib/site-config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The thank-you page is a conversion-tracking destination, not
        // content worth indexing — kept out of search results the same way
        // its own page-level `robots: { index: false }` does, belt-and-braces.
        disallow: ["/thank-you"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
