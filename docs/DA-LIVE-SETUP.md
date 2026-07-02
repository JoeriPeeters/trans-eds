# da.live Setup for TransGlobal

## What is da.live?

**da.live** is Adobe's built-in Document Authoring platform for EDS - no Google Drive needed!

- ✅ Web-based editor (WYSIWYG)
- ✅ No Google account required
- ✅ Built-in media management
- ✅ Live preview
- ✅ Version control
- ✅ Direct integration with EDS

## Setup Steps

### 1. Configure fstab.yaml

Update your `fstab.yaml` to use GitHub as content source:

```yaml
mountpoints:
  /: https://github.com/JoeriPeeters/trans-eds/tree/main
```

**OR** use a separate content repository:

```yaml
mountpoints:
  /: https://github.com/JoeriPeeters/trans-eds-content/tree/main
```

### 2. Access da.live

Visit: **https://da.live/edit**

- Sign in with your Adobe/GitHub account
- Connect to your repo: `JoeriPeeters/trans-eds`
- Start authoring!

### 3. da.live URL Pattern

```
https://da.live/edit#/{owner}/{repo}/{branch}/{path}
```

**For your project:**
```
https://da.live/edit#/JoeriPeeters/trans-eds/main/index
```

## Content Structure with da.live

### File Organization (in GitHub)

```
/trans-eds/
  ├── index.md                    # Homepage
  ├── nav.json                    # Navigation
  ├── footer.json                 # Footer
  ├── metadata.json               # SEO metadata
  │
  ├── /services/
  │   ├── index.md
  │   ├── air-freight.md
  │   └── [other services]
  │
  ├── /industries/
  │   ├── index.md
  │   └── [other industries]
  │
  └── /media/                     # Images/assets
      ├── hero-ship.svg
      └── [other assets]
```

## da.live Authoring

### Creating a New Page

1. Go to: `https://da.live/edit#/JoeriPeeters/trans-eds/main/`
2. Click **"New Document"**
3. Name it (e.g., `index`)
4. Start writing!

### Block Syntax in da.live

da.live uses the same block syntax as Google Docs:

```markdown
# Global Logistics Solutions for Your Industry

Trusted by industry leaders across 90 countries.

[Request a Quote](/quote) [Explore Services](/services)

---
Hero
---

## Comprehensive Logistics Solutions

---
Cards (services)
---

### Air Freight

![Air Freight](/media/air-freight.svg)

Fast, reliable air cargo services.

[Learn More](/services/air-freight)

---
Cards (services)
---
```

### Navigation (nav.json)

Create `nav.json` in da.live:

```json
{
  "data": [
    {
      "Section": "",
      "Link": "TransGlobal",
      "URL": "/"
    },
    {
      "Section": "Services",
      "Link": "Services",
      "URL": "/services"
    },
    {
      "Section": "Industries",
      "Link": "Industries",
      "URL": "/industries"
    },
    {
      "Section": "",
      "Link": "Global Network",
      "URL": "/global-network"
    },
    {
      "Section": "CTA",
      "Link": "Get a Quote",
      "URL": "/quote"
    }
  ]
}
```

### Footer (footer.json)

```json
{
  "data": [
    {
      "Column": "Company",
      "Title": "TransGlobal",
      "Links": "Your trusted partner in global logistics"
    },
    {
      "Column": "Services",
      "Title": "Services",
      "Links": "Air Freight | /services/air-freight"
    }
  ]
}
```

## Preview URLs

### Local Development

```bash
npx @adobe/aem-cli up
```

Visit: http://localhost:3000

### Preview (Main Branch)

```
https://main--trans-eds--joeri-peeters.aem.page/
```

### Production

```
https://main--trans-eds--joeri-peeters.aem.live/
```

## Workflow with da.live

### 1. Author Content

- Go to `https://da.live/edit#/JoeriPeeters/trans-eds/main/index`
- Edit content in WYSIWYG editor
- Add blocks, images, links
- **Save** (commits to GitHub automatically)

### 2. Preview Changes

- Visit preview URL: `https://main--trans-eds--joeri-peeters.aem.page/`
- See changes in ~10 seconds
- Test functionality

### 3. Publish to Production

- Content automatically available at `.aem.live` domain
- CDN-cached for performance
- Updates in ~2-5 minutes

## Local Development with da.live Content

```bash
# Start local server
npx @adobe/aem-cli up

# Local server pulls content from GitHub
# Changes in da.live → commit to GitHub → visible locally
```

**Refresh flow:**
1. Edit in da.live → Save
2. Wait ~5 seconds for GitHub commit
3. Refresh localhost:3000
4. See changes

## Media Management

### Upload Images

In da.live:
1. Click **"Insert Image"**
2. Upload file
3. da.live stores in `/media/` folder
4. Reference as `/media/filename.png`

### Or Use GitHub

Upload directly to `/media/` folder in repo:
```bash
# In your local repo
cp hero-ship.svg media/
git add media/hero-ship.svg
git commit -m "Add hero illustration"
git push
```

Reference in content:
```markdown
![Hero Ship](/media/hero-ship.svg)
```

## Benefits of da.live vs Google Docs

| Feature | da.live | Google Docs |
|---------|---------|-------------|
| **No Google account** | ✅ | ❌ |
| **Version control** | ✅ Git | ⚠️ Drive versions |
| **Code-friendly** | ✅ Markdown | ❌ |
| **Media in repo** | ✅ | ❌ |
| **Offline editing** | ✅ (local md) | ❌ |
| **Developer workflow** | ✅ Git PR | ❌ |

## Current Status

Your project is already configured for da.live!

**fstab.yaml currently points to:**
```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/1MGzOt7ubUXg9DqgiM6YzVQ5_qp_iEq7w
```

**Change to:**
```yaml
mountpoints:
  /: https://github.com/JoeriPeeters/trans-eds/tree/main
```

Then content is authored in da.live and stored in your GitHub repo!

## Next Steps

1. **Update fstab.yaml** to point to GitHub
2. **Create index.md** (homepage content)
3. **Create nav.json** and **footer.json**
4. **Access da.live** to start authoring
5. **Build blocks** to render the content

**Want me to:**
- A) Update fstab.yaml now?
- B) Create initial content files (index.md, nav.json, etc.)?
- C) Both?

Let me know and I'll set it up! 🚀
