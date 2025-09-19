import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import { MentorSection } from "@/components/MentorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { MethodSection } from "@/components/MethodSection";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { AboutMentorSection } from "@/components/AboutMentorSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LearningSection />
      <MentorSection />
      <TestimonialsSection />
      <WhyJoinSection />
      <MethodSection />
      <BonusSection />
      <PricingSection />
      <AboutMentorSection />
      <FAQSection />
      
      {/* CTA Button after FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button 
            variant="hero" 
            size="xl" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mb-3" 
            asChild
          >
            <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pvtestehooks">
              QUERO TOCAR MINHA PRIMEIRA MÚSICA EM 7 DIAS
            </a>
          </Button>
          <p className="text-xs text-muted-foreground opacity-75">
            Você será redirecionado para a página de checkout seguro
          </p>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
