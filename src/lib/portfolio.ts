import subo from "@/assets/subo.jpg";
import sunyhouse from "@/assets/sunyhouse.jpg";

export const email = "matejsujansky@gmail.com";
export type LocalText = { sk: string; en: string };
export const text = (sk: string, en: string): LocalText => ({ sk, en });

// Source: Matej's CV. Dates refer to employment, not first contact with coding.
export const experiences = [
 
  { id: "freelance", company: "Freelance", role: "Web developer", period: text("01/2023 — súčasnosť", "01/2023 — present"), active: true,
    summary: text("20+ webov. Každý s vlastnou identitou.", "20+ websites. Each with its own identity."),
    detail: text("Tvorím weby na mieru vizuálnej identite a hodnotám značky. Podľa projektu pracujem s JavaScriptom a Reactom alebo editormi Framer a GHL. Vo vlastných projektoch rozširujem skúsenosti aj o backend.", "I build websites tailored to each brand's visual identity and values. Depending on the project, I use JavaScript and React or editors such as Framer and GHL. My personal projects also let me explore backend development."),
    stack: ["React", "Next.js", "Tailwind CSS", "Figma", "REST API", "Vercel"] },
     { id: "slates", company: "Slates App", role: "Frontend dev / Software helper", period: text("02/2026 — 08/2026", "02/2026 — 08/2026"), active: false,
    summary: text("Frontend pre kastingový startup.", "Frontend for a casting startup."),
    detail: text("Pomáhal som riešiť zmeny a problémy na klientskej strane platformy a vytváral frontendové komponenty. Pri práci som využíval aj databázové nástroje.", "I help resolve changes and issues on the client side of the platform and build frontend components, also working with database tools."),
    stack: ["React", "JavaScript", "Supabase", "Docker", "SQL"] },
  { id: "hanya", company: "Hanya Corporation", role: "IT helpdesk / Frontend dev", period: text("04/2025 — 05/2026", "04/2025 — 05/2026"), active: false,
    summary: text("Od SQL dát po internú AI aplikáciu.", "From SQL data to an internal AI application."),
    detail: text("V Brne som spravoval hardvér, servery a databázy. Vyhľadával som dáta a vytváral SQL tabuľky, analyzoval výstupy v Exceli a Power BI. V tíme som sa podieľal na vývoji internej aplikácie na hodnotenie kvality telefonických operátorov pomocou AI.", "In Brno, I maintained hardware, servers and databases. I queried data, created SQL tables and analysed results in Excel and Power BI. In a team, I worked on an internal application using AI to evaluate call operator quality."),
    stack: ["React", "SQL", "Power BI", "Excel", "Git", "GitHub"] },
  { id: "arval", company: "Arval Competence Center", role: "IT Helpdesk / IT support", period: text("05/2023 — 09/2023 · 05/2024 — 08/2024", "05/2023 — 09/2023 · 05/2024 — 08/2024"), active: false,
    summary: text("Technológie, ktoré ľuďom uľahčujú prácu.", "Technology that makes people's work easier."),
    detail: text("Počas dvoch období v Arvale som riešil používateľskú podporu, správu a konfiguráciu zariadení, firemný hardvér, migráciu používateľského prostredia, výmenu komponentov a zapájanie switchov. Súčasťou práce bolo aj školenie zamestnancov v nových funkciách a aplikáciách a hľadanie praktických riešení pod časovým tlakom.", "Across two periods at Arval, I handled user support, device management and configuration, company hardware, user environment migration, component replacement and switch setup. I also trained employees on new features and applications and solved practical issues under time pressure."),
    stack: ["Hardware", "Networking", "User support", "Troubleshooting", "Configuration"] },
];

export type Project = {
  id: string; title: string; description: LocalText; image?: string;
  url?: string; stack: string[]; status: "live" | "placeholder";
  category: "personal" | "platform";
};

// Publish a slot by setting status: "live" and filling title, description,
// stack, image (e.g. /projects/my-project.webp) and a real url.
export const upcomingProjects: Project[] = [
  { id: "project-04", title: "SUBO", image: subo, url: "https://subo.sk/", description: text("Web pre bratislavskú pekáreň s focacciami, koláčmi a výberovou kávou.", "A website for a Bratislava bakery offering focaccia, pastries and specialty coffee."), stack: [], status: "live", category: "personal" },
  { id: "project-05", title: "Sunyhouse", image: sunyhouse, url: "https://www.sunyhouse.cz/", description: text("Webová prezentácia koktailového baru v Břeclavi.", "A website for a cocktail bar in Břeclav."), stack: [], status: "live", category: "personal" },
  { id: "project-06", title: "Project_06", description: text("Miesto pre ďalší projekt. Jeho príbeh doplním čoskoro.", "A space for my next project. Its story is coming later."), stack: [], status: "placeholder", category: "platform" },
];
