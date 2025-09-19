import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const WhyJoinSection = () => {
  const reasons = [{
    number: "01",
    text: "Você já tentou aprender pandeiro, mas só encontrou teoria vaga e vídeos soltos no YouTube."
  }, {
    number: "02",
    text: "Fica perdido entre técnicas, solos, músicos que só querem mostrar que sabem tocar rápido e você não sabe nem por onde começar."
  }, {
    number: "03",
    text: "Sonha em tocar bem pandeiro, mas sente que está atrasado nessa corrida."
  }, {
    number: "04",
    text: "Quer chegar na roda de samba, mas não sabe o que vai fazer na hora do play."
  }, {
    number: "05",
    text: "Está cansado de cursos genéricos e quer um passo a passo validado por quem aplica de verdade."
  }, {
    number: "06",
    text: "Precisa de uma comunidade ativa, suporte real e um mestre com reconhecimento mundial."
  }];
  const targetAudience = ["Quer aprender na prática, sem enrolação ou termos técnicos confusos", "É músico profissional ou amador, que já toca Percussão ou Pandeiro, porém ainda se sente um pouco limitado na parte técnica ou dos grooves", "Quer aumentar — e muito — o seu repertório de grooves, ou quer aprender pandeiro para tocar com os amigos ou na igreja", "É iniciante mas se compromete a estudar e quer aprender o método adequado desde o início"];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-primary">Por Que Se Juntar ao Suzano Express?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-6 text-left">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary">{reason.number}</span>
                  <p className="text-muted-foreground">{reason.text}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pvtestehooks">COMEÇAR AGORA</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};