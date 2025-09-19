import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import garantiaImage from "@/assets/garantia.png";
export const PricingSection = () => {
  const features = ["Técnica invertida exclusiva", "Coordenação entre mão direita e esquerda", "7 sons essenciais do pandeiro", "Ritmos como samba, maracatu, baião e mais", "Adaptação para tocar com cajón, congas", "Fluidez, controle e criatividade na sua forma de tocar"];
  return <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          
          
          
          <div className="text-center">
            <div className="border-2 border-yellow-200 p-5 rounded-lg my-5 max-w-4xl mx-auto bg-amber-500">
              <h3 className="font-bold mb-4 m-0 text-zinc-950 text-2xl">⭐ GARANTIA INCONDICIONAL DE 15 DIAS ⭐</h3>
              <p className="m-0 text-slate-950 text-xl">
                <strong>suzanoexpresspandeiro@gmail.com</strong> Se você não tocar sua primeira música completa, envie um e-mail para <strong>edilsomdil@gmail.com</strong> e devolvemos 100% do seu dinheiro - <strong>sem perguntas, sem complicação.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};