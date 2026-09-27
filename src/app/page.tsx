import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#121210] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
