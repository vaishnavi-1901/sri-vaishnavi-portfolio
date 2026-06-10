# Sri Vaishnavi Inukonda — Portfolio

A premium cinematic developer portfolio built with **Next.js 14**, **Three.js**, **GSAP**, and **CSS Modules**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| 3D / Particles | Three.js |
| Animations | GSAP 3 |
| Smooth Scroll | Lenis |
| Styling | CSS Modules |
| Fonts | Space Grotesk · Inter · JetBrains Mono |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global CSS variables & resets
│   ├── layout.tsx           # Root layout with font config & metadata
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── sections/            # Full-page sections
│   │   ├── Hero.tsx / .module.css
│   │   ├── About.tsx / .module.css
│   │   ├── Skills.tsx / .module.css
│   │   ├── Projects.tsx / .module.css
│   │   ├── Experience.tsx / .module.css
│   │   ├── Certifications.tsx / .module.css
│   │   ├── Education.tsx / .module.css
│   │   └── Contact.tsx / .module.css
│   │
│   ├── three/               # Three.js canvas
│   │   ├── ParticleCanvas.tsx
│   │   └── ParticleCanvas.module.css
│   │
│   └── ui/                  # Reusable UI primitives
│       ├── Cursor.tsx / .module.css
│       ├── Navbar.tsx / .module.css
│       ├── Footer.tsx / .module.css
│       ├── SectionLabel.tsx / .module.css
│       └── RevealBlock.tsx / .module.css
│
├── lib/
│   ├── data.ts              # All portfolio content (edit this!)
│   ├── hooks.ts             # Custom React hooks
│   └── utils.ts             # Utility functions
│
└── public/
    └── video/
        └── intro.mp4        # Your talking-head intro video
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/vaishnavi-1901/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your video

Place your intro video at:

```
public/video/intro.mp4
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customisation

All portfolio content lives in **`lib/data.ts`**. Edit that file to update:

- Your name, role, email, GitHub, LinkedIn
- Skills
- Projects
- Experience
- Certifications
- Education

No other files need to be touched for content changes.

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

---

## Design Tokens

All colours and fonts are defined as CSS variables in `app/globals.css`:

```css
--orange: #ff6b35;          /* Primary accent */
--bg: #080808;              /* Page background */
--bg2: #0f0f0f;             /* Alternate section background */
--text: #f0ede8;            /* Primary text */
--text-mid: #b8b3ac;        /* Secondary text */
--text-dim: #7a7570;        /* Muted text */
--font-display: 'Space Grotesk';
--font-body: 'Inter';
--font-mono: 'JetBrains Mono';
```

---

## Features

- 🎬 Cinematic hero with talking-head video + unmute control
- ✨ Three.js particle system with mouse parallax
- 🎯 Custom cursor (dot + trailing ring)
- 📍 GSAP entrance animations on hero
- 🔽 Scroll-triggered reveal on all sections
- 📱 Fully responsive (mobile nav included)
- 🚀 Lenis smooth scrolling
- 🎨 CSS Modules — zero style leakage
- ♿ Semantic HTML and ARIA labels

---

Built by Sri Vaishnavi Inukonda · [GitHub](https://github.com/vaishnavi-1901) · [LinkedIn](https://www.linkedin.com/in/sri-vaishnavi-inukonda-68a00937a)
