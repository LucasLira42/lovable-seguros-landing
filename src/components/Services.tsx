import { Car, Home, Heart, Briefcase, Plane, HeartPulse, Shield, PiggyBank, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceAuto from "@/assets/service-auto.jpg";
import serviceHome from "@/assets/service-home.jpg";
import serviceLife from "@/assets/service-life.jpg";
import serviceBusiness from "@/assets/service-business.jpg";
import serviceTravel from "@/assets/service-travel.jpg";
import serviceHealth from "@/assets/service-health.jpg";
import serviceLiability from "@/assets/service-liability.jpg";
import servicePension from "@/assets/service-pension.jpg";

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com assistência 24h, cobertura contra roubo, furto e colisão.",
    features: ["Assistência 24h", "Carro reserva", "Guincho ilimitado"],
    image: serviceAuto,
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja seu lar contra incêndio, roubo, danos elétricos e muito mais com serviços de assistência.",
    features: ["Proteção completa", "Assistência domiciliar", "Responsabilidade civil"],
    image: serviceHome,
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro da sua família com coberturas personalizadas para diferentes momentos da vida.",
    features: ["Cobertura flexível", "Assistência funeral", "Invalidez permanente"],
    image: serviceLife,
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções completas para proteger seu negócio, funcionários e patrimônio empresarial.",
    features: ["Proteção patrimonial", "RC profissional", "Lucros cessantes"],
    image: serviceBusiness,
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    description: "Viaje tranquilo com cobertura médica internacional, extravio de bagagem e muito mais.",
    features: ["Cobertura médica", "Bagagem protegida", "Cancelamento de viagem"],
    image: serviceTravel,
  },
  {
    icon: HeartPulse,
    title: "Plano de Saúde Empresarial",
    description: "Ofereça o melhor para seus colaboradores com planos de saúde completos e acessíveis.",
    features: ["Rede credenciada ampla", "Cobertura nacional", "Planos customizados"],
    image: serviceHealth,
  },
  {
    icon: Shield,
    title: "Seguro Responsabilidade Civil",
    description: "Proteção contra danos causados a terceiros no exercício da sua atividade profissional.",
    features: ["Cobertura profissional", "Defesa jurídica", "Danos materiais e corporais"],
    image: serviceLiability,
  },
  {
    icon: PiggyBank,
    title: "Previdência Privada",
    description: "Planeje seu futuro com segurança através de planos de previdência personalizados.",
    features: ["PGBL e VGBL", "Benefício fiscal", "Rentabilidade competitiva"],
    image: servicePension,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Soluções em Seguros para Todas as Suas Necessidades
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Trabalhamos com as melhores seguradoras do mercado para oferecer coberturas completas e personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>

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
            </div>
          ))}

          {/* Card de Outros Seguros */}
          <a
            href="#contato"
            className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[420px] border-2 border-dashed border-primary/30 hover:border-primary/60"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
              <Plus className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Outros Seguros</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center px-4 sm:px-6 mb-4">
              Temos diversas outras opções de seguros para atender suas necessidades específicas.
            </p>
            <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Fale conosco
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
