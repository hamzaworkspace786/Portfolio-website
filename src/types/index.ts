// ─── Project ────────────────────────────────────────────────
export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    category: ProjectCategory
    techStack: string[]
    liveUrl?: string
    githubUrl?: string
    image: string           // path in /public/projects/
    featured?: boolean
    year: number
    status: 'live' | 'wip' | 'concept'
}

export type ProjectCategory =
    | 'all'
    | 'saas'
    | 'landing'
    | 'fullstack'
    | 'frontend'

// ─── Skill ──────────────────────────────────────────────────
export interface Skill {
    name: string
    icon?: string           // emoji or icon component key
    level: number           // 0–100
    category: SkillCategory
}

export type SkillCategory =
    | 'frontend'
    | 'backend'
    | 'tools'
    | 'realtime'

// ─── Service ────────────────────────────────────────────────
export interface Service {
    id: string
    icon: string
    title: string
    description: string
    features: string[]
    startingPrice: number
    deliveryDays: number
}

// ─── Testimonial ────────────────────────────────────────────
export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    content: string
    avatar?: string
    rating: number
}

// ─── Stat ───────────────────────────────────────────────────
export interface Stat {
    value: string
    suffix?: string
    label: string
}

// ─── Social Link ────────────────────────────────────────────
export interface SocialLink {
    name: string
    url: string
    icon: string
}

// ─── Nav Item ───────────────────────────────────────────────
export interface NavItem {
    label: string
    href: string
}

// ─── Contact Form ───────────────────────────────────────────
export interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
    budget?: string
}