# Spec 04: Services Overview

## Overview

Four-card grid showcasing core logistics services: Air Freight, Ocean Freight, Road Transport, and Warehousing. Each card includes custom vector icon, title, and description.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Node ID:** `1:9` (Services Overview)
- **Artboard:** Homepage - Desktop 1440px

## Requirements

### Functional Requirements

1. **Section Header**
   - Title: "Comprehensive Logistics Solutions"
   - Subtitle: "End-to-end supply chain management tailored to your industry"
   - Title: 40px Inter Bold, Subtitle: 18px Inter Regular

2. **Service Cards** (4 cards)
   - Card 1: Air Freight
   - Card 2: Ocean Freight
   - Card 3: Road Transport
   - Card 4: Warehousing

3. **Card Structure**
   - Icon: Custom SVG illustration (48x48px in colored circle)
   - Title: 20px Inter Bold
   - Description: 15px Inter Regular, 150% line height
   - Card dimensions: 295px width, auto height
   - Background: Light gray (#F8F9FA)
   - Border: 1px solid #E5E8EB
   - Border radius: 12px
   - Padding: 24px horizontal, 32px vertical

4. **Icons**
   - Air Freight: Blue airplane icon (#3399D9)
   - Ocean Freight: Ocean blue ship icon (#007ACC)
   - Road Transport: Green truck icon (#4DA666)
   - Warehousing: Orange box/package icon (#D97326)

5. **Interaction**
   - Cards are clickable, link to service detail pages
   - Hover: Subtle lift effect (4px translate up), shadow increase
   - Cursor: pointer

### Technical Requirements

1. **Adobe EDS Block:** `cards` (built-in, variant: "services")
2. **Content Source:** Homepage document or `services.xlsx`
3. **CSS Custom Properties:**
   ```css
   --card-bg: #F8F9FA;
   --card-border: #E5E8EB;
   --card-radius: 12px;
   --card-padding: 24px 32px;
   --card-gap: 24px;
   ```

## Content Structure

### Document: `index.md` (Services Section)

```markdown
## Services

Comprehensive Logistics Solutions

End-to-end supply chain management tailored to your industry

### Air Freight

![Air Freight Icon](/icons/air-freight.svg)

Fast, reliable air cargo services with real-time tracking and customs support.

[Learn More](/services/air-freight)

### Ocean Freight

![Ocean Freight Icon](/icons/ocean-freight.svg)

Cost-effective sea shipping for FCL and LCL with global port coverage.

[Learn More](/services/ocean-freight)

### Road Transport

![Road Transport Icon](/icons/road-transport.svg)

Flexible ground logistics with temperature-controlled and hazmat capabilities.

[Learn More](/services/road-transport)

### Warehousing

![Warehousing Icon](/icons/warehousing.svg)

Secure storage facilities with inventory management and distribution.

[Learn More](/services/warehousing)
```

### Alternative: `services.xlsx`

| Icon | Title | Description | Link |
|------|-------|-------------|------|
| /icons/air-freight.svg | Air Freight | Fast, reliable air cargo services with real-time tracking and customs support. | /services/air-freight |
| /icons/ocean-freight.svg | Ocean Freight | Cost-effective sea shipping for FCL and LCL with global port coverage. | /services/ocean-freight |
| /icons/road-transport.svg | Road Transport | Flexible ground logistics with temperature-controlled and hazmat capabilities. | /services/road-transport |
| /icons/warehousing.svg | Warehousing | Secure storage facilities with inventory management and distribution. | /services/warehousing |

## Responsive Behavior

### Desktop (≥1024px)
- 4 cards in horizontal row
- Each card: 295px width
- 24px gap between cards
- Grid: `display: grid; grid-template-columns: repeat(4, 1fr);`

### Tablet (768px - 1023px)
- 2x2 grid
- Cards expand to fill available width
- Maintain 24px gap

### Mobile (< 768px)
- Single column stack
- Cards full width
- 16px gap between cards
- Reduce card padding to 20px

## Accessibility

- **Semantic HTML:** `<section>` with proper heading hierarchy
- **Card Links:** Entire card clickable via `<a>` wrapper
- **Alt Text:** Descriptive alt text for service icons
- **Focus:** Visible focus ring on card links
- **ARIA:** `aria-label` on cards for screen readers
- **Keyboard:** All cards accessible via Tab key

## Adobe EDS Implementation

### Block Structure
```
[cards variant=services]
blocks/cards/cards.js
blocks/cards/cards.css
icons/air-freight.svg
icons/ocean-freight.svg
icons/road-transport.svg
icons/warehousing.svg
```

### HTML Output
```html
<section class="cards services">
  <div class="cards-header">
    <h2>Comprehensive Logistics Solutions</h2>
    <p class="subtitle">End-to-end supply chain management...</p>
  </div>
  <div class="cards-grid">
    <a href="/services/air-freight" class="card">
      <div class="icon">
        <img src="/icons/air-freight.svg" alt="Air Freight" />
      </div>
      <h3>Air Freight</h3>
      <p>Fast, reliable air cargo services...</p>
    </a>
    <!-- more cards -->
  </div>
</section>
```

### CSS
```css
.cards.services .cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.cards.services .card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cards.services .card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

@media (max-width: 1023px) {
  .cards.services .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .cards.services .cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

## Animation & Interaction

### On Scroll Into View
- Stagger card fade-in (100ms delay between each)
- Subtle slide up from below

### Hover State
- Transform: translateY(-4px)
- Box shadow increase
- Transition: 200ms ease

## Performance Considerations

- **Icon Format:** SVG for scalability, inline or sprite sheet
- **Lazy Loading:** Load icons when section scrolls into view
- **Image Optimization:** Optimize SVG files (remove unnecessary metadata)
- **Critical CSS:** Inline above-the-fold card styles

## Acceptance Criteria

- [ ] Section header renders with correct typography
- [ ] All 4 service cards display in horizontal row on desktop
- [ ] Each card shows icon, title, and description
- [ ] Icons match Figma design (airplane, ship, truck, box)
- [ ] Card backgrounds and borders styled correctly
- [ ] Hover effect works (lift + shadow)
- [ ] All cards link to correct service detail pages
- [ ] Responsive: 2x2 grid on tablet, stacked on mobile
- [ ] Cards are keyboard accessible (Tab navigation)
- [ ] Focus rings visible on all cards
- [ ] Alt text present on all icons
- [ ] Content editable via document or spreadsheet
- [ ] Matches Figma design pixel-perfect on desktop
- [ ] Smooth animations on scroll into view
- [ ] Performance: No layout shift, icons load quickly

## Related Specs

- [05-industries-section.md](./05-industries-section.md) - Similar card pattern
- [07-benefits-section.md](./07-benefits-section.md) - Similar card pattern
- [10-responsive-design.md](./10-responsive-design.md) - Responsive grid behavior
