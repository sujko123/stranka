import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Language = "sk" | "en";

const translations = {
  sk: {
    "nav.home": "Domov",
    "nav.projects": "Projekty",
    "nav.experience": "Skúsenosti",
    "nav.tools": "Nástroje",
    "nav.contact": "Kontakt",
    "nav.toggle": "EN",

    "profile.name": "Matej Šujanský",
    "profile.bio": "Frontend dev. Freelancer",
    "profile.study": "Management & Informatics @ VUT",
    "profile.building": "Building cool stuff with React",

    "hero.titleTop": "Web",
    "hero.titleBottom": "Developer",
    "hero.description":
      "Tvorím webové stránky a platformy, ktoré firmám pomáhajú rásť tým, že im uľahčujú každodenné fungovanie, zvyšujú predaj a oslovujú viac zákazníkov.",
    "hero.stat1.label": "ROKOV TVORÍM",
    "hero.stat1.sublabel": "WEBY",
    "hero.stat2.label": "ÚSPEŠNÝCH",
    "hero.stat2.sublabel": "PROJEKTOV",
    "hero.stat3.label": "SPOKOJNÝCH",
    "hero.stat3.sublabel": "KLIENTOV",
    "hero.card1.line1": "Moja cesta k",
    "hero.card1.line2": "programovaniu",
    "hero.card2.line1": "moje",
    "hero.card2.line2": "projekty",

    "projects.headingMain": "POSLEDNÉ",
    "projects.headingAccent": "PROJEKTY",
    "projects.sao.subtitle": "Očná optika",
    "projects.mimoza.subtitle": "Bratislavská kaviareň",
    "projects.mf.subtitle": "Osobná stránka",

    "experience.headingMain": "PRACOVNÉ",
    "experience.headingAccent": "SKÚSENOSTI",
    "experience.freelance.position": "Web developer",
    "experience.freelance.period": "Jan 2020 - súčasnosť",
    "experience.freelance.bullet1":
      "Pomáham firmám a jednotlivcom zvyšovať online povedomie cez moderné a funkčné webové riešenia.",
    "experience.freelance.bullet2":
      "Navrhujem a vyvíjam webstránky, ktoré nielen dobre vyzerajú, ale aj prinášajú reálne výsledky.",
    "experience.freelance.bullet3":
      "Zlepšujem internú komunikáciu vo firmách vývojom interných aplikácií na mieru.",
    "experience.freelance.bullet4": "Pracujem flexibilne podľa požiadaviek a času zákazníka.",
    "experience.slates.position": "IT helpdesk / Frontend dev.",
    "experience.slates.period": "Január 2026 - súčasnosť",
    "experience.slates.bullet1": "Správa serverov a databáz s využitím jazyka SQL.",
    "experience.slates.bullet2": "Vývoj internej webovej aplikácie pomocou knižnice React.",
    "experience.slates.bullet3": "Analýza a spracovanie dát v nástrojoch Microsoft Excel a Power BI.",
    "experience.support.position": "IT support",
    "experience.support.period": "Máj 2024 - September 2024",
    "experience.support.bullet1":
      "Identifikoval a diagnostikoval som chyby v systémoch, softvéri a hardvéri.",
    "experience.support.bullet2":
      "Spravoval som servery a dohliadal na ich stabilitu, bezpečnosť a dostupnosť.",
    "experience.support.bullet3":
      "Riešil som incidenty a požiadavky efektívne s dôrazom na rýchle obnovenie prevádzky.",
    "experience.tech.position": "Technician Helpdesk",
    "experience.tech.period": "Máj 2023 - September 2023",
    "experience.tech.bullet1":
      "Prispel som k vyššej produktivite firmy minimalizovaním technických problémov pri štarte práce.",
    "experience.tech.bullet2": "Pripravoval a distribuoval som pracovné stanice pre zamestnancov.",
    "experience.tech.bullet3":
      "Skracoval som čas onboardingu nových zamestnancov vďaka efektívne nastaveným procesom.",

    "tools.headingMain": "PRACUJEM S",
    "tools.headingAccent": "NÁSTROJMI",
    "tools.react.category": "pre frontend",
    "tools.vercel.category": "pre hosting",
    "tools.typescript.category": "pri väčších projektoch",
    "tools.figma.category": "pre UX/UI dizajn",
    "tools.framer.category": "pre kreatívne weby",
    "tools.wordpress.category": "podľa voľby zákazníka",

    "timeline.headingMain": "Moja cesta k",
    "timeline.headingAccent": "programovaniu",
    "timeline.birth.title": "Rodisko",
    "timeline.birth.description": "Pochádzam z Bratislavy, kde som do svojich 20 rokov študoval a žil.",
    "timeline.swimming.title": "Plávanie",
    "timeline.swimming.description":
      "Počas detstva som sa venoval plávaniu, kde som sa stal majstrom SR a bol v reprezentácii niekoľko rokov. Táto skúsenosť mi dala chuť pracovať na sebe, vytrvalosť a schopnosť nevzdať sa pri problémoch, čo dnes využívam aj pri programovaní. ",
    "timeline.school.title": "Stredná škola",
    "timeline.school.description":
      "Na strednú školu som chodil v Bratislave na anglické bilingválne gymnázium C. S. Lewisa s maturitou na úrovni C1.",
    "timeline.coding.title": "Ponorenie sa do sveta kódovania",
    "timeline.coding.description":
      "Kódovaniu sa venujem od začiatku strednej školy, kde som sa zúčastnil aj súťaže v Python/Tkinter. Do sveta webov som sa naplno dostal v roku 2020, keď som prvýkrát vytvoril web pre rodinnú firmu.",
    "timeline.started.title": "Vysoká škola",
    "timeline.started.description": "Momentálne študujem informatiku a management na VUT v Brne.",
    "timeline.present.title": "Súčasnosť",
    "timeline.present.description": "V súčasnosti sa okrem freelance práce snažím zdokonaliť svoje schopnosti v rámci komplexnejších, projektoch ktoré sám vytváram. Taktiež hľadám nové pracovné možnosti, ktoré mi dajú priestor uplatniť to čo viem, a zároveň ma naučia aké je to pracovať na väčších projektoch v tíme.",

    "contact.headingMain": "Máte nápad?",
    "contact.headingAccent": "Ja mám riešenie!",
    "contact.name": "Meno",
    "contact.namePlaceholder": "Vaše meno",
    "contact.email": "Email",
    "contact.emailPlaceholder": "vas@email.com",
    "contact.budget": "Budget",
    "contact.select": "Vyberte...",
    "contact.message": "Správa",
    "contact.messagePlaceholder": "Napíšte mi o vašom projekte...",
    "contact.submit": "Odoslať",
    "contact.sending": "Odosielam...",
    "contact.success": "Správa bola úspešne odoslaná.",
    "contact.error": "Správu sa nepodarilo odoslať. Skúste to prosím znova.",

    "footer.rights": "Všetky práva vyhradené",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.tools": "Tools",
    "nav.contact": "Contact",
    "nav.toggle": "SK",

    "profile.name": "Matej Šujanský",
    "profile.bio": "Frontend dev. Freelancer",
    "profile.study": "Management & Informatics @ VUT",
    "profile.building": "Building cool stuff with React",

    "hero.titleTop": "Web",
    "hero.titleBottom": "Developer",
    "hero.description":
      "I build websites and platforms that help businesses grow by making everyday operations easier, increasing sales, and reaching more customers.",
    "hero.stat1.label": "YEARS BUILDING",
    "hero.stat1.sublabel": "WEBSITES",
    "hero.stat2.label": "SUCCESSFUL",
    "hero.stat2.sublabel": "PROJECTS",
    "hero.stat3.label": "HAPPY",
    "hero.stat3.sublabel": "CLIENTS",
    "hero.card1.line1": "My path to",
    "hero.card1.line2": "programming",
    "hero.card2.line1": "my",
    "hero.card2.line2": "projects",

    "projects.headingMain": "RECENT",
    "projects.headingAccent": "PROJECTS",
    "projects.sao.subtitle": "Optical store",
    "projects.mimoza.subtitle": "Bratislava cafe",
    "projects.mf.subtitle": "Personal website",

    "experience.headingMain": "WORK",
    "experience.headingAccent": "EXPERIENCE",
    "experience.freelance.position": "Web developer",
    "experience.freelance.period": "Jan 2020 - present",
    "experience.freelance.bullet1":
      "I help companies and individuals increase their online visibility through modern, functional web solutions.",
    "experience.freelance.bullet2":
      "I design and develop websites that look good and also deliver real results.",
    "experience.freelance.bullet3":
      "I improve internal communication in companies by building custom internal applications.",
    "experience.freelance.bullet4": "I work flexibly around customer requirements and timelines.",
    "experience.slates.position": "IT helpdesk / Frontend dev.",
    "experience.slates.period": "January 2026 - present",
    "experience.slates.bullet1": "Server and database administration using SQL.",
    "experience.slates.bullet2": "Development of an internal web application with React.",
    "experience.slates.bullet3": "Data analysis and processing in Microsoft Excel and Power BI.",
    "experience.support.position": "IT support",
    "experience.support.period": "May 2024 - September 2024",
    "experience.support.bullet1": "Identified and diagnosed issues in systems, software, and hardware.",
    "experience.support.bullet2": "Managed servers and monitored their stability, security, and availability.",
    "experience.support.bullet3":
      "Resolved incidents and requests efficiently with a focus on fast service recovery.",
    "experience.tech.position": "Technician Helpdesk",
    "experience.tech.period": "May 2023 - September 2023",
    "experience.tech.bullet1":
      "Improved company productivity by minimizing technical issues at the start of work.",
    "experience.tech.bullet2": "Prepared and distributed workstations for employees.",
    "experience.tech.bullet3":
      "Shortened onboarding time for new employees through better configured processes.",

    "tools.headingMain": "TOOLS I",
    "tools.headingAccent": "WORK WITH",
    "tools.react.category": "for frontend",
    "tools.vercel.category": "for hosting",
    "tools.typescript.category": "for larger projects",
    "tools.figma.category": "for UX/UI design",
    "tools.framer.category": "for creative websites",
    "tools.wordpress.category": "based on customer choice",

    "timeline.headingMain": "My path to",
    "timeline.headingAccent": "programming",
    "timeline.birth.title": "Birthplace",
    "timeline.birth.description": "I come from Bratislava, where I studied and lived until my twenties.",
    "timeline.swimming.title": "Swimming",
    "timeline.swimming.description":
      "During my childhood, I dedicated myself to swimming, became a Slovak champion, and represented Slovakia for several years. This experience gave me the drive to work on myself, perseverance, and the ability to keep going when facing problems, which I now use in programming as well.",
    "timeline.school.title": "High school",
    "timeline.school.description":
      "I attended the C. S. Lewis English bilingual high school in Bratislava and graduated at C1 English level.",
    "timeline.coding.title": "Diving into coding",
    "timeline.coding.description":
      "I have been coding since the beginning of high school, including a Python/Tkinter competition. I fully entered the web development world in 2020, when I built my first website for a family business.",
    "timeline.started.title": "University",
    "timeline.started.description": "I am currently studying Informatics and Management at Brno University of Technology.",
    "timeline.present.title": "Present day",
    "timeline.present.description": "Besides freelance work, I am currently improving my skills through more complex projects that I build on my own. I am also looking for new work opportunities that will give me space to apply what I know while learning what it is like to work on larger projects in a team.",

    "contact.headingMain": "Have an idea?",
    "contact.headingAccent": "I have a solution!",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.budget": "Budget",
    "contact.select": "Select...",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.submit": "Submit",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully.",
    "contact.error": "Message could not be sent. Please try again.",

    "footer.rights": "All rights reserved",
  },
} as const;

type TranslationKey = keyof typeof translations.sk;

type TranslateContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const TranslateContext = createContext<TranslateContextValue | null>(null);

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sk");

  const value = useMemo<TranslateContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === "sk" ? "en" : "sk")),
      t: (key) => translations[language][key],
    }),
    [language],
  );

  return <TranslateContext.Provider value={value}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => {
  const context = useContext(TranslateContext);

  if (!context) {
    throw new Error("useTranslate must be used inside TranslateProvider");
  }

  return context;
};
