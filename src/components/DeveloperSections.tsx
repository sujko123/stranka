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
          <h3>{c("Som Matej.", "I'm Matej.")}<br />{c("Premieňam nápady na web.", "I turn ideas into websites.")}</h3>
          <p>{c("Začalo to Pythonom na strednej a webom pre rodinný projekt. Dnes tvorím frontend, pomáham startupu Slates App a od roku 2023 pracujem na freelance projektoch.", "It started with Python at school and a website for a family project. Today I build frontends, help the startup Slates App and have been freelancing since 2023.")}</p>
          <p>{c("Baví ma prepájať funkčnosť s dizajnom. Vo vlastných aplikáciách objavujem backend a postupne smerujem k full-stack vývoju.", "I enjoy connecting functionality with design. In my own applications, I explore the backend and steadily work towards full-stack development.")}</p>
          <a className="text-link" href="#experience">{c("Pozrieť moju cestu", "Explore my experience")} <ArrowDownRight size={17} /></a>
        </div> : <pre className="profile-json"><code>{JSON.stringify({ name: "Bc. Matej Šujanský", location: "Bratislava, SK", focus: "Frontend development", next: "Full-stack", freelanceSince: 2023, education: "VUT · Manažérska informatika · Bc.", languages: { sk: "C2", en: "C1" }, interests: ["coding", "UI / UX", "gym", "chess", "films"] }, null, 2)}</code></pre>}
      </article>
      <div className="about-facts">
        <article className="fact-card lime-card"><strong>20<span>+</span></strong><p>{c("vytvorených webov", "websites built")}</p><span className="small-mono">ideas → production</span></article>
        <article className="fact-card"><GraduationCap size={22} className="text-primary" /><strong className="degree">Bc.</strong><p>VUT · {c("Manažérska informatika", "Managerial Informatics")}</p><span className="small-mono">2023 — 2026</span></article>
      </div>
    </Reveal>
    <div className="location-strip"><span><MapPin size={14} /> Praha, CZ</span><span>SK <b>C2</b> / EN <b>C1</b></span><span className="small-mono">const age= 24;</span></div>
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
    else if (command === "whoami") output = c("Bc. Matej Šujanský\nFrontend developer → budúci full-stack developer\nPraha · VŠE · 20+ webov", "Bc. Matej Šujanský\nFrontend developer → aspiring full-stack developer\nPraha · VŠE · 20+ websites");
    else if (command === "skills") output = "React · JavaScript · Next.js · Tailwind CSS\nSQL · Supabase · Python · GitHub · Figma · Vercel · Linux · Ux / Ui design · SEO · PowerBI · Excel · Codex ";
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
    <SectionHeading number="04" label="Viac o mne" title={c("Stále sa", "Always")} accent={c("posúvam.", "learning.")} />
    <div className="journey-tabs">{[c("Vzdelanie", "Education"), c("Život", "Life"), c("Záľuby", "Hobbies")].map((label, i) => <button key={i} aria-pressed={tab === i} onClick={() => setTab(i)} className={tab === i ? "selected" : ""}>{label}</button>)}</div>
    <Reveal className="dev-panel journey-panel">
      {tab === 0 && <div className="education-list"><article><GraduationCap /><div><span className="small-mono text-primary">09/2026 — {c("súčasnosť", "present")}</span><h3>VŠE · Business informatika</h3><span className="education-sub">{c("Vysoká škola ekonomická v Prahe · Ing.", "Prague University of Economics and Business · Master's degree")}</span><p>{c("Prepájam informačné technológie s biznisovými potrebami, návrhom informačných systémov, riadením IT projektov a Business Intelligence.", "Connecting information technology with business needs, information systems design, IT project management and Business Intelligence.")}</p></div></article><article><GraduationCap /><div><span className="small-mono">09/2023 — 06/2026</span><h3>VUT · {c("Manažérska informatika", "Managerial Informatics")}</h3><span className="education-sub">{c("Fakulta podnikateľská, Brno · Bc.", "Faculty of Business and Management, Brno · Bc.")}</span><p>{c("SQL, relačné databázy, UML, dátové sklady, Business Intelligence, procesné modelovanie a návrh informačných systémov.", "SQL, relational databases, UML, data warehouses, Business Intelligence, process modelling and information systems design.")}</p></div></article><article><GraduationCap /><div><span className="small-mono">08/2017 — 05/2022</span><h3>C. S. Lewis</h3><p>{c("Anglické bilingválne gymnázium. Maturita z angličtiny na úrovni C1.", "English bilingual high school. English graduation exam at C1 level.")}</p></div></article></div>}
      {tab === 1 && <div className="journey-story"><Code2 className="text-primary" size={32} /><h3>{c("Od bazéna ku kódu", "From pool to code")}</h3><p>{c(`

Veľkú časť môjho detstva tvorilo plávanie. Postupne sa z neho stal vrcholový šport a päť rokov som bol súčasťou slovenskej reprezentácie. Naučilo ma disciplíne, vytrvalosti a tomu, že dobré výsledky neprichádzajú zo dňa na deň. Aj keď už dnes netrávim väčšinu času v bazéne, tento prístup si prenášam do všetkého, čo robím.

K technológiám som sa dostal ešte na strednej škole cez súťaže v Pythone. Neskôr som vytvoril web pre rodinný projekt, pri ktorom som objavil JavaScript a svet webového vývoja. Z jedného projektu sa postupne stala freelance práca a dnes mám za sebou viac ako 30 webových stránok a aplikácií pre klientov aj vlastné nápady.

Baví ma prepájať technickú a biznisovú stránku projektu. Nejde mi iba o to, aby web dobre vyzeral. Chcem rozumieť tomu, komu má slúžiť, aký problém rieši a akú hodnotu má priniesť. Neustále sa posúvam v Reacte, TypeScripte, Next.js a backende, pričom nové veci si najradšej overujem priamo v praxi.
`, "Swimming was a big part of my childhood.Veľkú časť môjho detstva tvorilo plávanie. Postupne sa z neho stal vrcholový šport a päť rokov som bol súčasťou slovenskej reprezentácie. Naučilo ma disciplíne, vytrvalosti a tomu, že dobré výsledky neprichádzajú zo dňa na deň. Aj keď už dnes netrávim väčšinu času v bazéne, tento prístup si prenášam do všetkého, čo robím. K technológiám som sa dostal ešte na strednej škole cez súťaže v Pythone. Neskôr som vytvoril web pre rodinný projekt, pri ktorom som objavil JavaScript a svet webového vývoja. Z jedného projektu sa postupne stala freelance práca a dnes mám za sebou viac ako 30 webových stránok a aplikácií pre klientov aj vlastné nápady. Baví ma prepájať technickú a biznisovú stránku projektu. Nejde mi iba o to, aby web dobre vyzeral. Chcem rozumieť tomu, komu má slúžiť, aký problém rieši a akú hodnotu má priniesť. Neustále sa posúvam v Reacte, TypeScripte, Next.js a backende, pričom nové veci si najradšej overujem priamo v praxi.")}</p><div className="journey-path"><span>Python</span><span>→</span><span>Frontend</span><span>→</span><span className="text-secondary">Full-stack</span></div></div>}
      {tab === 2 && <div className="journey-story"><Trophy className="text-secondary" size={32} /><h3>{c("Čo robím, keď neprogramujem?", "What do I do when I'm not programming?")}</h3><p>{c("Vo voľnom čase rád cvičím, pozriem si dobrý film alebo si zahrám šach na chess.com. A keď sa vrátim k obrazovke, často je to kvôli novému UI/UX nápadu vo Figme.", "In my free time, I enjoy working out, a good film or a game of chess on chess.com. When I return to the screen, it's often to explore a new UI/UX idea in Figma.")}</p><div className="offline-tags"><span>♞ {c("šach", "chess")}</span><span>↗ {c("cvičenie", "fitness")}</span><span>▷ {c("filmy", "films")}</span><span>⌘ UI / UX</span></div><span className="small-mono text-muted-foreground">// There is no place like 127.0.0.1</span></div>}
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
