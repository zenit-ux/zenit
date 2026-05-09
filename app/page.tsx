import { HeroSection }             from "@/components/sections/HeroSection";
import { TrustSignals }            from "@/components/sections/TrustSignals";
import { KaizenSection }           from "@/components/sections/KaizenSection";
import { AIMaturitySection }       from "@/components/sections/AIMaturitySection";
import { GenUISection }            from "@/components/sections/GenUISection";
import { AgenticPipelineSection }  from "@/components/sections/AgenticPipelineSection";
import { PlatformFeatures }        from "@/components/sections/PlatformFeatures";
import { TestimonialsSection }     from "@/components/sections/TestimonialsSection";
import { FAQSection }              from "@/components/sections/FAQSection";
import { FinalCTASection }         from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <div id="how-it-works">
        <KaizenSection />
      </div>
      <AIMaturitySection />
      <GenUISection />
      <AgenticPipelineSection />
      <PlatformFeatures />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
