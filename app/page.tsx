import Experiece from "@/src/components/Experiece";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroSection";
import ProjectSection from "@/src/components/ProjectSection";
import SkillSection from "@/src/components/SkillSection";

export default function Home() {
  return (
    <main className="px-5 sm:px-6">
      <HeroSection />
      <SkillSection/>
      <Experiece/>
      <ProjectSection/>
      <Footer/>
    </main>
  );
}
