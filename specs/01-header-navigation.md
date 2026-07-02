# Spec 01: Header Navigation

## Overview

Global site header with logo, main navigation menu, and primary CTAs. Sticky on scroll, responsive collapse on mobile.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Node ID:** `1:3` (Header / Navigation)
- **Artboard:** Homepage - Desktop 1440px

## Requirements

### Functional Requirements

1. **Logo**
   - Clickable, links to homepage (`/`)
   - Includes icon (globe with routes) + "TransGlobal" wordmark
   - Icon: 32x32px, wordmark: 20px Inter Bold

2. **Main Navigation**
   - 5 menu items: Services, Industries, Global Network, About, Insights
   - Each links to corresponding page
   - Hover state: subtle brightness increase
   - Active page: underline indicator

3. **CTA Buttons**
   - Primary: "Get a Quote" - solid blue button, links to quote form
   - Secondary: "Contact" - outline button, links to contact page
   - Both buttons: 15px Inter Semi Bold, 6px border radius

4. **Sticky Behavior**
   - Fixed position on scroll
   - Maintains 80px height
   - Subtle shadow when scrolled past hero

### Technical Requirements

1. **Adobe EDS Block:** `header` (built-in)
2. **Content Source:** `nav.xlsx` in root
3. **CSS Custom Properties:**
   ```css
   --header-height: 80px;
   --header-bg: #081F33;
   --header-text: #E5E5E5;
   --header-logo-width: 200px;
   ```

## Content Structure

### Document: `nav.xlsx`

| Section | Link | URL |
|---------|------|-----|
| | TransGlobal | / |
| Services | Services | /services |
| Services | Air Freight | /services/air-freight |
| Services | Ocean Freight | /services/ocean-freight |
| Services | Road Transport | /services/road-transport |
| Services | Warehousing | /services/warehousing |
| Industries | Industries | /industries |
| Industries | Pharmaceutical | /industries/pharmaceutical |
| Industries | Chemicals | /industries/chemicals |
| Industries | Oil & Gas | /industries/oil-gas |
| Industries | Automotive | /industries/automotive |
| | Global Network | /global-network |
| | About | /about |
| | Insights | /insights |
| CTA | Get a Quote | /quote |
| CTA | Contact | /contact |

## Responsive Behavior

### Desktop (≥1024px)
- Full horizontal layout as designed
- All nav items visible
- Logo + nav + CTAs on single row

### Tablet (768px - 1023px)
- Reduce horizontal spacing between nav items
- Maintain full layout
- CTAs remain visible

### Mobile (< 768px)
- Logo left-aligned
- Hamburger menu icon right-aligned
- Navigation collapses into slide-out menu
- CTAs move to top of mobile menu
- Menu overlay with dark background

## Accessibility

- **Keyboard Navigation:** All links reachable via Tab
- **ARIA Labels:** `role="banner"`, `aria-label="Main navigation"`
- **Focus Indicators:** Visible focus ring on all interactive elements
- **Skip Link:** "Skip to main content" hidden link for screen readers

## Adobe EDS Implementation

### Block Structure
```
[header]
blocks/header/header.js
blocks/header/header.css
```

### JavaScript Behavior
```javascript
// Sticky header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
```

## Acceptance Criteria

- [ ] Logo renders correctly and links to homepage
- [ ] All 5 navigation items visible and functional
- [ ] Both CTA buttons styled correctly and link to proper pages
- [ ] Hover states work on all interactive elements
- [ ] Header becomes sticky after scrolling past hero
- [ ] Mobile menu works on screens < 768px
- [ ] Keyboard navigation fully functional
- [ ] Focus indicators visible
- [ ] Matches Figma design pixel-perfect on desktop
- [ ] No layout shift on page load
- [ ] Performance: < 100ms interaction response time

## Related Specs

- [09-footer.md](./09-footer.md) - Footer navigation
- [10-responsive-design.md](./10-responsive-design.md) - Mobile menu behavior
- [11-internationalization.md](./11-internationalization.md) - Language switcher in header
