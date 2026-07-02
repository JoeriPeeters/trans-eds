# Setup Instructions for Adobe EDS

## Option 1: Clone Your Fork and Add Docs (Recommended ✅)

This approach uses your forked EDS boilerplate as the foundation and adds the specs/docs to it.

### Steps:

```bash
# 1. Rename current folder (backup)
cd /Users/Joeri_Peeters/projects
mv transport-project transport-project-docs

# 2. Clone your forked EDS boilerplate
git clone https://github.com/YOUR_USERNAME/aem-boilerplate.git transport-project
cd transport-project

# 3. Copy specs and documentation
cp -r ../transport-project-docs/specs ./
cp ../transport-project-docs/CLAUDE.md ./
cp ../transport-project-docs/.gitignore ./ # Merge with existing

# 4. Add documentation to git
git add specs/ CLAUDE.md
git commit -m "Add project specs and documentation"

# 5. Push to your fork
git push origin main

# 6. Install dependencies
npm install

# 7. Start development server
npm start
```

### What You'll Get:

```
/transport-project/
  ├── blocks/          # Adobe EDS blocks (from boilerplate)
  ├── scripts/         # Core scripts (from boilerplate)
  ├── styles/          # Global styles (from boilerplate)
  ├── icons/           # Icons folder (from boilerplate)
  ├── specs/           # Your specs (copied)
  ├── CLAUDE.md        # Project context (copied)
  ├── fstab.yaml       # Franklin config (from boilerplate)
  ├── head.html        # Head metadata (from boilerplate)
  ├── package.json     # Dependencies (from boilerplate)
  └── README.md        # EDS readme (from boilerplate)
```

---

## Option 2: Add EDS Boilerplate to Current Folder

If you want to keep the current folder structure:

```bash
# 1. Initialize git in current folder
cd /Users/Joeri_Peeters/projects/transport-project
git init

# 2. Add your fork as a remote
git remote add boilerplate https://github.com/YOUR_USERNAME/aem-boilerplate.git

# 3. Fetch the boilerplate
git fetch boilerplate

# 4. Merge boilerplate main branch
git merge boilerplate/main --allow-unrelated-histories

# 5. Resolve any conflicts (keep both CLAUDE.md and boilerplate README.md)
# specs/ folder won't conflict, it's unique to your project

# 6. Add remote for your project
git remote add origin https://github.com/YOUR_USERNAME/transport-project.git

# 7. Push everything
git add .
git commit -m "Merge EDS boilerplate with project specs"
git push -u origin main

# 8. Install dependencies
npm install

# 9. Start development server
npm start
```

---

## Option 3: Git Submodule (Advanced)

Keep EDS boilerplate as a submodule, maintain separation:

```bash
# 1. Initialize git
cd /Users/Joeri_Peeters/projects/transport-project
git init

# 2. Add your fork as a submodule
git submodule add https://github.com/YOUR_USERNAME/aem-boilerplate.git eds

# 3. Create symlinks to key folders
ln -s eds/blocks ./blocks
ln -s eds/scripts ./scripts
ln -s eds/styles ./styles
ln -s eds/fstab.yaml ./fstab.yaml

# 4. Commit
git add .
git commit -m "Add EDS boilerplate as submodule and project specs"

# 5. Push to your project repo
git remote add origin https://github.com/YOUR_USERNAME/transport-project.git
git push -u origin main
```

**Pros:** Clean separation, easy to update EDS boilerplate
**Cons:** More complex, symlinks can be confusing

---

## Recommended: Option 1

✅ **Use Option 1** - It's the cleanest and most common pattern:
- Your fork of EDS boilerplate becomes the main project
- Specs and docs are project-specific additions
- Easy to pull updates from Adobe's boilerplate upstream
- Standard Adobe EDS project structure

---

## After Setup

### Configure Google Drive

1. Create Google Drive folder for content
2. Get folder ID from URL: `https://drive.google.com/drive/folders/[FOLDER_ID]`
3. Update `fstab.yaml`:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/[YOUR_FOLDER_ID]
```

### Create Content Structure in Google Drive

```
/TransGlobal Website/
  ├── index (Google Doc or .md)     # Homepage
  ├── nav (Excel/Sheets)             # Navigation
  ├── footer (Excel/Sheets)          # Footer
  └── metadata (Excel/Sheets)        # SEO metadata
```

### Update README.md

Add a link to your specs:

```markdown
# TransGlobal Logistics Website

Adobe Experience Manager (EDS) website for TransGlobal Logistics.

## Documentation

- [Project Context](./CLAUDE.md) - Design system, goals, decisions
- [Specifications](./specs/) - Feature specs and implementation guide

## Development

\`\`\`bash
npm install
npm start
\`\`\`

Visit http://localhost:3000
```

---

## Need Your GitHub Username

To complete the setup, I need:
1. Your GitHub username
2. The name of your forked repository (probably `aem-boilerplate` or similar)

Then I can provide exact commands with your repo URLs!
