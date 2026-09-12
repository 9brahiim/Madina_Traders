import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/site-config";

// Loads Google Analytics only if a Measurement ID is set in site-config.js.
// Leave GA_MEASUREMENT_ID blank and this renders nothing — no script tags,
// no console errors, nothing tracked.
export default function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
