import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { ModalProvider } from "@/components/ui/ModalProvider";
import AppShell from "@/components/ui/AppShell";

export const metadata = {
  title: "Madina Traders | Premium Doors — Barabanki",
  description:
    "Premium steel and architectural doors for homes and businesses across Barabanki, Lucknow and Uttar Pradesh.",
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
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </AppShell>
        </ModalProvider>
      </body>
    </html>
  );
}
