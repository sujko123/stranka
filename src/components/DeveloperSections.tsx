import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Braces, ChevronDown, Code2, GitBranch, GraduationCap, MapPin, Play, Trophy } from "lucide-react";
import { useTranslate } from "@/lib/i18n";
import { email, experiences } from "@/lib/portfolio";
import { useCopy } from "@/hooks/use-portfolio-copy";

export function SectionHeading({ number, label, title, accent }: { number: string; label: string; title: string; accent: string }) {
  return <header className="section-heading">
    <div className="section-eyebrow"><span>{number} / {label}</span><span className="eyebrow-line" /><Braces size={15} /></div>
    <h2>{title} <span>{accent}</span></h2>
  </header>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }}>{children}</motion.div>;
}

export function WindowBar({ title, extra }: { title: string; extra?: ReactNode }) {
  return <div className="window-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>{title}</span><span className="ml-auto">{extra}</span></div>;
}

export function AboutSection() {
  const c = useCopy();
  const [view, setView] = useState<"readme" | "json">("readme");
  return <section id="about" className="dev-section">
    <SectionHeading number="01" label="README.md" title={c("Človek za", "The person behind")} accent={c("kódom.", "the code.")} />
    <Reveal className="about-grid">
      <article className="dev-panel about-main">
        <div className="file-tabs" aria-label={c("Zobrazenie profilu", "Profile view")}>
          <button onClick={() => setView("readme")} aria-pressed={view === "readme"} className={view === "readme" ? "selected" : ""}><Code2 size={14} /> README.md</button>
          
        </div>
        {view === "readme" ? <div className="about-prose">
          <span className="small-mono text-primary"># hello, world.</span>
          <h3>{c("Som Matej.", "I'm Matej.")}<br />{c("Staviam produkty naprieč celým stackom.", "I build products across the stack.")}</h3>
          <p>{c("Som full-stack developer a študent Business Informatics na VŠE v Prahe. Pracujem s TypeScriptom, Reactom, Next.js, NestJS a PostgreSQL — od analýzy požiadaviek až po nasadenie produkčného riešenia.", "I'm a full-stack developer and Business Informatics student at VŠE Prague. I work with TypeScript, React, Next.js, NestJS and PostgreSQL — from requirements analysis through production deployment.")}</p>
          <p>{c("V Slates App som vyvíjal a testoval produkčnú platformu. Popri tom od roku 2023 dodávam weby a aplikácie pre malé firmy; mám za sebou viac než 25 projektov.", "At Slates App, I developed and tested a production platform. Alongside that, I have delivered websites and applications for small businesses since 2023, completing more than 25 projects.")}</p>
          <a className="text-link" href="#experience">{c("Pozrieť moju cestu", "Explore my experience")} <ArrowDownRight size={17} /></a>
        </div> : <pre className="profile-json"><code>{JSON.stringify({ name: "Bc. Matej Šujanský", location: "Prague, CZ", role: "Full-stack developer", stack: ["TypeScript", "React", "Next.js", "NestJS", "PostgreSQL"], freelanceSince: 2023, education: "VŠE · Business Informatics · MSc. candidate", languages: { sk: "Native", en: "C1", cs: "Fluent" } }, null, 2)}</code></pre>}
      </article>
      <div className="about-facts">
        <article className="fact-card lime-card"><strong>25<span>+</span></strong><p>{c("webov a aplikácií", "websites and apps")}</p><span className="small-mono">requirements → deployment</span></article>
        <article className="fact-card"><GraduationCap size={22} className="text-primary" /><strong className="degree">Bc.</strong><p>VUT · {c("Manažérska informatika", "Managerial Informatics")}</p><span className="small-mono">2023 — 2026</span></article>
      </div>
    </Reveal>
    <div className="location-strip"><span><MapPin size={14} /> Praha, CZ</span><span>SK <b>native</b> / EN <b>C1</b> / CZ <b>fluent</b></span><span className="small-mono">open to opportunities</span></div>
    <PortfolioTerminal />
  </section>;
}

function PortfolioTerminal() {
  const c = useCopy();
  const { language } = useTranslate();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  function run(raw: string) {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    let output = "";
    if (command === "clear") { setHistory([]); setInput(""); setHistoryIndex(-1); return; }
    if (command === "help") output = "whoami · skills · projects · contact · git log · clear\n" + c("Tip: príkazy si pamätám. Použi ↑ a ↓.", "Tip: command history is available with ↑ and ↓.");
    else if (command === "whoami") output = c("Bc. Matej Šujanský\nFull-stack developer · študent VŠE Praha\n25+ webov a aplikácií", "Bc. Matej Šujanský\nFull-stack developer · VŠE Prague student\n25+ websites and applications");
    else if (command === "skills") output = "TypeScript · JavaScript · Python\nReact · Next.js · Node.js · NestJS · PostgreSQL · SQL · Drizzle\nGit · GitHub Actions · Docker · Linux · Vitest · Playwright · Claude Code · Codex";
    else if (command === "git log") output = experiences.map(e => e.period[language] + "  " + e.company + " / " + e.role).join("\n");
    else if (command === "projects" || command === "contact") {
      document.getElementById(command)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      output = command === "contact" ? email : c("Otváram výber mojich projektov.", "Opening my selected projects.");
    } else if (command === "sudo contact_matej") output = c("[sudo] Stačí napísať: ", "[sudo] no password needed. Just write to: ") + email;
    else if (command === "sudo rm -rf /") output = "Permission denied. Nice try. :)";
    else if (command === ":q" || command === ":wq") output = c("Toto nie je Vim. Si v bezpečí.", "This is not Vim. You're safe.");
    else if (command === "hello" || command === "ahoj") output = c("Ahoj! 👋 Vitaj v mojom malom kúsku internetu.", "Hello! 👋 Welcome to my little corner of the internet.");
    else output = c("Príkaz nenájdený. Skús help.", "Command not found. Try help.");
    setHistory(previous => [...previous, { command: raw.trim(), output }].slice(-30));
    setInput(""); setHistoryIndex(-1);
    requestAnimationFrame(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight }); });
  }
  return <Reveal className="dev-panel portfolio-terminal">
    <WindowBar title="matej@portfolio: ~" extra={<span className="terminal-tag"><span /> interactive</span>} />
    <div className="terminal-output" ref={outputRef} role="log" aria-label={c("Výstup terminálu", "Terminal output")}>
      <p className="terminal-welcome">{c("Vitaj v mojom portfóliu.", "Welcome to my portfolio.")} <span>v.2026</span></p>
      <p className="terminal-hint">{c("Malý terminál, žiadna mágia. Napíš", "A little terminal, no magic. Type")} <b>help</b>.</p>
      {history.map((item, i) => <div className="terminal-entry" key={i}><div><span className="text-secondary">➜ ~ </span>{item.command}</div><pre>{item.output}</pre></div>)}
    </div>
    <form className="terminal-input" onSubmit={(event: FormEvent) => { event.preventDefault(); run(input); }}>
      <label htmlFor="terminal-command" className="text-secondary"><span aria-hidden="true">➜ ~</span><span className="sr-only">{c("Príkaz terminálu", "Terminal command")}</span></label>
      <input id="terminal-command" ref={inputRef} value={input} onChange={event => setInput(event.target.value)} autoComplete="off" spellCheck={false} placeholder={c("napíš príkaz…", "type a command…")} onKeyDown={event => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();
          const next = event.key === "ArrowUp" ? Math.min(historyIndex + 1, history.length - 1) : Math.max(historyIndex - 1, -1);
          setHistoryIndex(next); setInput(next < 0 ? "" : history[history.length - 1 - next]?.command ?? "");
        }
      }} /><button type="submit" aria-label={c("Spustiť príkaz", "Run command")}><Play size={15} /></button>
    </form>
    <div className="terminal-shortcuts">{["whoami", "skills", "git log", "sudo contact_matej"].map(command => <button key={command} onClick={() => { run(command); inputRef.current?.focus({ preventScroll: true }); }}>{command}</button>)}</div>
  </Reveal>;
}

export function CareerSection() {
  const c = useCopy();
  const { language } = useTranslate();
  const [open, setOpen] = useState<string | null>("slates");
  return <section id="experience" className="dev-section">
    <SectionHeading number="03" label="git log --experience" title={c("Každá skúsenosť.", "Every experience.")} accent={c("Nový commit.", "A new commit.")} />
    <div className="career-meta"><span><GitBranch size={15} /> main</span><span>{c("4 pracovné skúsenosti", "4 work experiences")}</span><span className="text-secondary">HEAD → 2026</span></div>
    <div className="career-list">{experiences.map((item, i) => <Reveal key={item.id} className="career-item">
      <span className={"commit-dot " + (item.active ? "active" : "")} aria-hidden="true" />
      <article className={"dev-panel career-card " + (open === item.id ? "is-open" : "")}>
        <button className="career-toggle" onClick={() => setOpen(open === item.id ? null : item.id)} aria-expanded={open === item.id} aria-controls={"career-" + item.id}>
          <span className="career-topline"><span className="small-mono">{item.period[language]}</span>{item.active && <span className="active-badge">{c("aktuálne", "current")}</span>}</span>
          <span className="career-title">{item.company}<ChevronDown size={19} className={open === item.id ? "rotate-180" : ""} /></span>
          <span className="career-role">{item.role}</span>
          <span className="career-summary">{item.summary[language]}</span>
        </button>
        <div id={"career-" + item.id} hidden={open !== item.id} className="career-detail">
          <p>{item.detail[language]}</p>
          <div className="tech-tags">{item.stack.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      </article>
    </Reveal>)}</div>
  </section>;
}

export function JourneySection() {
  const c = useCopy();
  const [tab, setTab] = useState(0);
  return <section id="timeline" className="dev-section">
    <SectionHeading number="04" label="profil" title={c("Zázemie pre", "The foundation for")} accent={c("ďalší rast.", "what comes next.")} />
    <div className="journey-tabs">{[c("Vzdelanie", "Education"), c("Prístup", "Approach"), c("Jazyky", "Languages")].map((label, i) => <button key={i} aria-pressed={tab === i} onClick={() => setTab(i)} className={tab === i ? "selected" : ""}>{label}</button>)}</div>
    <Reveal className="dev-panel journey-panel">
      {tab === 0 && <div className="education-list"><article><GraduationCap /><div><span className="small-mono text-primary">2026 — 2028 {c("(plánované)", "(expected)")}</span><h3>VŠE · Business Informatics</h3><span className="education-sub">{c("Vysoká škola ekonomická v Prahe", "Prague University of Economics and Business")}</span><p>{c("Magisterské štúdium, ktoré prepája informatiku s biznisom a nadväzuje na moje skúsenosti s vývojom informačných systémov, dátami a softvérovým inžinierstvom.", "A master's programme that combines informatics and business, building on my experience with information-systems development, data and software engineering.")}</p></div></article><article><GraduationCap /><div><span className="small-mono">2023 — 2026</span><h3>VUT · {c("Manažérska informatika", "Managerial Informatics")}</h3><span className="education-sub">{c("Fakulta podnikateľská, Brno · Bc.", "Faculty of Business and Management, Brno · Bc.")}</span><p>{c("Štúdium zahŕňalo SQL, relačné databázy, dátové modelovanie (ER, UML), návrh informačných systémov a dátové sklady.", "Coursework included SQL, relational databases, data modelling (ER, UML), information-systems design and data warehousing.")}</p></div></article><article><GraduationCap /><div><span className="small-mono">2017 — 2022</span><h3>C. S. Lewis</h3><span className="education-sub">{c("Bilingválne gymnázium, Bratislava", "Bilingual high school, Bratislava")}</span><p>{c("Maturita z anglického jazyka na úrovni C1.", "Graduated with English at C1 level.")}</p></div></article></div>}
      {tab === 1 && <div className="journey-story"><Code2 className="text-primary" size={32} /><h3>{c("Od požiadavky po produkciu", "From requirements to production")}</h3><p>{c("Najviac mi vyhovuje práca, pri ktorej môžem prevziať zodpovednosť za celý výsledok: pochopiť požiadavky, navrhnúť riešenie, implementovať ho, otestovať a nasadiť. Freelance projekty mi dali samostatnosť; skúsenosť v Slates App zase tímový kontext, code review, automatizované CI kontroly a prácu s produkčným systémom.", "I do my best work when I can take ownership of the outcome: understand requirements, design a solution, implement it, test it and deploy it. Freelance work has taught me independence, while Slates App gave me team context, code review, automated CI checks and experience with a production system.")}</p><div className="journey-path"><span>requirements</span><span>→</span><span>build</span><span>→</span><span className="text-secondary">ship</span></div></div>}
      {tab === 2 && <div className="journey-story"><Trophy className="text-secondary" size={32} /><h3>{c("Komunikácia bez bariér", "Communication without barriers")}</h3><p>{c("Pracujem v slovenčine, češtine aj angličtine. Angličtinu mám na úrovni C1, slovenčina je môj rodný jazyk a češtinu ovládam plynulo. Vďaka tomu sa viem bez problémov zapojiť do lokálneho aj medzinárodného tímu.", "I work in Slovak, Czech and English. I have C1 English, Slovak is my native language and I am fluent in Czech. That lets me contribute comfortably in both local and international teams.")}</p><div className="offline-tags"><span>SK · native</span><span>EN · C1</span><span>CZ · fluent</span></div><span className="small-mono text-muted-foreground">// clear communication, better delivery</span></div>}
    </Reveal>
  </section>;
}

export function ContactIntro() {
  const c = useCopy();
  return <div className="contact-dev-intro">
    <SectionHeading number="05" label="Contact" title={c("Máš nápad?", "Have an idea?")} accent={c("Poďme ho vytvoriť.", "Let's build it.")} />
    <div className="contact-code"><span className="text-primary">await</span> nextChapter<span className="text-secondary">(</span>you<span className="text-secondary">)</span>;</div>
    <p className="small-mono">{c("Nový projekt, spolupráca alebo len ahoj.", "A new project, collaboration or just hello.")}</p>
  </div>;
}
