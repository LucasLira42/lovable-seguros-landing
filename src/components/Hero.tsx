import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-insurance.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Família feliz protegida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">
              Mais de 25 anos protegendo você
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Sua Segurança é Nossa Prioridade
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Oferecemos as melhores soluções em seguros para você, sua família, seu carro e sua empresa. Cotação gratuita e atendimento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Faça sua Cotação Grátis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Fale com um Especialista
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-primary-foreground font-bold text-2xl">10k+</p>
              <p className="text-primary-foreground/80 text-sm">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-primary-foreground font-bold text-2xl">24h</p>
              <p className="text-primary-foreground/80 text-sm">Atendimento</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-primary-foreground font-bold text-2xl">25+</p>
              <p className="text-primary-foreground/80 text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
