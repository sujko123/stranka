import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Timeline from "@/components/Timeline";
import { useTranslate } from "@/lib/i18n";

const Index = () => {
  const { t } = useTranslate();

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
        {/* Sticky left sidebar */}
        <aside className="w-full pt-20 sm:pt-24 lg:sticky lg:top-24 lg:h-fit lg:self-start lg:pt-0">
          <ProfileCard />
        </aside>

        {/* Scrollable right content */}
        <main className="min-w-0">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <ToolsSection />
          <Timeline />
          <ContactSection />
          <footer className="py-6 sm:py-8 text-center text-muted-foreground text-sm border-t border-border">
            © 2026 Matej Šujanský. {t("footer.rights")}
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
