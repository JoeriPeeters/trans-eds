# Document Authoring Setup for TransGlobal

## What is Document Authoring (DA)?

Adobe EDS uses **Google Docs and Google Sheets** as the content management system. Authors write content in familiar tools, and EDS automatically converts it to performant HTML.

## Benefits of DA

- ✅ **No code** for content updates
- ✅ **WYSIWYG** editing in Google Docs
- ✅ **Version control** via Google Drive
- ✅ **Collaboration** - multiple authors
- ✅ **Preview** before publish
- ✅ **Fast** - Changes live in seconds

## Setup Steps

### 1. Create Google Drive Folder Structure

Create a folder in Google Drive with this structure:

```
/TransGlobal Website/
  ├── index (Google Doc)              # Homepage
  ├── nav (Google Sheet)              # Navigation
  ├── footer (Google Sheet)           # Footer links
  ├── metadata (Google Sheet)         # SEO metadata
  │
  ├── /services/
  │   ├── index (Google Doc)          # Services overview
  │   ├── air-freight (Google Doc)
  │   ├── ocean-freight (Google Doc)
  │   ├── road-transport (Google Doc)
  │   └── warehousing (Google Doc)
  │
  ├── /industries/
  │   ├── index (Google Doc)
  │   ├── pharmaceutical (Google Doc)
  │   ├── chemicals (Google Doc)
  │   ├── oil-gas (Google Doc)
  │   └── automotive (Google Doc)
  │
  └── /images/
      ├── hero-ship.png
      ├── logo.svg
      └── [other images]
```

### 2. Share Folder with EDS

1. Share the main folder with: **helix@adobe.com**
2. Give **Editor** permissions
3. Copy the folder ID from URL

### 3. Update fstab.yaml

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE
```

## Document Authoring Syntax

### Homepage Example (`index` Google Doc)

Create a Google Doc named `index` with this content:

```
# Global Logistics Solutions for Your Industry

Trusted by industry leaders across 90 countries. Specialized expertise in Pharma, Chemicals, Oil & Gas, and Automotive logistics.

[Request a Quote](/quote)
[Explore Services](/services)

---
Hero
---

## Comprehensive Logistics Solutions

End-to-end supply chain management tailored to your industry

---
Cards (services)
---

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

---
Cards (services)
---
```

### How Blocks Work in Docs

Blocks are defined with horizontal rules (`---`):

```
---
BlockName
---
Content goes here
---
BlockName
---
```

**With variants:**
```
---
Cards (services)
---
```
Becomes: `<div class="cards services">`

### Navigation (`nav` Google Sheet)

Create a Google Sheet named `nav`:

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

### Footer (`footer` Google Sheet)

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

### Metadata (`metadata` Google Sheet)

| URL | Title | Description | Image | Keywords |
|-----|-------|-------------|-------|----------|
| / | TransGlobal Logistics - Global Shipping Solutions | Trusted global logistics partner serving 90+ countries... | /images/og-home.jpg | global logistics, international shipping |
| /services | Logistics Services | Comprehensive logistics solutions including air freight... | /images/og-services.jpg | air freight, ocean freight |

## Preview Your Content

1. **Make changes** in Google Doc
2. **Preview URL:** `https://main--trans-eds--joeri-peeters.aem.page/`
3. **Wait ~30 seconds** for changes to appear
4. **Refresh** browser

## Publish to Production

When ready to publish:

1. Visit: `https://main--trans-eds--joeri-peeters.aem.live/`
2. Content is cached and served from CDN
3. Updates typically take 2-5 minutes

## Block Authoring Tips

### Images

```
![Alt Text](/images/hero-ship.png)
```
- Upload images to `/images/` folder in Google Drive
- Reference with `/images/filename.png`
- EDS automatically optimizes images

### Links

```
[Link Text](/path/to/page)
```
- Internal links: `/services/air-freight`
- External links: `https://example.com`

### Sections

Use `---` (horizontal rule) to separate sections:

```
Content in section 1

---

Content in section 2
```

### Columns

Use `|` to create columns:

```
Column 1 content
|
Column 2 content
```

### Tables

Standard markdown tables work:

```
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## Development Workflow with DA

### Local Development

```bash
# Start local server
npx @adobe/aem-cli up

# Visit
http://localhost:3000
```

Local server proxies content from Google Drive in real-time.

### Making Changes

1. **Edit** Google Doc
2. **Save** (auto-saves)
3. **Refresh** localhost:3000
4. **See changes** immediately

### Building Blocks

While content lives in Google Docs, **blocks are code**:

```bash
# Create new block
mkdir -p blocks/hero
touch blocks/hero/hero.js
touch blocks/hero/hero.css
```

Blocks transform the doc content into final HTML/CSS.

## Next Steps

1. **Create Google Drive folder** with structure above
2. **Share with helix@adobe.com**
3. **Copy folder ID** and update `fstab.yaml`
4. **Create `nav.xlsx` and `footer.xlsx`** in Google Drive
5. **Create `index` Google Doc** with homepage content
6. **Test** at http://localhost:3000

## Need Help?

- **EDS Docs:** https://www.aem.live/docs/
- **Block Examples:** https://www.aem.live/developer/block-collection
- **Authoring Guide:** https://www.aem.live/docs/authoring

---

**Ready to set up?** Create the Google Drive folder, and I'll help you populate it with the right content structure!
