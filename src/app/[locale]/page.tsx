import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import Testimonials from '@/components/Testimonials';
import Resources from '@/components/Resources';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Testimonials />
      <Resources />
      <ContactCTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
