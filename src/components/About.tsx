import { CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "25+", label: "Anos no Mercado", icon: TrendingUp },
  { value: "10.000+", label: "Clientes Atendidos", icon: Users },
  { value: "50+", label: "Seguradoras Parceiras", icon: Shield },
  { value: "98%", label: "Satisfação", icon: CheckCircle },
];

const features = [
  "Atendimento personalizado e humanizado",
  "Cotações com as melhores seguradoras",
  "Assessoria completa em sinistros",
  "Renovação automática com melhores condições",
  "Equipe especializada e certificada",
  "Suporte 24 horas para emergências",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre a ProtegeSeg
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sua Corretora de Seguros de Confiança
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Há mais de 25 anos no mercado, a ProtegeSeg é referência em corretagem de seguros. 
              Nossa missão é proteger o que é mais importante para você, oferecendo as melhores 
              soluções do mercado com atendimento personalizado e transparente.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              Conheça Nossa História
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-secondary rounded-2xl p-8 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
