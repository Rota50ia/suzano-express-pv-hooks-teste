import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import garantiaImage from "@/assets/garantia.png";
export const PricingSection = () => {
  const features = ["Técnica invertida exclusiva", "Coordenação entre mão direita e esquerda", "7 sons essenciais do pandeiro", "Ritmos como samba, maracatu, baião e mais", "Adaptação para tocar com cajón, congas", "Fluidez, controle e criatividade na sua forma de tocar"];
  return <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          
          <div className="flex justify-center">
            {/* Plano Anual */}
            <Card className="p-8 space-y-8 border-primary bg-gradient-primary/5 relative overflow-hidden max-w-md w-full">
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                O MAIS ESCOLHIDO
              </Badge>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Aprenda pandeiro com o maior mestre do Brasil por menos que uma pizza por mês.</h3>
                
                <div className="space-y-2">
                  <p className="text-lg">
                    👉 Investimento único: <span className="text-primary font-bold">12x de R$22,70</span> (ou R$227 à vista no Pix)
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="font-semibold">E mais:</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">Acesso por 2 anos completo.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">Técnica invertida exclusiva.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">Suporte no grupo fechado de alunos.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">Garantia incondicional de 15 dias.</p>
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-primary">Custo real: menos de R$0,75 por dia pra tocar pandeiro com confiança.</p>
              </div>
              
              <Button variant="hero" size="xl" className="w-full" asChild>
                <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pvtestehooks">QUERO GARANTIR MINHA VAGA AGORA</a>
              </Button>
              
              <div className="flex items-center justify-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-xs">
                      {String.fromCharCode(65 + i)}
                    </div>)}
                </div>
                <div className="text-left text-sm">
                  <p className="font-bold">
                    + <span className="text-primary">de 2.000</span> alunos <span className="font-bold">dominando o PANDEIRO</span>
                    <span className="block">e <span className="font-bold">tocando cada vez mais ainda!</span></span>
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Plano Mensal */}
            
          </div>
          
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <img src={garantiaImage} alt="Garantia incondicional de 15 dias" className="w-24 h-24" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">Garantia incondicional de 15 dias</h3>
              </div>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl font-semibold text-center">
                Você está protegido pela nossa<br />
                <span className="text-primary">★ Garantia Incondicional de Satisfação ★</span>
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao se inscrever hoje, seu risco é zero, pois você conta com a garantia total e incondicional de satisfação do Suzano Express.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Se você não ficar satisfeito com o método, basta nos enviar um e-mail dentro de 15 dias e devolveremos 100% do seu dinheiro — sem perguntas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que não vamos chegar a esse ponto, mas, se você realmente estiver em dúvida se isso vai funcionar para você ou não, fique tranquilo: você tem garantia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};