# Spec 05: Industries We Serve

## Overview

2x2 grid of industry-specific cards highlighting specialized logistics expertise in Pharmaceutical, Chemicals, Oil & Gas, and Automotive sectors. Blue gradient cards with white text and emoji icons.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Node ID:** `1:11` (Industries We Serve)
- **Artboard:** Homepage - Desktop 1440px

## Requirements

### Functional Requirements

1. **Section Header**
   - Title: "Industries We Serve"
   - Subtitle: "Specialized expertise in complex, high-value logistics"
   - Title: 40px Inter Bold, Subtitle: 18px Inter Regular

2. **Industry Cards** (4 cards, 2x2 grid)
   - Card 1: Pharmaceutical (💊)
   - Card 2: Chemicals (⚗️)
   - Card 3: Oil & Gas (⛽)
   - Card 4: Automotive (🚗)

3. **Card Structure**
   - Title: 24px Inter Bold, white
   - Description: 16px Inter Regular, light white/blue, 150% line height
   - Emoji icon: 28px in 56px circle, positioned top-right corner
   - Card dimensions: 620px width x auto height
   - Blue gradient backgrounds (different shade per card)
   - Border radius: 12px
   - Padding: 32px horizontal, 36px vertical

4. **Card Colors** (Blue gradient spectrum)
   - Pharmaceutical: `#0085CC` (Primary ocean blue)
   - Chemicals: `#3399D9` (Lighter blue)
   - Oil & Gas: `#1A73A6` (Darker blue)
   - Automotive: `#268CBF` (Medium blue)

5. **Interaction**
   - Cards are clickable, link to industry landing pages
   - Hover: Slight brightness increase, scale 1.02
   - Cursor: pointer

### Technical Requirements

1. **Adobe EDS Block:** `cards` (variant: "industries")
2. **Content Source:** Homepage document or `industries.xlsx`
3. **CSS Custom Properties:**
   ```css
   --industry-card-radius: 12px;
   --industry-card-padding: 32px 36px;
   --industry-card-gap: 20px;
   --industry-pharma: #0085CC;
   --industry-chemicals: #3399D9;
   --industry-oilgas: #1A73A6;
   --industry-automotive: #268CBF;
   ```

## Content Structure

### Document: `index.md` (Industries Section)

```markdown
## Industries

Industries We Serve

Specialized expertise in complex, high-value logistics

### Pharmaceutical

💊

GDP-compliant cold chain logistics, clinical trial materials, and regulatory documentation.

[Learn More](/industries/pharmaceutical)

### Chemicals

⚗️

Hazmat certified handling, IMDG compliance, and specialized packaging solutions.

[Learn More](/industries/chemicals)

### Oil & Gas

⛽

Heavy equipment transport, offshore logistics, and project cargo management.

[Learn More](/industries/oil-gas)

### Automotive

🚗

JIT delivery, parts distribution, and finished vehicle transportation worldwide.

[Learn More](/industries/automotive)
```

## Responsive Behavior

### Desktop (≥1024px)
- 2x2 grid
- Each card: 620px width
- 20px gap between cards
- Grid: `display: grid; grid-template-columns: repeat(2, 1fr);`

### Tablet (768px - 1023px)
- Maintain 2x2 grid
- Cards expand to fill container
- 16px gap

### Mobile (< 768px)
- Single column stack
- Cards full width
- 16px gap
- Reduce padding to 24px

## Acceptance Criteria

- [ ] Section header displays with correct typography
- [ ] All 4 industry cards in 2x2 grid on desktop
- [ ] Each card has correct blue gradient background
- [ ] Titles and descriptions white/light colored and readable
- [ ] Emoji icons positioned in top-right corner of each card
- [ ] Icons: 💊 Pharmaceutical, ⚗️ Chemicals, ⛽ Oil & Gas, 🚗 Automotive
- [ ] Hover effect works (brightness + scale)
- [ ] All cards link to industry landing pages
- [ ] Responsive: stacked column on mobile
- [ ] Content editable via document
- [ ] Matches Figma design (colors, spacing, typography)

## Related Specs

- [04-services-overview.md](./04-services-overview.md) - Similar card pattern
- [10-responsive-design.md](./10-responsive-design.md) - Grid behavior
