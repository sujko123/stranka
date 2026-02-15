import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolsSection />
      <BlogSection />
      <ContactSection />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        © 2024 Aaabad Ahmed. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
