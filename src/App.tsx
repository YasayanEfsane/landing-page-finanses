import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  ValueStrip,
  ProblemSection,
  SolutionSection,
  ProductShowcase,
  FeatureSection,
  AIInteraction,
  TransformationSection,
  AudienceSection,
  TrustSection,
  BalTechSection,
  FinalCTA,
} from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-finance-warm-white">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <ProblemSection />
        <SolutionSection />
        <ProductShowcase />
        <FeatureSection />
        <AIInteraction />
        <TransformationSection />
        <AudienceSection />
        <TrustSection />
        <BalTechSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
