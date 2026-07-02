# TransGlobal Logistics Website

Adobe Experience Manager (EDS) website for an independent global transportation and logistics company.

## 🎯 Project Overview

- **Company:** TransGlobal Logistics (POC)
- **Target:** 90+ countries, specialized in Pharma, Chemicals, Oil & Gas, Automotive
- **Technology:** Adobe EDS (Edge Delivery Services)
- **Design:** [Figma Design](https://www.figma.com/design/JO2TLjtcvwjI3CY5aKynVQ)

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Complete project context, design system, brand guidelines
- **[specs/](./specs/)** - Detailed feature specifications
- **[specs/IMPLEMENTATION-GUIDE.md](./specs/IMPLEMENTATION-GUIDE.md)** - Development roadmap

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Visit http://localhost:3000

## 📂 Project Structure

```
/transport-project/
  ├── blocks/          # Custom EDS blocks
  ├── scripts/         # JavaScript utilities
  ├── styles/          # Global styles
  ├── icons/           # SVG icons (services, industries, logo)
  ├── images/          # Images and illustrations
  ├── specs/           # Feature specifications
  ├── CLAUDE.md        # Project context
  └── fstab.yaml       # Content source configuration
```

## 🎨 Design System

See [CLAUDE.md](./CLAUDE.md) for complete design system including:
- Color palette (Navy dark, Ocean blue, etc.)
- Typography (Inter font family)
- Component patterns
- Spacing scale
- Responsive breakpoints

## 📋 Development Phases

### Phase 1: Core Homepage MVP ✅ Ready to Start
- Header Navigation
- Hero Section
- Services Overview
- Industries Section
- Footer

See [Implementation Guide](./specs/IMPLEMENTATION-GUIDE.md) for complete roadmap.

## 🔧 Configuration

### Google Drive Setup

1. Create a Google Drive folder for content
2. Share it with your Adobe EDS service account
3. Update `fstab.yaml` with your folder ID:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
```

### Content Structure

Create these files in Google Drive:
- `index` (Google Doc) - Homepage content
- `nav` (Excel/Sheets) - Navigation structure
- `footer` (Excel/Sheets) - Footer links
- `metadata` (Excel/Sheets) - SEO metadata

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run tests
npm test

# Build for production
npm run build
```

## 📦 Deployment

Deploy to Adobe EDS:
```bash
# Push to main branch
git push origin main

# EDS will auto-deploy
```

## 🤝 Contributing

1. Create a feature branch
2. Implement following the spec in `/specs/`
3. Test against acceptance criteria
4. Visual QA against Figma
5. Submit PR

## 📄 License

Copyright © 2026 TransGlobal Logistics

---

**Next Steps:** Read [Implementation Guide](./specs/IMPLEMENTATION-GUIDE.md) to start development.
