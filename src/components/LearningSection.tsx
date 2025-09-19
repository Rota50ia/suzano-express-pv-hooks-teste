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
        </div>
      </div>
    </section>;
};