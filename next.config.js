/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers applied to every response. A full Content-Security-Policy
  // is intentionally left out here — this site pulls in Google Fonts, the
  // Web3Forms API, WhatsApp links, and (optionally) Google Analytics, and a
  // CSP that isn't tuned exactly right can silently break all of those. Add
  // one later only after testing it thoroughly in a staging environment.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stops the browser from guessing content types, which can be
          // abused to execute scripts disguised as other file types.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevents the site from being embedded in an <iframe> on another
          // domain — blocks clickjacking attacks against the enquiry forms.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Limits how much of the current page's URL is leaked to sites
          // linked from here (e.g. WhatsApp, Google Maps).
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // This site never needs camera, microphone, or geolocation — deny
          // them outright so an embedded third-party script couldn't use
          // them even if it tried.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Forces HTTPS for a long time after the first visit. Safe to set
          // regardless of host — it's simply ignored over plain HTTP.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
