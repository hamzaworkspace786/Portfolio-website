import type { Metadata, Viewport } from 'next'
import './globals.css'

// ── Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Hamza Akram — React & Next.js Developer',
    template: '%s | Hamza Akram',
  },
  description:
    'Full-stack web developer specializing in React, Next.js, and Node.js. Building fast, modern web apps for startups and businesses. Available for freelance work worldwide.',
  keywords: [
    'React Developer', 'Next.js Developer', 'Full Stack Developer',
    'Freelance Web Developer', 'Node.js', 'TypeScript', 'Pakistan Developer',
    'Fiverr Developer', 'Web App Development', 'SaaS Development',
  ],
  authors: [{ name: 'Hamza Akram' }],
  creator: 'Hamza Akram',
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5C518',
  width: 'device-width',
  initialScale: 1,
}

// ── Root Layout ────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}