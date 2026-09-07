import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { AboutSection, CareerSection, JourneySection } from "@/components/DeveloperSections";
import ContactSection from "@/components/ContactSection";
import { useTranslate } from "@/lib/i18n";
import { MotionConfig } from "framer-motion";

const Index = () => {
  const { t } = useTranslate();

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <div className="page-shell mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
        <aside className="profile-sidebar w-full lg:sticky lg:h-fit lg:self-start">
          <ProfileCard />
        </aside>

        <main className="main-column min-w-0">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CareerSection />
          <JourneySection />
          <ContactSection />
          <footer className="py-6 sm:py-8 text-center text-muted-foreground text-sm border-t border-border">
            © 2026 Matej Šujanský. {t("footer.rights")}
          </footer>
        </main>
      </div>
    </div>
    </MotionConfig>
  );
};

export default Index;
