import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div>
            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Solicite Sua Cotação Gratuita Agora
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Nossa equipe de especialistas está pronta para encontrar a melhor solução em seguros para você. Atendimento rápido e personalizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">Telefone</p>
                  <p className="text-primary-foreground/80">0800 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">E-mail</p>
                  <p className="text-primary-foreground/80">contato@protegeseg.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">Endereço</p>
                  <p className="text-primary-foreground/80">Av. Paulista, 1000 - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">Horário</p>
                  <p className="text-primary-foreground/80">Seg-Sex: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Preencha o formulário
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Seguro
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Selecione o tipo de seguro</option>
                  <option value="auto">Seguro Auto</option>
                  <option value="residencial">Seguro Residencial</option>
                  <option value="vida">Seguro de Vida</option>
                  <option value="empresarial">Seguro Empresarial</option>
                  <option value="viagem">Seguro Viagem</option>
                  <option value="celular">Seguro Celular</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  rows={3}
                  placeholder="Conte-nos mais sobre o que você precisa..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Solicitar Cotação Grátis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
