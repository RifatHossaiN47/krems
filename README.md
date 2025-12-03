# KREMS Technologies - Official Website

A modern, responsive company website for KREMS Technologies showcasing AI & software engineering services. Built with Next.js 16, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [https://krems.vercel.app/](https://krems.vercel.app/)

## 🚀 Features

- **Modern Design System**: Custom design tokens with teal and orange accent colors
- **Responsive Layout**: Fully responsive across all devices
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Email Integration**: Contact form with EmailJS integration
- **Smooth Animations**: Interactive UI with smooth transitions and hover effects
- **SEO Optimized**: Built with Next.js App Router for optimal performance

## 📋 Project Structure

```
krems-tech/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/              # React components
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── ServicesOverview.tsx # Services grid
│   ├── HowItWorks.tsx      # Process timeline
│   ├── CaseStudies.tsx     # Project case studies
│   ├── DeepDiveServices.tsx # Detailed service descriptions
│   ├── Team.tsx            # Team member profiles
│   ├── Testimonials.tsx    # Client testimonials
│   ├── ContactCTA.tsx      # Contact form with EmailJS
│   ├── Footer.tsx          # Footer with links
│   ├── figma/              # Utility components
│   │   └── ImageWithFallBack.tsx
│   └── smallcomp/          # Reusable UI components
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       └── TeamCard.tsx
├── public/                  # Static assets (images)
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd krems-tech
```

2. Install dependencies:

```bash
npm install
```

3. Configure EmailJS (optional for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Update credentials in `components/ContactCTA.tsx`:
     - `serviceId`
     - `templateId`
     - `publicKey`
     - `to_email`

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette

- **Primary**: Navy (#0f1419, #1a2332, #243447)
- **Accent**: Teal (#00b4a8) & Orange (#ff6b35)
- **Neutrals**: Gray scale (#f8f9fa to #0d0f12)

### Typography

- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Code**: Geist Mono

## 📄 Pages & Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Welcome section with primary CTA
3. **Services Overview** - Grid of core services
4. **How It Works** - Step-by-step process
5. **Case Studies** - Featured project showcases
6. **Deep Dive Services** - Detailed service descriptions
7. **Team** - Team member profiles with photos
8. **Testimonials** - Client reviews and logos
9. **Contact CTA** - Contact form with EmailJS integration
10. **Footer** - Company info and links

## 🖼️ Image Assets

Place team photos and other images in the `public/` folder:

- `wa.png` - Hero section image
- `emmu.jpg`, `Kash.png`, `shwn.png` - Team member photos
- Other assets as needed

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

If you're using EmailJS, add these to your deployment:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📧 Contact

For inquiries about KREMS Technologies, visit [rifat8851@gmail.com](mailto:rifat8851@gmail.com)

---

Built with ❤️ by KREMS Technologies - Engineering practical AI & software that scales
