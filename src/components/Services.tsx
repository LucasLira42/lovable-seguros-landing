import { Car, Home, Heart, Briefcase, Plane, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com assistência 24h, cobertura contra roubo, furto e colisão.",
    features: ["Assistência 24h", "Carro reserva", "Guincho ilimitado"],
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja seu lar contra incêndio, roubo, danos elétricos e muito mais com serviços de assistência.",
    features: ["Proteção completa", "Assistência domiciliar", "Responsabilidade civil"],
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro da sua família com coberturas personalizadas para diferentes momentos da vida.",
    features: ["Cobertura flexível", "Assistência funeral", "Invalidez permanente"],
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções completas para proteger seu negócio, funcionários e patrimônio empresarial.",
    features: ["Proteção patrimonial", "RC profissional", "Lucros cessantes"],
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    description: "Viaje tranquilo com cobertura médica internacional, extravio de bagagem e muito mais.",
    features: ["Cobertura médica", "Bagagem protegida", "Cancelamento de viagem"],
  },
  {
    icon: Smartphone,
    title: "Seguro Celular",
    description: "Proteção para seu smartphone contra roubo, furto, quebra acidental e danos por líquidos.",
    features: ["Roubo e furto", "Quebra acidental", "Danos por líquidos"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções em Seguros para Todas as Suas Necessidades
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com as melhores seguradoras do mercado para oferecer coberturas completas e personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="link" className="p-0 h-auto group/btn">
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
