import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const MethodSection = () => {
  const methodSteps = [{
    title: "Fundamentos:",
    description: "Aprenda desde o zero os fundamentos essenciais do pandeiro com a técnica exclusiva de Marcos Suzano, dominando postura, sons, coordenação e independência."
  }, {
    title: "Criação:",
    description: "Descubra como criar suas próprias levadas e variações. Desenvolva sua expressão musical com exercícios que estimulam improviso e musicalidade."
  }, {
    title: "Integração:",
    description: "Aprenda a tocar com outros instrumentos, em rodas, com amigos ou na igreja. Ritmos brasileiros integrados à vivência real da música."
  }, {
    title: "Monetização:",
    description: "Veja como o que você aprende no curso pode se transformar em apresentações, aulas, rodas e outras formas de gerar renda com a música."
  }, {
    title: "Vendas:",
    description: "Ganhe confiança para mostrar seu som ao vivo, nas redes ou para oportunidades de trabalho musical. Seu pandeiro como sua voz artística."
  }, {
    title: "Escala:",
    description: "Monte um plano de estudo contínuo com base no método Suzano Express e siga evoluindo com clareza, foco e propósito."
  }];
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Método Suzano Express</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};