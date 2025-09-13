import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PredictionForm } from "@/components/prediction-form"
import { OptimizationPanel } from "@/components/optimization-panel"
import { Footer } from "@/components/footer"
import { EducationalPanel } from "@/components/educational-panel"
import { InformationPanel } from "@/components/InformationPanel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4">
          <PredictionForm />
          <OptimizationPanel />
        </div>
        <EducationalPanel />
        <InformationPanel />
      </main>
      <Footer />
    </div>
  )
}
