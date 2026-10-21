import { ArrowDownRight, ArrowUpRight, Braces, FolderGit2, GitBranch } from "lucide-react";
import { Reveal } from "@/components/DeveloperSections";
import { useCopy } from "@/hooks/use-portfolio-copy";
import { useTranslate } from "@/lib/i18n";

export default function HeroSection() {
  const c = useCopy();
  const { t } = useTranslate();
  return (
    <section id="home" className="portfolio-hero">
      <Reveal>
        <h1>Full-stack <span>Developer<span className="hero-period">.</span></span></h1>
        <p className="hero-description">{t("hero.description")}</p>
        <div className="hero-stack small-mono"><span>TypeScript</span><i>/</i><span>Next.js</span><i>/</i><span>NestJS</span></div>
        <div className="hero-metrics">
          <div><strong>2023</strong><span>{c("na freelance od", "freelancing since")}</span></div>
          <div><strong>25<span>+</span></strong><span>{c("webov a aplikácií", "websites and apps")}</span></div>
          <div><strong>99%</strong><span>{c("spokojnosť zákazníkov", "customer satisfaction")}</span></div>
        </div>
        <div className="hero-links">
          <a href="#projects" className="hero-link hero-link-featured"><FolderGit2 size={20} /><div><span className="small-mono">recent-work</span><h2>{c("Moje projekty", "My projects")}</h2></div><ArrowUpRight size={21} /></a>
          <a href="#timeline" className="hero-link"><GitBranch size={20} /><div><span className="small-mono">beyond-the-code</span><h2>{c("Moja cesta", "My journey")}</h2></div><ArrowDownRight size={21} /></a>
        </div>
      </Reveal>
    </section>
  );
}
