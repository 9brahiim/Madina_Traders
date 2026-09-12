import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CallFloat from "@/components/ui/CallFloat";
import CatalogueTab from "@/components/ui/CatalogueTab";
import Analytics from "@/components/ui/Analytics";
import { ModalProvider } from "@/components/ui/ModalProvider";
import AppShell from "@/components/ui/AppShell";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";

const TITLE = "Madina Traders | Premium Doors — Barabanki";
const DESCRIPTION =
  "Premium steel and architectural doors for homes and businesses across Barabanki, Lucknow and Uttar Pradesh.";

export const metadata = {
  // Lets every page's relative Open Graph/canonical URLs resolve correctly.
  // ⚠️ Update SITE_URL in src/lib/site-config.js once the real domain is live.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Pages that set their own title (e.g. "Contact | Madina Traders") get
    // that exact string; pages that don't fall back to TITLE above.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-green-deep text-cream">
        <ModalProvider>
          <AppShell>
            <Navbar />
            <CatalogueTab />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <CallFloat />
          </AppShell>
        </ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
