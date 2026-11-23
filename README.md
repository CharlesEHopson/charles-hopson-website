# Charles Hopson — Personal & Professional Website

A React website built from the **Professional-Personal Website Document**. The Main Page and Professional page are implemented; the Personal page remains a placeholder until its content is developed.

## What's included

### Main Page
- Main hub page linking to the Professional and Personal sections.
- Three black photo placeholders in a manually controlled slideshow.
- Light Mode and Dark Mode controls.
  - Light Mode primary color: `#00003f`
  - Dark Mode primary color: `#ffd700`
- Theme preference is saved in the visitor's browser with `localStorage`.

### Professional page
- Education history, including schools, majors, dates, and GPAs as listed on the resume.
- Work experience for the 2024 and 2025 AutoZone Systems Engineer internships and the Spring 2025 AI Chatbot Developer & Data Analyst team project.
- Skills grouped by the proficiency levels in the resume.
- A profile-image placeholder on the side of the page.
- Clickable email, telephone, and LinkedIn contact links.

### Personal page
- Navigation placeholder for the future Personal section. Its content has intentionally not been built yet.

## Run locally

The project pins Node.js `22.12.0` through `mise.toml`. If you use mise:

```bash
mise install
mise exec -- npm install
mise exec -- npm run dev
```

If you manage Node.js another way, use Node.js `22.12.0` or newer in the 22.x line (or another version supported by the installed Vite release), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
npm run preview
```

The optimized website files are generated in the `dist/` folder.

## Put the project on GitHub

1. Create an empty repository on GitHub.
2. Open a terminal in this project folder.
3. Run the following commands, replacing the repository URL with your own:

```bash
git init
git add .
git commit -m "Build personal website professional page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Before publishing with GitHub Pages or a custom domain

Deployment is not configured yet. Vite's `base` setting may need to be adjusted for a GitHub Pages project-site URL (for example, `https://username.github.io/repository-name/`). A custom domain normally serves the site from `/`, so the correct setting depends on which URL you publish first. Add your actual domain in GitHub Pages settings when you are ready to connect it.

## Main files

```text
charles-hopson-site/
├── index.html
├── package.json
├── mise.toml
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Resume details to review before publishing

The supplied resume lists the University of Memphis Bachelor of Computer Science graduation as **Expected Fall 2026** and GPA as **3.32**. The website retains that wording rather than assuming the degree has been completed. Confirm and update the graduation status once final.

The resume's skill levels are shown as supplied: Intermediate (Python, GitHub, CSS, HTML) and Basic (JavaScript, C/C++, Ruby).

## Editing the placeholders

- The Main Page slideshow is defined by the `slides` array in `src/App.jsx`.
- The Professional page profile image is currently a placeholder in the `ProfilePlaceholder` component. Replace that component with an `<img>` when you have a photo ready.
