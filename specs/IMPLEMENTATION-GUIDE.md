# Implementation Guide

This guide provides a step-by-step roadmap for implementing the TransGlobal Logistics website using spec-based development with Adobe EDS.

## Spec-Based Development Workflow

1. **Read the spec** - Understand requirements, Figma reference, acceptance criteria
2. **Set up Adobe EDS block** - Create block structure (JS, CSS)
3. **Implement HTML structure** - Follow spec's HTML output
4. **Style with CSS** - Match Figma design pixel-perfect
5. **Add JavaScript behavior** - Interactions, animations
6. **Create content documents** - Author content in Excel/Markdown
7. **Test against acceptance criteria** - Check every box
8. **Get approval** - Visual QA against Figma

## Development Phases

### Phase 1: Core Homepage MVP (Week 1-2)

**Goal:** Functional homepage with essential content

| Priority | Spec | Effort | Dependencies |
|----------|------|--------|--------------|
| 1 | [01-header-navigation](./01-header-navigation.md) | 1 day | Adobe EDS setup |
| 2 | [02-hero-section](./02-hero-section.md) | 2 days | Header, hero illustration SVG |
| 3 | [04-services-overview](./04-services-overview.md) | 1 day | Service icons SVG |
| 4 | [05-industries-section](./05-industries-section.md) | 1 day | - |
| 5 | [09-footer](./09-footer.md) | 1 day | - |

**Deliverable:** Functional desktop homepage (1440px)

### Phase 2: Enhanced Homepage (Week 3)

**Goal:** Complete homepage with all sections

| Priority | Spec | Effort | Dependencies |
|----------|------|--------|--------------|
| 6 | [03-trust-indicators](./03-trust-indicators.md) | 0.5 day | Client logos |
| 7 | [06-global-reach](./06-global-reach.md) | 1 day | World map SVG |
| 8 | [07-benefits-section](./07-benefits-section.md) | 0.5 day | - |
| 9 | [08-cta-section](./08-cta-section.md) | 0.5 day | - |

**Deliverable:** Complete homepage with all 9 sections

### Phase 3: Responsive & Polish (Week 4)

**Goal:** Mobile-friendly, production-ready

| Priority | Spec | Effort | Dependencies |
|----------|------|--------|--------------|
| 10 | [10-responsive-design](./10-responsive-design.md) | 2 days | All Phase 1-2 complete |
| 11 | Visual QA & refinement | 1 day | Design team feedback |
| 12 | Performance optimization | 0.5 day | Lighthouse audit |

**Deliverable:** Responsive homepage, Lighthouse > 90

### Phase 4: SEO & Internationalization (Week 5)

**Goal:** Global reach, search optimization

| Priority | Spec | Effort | Dependencies |
|----------|------|--------|--------------|
| 13 | [12-seo-metadata](./12-seo-metadata.md) | 1 day | Content finalized |
| 14 | [11-internationalization](./11-internationalization.md) | 2 days | Translation content |
| 15 | Country selector UI | 1 day | i18n framework |

**Deliverable:** Multi-language support (EN, FR), full SEO

## Adobe EDS Project Setup

### 1. Initial Setup

```bash
# Clone AEM boilerplate
git clone https://github.com/adobe/aem-boilerplate.git transport-project
cd transport-project

# Install dependencies
npm install

# Start local dev server
npm start
```

### 2. Configure `fstab.yaml`

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/[YOUR_FOLDER_ID]
```

### 3. Create Block Structure

```
/blocks/
  /header/
    header.js
    header.css
  /hero/
    hero.js
    hero.css
  /cards/
    cards.js
    cards.css
  /footer/
    footer.js
    footer.css
```

### 4. Content Authoring Setup

Create Google Drive folder structure:
```
/Website Content/
  index.md (homepage)
  /services/
    index.md
    air-freight.md
    ocean-freight.md
  /industries/
    index.md
    pharmaceutical.md
  nav.xlsx
  footer.xlsx
  metadata.xlsx
```

## Figma → Code Workflow

### Design Tokens Export

1. Open Figma: https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ
2. Use Figma Inspect to get exact values:
   - Colors (RGB values)
   - Typography (font sizes, weights, line heights)
   - Spacing (padding, margins, gaps)
   - Border radius, shadows

### CSS Variables from Figma

```css
:root {
  /* Colors from Figma */
  --color-navy-dark: rgb(8, 31, 51);
  --color-ocean-blue: rgb(0, 122, 204);
  --color-light-gray: rgb(224, 235, 242);
  
  /* Typography from Figma */
  --font-family: 'Inter', sans-serif;
  --font-size-h1: 56px;
  --font-size-h2: 40px;
  --line-height-h1: 64px;
  
  /* Spacing from Figma */
  --spacing-xs: 8px;
  --spacing-s: 16px;
  --spacing-m: 24px;
  --spacing-l: 32px;
  --spacing-xl: 48px;
  
  /* Layout from Figma */
  --container-width: 1280px;
  --header-height: 80px;
}
```

### Export Assets from Figma

**Icons & Illustrations:**
1. Select element in Figma
2. Export as SVG
3. Optimize with SVGO
4. Save to `/images/` or `/icons/`

**Required Exports:**
- Logo icon: `logo-icon.svg`
- Service icons: `air-freight.svg`, `ocean-freight.svg`, `road-transport.svg`, `warehousing.svg`
- Hero ship: `hero-ship-illustration.svg`
- World map: `world-map.svg`

## Testing Checklist

### Per-Spec Testing

For each spec, verify all acceptance criteria:
- [ ] Visual match with Figma (pixel-perfect on desktop 1440px)
- [ ] Content editable via documents
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accessibility (keyboard, screen reader, WCAG AA)
- [ ] Performance (no layout shift, fast load)
- [ ] Browser compatibility (Chrome, Safari, Firefox, Edge)

### End-to-End Testing

- [ ] Full homepage loads in < 3s
- [ ] All links functional
- [ ] All images load correctly
- [ ] Smooth scrolling and animations
- [ ] No console errors
- [ ] Mobile navigation works
- [ ] Forms submit correctly (quote, contact)

### Lighthouse Audit

Target scores:
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Quality Gates

### Gate 1: Desktop Homepage Complete
- All Phase 1 specs implemented
- Visual QA passed vs Figma
- Content authored in documents
- **Approval:** Design team + Product owner

### Gate 2: Responsive Complete
- All breakpoints implemented
- Mobile navigation functional
- Performance audit passed
- **Approval:** QA team + Product owner

### Gate 3: Production Ready
- SEO metadata complete
- Analytics installed
- Multi-language support (EN, FR minimum)
- **Approval:** SEO team + Product owner

## Go-Live Checklist

- [ ] All specs implemented and tested
- [ ] Content finalized and authored
- [ ] Images optimized and uploaded
- [ ] Metadata configured (titles, descriptions, OG tags)
- [ ] Structured data validated
- [ ] Sitemaps generated and submitted
- [ ] Analytics tracking verified
- [ ] Performance audit passed (Lighthouse > 90)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete (real devices)
- [ ] DNS configured
- [ ] SSL certificate installed
- [ ] CDN configured
- [ ] Monitoring set up (uptime, errors)
- [ ] Backup strategy in place

## Support & Maintenance

### Content Updates
- Authors can update via Google Drive
- Changes reflect on site after publish action
- No developer involvement for content changes

### Design Updates
- Update Figma design
- Reference updated node IDs in specs
- Implement CSS/HTML changes
- Test against updated acceptance criteria

### Performance Monitoring
- Weekly Lighthouse audits
- Monthly analytics review
- Quarterly SEO audit
- Fix issues as they arise

## Resources

- **Figma Design:** https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ
- **Adobe EDS Docs:** https://www.aem.live/docs/
- **Project Context:** [CLAUDE.md](../CLAUDE.md)
- **Spec Index:** [README.md](./README.md)

## Getting Help

- **Design Questions:** Reference Figma, check CLAUDE.md for design decisions
- **Technical Questions:** Adobe EDS documentation, community Slack
- **Content Questions:** Content strategy documented in CLAUDE.md
- **SEO Questions:** Refer to [12-seo-metadata](./12-seo-metadata.md)

---

**Ready to start?** Begin with Phase 1, Spec 01 (Header Navigation). Read the spec thoroughly, set up the block, and check off each acceptance criterion as you go.
