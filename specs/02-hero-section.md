# Spec 02: Hero Section

## Overview

Full-width hero section with two-column layout: left side contains headline, subheadline, CTAs, and trust badges; right side features container ship illustration with global connectivity visualization.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Node ID:** `1:5` (Hero Section)
- **Artboard:** Homepage - Desktop 1440px

## Requirements

### Functional Requirements

1. **Headline**
   - Text: "Global Logistics Solutions for Your Industry"
   - Typography: 56px Inter Bold, 64px line height
   - Color: White (#FFFFFF)
   - Editable via document

2. **Subheadline**
   - Text: "Trusted by industry leaders across 90 countries. Specialized expertise in Pharma, Chemicals, Oil & Gas, and Automotive logistics."
   - Typography: 18px Inter Regular, 150% line height
   - Color: Light gray (#E0EBF2)
   - Editable via document

3. **CTA Buttons**
   - Primary: "Request a Quote" - Blue solid button (#0085CC)
   - Secondary: "Explore Services" - White outline button
   - Both: 16px Inter Semi Bold, 8px border radius
   - Links configurable via document

4. **Trust Badges**
   - Three metrics: "90+" Countries, "25+" Years Experience, "10K+" Shipments/Month
   - Large number (32px Inter Bold, blue), small label (13px Inter Medium, gray)
   - Editable values via document

5. **Hero Illustration**
   - Container ship with colorful containers
   - Global location markers with connection lines
   - Ocean gradient background
   - SVG format for scalability

### Technical Requirements

1. **Adobe EDS Block:** `hero` (custom block)
2. **Content Source:** Homepage document, hero section
3. **CSS Custom Properties:**
   ```css
   --hero-height: 600px;
   --hero-bg: #081F33;
   --hero-max-width: 1280px;
   --hero-padding: 80px;
   ```

## Content Structure

### Document: `index.md`

```markdown
## Hero

Global Logistics Solutions for Your Industry

Trusted by industry leaders across 90 countries. Specialized expertise in Pharma, Chemicals, Oil & Gas, and Automotive logistics.

[Request a Quote](/quote) [Explore Services](/services)

### Stats

| Metric | Label |
|--------|-------|
| 90+ | Countries |
| 25+ | Years Experience |
| 10K+ | Shipments/Month |
```

## Responsive Behavior

### Desktop (≥1024px)
- Two-column layout: 600px text / 520px illustration
- Full height: 600px
- Illustration visible on right

### Tablet (768px - 1023px)
- Stack columns vertically
- Text column full width
- Illustration below, reduced height (400px)
- Maintain padding

### Mobile (< 768px)
- Single column stacked
- Headline: 36px (reduced from 56px)
- Subheadline: 16px
- Illustration: 280px height
- Reduce vertical spacing
- Trust badges: horizontal scroll if needed

## Accessibility

- **Heading Hierarchy:** H1 for headline
- **Button Labels:** Clear action-oriented text
- **Alt Text:** "Global shipping visualization showing container ship and international routes"
- **Color Contrast:** White on navy = 14.7:1 (WCAG AAA)
- **Focus Management:** Visible focus rings on all interactive elements

## Adobe EDS Implementation

### Block Structure
```
[hero]
blocks/hero/hero.js
blocks/hero/hero.css
images/hero-ship-illustration.svg
```

### HTML Output
```html
<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1>Global Logistics Solutions for Your Industry</h1>
      <p class="subheadline">Trusted by industry leaders...</p>
      <div class="cta-buttons">
        <a href="/quote" class="button primary">Request a Quote</a>
        <a href="/services" class="button secondary">Explore Services</a>
      </div>
      <div class="trust-badges">
        <div class="badge">
          <span class="value">90+</span>
          <span class="label">Countries</span>
        </div>
        <!-- more badges -->
      </div>
    </div>
    <div class="hero-visual">
      <img src="/images/hero-ship-illustration.svg" alt="..." />
    </div>
  </div>
</section>
```

### JavaScript Behavior
```javascript
// Optional: Animate trust badge numbers on scroll into view
const animateCounter = (element, target) => {
  // Count up animation
};

// Lazy load illustration
const observer = new IntersectionObserver((entries) => {
  // Load SVG when in viewport
});
```

## Animation & Interaction

### On Page Load
- Fade in headline (300ms delay)
- Fade in subheadline (500ms delay)
- Fade in buttons (700ms delay)
- Slide in trust badges (900ms delay)
- Fade in illustration (immediately)

### On Scroll
- Parallax effect on illustration (optional)
- Counter animation for trust badges when scrolled into view

## Performance Considerations

- **Image Format:** SVG for illustration (scalable, small file size)
- **Critical CSS:** Inline hero styles for above-the-fold rendering
- **Font Loading:** Preload Inter font weights (Bold, Regular, Semi Bold)
- **LCP Target:** < 2.5s for headline visibility

## Acceptance Criteria

- [ ] Headline renders at 56px Inter Bold, white color
- [ ] Subheadline is readable with proper line height
- [ ] Both CTA buttons styled correctly and functional
- [ ] Trust badges display with correct typography and spacing
- [ ] Container ship illustration loads and displays properly
- [ ] Two-column layout on desktop, stacks on mobile
- [ ] All text editable via homepage document
- [ ] Button links configurable via document
- [ ] Accessibility: H1 for headline, proper ARIA labels
- [ ] Performance: LCP < 2.5s
- [ ] Matches Figma design pixel-perfect on desktop 1440px
- [ ] Smooth animations on page load
- [ ] Responsive on all breakpoints (mobile, tablet, desktop)

## Related Specs

- [01-header-navigation.md](./01-header-navigation.md) - Header above hero
- [03-trust-indicators.md](./03-trust-indicators.md) - Client logos below hero
- [10-responsive-design.md](./10-responsive-design.md) - Mobile layout
- [12-seo-metadata.md](./12-seo-metadata.md) - H1 optimization
