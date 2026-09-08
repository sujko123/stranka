import { useState } from "react";
import { ArrowUpRight, Braces, ExternalLink, FolderGit2, Plus } from "lucide-react";
import sao from "@/assets/sao.png";
import mimosa from "@/assets/mimosa.jpeg";
import marekFranc from "@/assets/marekfranc.png";
import betrStudio from "@/assets/betrstudio.png";
import secretMenu from "@/assets/secret-menu.png";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslate } from "@/lib/i18n";
import { text, upcomingProjects, type Project } from "@/lib/portfolio";
import { Reveal, SectionHeading, WindowBar } from "./DeveloperSections";
import { useCopy } from "@/hooks/use-portfolio-copy";

const projects: Project[] = [
  { id: "secret-menu", title: "Secret Menu", image: secretMenu, description: text("Platformu som vytvoril ako interné riešenie pre sukromnú spoločnosť. Slúži na tvorbu digitálnych menu, správu ponuky a zákazníckych interakcií.", "I built this platform as an internal solution for a private company. It supports digital menu creation, offer management and customer interactions."), stack: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Resend", "Render", "UI/UX"], status: "live", category: "platform" },
  { id: "sao", title: "SAO Optika", image: sao, url: "https://www.saooptika.sk/", description: text("Webová prezentácia očnej optiky.", "A website for an optical store."), stack: [], status: "live", category: "personal" },
  { id: "mimoza", title: "Mimóza Gelato", image: mimosa, url: "https://www.mimoza.sk/", description: text("Web pre bratislavskú kaviareň a gelato.", "A website for a Bratislava café and gelato shop."), stack: [], status: "live", category: "personal" },
  { id: "mf", title: "Marek Franc", image: marekFranc, url: "https://www.marekfranc.cz/", description: text("Osobná webová prezentácia.", "A personal website."), stack: [], status: "live", category: "personal" },
  { id: "betr-studio", title: "BETR Studio", image: betrStudio, url: "https://www.betrstudio.cz/", description: text("Personálny web kreatívneho štúdia.", "A personal website for a creative studio."), stack: [], status: "live", category: "personal" },
  ...upcomingProjects,
];

export default function ProjectsSection() {
  const c = useCopy();
  const { language } = useTranslate();
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(project => filter === "all" || project.category === filter);
  return <section id="projects" className="dev-section">
    <SectionHeading number="02" label="recent-work" title={c("Nápady, ktoré", "Ideas that")} accent={c("žijú online.", "live online.")} />
    <div className="projects-toolbar"><div className="project-filters">{[
      ["all", c("Všetky", "All")], ["personal", c("Personálne weby", "Personal websites")], ["platform", c("Platformy", "Platforms")],
    ].map(([id, label]) => <button key={id} className={filter === id ? "selected" : ""} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}<span>{id === "all" ? projects.length : projects.filter(p => p.category === id).length}</span></button>)}</div><FolderGit2 size={19} className="text-muted-foreground hidden sm:block" /></div>
    <div className="project-grid">{filtered.map(project => <Reveal key={project.id}>
      <button type="button" className={"project-card " + (project.status === "placeholder" ? "project-placeholder" : "")} onClick={() => setSelected(project)}>
        {project.status === "live" ? <div className="project-image"><div className="browser-address"><span className="browser-dot" /><span>{project.url ? new URL(project.url).hostname : project.title}</span><ArrowUpRight size={13} /></div>{project.image ? <img loading="lazy" src={project.image} alt={project.title} /> : <div className="project-no-image"><Braces size={44} /></div>}<span className="project-open"><ArrowUpRight size={23} /></span></div>
          : <div className="placeholder-art"><span className="placeholder-index">{project.title.split("_")[1]}</span><span className="placeholder-symbol"><Plus size={28} /></span><span className="placeholder-code">git checkout -b next-idea</span></div>}
        <div className="project-info"><div className="project-status"><span className={project.status === "live" ? "live-dot" : "pending-dot"} />{project.status === "live" ? "PRODUCTION" : "COMING SOON"}<span className="ml-auto">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div><h3>{project.title}<ArrowUpRight size={20} /></h3><p>{project.description[language]}</p></div>
      </button>
    </Reveal>)}</div>
    <p className="project-note"><GitNote /> {c("a ďaľšie!", "and more!")}</p>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="project-dialog max-h-[90dvh] overflow-y-auto sm:max-w-2xl">
        {selected && <><DialogHeader><span className="small-mono text-primary">{selected.status === "live" ? "recent-work / production" : "next-project / reserved"}</span><DialogTitle className="font-heading text-3xl pt-2">{selected.title}</DialogTitle><DialogDescription className="sr-only">{selected.description[language]}</DialogDescription></DialogHeader>
          {selected.status === "live" ? <div className="grid gap-5">{selected.image && <img src={selected.image} alt={c(`Náhľad webu ${selected.title}`, `${selected.title} website preview`)} className="w-full max-h-80 rounded-xl object-cover object-top" />}<div className="grid gap-4"><div className="grid gap-2 text-sm leading-7 text-muted-foreground"><p>{selected.description[language]}</p>{selected.id !== "secret-menu" && <p>{c("Na projekte som pracoval samostatne – od návrhu dizajnu až po implementáciu.", "I worked on the project independently—from design through implementation.")}</p>}</div>{selected.stack.length > 0 && <div className="tech-tags">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>}{selected.url && <a href={selected.url} target="_blank" rel="noopener noreferrer" className="orange-button w-fit justify-center">{c("Otvoriť web", "Visit website")}<ExternalLink size={16} /></a>}</div></div>
            : <div className="dev-panel"><WindowBar title="next-project.md" /><div className="project-outline"><span className="small-mono text-secondary">// TODO: ship something meaningful</span><h3>{c("Priestor pre ďalší príbeh.", "Room for the next story.")}</h3><p>{c("Tento projekt ešte nie je publikovaný. Keď bude pripravený, nájdeš tu:", "This project has not been published yet. When it is ready, you'll find:")}</p><ul><li>{c("Problém a nápad, z ktorého vznikol", "The problem and the idea behind it")}</li><li>{c("Moju rolu a použité technológie", "My role and the technologies used")}</li><li>{c("Ukážku výsledku a odkaz na projekt", "A preview of the result and a project link")}</li></ul></div></div>}
        </>}
      </DialogContent>
    </Dialog>
  </section>;
}
function GitNote() { return <Braces size={15} className="shrink-0 text-primary" />; }
