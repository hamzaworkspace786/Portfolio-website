import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LatestWorks from "@/components/latest-works";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LatestWorks />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
