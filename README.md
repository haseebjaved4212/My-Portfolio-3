#  Haseeb Javed — Portfolio v1.0

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

<p align="center">
  <strong>A quiet, sleek, terminal-inspired developer portfolio built with precision and modern web aesthetics.</strong>
</p>

</div>

---

##  Overview

Welcome to the official repository for **Haseeb Javed's Full-Stack Developer Portfolio**. Designed with a focus on high performance, clean typography, and interactive terminal mechanics, this application showcases selected full-stack projects, AI integrations, technical capabilities, and professional experience.

The website bridges traditional web interfaces with interactive CLI elements—featuring an embedded interactive terminal modal, real-time typewriter animations, and seamless dark/light theme persistence.

---

## Key Features

- **Interactive Terminal Modal**: Click the terminal icon (`>_`) in the navbar to open an interactive bash simulation. Execute commands like `help`, `skills`, `projects`, and `resume` to explore the portfolio CLI style!
- **Animated Hero Terminal**: Features a live simulated terminal panel in the hero section displaying developer identity and stack status, built with accessibility in mind (respects `prefers-reduced-motion`).
- **Persistent Theme Switcher**: Custom dark, light, and system theme toggling with zero-flash initialization and smooth CSS variable transitions.
- **Custom Typewriter Engine**: Custom React hooks (`useTypewriter`) paired with Intersection Observers (`useInView`) for dynamic, scroll-triggered text reveals across page sections.
- **Modern Glassmorphism & UI**: Crafted with **Tailwind CSS v4** and vanilla CSS variables for sleek borders, glowing accents, and interactive card hover micro-animations.
- **Fully Responsive**: Optimized for seamless navigation across desktops, tablets, and mobile devices.
- **Instant Contact Actions**: Quick-copy email functionality with instant clipboard feedback, alongside direct integration with WhatsApp, GitHub, LinkedIn, and X (Twitter).

---

##  Technology Stack

| Category | Technologies / Libraries |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/), [Vite 6](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Vanilla CSS Variables (`index.css`) |
| **Animations & Motion** | [Motion (Framer Motion v12)](https://motion.dev/) |
| **Icons & UI Utilities** | [Lucide React](https://lucide.dev/) |


---

## Interactive Terminal Commands

While browsing the portfolio, open the Terminal Modal from the navigation bar and try running any of the following commands:

| Command | Description |
| :--- | :--- |
| `help` | Displays the list of all available terminal commands. |
| `whoami` | Output a quick one-line developer summary. |
| `about` | Prints a short biographical summary in the terminal. |
| `skills` | Lists the core frontend, backend, database, and AI capabilities. |
| `projects` | Lists featured projects with numerical indexing. |
| `contact` | Outputs direct email and GitHub handle information. |
| `resume` | Automatically triggers the download of `Haseeb_Javed_Resume.pdf`. |
| `clear` | Clears the current terminal screen history. |

---

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your local environment:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **pnpm** / **yarn** / **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/haseebjaved4212/My-Portfolio-3.git
cd My-Portfolio-3
```

### 2. Install Dependencies

> [!IMPORTANT]
> You **must** install dependencies before starting the development server. Skipping this step will result in errors such as `'vite' is not recognized as an internal or external command`.

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Once started, the application will be accessible at:
👉 **`http://localhost:3000/`** (or the port specified in your terminal output).

---

## Available Scripts

In the project directory, you can run the following NPM scripts defined in `package.json`:

| Script | Command | Description |
| :--- | :--- | :--- |
| **`dev`** | `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) on port `3000`. |
| **`build`** | `npm run build` | Compiles TypeScript and bundles the application for production into the `dist/` folder. |
| **`preview`** | `npm run preview` | Starts a local web server to preview the production build from `dist/`. |
| **`lint`** | `npm run lint` | Runs the TypeScript compiler (`tsc --noEmit`) to perform type-checking across the codebase. |
| **`clean`** | `npm run clean` | Removes build artifacts (`dist/` and temporary server files). |

---

##  Project Structure

```text
My-Portfolio-3/
├── public/                 # Static assets (Resume PDF, icons, etc.)
├── src/
│   ├── components/         # Reusable UI & interactive components
│   │   ├── Footer.tsx      # Website footer & copyright
│   │   ├── Loader.tsx      # Initial loading screen animation
│   │   ├── Navbar.tsx      # Fixed navigation bar with theme & terminal controls
│   │   ├── TerminalModal.tsx # Interactive CLI modal simulation
│   │   └── TerminalPanel.tsx # Hero section animated terminal panel
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.ts     # Dark/Light theme management & persistence
│   │   └── useTypewriter.ts# Typewriter text animation hook
│   ├── sections/           # Main page sections
│   │   ├── About.tsx       # Bio & background overview
│   │   ├── Contact.tsx     # Contact cards & social links
│   │   ├── Hero.tsx        # Landing hero section & call-to-actions
│   │   ├── Projects.tsx    # Showcase of featured full-stack & AI projects
│   │   └── Skills.tsx      # Categorized technical capabilities grid
│   ├── App.tsx             # Root application layout & state initialization
│   ├── index.css           # Global CSS tokens, Tailwind directives & themes
│   ├── main.tsx            # React DOM entry point
│   └── types.ts            # TypeScript interfaces (Projects, Themes, etc.)
├── index.html              # HTML root template
├── package.json            # Project dependencies & npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 💼 Featured Projects

Here is a glimpse of the key applications highlighted within the portfolio:

1. **Social App (Twitter-inspired)**: A full-featured social platform built with **Django & SQL**, allowing users to post tweets, upload media, authenticate, and search live feeds.
2. **LinguaApp (AI Language Learning)**: Mobile language learning application built with **React Native & Expo**, featuring bite-sized lessons and real-time AI feedback.
3. **Real-Time Chat App**: Live messaging platform leveraging **Django Channels & WebSockets** paired with a responsive **React** interface.
4. **CoolBraze AI**: An autonomous AI customer support system using **Django, Claude API, and RAG** where multi-agent workflows collaborate to handle queries, refunds, and fraud detection.
5. **AI-Powered REST API Service**: Full-stack application offering intelligent endpoints through a **Django** backend and **React** frontend.
6. **Jarvis (Personal AI Assistant)**: A desktop voice assistant powered by **Flask & Google Gemini API**, wrapped in a modern glassmorphic interface with OS automation capabilities.

---

##  Troubleshooting

### Error: `'vite' is not recognized as an internal or external command`

If you encounter this error when running `npm run dev` or `npm run build`:
1. It indicates that your local `node_modules` directory is missing or incomplete.
2. Run the following command in your terminal from the root of `My-Portfolio-3/`:
   ```bash
   npm install
   ```
3. Once the installation finishes successfully, run `npm run dev` again.

---

##  Contact & Connect

Feel free to reach out for collaborations, full-stack opportunities, or AI engineering discussions!

- **Email**: [contactimhaseeb@gmail.com](mailto:contactimhaseeb@gmail.com)
- **GitHub**: [@haseebjaved4212](https://github.com/haseebjaved4212)
- **LinkedIn**: [Haseeb Javed](https://www.linkedin.com/in/haseeb-javed-0332b3341/)
- **X (Twitter)**: [@Haseebjaved4212](https://x.com/Haseebjaved4212)
- **WhatsApp**: [+92 327 2119600](https://wa.me/+923272119600)

---

<div align="center">
  <p font-mono text-sm>
    Designed & Built by <strong>Haseeb Javed</strong> // 2026
  </p>
</div>
