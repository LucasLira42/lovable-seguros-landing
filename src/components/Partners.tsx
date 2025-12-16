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
    <section id="parceiros" className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossos Parceiros
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Trabalhamos com as Melhores Seguradoras
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Parcerias sólidas com as principais seguradoras do mercado para oferecer as melhores condições para você.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 flex items-center justify-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${partner.color}15` }}
                >
                  <span 
                    className="text-lg sm:text-xl md:text-2xl font-bold"
                    style={{ color: partner.color }}
                  >
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 sm:mt-10 md:mt-12 text-sm sm:text-base">
          E muitas outras seguradoras parceiras para oferecer sempre a melhor opção para você.
        </p>
      </div>
    </section>
  );
};

export default Partners;
