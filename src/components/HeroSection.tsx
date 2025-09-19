import { Button } from "@/components/ui/button";
const heroBackground = "/lovable-uploads/7b88e8cb-6fcf-4d13-8a0a-23b84ca1feb9.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-primary font-medium">CURSO DE PANDEIRO SUZANO EXPRESS</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">Pare de Passar Vergonha com o Pandeiro - Toque 3 Músicas em 7 Dias</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Método comprovado para iniciantes absolutos que querem resultados rápidos, não teoria complicada
              </p>
              
              <div className="bg-card/50 border border-border/50 p-6 rounded-lg my-6 backdrop-blur-sm">
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-card-foreground text-xl"><strong className="text-primary">Toque sua primeira música completa em 7 dias</strong> - Não apenas "exercícios"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-card-foreground text-xl"><strong className="text-primary">Sem partitura, sem teoria chata</strong> - Só o essencial que funciona</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-card-foreground text-xl"><strong className="text-primary">Acesso imediato aos 3 ritmos</strong> que funcionam em 90% das músicas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-card-foreground text-xl"><strong className="text-primary">Suporte direto</strong> no grupo de alunos que já estão tocando</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-card-foreground text-xl"><strong className="text-primary">Método passo a passo</strong> validado por 2.837 alunos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="text-center">
                <Button variant="hero" size="xl" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mb-3" asChild>
                  <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pvtestehooks">
                    QUERO TOCAR MINHA PRIMEIRA MÚSICA EM 7 DIAS
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground opacity-75">
                  Você será redirecionado para a página de checkout seguro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};