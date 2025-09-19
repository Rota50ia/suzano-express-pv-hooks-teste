import { Button } from "@/components/ui/button";
const heroBackground = "/lovable-uploads/7b88e8cb-6fcf-4d13-8a0a-23b84ca1feb9.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Textos */}
          <div className="space-y-8 text-center lg:text-left">
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
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg my-5">
                <div className="space-y-2 text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Toque sua primeira música completa em 7 dias</strong> - Não apenas "exercícios"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Sem partitura, sem teoria chata</strong> - Só o essencial que funciona</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Acesso imediato aos 3 ritmos</strong> que funcionam em 90% das músicas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Suporte direto</strong> no grupo de alunos que já estão tocando</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Método passo a passo</strong> validado por 2.837 alunos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <Button variant="hero" size="xl" className="mb-8" asChild>
                <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pvtestehooks">QUERO COMEÇAR AGORA</a>
              </Button>
            </div>
          </div>

          {/* Coluna da direita - Vídeo */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe src="https://www.youtube.com/embed/CyIMCbUdjf4" title="Curso de Pandeiro Suzano Express" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>;
};