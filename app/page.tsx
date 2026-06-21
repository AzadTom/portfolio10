import HeroSection from "@/src/components/HeroSection";
import SkillSection from "@/src/components/SkillSection";

export default function Home() {
  return (
    <main className="px-5 sm:px-6">
      <HeroSection />
      <SkillSection/>
    </main>
  );
}
