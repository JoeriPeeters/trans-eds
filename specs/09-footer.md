# Spec 09: Site Footer

## Overview

Global site footer with logo, company tagline, link columns (Services, Industries, Company, Resources), and legal links. Dark navy background matching header.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Node ID:** `1:19` (Footer)
- **Artboard:** Homepage - Desktop 1440px

## Requirements

### Functional Requirements

1. **Company Info Column**
   - Logo: Icon + "TransGlobal" wordmark (same as header)
   - Tagline: "Your trusted partner in global logistics solutions"
   - Typography: Logo 20px Inter Bold, Tagline 14px Inter Regular

2. **Link Columns** (4 columns)
   - **Services:** Air Freight, Ocean Freight, Road Transport, Warehousing
   - **Industries:** Pharmaceutical, Chemicals, Oil & Gas, Automotive
   - **Company:** About Us, Global Network, Careers, Contact
   - **Resources:** Insights, Case Studies, Track Shipment, Customer Portal

3. **Column Structure**
   - Column title: 14px Inter Semi Bold, white
   - Links: 13px Inter Regular, light gray (#B0BBC4)
   - 12px vertical spacing between links

4. **Footer Bottom**
   - Left: Copyright "© 2026 Trans-Global Logistics. All rights reserved."
   - Right: Legal links "Privacy Policy • Terms of Service • Cookie Policy"
   - Typography: 13px Inter Regular, medium gray (#99A5B0)

5. **Layout**
   - Height: 320px
   - Background: Navy dark (#081F33)
   - Content width: 1280px (80px padding on sides)
   - Top row: Logo + 4 link columns (80px gap between columns)
   - Bottom row: Copyright + legal links (40px margin top from columns)

### Technical Requirements

1. **Adobe EDS Block:** `footer` (built-in)
2. **Content Source:** `footer.xlsx` in root
3. **CSS Custom Properties:**
   ```css
   --footer-bg: #081F33;
   --footer-text: #B0BBC4;
   --footer-heading: #FFFFFF;
   --footer-height: 320px;
   --footer-padding: 40px 80px;
   ```

## Content Structure

### Document: `footer.xlsx`

| Column | Title | Links |
|--------|-------|-------|
| Company | TransGlobal | Your trusted partner in global logistics solutions |
| Services | Services | Air Freight \| /services/air-freight |
| Services | | Ocean Freight \| /services/ocean-freight |
| Services | | Road Transport \| /services/road-transport |
| Services | | Warehousing \| /services/warehousing |
| Industries | Industries | Pharmaceutical \| /industries/pharmaceutical |
| Industries | | Chemicals \| /industries/chemicals |
| Industries | | Oil & Gas \| /industries/oil-gas |
| Industries | | Automotive \| /industries/automotive |
| Company | Company | About Us \| /about |
| Company | | Global Network \| /global-network |
| Company | | Careers \| /careers |
| Company | | Contact \| /contact |
| Resources | Resources | Insights \| /insights |
| Resources | | Case Studies \| /case-studies |
| Resources | | Track Shipment \| /track |
| Resources | | Customer Portal \| /portal |
| Legal | | © 2026 Trans-Global Logistics. All rights reserved. |
| Legal | | Privacy Policy \| /privacy |
| Legal | | Terms of Service \| /terms |
| Legal | | Cookie Policy \| /cookies |

## Responsive Behavior

### Desktop (≥1024px)
- Full 5-column layout (Company info + 4 link columns)
- All columns visible horizontally
- Footer bottom: flex space-between

### Tablet (768px - 1023px)
- Company info on top
- 2x2 grid for link columns
- Footer bottom: stacked (copyright, then legal links)

### Mobile (< 768px)
- Single column stack
- Company info at top
- All link columns stacked
- Collapsible accordion per column (optional)
- Footer bottom: centered, stacked

## Accessibility

- **Semantic HTML:** `<footer>` element, proper heading hierarchy
- **Keyboard Navigation:** All links reachable via Tab
- **ARIA:** `role="contentinfo"`, proper labeling
- **Focus:** Visible focus rings
- **Link Purpose:** Clear, descriptive link text

## Adobe EDS Implementation

### Block Structure
```
[footer]
blocks/footer/footer.js
blocks/footer/footer.css
```

### HTML Output
```html
<footer>
  <div class="footer-content">
    <div class="footer-columns">
      <div class="footer-company">
        <div class="logo">
          <img src="/icons/logo-icon.svg" alt="TransGlobal" />
          <span>TransGlobal</span>
        </div>
        <p class="tagline">Your trusted partner in global logistics solutions</p>
      </div>
      <div class="footer-links">
        <div class="link-column">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/air-freight">Air Freight</a></li>
            <!-- more links -->
          </ul>
        </div>
        <!-- more columns -->
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">© 2026 Trans-Global Logistics. All rights reserved.</p>
      <nav class="legal-links">
        <a href="/privacy">Privacy Policy</a>
        <span>•</span>
        <a href="/terms">Terms of Service</a>
        <span>•</span>
        <a href="/cookies">Cookie Policy</a>
      </nav>
    </div>
  </div>
</footer>
```

## Acceptance Criteria

- [ ] Footer renders with dark navy background
- [ ] Logo and tagline display correctly
- [ ] All 4 link columns present with correct titles and links
- [ ] Link hover state works (brightness increase)
- [ ] Footer bottom with copyright and legal links
- [ ] Responsive: columns stack on mobile
- [ ] All links functional
- [ ] Content editable via footer.xlsx
- [ ] Keyboard accessible
- [ ] Matches Figma design on desktop

## Related Specs

- [01-header-navigation.md](./01-header-navigation.md) - Header nav structure
- [10-responsive-design.md](./10-responsive-design.md) - Mobile footer layout
