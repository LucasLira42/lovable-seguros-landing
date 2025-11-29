import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Pernambuco <span className="text-primary">Seguros</span>
              </span>
            </a>
            <p className="text-background/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Há mais de 25 anos protegendo o que é mais importante para você. Sua segurança é nossa prioridade.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Nossos Seguros</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Seguro Auto", "Seguro Residencial", "Seguro de Vida", "Seguro Empresarial", "Seguro Viagem", "Seguro Celular"].map((item) => (
                <li key={item}>
                  <a href="#servicos" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Sobre Nós", "Nossos Parceiros", "Blog", "Trabalhe Conosco", "Área do Cliente", "Sinistros"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">0800 123 4567</p>
                  <p className="text-background/70 text-sm">Ligação gratuita</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">contato@protegeseg.com.br</p>
                  <p className="text-background/70 text-sm">Resposta em até 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Av. Paulista, 1000</p>
                  <p className="text-background/70 text-sm">São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-background/70 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Pernambuco Seguros - Corretora de Seguros. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
