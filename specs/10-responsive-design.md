# Spec 10: Responsive Design

## Overview

Comprehensive responsive behavior specifications for all breakpoints: mobile (< 768px), tablet (768px - 1023px), and desktop (≥ 1024px). Ensures optimal user experience across all device sizes.

## Figma Reference

- **File:** [Transport Company Website - POC](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)
- **Primary Artboard:** Homepage - Desktop 1440px
- **Note:** Mobile/tablet variants to be created based on these specs

## Breakpoints

```css
/* Mobile First Approach */
$mobile: 0px - 767px (default)
$tablet: 768px - 1023px
$desktop: 1024px - 1439px
$desktop-large: 1440px+
```

## Component Responsive Behavior

### Header Navigation

| Breakpoint | Behavior |
|------------|----------|
| **Desktop (≥1024px)** | Full horizontal layout, all items visible |
| **Tablet (768-1023px)** | Condensed spacing, all items visible |
| **Mobile (<768px)** | Hamburger menu, slide-out navigation |

**Mobile Menu:**
- Hamburger icon (3 lines): 24x24px, top-right
- Slide-out from right side
- Full-screen overlay (dark with 80% opacity)
- Menu items: stacked vertically, 48px height each
- CTAs at top of menu
- Close button: X icon, top-right

### Hero Section

| Breakpoint | Layout |
|------------|--------|
| **Desktop (≥1024px)** | Two-column (600px text / 520px image) |
| **Tablet (768-1023px)** | Stacked: text full width, image below (400px height) |
| **Mobile (<768px)** | Stacked: text full width, image 280px height |

**Mobile Adjustments:**
- Headline: 36px → 42px (reduced from 56px)
- Subheadline: 16px (reduced from 18px)
- CTA buttons: full width, stacked vertically
- Trust badges: horizontal scroll or 2x2 grid
- Padding: 24px (reduced from 80px)

### Services Overview Cards

| Breakpoint | Grid |
|------------|------|
| **Desktop (≥1024px)** | 4 columns (1x4) |
| **Tablet (768-1023px)** | 2 columns (2x2) |
| **Mobile (<768px)** | 1 column (stacked) |

**Mobile Adjustments:**
- Card padding: 20px (reduced from 24px/32px)
- Gap: 16px (reduced from 24px)
- Icon size: 40px (reduced from 48px)

### Industries Section

| Breakpoint | Grid |
|------------|------|
| **Desktop (≥1024px)** | 2 columns (2x2) |
| **Tablet (768-1023px)** | 2 columns (2x2) |
| **Mobile (<768px)** | 1 column (stacked) |

**Mobile Adjustments:**
- Card padding: 24px (reduced from 32px/36px)
- Title: 20px (reduced from 24px)
- Description: 15px (reduced from 16px)

### Global Reach Map

| Breakpoint | Behavior |
|------------|----------|
| **Desktop (≥1024px)** | Full map 1200px width x 320px height |
| **Tablet (768-1023px)** | Full width, maintain aspect ratio |
| **Mobile (<768px)** | Full width, 240px height (simplified map) |

**Mobile Simplifications:**
- Remove some connection lines (reduce visual complexity)
- Larger hub markers (easier to see)
- Stats overlay: move below map or stack vertically

### Benefits / Why Choose Us

| Breakpoint | Grid |
|------------|------|
| **Desktop (≥1024px)** | 4 columns (1x4) |
| **Tablet (768-1023px)** | 2 columns (2x2) |
| **Mobile (<768px)** | 1 column (stacked) |

### Footer

| Breakpoint | Layout |
|------------|--------|
| **Desktop (≥1024px)** | 5 columns horizontal (Company + 4 link columns) |
| **Tablet (768-1023px)** | Company full width, then 2x2 grid for links |
| **Mobile (<768px)** | Single column, all stacked (accordion optional) |

**Mobile Accordion Option:**
- Each link column collapsible
- Click column title to expand/collapse
- +/- icon indicator
- Company info always visible

## Typography Scaling

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1 (Hero) | 56px | 48px | 36-42px |
| H2 (Sections) | 40px | 36px | 28-32px |
| H3 (Cards) | 20-24px | 18-20px | 18px |
| Body Large | 18px | 17px | 16px |
| Body | 15-16px | 15px | 14-15px |
| Small | 13-14px | 13px | 12-13px |

## Spacing Scaling

| Breakpoint | Container Padding | Section Padding | Element Gaps |
|------------|-------------------|-----------------|--------------|
| Desktop | 80px | 40-80px | 24-48px |
| Tablet | 40px | 32-48px | 20-32px |
| Mobile | 20-24px | 24-40px | 16-20px |

## Touch Targets (Mobile)

**Minimum touch target: 44x44px**

- All buttons: minimum 44px height
- Navigation links: 48px height
- Card links: entire card is tap target
- Footer links: 40px height minimum

## Performance Considerations

### Image Optimization

- Desktop: Full resolution images
- Tablet: 75% resolution
- Mobile: 50% resolution or mobile-specific crops

**Responsive Images:**
```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="...">
</picture>
```

### Lazy Loading

- Images below fold: lazy load
- Hero image: eager load (LCP)
- Service/industry icons: lazy load

### CSS Strategy

```css
/* Mobile First */
.hero {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .hero {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .hero {
    /* Desktop styles */
  }
}
```

## Testing Checklist

Test on real devices:
- [ ] iPhone SE (375px) - smallest mobile
- [ ] iPhone 14 Pro (393px)
- [ ] iPad Mini (768px) - smallest tablet
- [ ] iPad Pro (1024px)
- [ ] Desktop 1440px
- [ ] Desktop 1920px

Browser testing:
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (macOS)
- [ ] Edge (Desktop)

## Acceptance Criteria

- [ ] All sections responsive on mobile, tablet, desktop
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Typography scales appropriately
- [ ] Spacing scales appropriately
- [ ] Images optimized for each breakpoint
- [ ] Navigation works (hamburger menu on mobile)
- [ ] All interactive elements accessible via touch
- [ ] Layout doesn't break between breakpoints
- [ ] Performance: Lighthouse mobile score > 85
- [ ] No CLS (Cumulative Layout Shift)

## Related Specs

All component specs reference responsive behavior. This spec consolidates responsive requirements across all features.
