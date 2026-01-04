/* seo.js
   SEO-for-AI helper:
   - Injects JSON-LD structured data from a single source of truth
   - Keeps index.html cleaner
*/

(function () {
  const SITE_URL = document.documentElement.getAttribute('data-site-url') || 'https://example.com/';
  const LOGO_URL = document.documentElement.getAttribute('data-logo-url') || `${SITE_URL.replace(/\/$/, '')}/AR_logo.png`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        "name": "PS-Consults AGRIREG™",
        "url": SITE_URL,
        "logo": LOGO_URL,
        "sameAs": [
          "https://ps-consults.com/",
          "https://www.linkedin.com/in/stephensonpatrick/"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "stepminer@gmail.com",
            "areaServed": "CA",
            "availableLanguage": ["en"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "Pat@agrireg.ca",
            "areaServed": "CA",
            "availableLanguage": ["en"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        "url": SITE_URL,
        "name": "Canadian Prairie Pesticide Market Intelligence Package (2025) | PS-Consults AGRIREG™",
        "publisher": { "@id": `${SITE_URL}#org` },
        "inLanguage": "en-CA"
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#webpage`,
        "url": SITE_URL,
        "name": "Canadian Prairie Pesticide Market Intelligence Package (2025)",
        "isPartOf": { "@id": `${SITE_URL}#website` },
        "about": { "@id": `${SITE_URL}#service` },
        "inLanguage": "en-CA"
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}#service`,
        "name": "Canadian Prairie Pesticide Market Intelligence Package (2025)",
        "provider": { "@id": `${SITE_URL}#org` },
        "areaServed": ["CA-AB", "CA-SK", "CA-MB"],
        "serviceType": "Market intelligence and PMRA-aligned regulatory advisory",
        "description": "A market intelligence package for Alberta, Saskatchewan, and Manitoba including market landscape analysis, competitive intelligence, channel mapping, PMRA-aligned regulatory advisory, and two interactive Shiny apps."
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
})();