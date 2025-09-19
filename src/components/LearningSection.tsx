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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Join 2.837 alunos que saíram do zero e agora tocam com confiança
            </h3>
            
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
          </div>
        </div>
      </div>
    </section>;
};