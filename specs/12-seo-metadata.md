# Spec 12: SEO & Metadata

## Overview

Comprehensive SEO implementation including meta tags, structured data, Open Graph, Twitter Cards, sitemaps, and internationalization markup for maximum search visibility across 90 countries.

## Requirements

### Page-Level Metadata

#### Homepage Meta Tags

```html
<head>
  <!-- Primary Meta Tags -->
  <title>TransGlobal Logistics - Global Shipping & Supply Chain Solutions</title>
  <meta name="title" content="TransGlobal Logistics - Global Shipping & Supply Chain Solutions">
  <meta name="description" content="Trusted global logistics partner serving 90+ countries. Specialized in Pharmaceutical, Chemicals, Oil & Gas, and Automotive supply chain management with 25+ years experience.">
  <meta name="keywords" content="global logistics, international shipping, supply chain management, pharmaceutical logistics, chemical transport, automotive logistics, air freight, ocean freight">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://transglobal-logistics.com/">
  
  <!-- Language & Region -->
  <meta name="language" content="English">
  <meta name="geo.region" content="US">
  <meta name="geo.position" content="40.7128;-74.0060">
  <meta name="ICBM" content="40.7128, -74.0060">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://transglobal-logistics.com/">
  <meta property="og:title" content="TransGlobal Logistics - Global Shipping & Supply Chain Solutions">
  <meta property="og:description" content="Trusted global logistics partner serving 90+ countries with specialized expertise in Pharma, Chemicals, Oil & Gas, and Automotive.">
  <meta property="og:image" content="https://transglobal-logistics.com/images/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://transglobal-logistics.com/">
  <meta property="twitter:title" content="TransGlobal Logistics - Global Shipping Solutions">
  <meta property="twitter:description" content="Trusted global logistics partner serving 90+ countries with specialized expertise.">
  <meta property="twitter:image" content="https://transglobal-logistics.com/images/twitter-card.jpg">
  
  <!-- Alternate Languages -->
  <link rel="alternate" hreflang="en" href="https://transglobal-logistics.com/">
  <link rel="alternate" hreflang="en-us" href="https://transglobal-logistics.com/en-us/">
  <link rel="alternate" hreflang="en-au" href="https://transglobal-logistics.com/en-au/">
  <link rel="alternate" hreflang="fr-fr" href="https://transglobal-logistics.com/fr-fr/">
  <link rel="alternate" hreflang="x-default" href="https://transglobal-logistics.com/">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
</head>
```

### Structured Data (JSON-LD)

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TransGlobal Logistics",
  "alternateName": "TransGlobal",
  "url": "https://transglobal-logistics.com",
  "logo": "https://transglobal-logistics.com/images/logo.png",
  "description": "Global logistics and supply chain management company serving 90+ countries with specialized expertise in Pharmaceutical, Chemicals, Oil & Gas, and Automotive industries.",
  "foundingDate": "2001",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "5000"
  },
  "areaServed": {
    "@type": "GeoShape",
    "name": "Worldwide"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-TRANS-GLOBAL",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "French", "German", "Spanish"],
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://linkedin.com/company/transglobal",
    "https://twitter.com/transglobal",
    "https://facebook.com/transglobal"
  ]
}
```

#### Service Schema (for each service)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Air Freight Logistics",
  "provider": {
    "@type": "Organization",
    "name": "TransGlobal Logistics"
  },
  "areaServed": {
    "@type": "GeoShape",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Air Freight Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Express Air Freight",
          "description": "Fast, reliable air cargo services with real-time tracking"
        }
      }
    ]
  }
}
```

#### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://transglobal-logistics.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://transglobal-logistics.com/services"
    }
  ]
}
```

## Hreflang Implementation

### Multi-Country Structure

```html
<!-- Homepage -->
<link rel="alternate" hreflang="en" href="https://transglobal-logistics.com/">
<link rel="alternate" hreflang="en-us" href="https://transglobal-logistics.com/en-us/">
<link rel="alternate" hreflang="en-au" href="https://transglobal-logistics.com/en-au/">
<link rel="alternate" hreflang="fr-fr" href="https://transglobal-logistics.com/fr-fr/">
<link rel="alternate" hreflang="de-de" href="https://transglobal-logistics.com/de-de/">
<link rel="alternate" hreflang="es-es" href="https://transglobal-logistics.com/es-es/">
<link rel="alternate" hreflang="zh-cn" href="https://transglobal-logistics.com/zh-cn/">
<link rel="alternate" hreflang="ja-jp" href="https://transglobal-logistics.com/ja-jp/">
<link rel="alternate" hreflang="x-default" href="https://transglobal-logistics.com/">
```

**Priority Countries for Launch:**
- en-us (United States)
- en-au (Australia)
- fr-fr (France)
- de-de (Germany)
- es-es (Spain)
- zh-cn (China)
- ja-jp (Japan)

## XML Sitemaps

### Main Sitemap: `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://transglobal-logistics.com/sitemap-pages.xml</loc>
    <lastmod>2026-07-02</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://transglobal-logistics.com/sitemap-services.xml</loc>
    <lastmod>2026-07-02</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://transglobal-logistics.com/sitemap-industries.xml</loc>
    <lastmod>2026-07-02</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://transglobal-logistics.com/sitemap-locations.xml</loc>
    <lastmod>2026-07-02</lastmod>
  </sitemap>
</sitemapindex>
```

### Pages Sitemap: `sitemap-pages.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://transglobal-logistics.com/</loc>
    <lastmod>2026-07-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://transglobal-logistics.com/"/>
    <xhtml:link rel="alternate" hreflang="en-us" href="https://transglobal-logistics.com/en-us/"/>
    <xhtml:link rel="alternate" hreflang="fr-fr" href="https://transglobal-logistics.com/fr-fr/"/>
  </url>
  <!-- More pages -->
</urlset>
```

## robots.txt

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://transglobal-logistics.com/sitemap.xml

# Disallow admin/internal pages
Disallow: /admin/
Disallow: /portal/
Disallow: /api/

# Crawl delay (optional)
Crawl-delay: 1
```

## Content Source: `metadata.xlsx`

| Page | Title | Description | Keywords | OG Image |
|------|-------|-------------|----------|----------|
| / | TransGlobal Logistics - Global Shipping & Supply Chain Solutions | Trusted global logistics partner serving 90+ countries... | global logistics, international shipping... | /images/og-home.jpg |
| /services | Logistics Services - Air, Ocean, Road, Warehousing | Comprehensive logistics solutions including air freight... | air freight, ocean freight, road transport... | /images/og-services.jpg |
| /industries/pharmaceutical | Pharmaceutical Logistics - GDP Compliant Cold Chain | Specialized pharmaceutical logistics with GDP compliance... | pharma logistics, cold chain, clinical trials... | /images/og-pharma.jpg |

## Technical Implementation (Adobe EDS)

### Auto-generated Metadata

Adobe EDS auto-generates metadata from document structure:
- Page title from H1
- Description from first paragraph
- OG image from hero image

### Custom Metadata Block

```markdown
---
title: TransGlobal Logistics - Global Shipping Solutions
description: Trusted global logistics partner serving 90+ countries...
keywords: global logistics, international shipping
og:image: /images/og-home.jpg
hreflang:
  - en: /
  - en-us: /en-us/
  - fr-fr: /fr-fr/
---
```

## Google Search Console Setup

1. **Property Setup**
   - Add domain property: `transglobal-logistics.com`
   - Verify ownership via DNS TXT record
   - Submit sitemaps

2. **International Targeting**
   - Configure hreflang in Search Console
   - Set country targeting per subdirectory

3. **Core Web Vitals Monitoring**
   - Track LCP, FID, CLS
   - Target: all green metrics

## Analytics & Tracking

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

## Acceptance Criteria

- [ ] All pages have unique, descriptive titles (< 60 chars)
- [ ] All pages have meta descriptions (< 160 chars)
- [ ] Canonical URLs set correctly
- [ ] Hreflang tags present for all language variants
- [ ] Structured data (Organization, Service, BreadcrumbList) validates
- [ ] Open Graph tags present and correct
- [ ] Twitter Card tags present
- [ ] XML sitemaps generated and submitted
- [ ] robots.txt configured correctly
- [ ] Google Search Console verified
- [ ] Analytics tracking installed
- [ ] Core Web Vitals passing (all green)
- [ ] Mobile-friendly test passing
- [ ] Rich results test passing

## Related Specs

- [11-internationalization.md](./11-internationalization.md) - Hreflang implementation
- [10-responsive-design.md](./10-responsive-design.md) - Mobile-friendly requirements
