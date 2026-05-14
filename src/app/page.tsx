import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      {/* ── Fixed navigation ── */}
      <Navbar />

      {/* ── Sections ── */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />

      {/* ── Site footer ── */}
      <Footer />
    </main>
  )
}