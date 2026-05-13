# Personal Portfolio — React & Next.js Developer

> Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          ← Design tokens, base styles, all reusable classes
│   ├── layout.tsx           ← Root layout (fonts, metadata, SEO)
│   └── page.tsx             ← Main page (assembles all sections)
│
├── components/
│   ├── Navbar.tsx           ← Fixed nav, mobile menu, scroll-aware
│   ├── Hero.tsx             ← Diagonal split hero with animated headline
│   ├── About.tsx            ← Bio, photo, facts, CV download
│   ├── Services.tsx         ← 3 service cards with pricing
│   ├── Projects.tsx         ← Filterable project grid with hover overlays
│   ├── Skills.tsx           ← Animated skill bars + tech marquee
│   ├── Testimonials.tsx     ← Auto-rotating testimonial carousel
│   ├── Contact.tsx          ← Contact form + info panel
│   └── Footer.tsx           ← Logo, links, back-to-top
│
├── lib/
│   └── data.ts              ← ⭐ ALL YOUR CONTENT — edit this file first
│
├── types/
│   └── index.ts             ← TypeScript interfaces
│
├── public/
│   ├── logo.png             ← Your logo
│   ├── your-photo.jpg       ← Profile photo (add this)
│   ├── resume.pdf           ← Your CV (add this)
│   ├── og-image.png         ← 1200×630 Open Graph image (add this)
│   └── projects/
│       ├── nexus.png        ← Screenshots of your projects
│       ├── portfolio.png
│       ├── saas-landing.png
│       └── ecommerce.png
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## ✏️ Customization — Edit `lib/data.ts`

All your personal content lives in `lib/data.ts`. Open it and update:

| Field | What to change |
|---|---|
| `PERSONAL.name` | Your real name |
| `PERSONAL.email` | Your email |
| `PERSONAL.fiverr` | Your Fiverr profile URL |
| `PERSONAL.upwork` | Your Upwork profile URL |
| `PERSONAL.bio` | Short bio description |
| `PROJECTS` | Add/remove projects, update live URLs and GitHub links |
| `SKILLS` | Adjust skill levels (0–100) |
| `TESTIMONIALS` | Add real client testimonials once you get them |
| `SOCIAL_LINKS` | Your GitHub, LinkedIn, Twitter URLs |

---

## 🖼 Adding Your Photo

1. Add your photo to `/public/your-photo.jpg`
2. In `components/About.tsx`, find the comment:
   ```tsx
   {/* Replace the div below with: */}
   ```
3. Replace the placeholder `div` with:
   ```tsx
   <Image src="/your-photo.jpg" alt="Your Name" fill className="object-cover" />
   ```

---

## 🖼 Adding Project Screenshots

1. Take a full-page screenshot using GoFullPage Chrome extension
2. Save to `/public/projects/nexus.png` etc.
3. In `components/Projects.tsx`, find the comment:
   ```tsx
   {/* Replace with actual project screenshot: */}
   ```
4. Uncomment the `<Image>` tag

---

## 📬 Setting Up Contact Form

The form in `Contact.tsx` currently simulates a delay. Connect it to a real service:

**Option 1 — Formspree (easiest)**
```bash
npm install @formspree/react
```
```tsx
// In Contact.tsx, replace handleSubmit with:
import { useForm } from '@formspree/react'
const [state, handleSubmit] = useForm("YOUR_FORM_ID")
```

**Option 2 — EmailJS**
```bash
npm install emailjs-com
```

**Option 3 — Next.js API route** (`/app/api/contact/route.ts`)

---

## 🎨 Design System (globals.css)

All CSS variables are in `globals.css`. Key tokens:

```css
--color-yellow:    #F5C518;   /* Primary accent */
--color-bg:        #0A0A0A;   /* Page background */
--color-white:     #F5F5F0;   /* Text */
--font-display:    'Bebas Neue'; /* Headlines */
--font-body:       'DM Sans';    /* Body text */
--font-mono:       'Space Mono'; /* Labels & badges */
```

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com
```

---

## 📦 Tech Stack

| Library | Purpose |
|---|---|
| Next.js 15 | Framework + routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Radix UI | Accessible primitives |

---

## ✅ Checklist Before Going Live

- [ ] Replace `YOUR_NAME` in `lib/data.ts`
- [ ] Add real email, Fiverr, Upwork, GitHub URLs
- [ ] Add your photo to `/public/`
- [ ] Add project screenshots to `/public/projects/`
- [ ] Add `resume.pdf` to `/public/`
- [ ] Add real Nexus live URL in `PROJECTS`
- [ ] Connect contact form to Formspree or API route
- [ ] Add `og-image.png` (1200×630px) for social sharing
- [ ] Update `metadata` in `app/layout.tsx` with real URLs
- [ ] Deploy to Vercel
- [ ] Add custom domain (optional)