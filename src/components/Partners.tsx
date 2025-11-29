const partners = [
  { name: "Porto Seguro", color: "#0052CC" },
  { name: "Bradesco Seguros", color: "#CC092F" },
  { name: "SulAmérica", color: "#009639" },
  { name: "Allianz", color: "#003781" },
  { name: "Liberty Seguros", color: "#FFC600" },
  { name: "Tokio Marine", color: "#E60012" },
  { name: "HDI Seguros", color: "#00A859" },
  { name: "Mapfre", color: "#CC0000" },
];

const Partners = () => {
  return (
    <section id="parceiros" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trabalhamos com as Melhores Seguradoras
          </h2>
          <p className="text-muted-foreground text-lg">
            Parcerias sólidas com as principais seguradoras do mercado para oferecer as melhores condições para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card rounded-xl p-8 flex items-center justify-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${partner.color}15` }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: partner.color }}
                  >
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground text-sm">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
