import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    content: "Excelente atendimento! A ProtegeSeg me ajudou a encontrar o melhor seguro para minha empresa com um preço justo. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Médico",
    content: "Há 10 anos sou cliente da ProtegeSeg e nunca me decepcionaram. Quando precisei acionar o seguro do carro, o atendimento foi rápido e eficiente.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Advogada",
    content: "Profissionais competentes e sempre disponíveis. Me sinto segura sabendo que tenho a ProtegeSeg cuidando dos meus seguros.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
