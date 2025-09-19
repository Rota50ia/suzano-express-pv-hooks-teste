export const LearningSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Veja Como Funciona o Método
          </h2>
          
          <div className="w-full max-w-3xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-slate-900">
              <iframe src="https://www.youtube.com/embed/CyIMCbUdjf4" title="Vídeo de apresentação - Demonstração dos 3 ritmos básicos" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            
          </div>
          
          <div className="mt-16 text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Junte-se aos 2.837 alunos que saíram do zero e agora tocam com confiança</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">2.000+</div>
                <div className="text-sm text-muted-foreground">alunos no Brasil</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">800+</div>
                <div className="text-sm text-muted-foreground">alunos no Japão</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">taxa de satisfação</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">7 dias</div>
                <div className="text-sm text-muted-foreground">para primeira música</div>
              </div>
            </div>
            
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="text-primary-foreground p-6 rounded-lg text-center mb-8 bg-indigo-800">
                <h2 className="text-2xl font-bold mb-2 text-slate-50 md:text-4xl">R$ 227 à vista</h2>
                <p className="mb-2 text-slate-50 text-3xl">ou 12x de R$ 22,70</p>
                <p className="text-slate-50 text-3xl">↳ Menos de R$ 0,75 por dia</p>
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">O QUE VOCÊ RECEBE:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✅</span>
                    <span className="text-foreground">Acesso imediato ao curso completo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✅</span>
                    <span className="text-foreground">2 anos de acesso ilimitado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✅</span>
                    <span className="text-foreground">Grupo exclusivo no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✅</span>
                    <span className="text-foreground">Suporte direto com instrutores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-lg">✅</span>
                    <span className="text-foreground">Atualizações gratuitas</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white border-none py-5 px-10 text-lg rounded-lg cursor-pointer font-bold transition-colors">
                  QUERO TOCAR MINHA PRIMEIRA MÚSICA EM 7 DIAS
                </button>
                <p className="text-sm mt-3 text-muted-foreground">
                  ↳ Você será redirecionado para a página de checkout seguro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};