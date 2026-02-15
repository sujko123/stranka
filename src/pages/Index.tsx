import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Sticky left sidebar */}
        <div className="w-full lg:w-auto lg:sticky lg:top-24 pt-20 sm:pt-24 flex-shrink-0">
          <ProfileCard />
        </div>

        {/* Scrollable right content */}
        <div className="flex-1 min-w-0">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <ToolsSection />
          <BlogSection />
          <ContactSection />
          <footer className="py-6 sm:py-8 text-center text-muted-foreground text-sm border-t border-border">
            © 2024 Aaabad Ahmed. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
