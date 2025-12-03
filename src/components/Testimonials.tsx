import { Star, Quote } from "lucide-react";
import testimonialMaria from "@/assets/testimonial-maria.png";
import testimonialJoao from "@/assets/testimonial-joao.png";
import testimonialAna from "@/assets/testimonial-ana.png";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    content: "Excelente atendimento! A ProtegeSeg me ajudou a encontrar o melhor seguro para minha empresa com um preço justo. Recomendo a todos!",
    rating: 5,
    image: testimonialMaria,
  },
  {
    name: "João Santos",
    role: "Médico",
    content: "Há 10 anos sou cliente da ProtegeSeg e nunca me decepcionaram. Quando precisei acionar o seguro do carro, o atendimento foi rápido e eficiente.",
    rating: 5,
    image: testimonialJoao,
  },
  {
    name: "Ana Oliveira",
    role: "Advogada",
    content: "Profissionais competentes e sempre disponíveis. Me sinto segura sabendo que tenho a ProtegeSeg cuidando dos meus seguros.",
    rating: 5,
    image: testimonialAna,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl sm:rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 relative">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 absolute top-4 right-4 sm:top-6 sm:right-6" />
                
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground relative z-10 text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
