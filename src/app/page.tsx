import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer year={2024} />
    </div>
  );
}
