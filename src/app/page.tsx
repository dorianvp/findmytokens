import { CaseStudies } from "./components/sections/CaseStudies";
import { Chains } from "./components/sections/Chains";
import { FAQ } from "./components/sections/Faq";
import { Features } from "./components/sections/Features";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Inclusion } from "./components/sections/Inclusion";
import { PoweredBy } from "./components/sections/PoweredBy";
import { Pricing } from "./components/sections/Pricing";
import { Sample } from "./components/sections/Sample";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Chains />
      <Inclusion />
      <Sample />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
