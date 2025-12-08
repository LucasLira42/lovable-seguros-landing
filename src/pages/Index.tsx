import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
