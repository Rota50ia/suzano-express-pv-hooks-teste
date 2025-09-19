import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "👉 PRA QUEM É O CURSO?",
      answer: "Para iniciantes absolutos que querem tocar pandeiro rápido, sem teoria complicada."
    },
    {
      question: "👉 PRECISO SABER LER PARTITURAS?",
      answer: "Não! O método é 100% prático e visual."
    },
    {
      question: "👉 COMO FUNCIONA O SUPORTE?",
      answer: "Grupo no WhatsApp com instrutores e alunos respondendo em até 24h."
    },
    {
      question: "👉 POSSO PAGAR PARCELADO?",
      answer: "Sim! 12x de R$ 22,70 no cartão ou R$ 227 à vista no PIX."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Perguntas Frequentes:
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 data-[state=open]:bg-gradient-primary/5"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};