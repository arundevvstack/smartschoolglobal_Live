import { Hero } from "@/components/sections/hero"
import { ProblemsSolutions } from "@/components/sections/problems-solutions"
import { FeatureGrid } from "@/components/sections/features-grid"
import { SolutionsTabs } from "@/components/sections/solutions-tabs"
import { TrustSection } from "@/components/sections/trust-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      
      <ProblemsSolutions />

      <FeatureGrid />
      <SolutionsTabs />
      <TrustSection />
      <CTASection />
    </>
  )
}
