import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhyHimma } from "@/components/sections/WhyHimma";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Footer } from "@/components/sections/Footer";

// Re-render at most once a minute so the social-proof count stays fresh
// without making the landing page fully dynamic.
export const revalidate = 60;

export default function Home() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <WhyHimma />
      <HowItWorks />
      <Footer />
    </div>
  );
}
