import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";
export const MentorSection = () => {
  const achievements = ["Economizei 85% do meu tempo operacional", "Eliminei a necessidade de contratar uma equipe inteira de SDRs", "Aumentei o faturamento em 25% no primeiro mês", "E criei um novo serviço que virou uma nova fonte de lucro"];
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">Conheça Seu Mentor</h2>
          <img src={mentorPhoto} alt="Marcos Suzano" className="w-48 h-48 rounded-full mx-auto mb-8 object-cover" />
          <p className="text-lg text-muted-foreground mb-8">
            Marcos Suzano, referência mundial no pandeiro, desenvolveu uma técnica revolucionária que já transformou milhares de vidas.
          </p>
        </div>
      </div>
    </section>
  );
};