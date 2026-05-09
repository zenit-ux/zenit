import { HeroSection }            from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { FlowSection }            from "@/components/sections/FlowSection";
import { WhyZenitSection }        from "@/components/sections/WhyZenitSection";
import { AITeamsSection }         from "@/components/sections/AITeamsSection";
import { TestimonialsSection }    from "@/components/sections/TestimonialsSection";
import { FinalCTASection }        from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <FlowSection />
      <WhyZenitSection />
      <AITeamsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
