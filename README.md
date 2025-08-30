# Kosha — The Curated Developer Design Hub

> Minimal, futuristic, and indie. Fast discovery, curated inspiration, and developer-first design tools — all in one place.

---

## 🚀 Overview

Kosha is a modern, open-source hub for discovering the best UI libraries, design inspiration, and developer tools. Built for speed, clarity, and a touch of subtle Indian aesthetic, Kosha helps you find, preview, and use design resources with zero friction.

---

## 🎨 Design System

- **Minimal, futuristic, indie-startup energy**
- **Subtle Indian aesthetic:** saffron accent, geometric layer motifs, soft gradients
- **Color palette:**
  - Primary: Turquoise `#14B8A6`
  - Accent: Saffron `#FF7A00`, Indigo `#4F46E5`
  - Neutral: White `#FFFFFF`, Slate `#0F172A`
- **Typography:** Inter (UI), JetBrains Mono (code)
- **Layout:** Mobile-first, max-w-7xl, 12-col grid desktop
- **Cards:** Rounded-[14px], soft shadow, hairline borders
- **Motion:** 160–220ms, ease-out/in-out, hover lift, accessible focus ring
- **Dark mode:** Fully supported, AA contrast

---

## 🧩 Core Modules

- **UI Libraries Directory:**
  - Filter sidebar (Framework, License, Popularity, Size)
  - Responsive grid of library cards
  - Preview modal: Demo, Code, Install tabs
- **Design Inspiration Gallery:**
  - Grid of screenshots, hover metadata
  - Detail panel: breakdown, links, tech stack
- **Interactive Playground:**
  - Split code editor & live preview
  - Tabs for variants, libraries, theme
- **Weekly Spotlights:**
  - Featured library banner, trending carousel
- **Community Features:**
  - Submission form, upvote/rating, collections, share/export
- **Developer Tools Integration:**
  - CLI generator, package.json modal, Figma/Sketch plugin cards

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) + custom tokens
- [Lucide Icons](https://lucide.dev)
- [next-themes](https://github.com/pacocoursey/next-themes) (dark mode)
- [Inter](https://rsms.me/inter/) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [pnpm](https://pnpm.io) (recommended)

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or npm/yarn/bun
   ```
2. **Run the dev server:**
   ```bash
   pnpm dev
   ```
3. **Open:** [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

- Fast, mobile-first UI
- One-click dark/light mode
- Semantic color tokens (no manual text-gray-400 etc.)
- Accessible, keyboard-friendly navigation
- Modular, reusable components
- Beautiful, minimal design

---

## 🖌️ Customization

- Edit global styles in [`src/app/globals.css`](src/app/globals.css)
- Add new modules/components in [`src/components/`](src/components/)
- Update theme tokens in Tailwind config

---

## 🤝 Contributing

We welcome issues, suggestions, and PRs! Please:

- Follow the design system and code style
- Keep components modular and accessible
- Document new features in this README

---

## 📄 License

MIT — free for personal and commercial use.

---

## 🙏 Credits

- Inspired by the best of indie design and open-source UI
- Built with ❤️ by the Kosha team

---

## 📣 Contact & Community

- [Submit a library or design](#)
- [Join discussions](#)
- [Follow on Twitter](#)

---

## 🌐 Deploy

Deploy Kosha instantly on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
