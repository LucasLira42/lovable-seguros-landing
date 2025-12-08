import { Button } from "@/components/ui/button";
import { Phone, Shield, Home, Briefcase, Users, Building, Mail } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "Início", href: "#inicio", icon: Home },
    { label: "Serviços", href: "#servicos", icon: Briefcase },
    { label: "Sobre", href: "#sobre", icon: Users },
    { label: "Parceiros", href: "#parceiros", icon: Building },
    { label: "Contato", href: "#contato", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Pernambuco <span className="text-primary">Seguros</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:08001234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">0800 123 4567</span>
              </a>
              <Button variant="default">Solicitar Cotação</Button>
            </div>

            {/* Mobile: Only show CTA button */}
            <div className="lg:hidden">
              <Button variant="default" size="sm">Cotação</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
