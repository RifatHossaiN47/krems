# KREMS Technologies

The official website for **KREMS Technologies** — an engineering team specializing in practical AI solutions, Retrieval-Augmented Generation (RAG), and modern full-stack software development.

🔗 **Live Website:** [https://krems.vercel.app](https://krems.vercel.app)

---

## Overview

This repository contains the source code for the KREMS Technologies agency platform. It serves as the digital front for our services, highlighting active case studies, team expertise, technical capabilities, and a direct client inquiry flow.

Designed with clean typography, responsive layouts, and a component-driven architecture built for speed and maintainability.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Core** | [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Client Inquiry** | [EmailJS](https://www.emailjs.com/) |
| **Typography** | Geist Sans & Geist Mono (`next/font`) |
| **Deployment** | [Vercel](https://vercel.com/) |

## Key Highlights

- **Fast & Responsive**: Fully responsive UI engineered with Next.js App Router and Tailwind CSS v4 for clean cross-device rendering.
- **Real Project Case Studies**: Direct showcases of production systems including **HealthPort** (AI healthcare), **RChatbot** (RAG assistant), **TLDR** (AI content summarizer), and **CUET FoodExpress**.
- **Service Deep Dives**: Clear breakdowns covering Full-Stack Development, ML & Data Engineering, and Agentic AI workflows.
- **Direct Lead Intake**: Client inquiry and quote request form connected seamlessly via EmailJS.
- **Custom Brand Identity**: Cohesive design system built around dark navy backgrounds, sharp teal accents, and warm highlights.

## Project Structure

```
krems-tech/
├── app/
│   ├── globals.css          # Design tokens, CSS variables & typography
│   ├── layout.tsx           # Root layout, font definitions & SEO metadata
│   └── page.tsx             # Main landing page assembling core sections
├── components/
│   ├── Navigation.tsx       # Header with mobile menu and service links
│   ├── Hero.tsx             # Value proposition, highlights & preview mockup
│   ├── ServicesOverview.tsx # High-level summary of engineering services
│   ├── HowItWorks.tsx       # 3-step delivery workflow (Discovery, Build, Ship)
│   ├── CaseStudies.tsx      # Featured projects with live links and tech tags
│   ├── DeepDiveServices.tsx # Accordion with granular specs and deliverables
│   ├── Team.tsx             # Core engineering team profiles
│   ├── ContactCTA.tsx       # Interactive project inquiry form
│   ├── Footer.tsx           # Navigation links and social profiles
│   └── smallcomp/           # Reusable UI primitives (Button, ServiceCard, TeamCard)
└── public/                  # Brand assets, team photography & icons
```

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Quick Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RifatHossaiN47/krems.git
   cd krems-tech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

- `npm run dev` — Starts the local dev server with Turbopack.
- `npm run build` — Compiles and optimizes the application for production.
- `npm start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint to verify code quality and formatting.

## Engineering Team

- **AS Kashmary** — AI & Cloud Engineer
- **Md Rifat Hossen** — AI Engineer & Full-Stack Developer
- **Emon Ahmed** — AI Engineer
- **Abdullah Al Mahmud** — Data Engineer
- **Tangil Hossain Shawon** — Software Engineer
- **Sha Newaz Mahmud** — Software Engineer

## Inquiries & Contact

- **Live Site**: [krems.vercel.app](https://krems.vercel.app)
- **Direct Contact**: [rifat8851@gmail.com](mailto:rifat8851@gmail.com)
