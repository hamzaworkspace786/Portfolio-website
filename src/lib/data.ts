import type {
    Project,
    Skill,
    Service,
    Testimonial,
    Stat,
    SocialLink,
    NavItem,
} from '@/types'

// ─── Navigation ─────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

// ─── Hero / Personal ────────────────────────────────────────
export const PERSONAL = {
    name: 'Hamza Akram',           // ← replace
    title: 'Full-Stack Developer',
    tagline: 'React · Next.js · Node.js',
    headline1: 'Building',
    headline2: 'Fast Modern',
    headline3: 'Web Apps.',
    location: 'Okara, Pakistan 🇵🇰',
    availability: true,
    email: 'hamzasworkspace1@example.com',    // ← replace
    fiverr: 'https://fiverr.com/your-username',
    upwork: 'https://upwork.com/freelancers/your-profile',
    bio: `I'm a full-stack web developer specializing in React, Next.js, Node.js and Express.js crafting fast, modern 
        web applications for startups and businesses. From landing pages to complex SaaS products — 
        I deliver clean code, on time, with clear communication.`,
}

// ─── Stats ───────────────────────────────────────────────────
export const STATS: Stat[] = [
    { value: '10', suffix: '+', label: 'Months Experience' },
    { value: '5', suffix: '+', label: 'Projects Shipped' },
    { value: '100', suffix: '%', label: 'Client Satisfaction' },
    { value: '24', suffix: 'h', label: 'Response Time' },
]

// ─── Skills ──────────────────────────────────────────────────
export const SKILLS: Skill[] = [
    // Frontend
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 89, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Framer Motion', level: 78, category: 'frontend' },
    // Backend
    { name: 'Node.js', level: 84, category: 'backend' },
    { name: 'Express.js', level: 78, category: 'backend' },
    { name: 'MongoDB', level: 72, category: 'backend' },
    { name: 'REST APIs', level: 82, category: 'backend' },
    { name: 'Better Auth', level: 70, category: 'backend' },
    // Realtime
    { name: 'WebRTC', level: 65, category: 'realtime' },
    { name: 'Liveblocks', level: 70, category: 'realtime' },
    { name: 'WebSockets', level: 68, category: 'realtime' },
    // Tools
    { name: 'Git / GitHub', level: 85, category: 'tools' },
    { name: 'Vercel', level: 88, category: 'tools' },
    { name: 'Figma', level: 65, category: 'tools' },
]

// Tech stack marquee (just names)
export const TECH_MARQUEE = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'Tailwind CSS', 'Framer Motion', 'WebRTC',
    'Liveblocks', 'Better Auth', 'Vercel', 'Git', 'REST API',
    'Zustand', 'Stripe', 'PostgreSQL', 'tRPC', 'Prisma',
]

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS: Project[] = [
    {
        id: 'nexus',
        title: 'Nexus',
        description: 'Real-time collaborative whiteboard SaaS — like Miro & FigJam, built from scratch.',
        longDescription: `Nexus is a production-grade SaaS collaborative whiteboard application featuring 
      WebRTC voice chat, real-time canvas sync via Liveblocks, full authentication with Better Auth 
      and Google OAuth, tldraw canvas, Framer Motion animations, a dashboard, settings page, 
      and shareable link feature. Built as a Final Year Project at University of Okara (BSIT).`,
        category: 'saas',
        techStack: ['Next.js', 'Liveblocks', 'WebRTC', 'Better Auth', 'Framer Motion', 'MongoDB', 'Tailwind'],
        liveUrl: 'https://nexus-a-real-time-whiteboard.vercel.app/',       // ← replace with your actual URL
        githubUrl: 'https://github.com/hamzaworkspace786/Nexus',   // ← replace
        image: '/projects/nexus.png',
        featured: true,
        year: 2026,
        status: 'live',
    },
    {
        id: 'portfolio',
        title: 'Portfolio Website',
        description: 'This very site — built with Next.js, Framer Motion, and custom design system.',
        category: 'frontend',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
        liveUrl: '/',
        githubUrl: 'https://github.com/hamzaworkspace786/Portfolio-website',
        image: '/projects/portfolio.png',
        featured: false,
        year: 2026,
        status: 'live',
    },
    {
        id: 'saas-landing',
        title: 'SaaS Landing Page',
        description: 'High-converting landing page with pricing, features, testimonials & animations.',
        category: 'landing',
        techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
        image: '/projects/saas-landing.png',
        featured: false,
        year: 2026,
        status: 'live',
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Store',
        description: 'Full-stack e-commerce with cart, filters, Stripe payments, and admin panel.',
        category: 'fullstack',
        techStack: ['Next.js', 'MongoDB', 'Stripe', 'Zustand', 'Tailwind'],
        liveUrl: '#',
        githubUrl: '#',
        image: '/projects/ecommerce.png',
        featured: false,
        year: 2026,
        status: 'wip',
    },
]

// ─── Services ────────────────────────────────────────────────
export const SERVICES: Service[] = [
    {
        id: 'landing',
        icon: '⚡',
        title: 'Landing Page',
        description: 'High-converting, beautifully animated landing pages built for modern businesses and SaaS products.',
        features: ['Responsive design', 'Framer Motion animations', 'Contact form', 'Vercel deployment', 'SEO-optimized'],
        startingPrice: 25,
        deliveryDays: 3,
    },
    {
        id: 'webapp',
        icon: '🚀',
        title: 'Full-Stack Web App',
        description: 'End-to-end web applications with authentication, database, and REST APIs — from MVP to production.',
        features: ['React / Next.js frontend', 'Node.js + Express backend', 'MongoDB / PostgreSQL', 'Auth (OAuth + JWT)', 'Deployed on Vercel'],
        startingPrice: 80,
        deliveryDays: 7,
    },
    {
        id: 'bugfix',
        icon: '🛠️',
        title: 'Bug Fix & Audit',
        description: 'Fast, precise bug fixes and code reviews for React, Next.js, and Node.js applications.',
        features: ['Bug diagnosis', 'Performance audit', 'Code review', '24h fast delivery available', 'Post-fix support'],
        startingPrice: 15,
        deliveryDays: 1,
    },
]

// ─── Testimonials ────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Alex Thompson',
        role: 'Founder',
        company: 'LaunchPad SaaS',
        content: 'Delivered a stunning landing page in 2 days. Clean code, fast delivery, and proactive communication throughout.',
        rating: 5,
    },
    {
        id: '2',
        name: 'Sarah Chen',
        role: 'CTO',
        company: 'DevHub Inc.',
        content: 'Fixed our critical authentication bug within hours. Went above and beyond with the code review. Will hire again!',
        rating: 5,
    },
    {
        id: '3',
        name: 'Marcus Obi',
        role: 'Product Manager',
        company: 'StartupXYZ',
        content: 'Built our full MVP from scratch — frontend, backend, auth, everything. Exceptional quality and communication.',
        rating: 5,
    },
]

// ─── Social Links ────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/you', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/you', icon: 'linkedin' },
    { name: 'Fiverr', url: 'https://fiverr.com/you', icon: 'fiverr' },
    { name: 'Twitter', url: 'https://twitter.com/you', icon: 'twitter' },
]