# Adobe EDS Architecture for TransGlobal

## EDS Architecture Overview

Adobe EDS uses a **library + blocks** architecture:

### Core Concepts

1. **Library (`aem.js`)** - Provides core functionality:
   - `loadHeader()` - Auto-loads header block
   - `loadFooter()` - Auto-loads footer block
   - `decorateBlocks()` - Finds and decorates blocks
   - `decorateIcons()` - Converts `:icon-name:` to SVG
   - `buildBlock()` - Programmatically creates blocks
   - `loadCSS()` - Lazy loads stylesheets

2. **Blocks** - Reusable components in `/blocks/`:
   - Each block = folder with `.js` and `.css`
   - Example: `/blocks/hero/hero.js` + `/blocks/hero/hero.css`
   - Block JS exports a `default` function that decorates the DOM

3. **Content Authoring**:
   - Authors create content in Google Docs/Excel
   - Content is converted to semantic HTML
   - Blocks are inserted with special syntax

## Project Structure

```
/transport-project/
  ├── blocks/              # Custom blocks (components)
  │   ├── header/          # ✅ Exists (from boilerplate)
  │   ├── footer/          # ✅ Exists (from boilerplate)
  │   ├── hero/            # ✅ Exists (from boilerplate)
  │   ├── cards/           # ✅ Exists (from boilerplate)
  │   ├── columns/         # ✅ Exists (from boilerplate)
  │   └── [custom]/        # We'll create more
  │
  ├── scripts/
  │   ├── aem.js           # ✅ Core EDS library (DON'T MODIFY)
  │   ├── scripts.js       # ✅ Project-specific scripts
  │   └── [custom].js      # Additional utilities
  │
  ├── styles/
  │   ├── styles.css       # ✅ Global styles
  │   └── fonts.css        # ✅ Font definitions
  │
  ├── icons/               # SVG icons (auto-loaded by decorateIcons)
  └── images/              # Static images
```

## How EDS Works

### 1. Page Load Sequence

```javascript
// From scripts.js
async function loadPage() {
  await loadEager(document);    // Load critical above-fold
  await loadLazy(document);     // Load below-fold
  loadDelayed(document);        // Load non-critical (analytics, etc.)
}

async function loadEager(doc) {
  decorateTemplateAndTheme();   // Apply template/theme
  await loadFonts();             // Load fonts
  decorateSections(main);        // Find <div> sections
  decorateBlocks(main);          // Find blocks within sections
  await waitForFirstImage();     // LCP optimization
  await loadSection(main.querySelector('.section'), false);  // Load first section
  await loadHeader(doc.header);  // Load header block
  await loadFooter(doc.footer);  // Load footer block
}
```

### 2. Block Structure

Each block follows this pattern:

**File: `/blocks/hero/hero.js`**
```javascript
export default function decorate(block) {
  // block = <div class="hero"></div> with content inside
  
  // 1. Read content from block innerHTML
  const content = block.textContent;
  
  // 2. Clear block
  block.innerHTML = '';
  
  // 3. Build new structure
  const heading = document.createElement('h1');
  heading.textContent = content;
  
  // 4. Append to block
  block.append(heading);
  
  // Block is now decorated!
}
```

**File: `/blocks/hero/hero.css`**
```css
.hero {
  /* Styles for the hero block */
  background: var(--color-navy-dark);
  padding: 80px;
}

.hero h1 {
  color: white;
  font-size: 56px;
}
```

### 3. Content Authoring

**In Google Docs:**
```
Global Logistics Solutions for Your Industry

Trusted by industry leaders...

---

Hero

---

Request a Quote | /quote
Explore Services | /services
```

**Converted HTML:**
```html
<div class="section">
  <div class="hero">
    <div>
      <h1>Global Logistics Solutions for Your Industry</h1>
      <p>Trusted by industry leaders...</p>
      <p>
        <a href="/quote">Request a Quote</a>
        <a href="/services">Explore Services</a>
      </p>
    </div>
  </div>
</div>
```

## Our Implementation Strategy

### Approach 1: Reuse Existing Blocks ✅ (Preferred)

The boilerplate already has blocks we can customize:

1. **header** - Customize for our nav structure
2. **hero** - Customize for our two-column layout
3. **cards** - Reuse for Services, Industries, Benefits
4. **footer** - Customize for our footer structure

**Pros:**
- Faster development (80% done)
- Tested and working patterns
- Follows EDS best practices

**Example: Customize Hero**
```javascript
// blocks/hero/hero.js
export default function decorate(block) {
  const [textContent, imageContent] = [...block.children];
  
  // Add our custom classes
  block.classList.add('hero-transport');
  textContent.classList.add('hero-text');
  imageContent.classList.add('hero-visual');
  
  // Build trust badges, CTAs, etc.
  // ...
}
```

### Approach 2: Create Custom Blocks (When Needed)

For unique components not in boilerplate:

1. **global-reach** - World map visualization (new block)
2. **trust-indicators** - Logo bar (new block)
3. **cta-banner** - CTA section (new block)

**Example: Create New Block**
```bash
mkdir -p blocks/global-reach
touch blocks/global-reach/global-reach.js
touch blocks/global-reach/global-reach.css
```

```javascript
// blocks/global-reach/global-reach.js
export default function decorate(block) {
  // Build world map visualization
  const map = document.createElement('div');
  map.className = 'world-map';
  // Add SVG, markers, etc.
  block.append(map);
}
```

## Development Workflow

### Step 1: Start with HTML First

Create semantic HTML in `index.html` or Google Doc:

```html
<div class="hero">
  <div>
    <h1>Global Logistics Solutions</h1>
    <p>Trusted by industry leaders...</p>
  </div>
</div>
```

### Step 2: Add Block Decoration

Create/customize block JS:

```javascript
// blocks/hero/hero.js
export default function decorate(block) {
  // Transform the HTML structure
  // Add dynamic behavior
}
```

### Step 3: Style the Block

```css
/* blocks/hero/hero.css */
.hero {
  background: var(--color-navy-dark);
  min-height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### Step 4: Test

1. View at http://localhost:3000
2. Refresh to see changes
3. Check mobile/tablet breakpoints
4. Validate against spec

## Recommended Implementation Order

### Phase 1: Customize Existing Blocks

1. **Header** - Customize `blocks/header/`
   - Update nav structure
   - Add logo
   - Style for our brand

2. **Hero** - Customize `blocks/hero/`
   - Two-column layout
   - Add trust badges
   - Add ship illustration

3. **Cards** - Customize `blocks/cards/`
   - Service cards variant
   - Industry cards variant
   - Benefits cards variant

4. **Footer** - Customize `blocks/footer/`
   - Update link structure
   - Add logo
   - Style for our brand

### Phase 2: Create New Blocks

5. **Trust Indicators** - New `blocks/trust-indicators/`
6. **Global Reach** - New `blocks/global-reach/`
7. **CTA Banner** - New `blocks/cta-banner/`

## Key EDS Conventions

### 1. Block Naming
- Folder name = block name
- Use kebab-case: `global-reach` not `globalReach`
- CSS class = folder name: `.global-reach`

### 2. CSS Variables
Define in `styles/styles.css`:
```css
:root {
  --color-navy-dark: rgb(8, 31, 51);
  --color-ocean-blue: rgb(0, 122, 204);
  --font-family: 'Inter', sans-serif;
}
```

Use in blocks:
```css
.hero {
  background: var(--color-navy-dark);
  font-family: var(--font-family);
}
```

### 3. Icons
- Place SVG in `/icons/`
- Reference in content: `:icon-name:`
- EDS auto-converts to `<span class="icon icon-name"></span>`

### 4. Responsive
- Mobile-first CSS
- Use existing breakpoints from `styles/styles.css`:
  ```css
  @media (min-width: 900px) { /* tablet */ }
  @media (min-width: 1440px) { /* desktop */ }
  ```

## Questions to Align On

1. **Should we customize existing blocks or create all new ones?**
   - My recommendation: **Customize existing** (faster, proven)

2. **Content authoring - Google Docs or static HTML for now?**
   - My recommendation: **Static HTML** for POC, migrate to Docs later

3. **Block granularity - one block per section or multiple sub-blocks?**
   - My recommendation: **One block per section** (header, hero, services, etc.)

4. **Custom vs. reuse for cards - use built-in cards block with variants?**
   - My recommendation: **Reuse cards block** with CSS variants

## Next Steps

Let me know your preferences, and I'll:
1. Update specs to reflect EDS block structure
2. Create a detailed implementation plan
3. Start with the first block (header or hero)

**What's your preference?** Customize existing blocks or create all new ones?
