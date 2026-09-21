import subo from "@/assets/subo.jpg";
import sunyhouse from "@/assets/sunyhouse.jpg";

export const email = "matejsujansky@gmail.com";
export type LocalText = { sk: string; en: string };
export const text = (sk: string, en: string): LocalText => ({ sk, en });

// Source: Matej's CV. Dates refer to employment, not first contact with coding.
export const experiences = [
 
  { id: "freelance", company: "Freelance", role: "Web developer", period: text("2023 — súčasnosť", "2023 — present"), active: true,
    summary: text("Od analýzy požiadaviek po nasadenie riešenia.", "From requirements analysis to launch."),
    detail: text("Analyzujem požiadavky klientov, navrhujem štruktúru, funkcionality a používateľské rozhranie webových riešení. Počas celého projektu samostatne komunikujem s klientmi, vyvíjam webové stránky a aplikácie, testujem ich a nasadzujem hotové riešenia.", "I analyse client requirements and design the structure, functionality and user interface of web solutions. Throughout the project, I communicate directly with clients, develop websites and applications, test them and deploy the finished solution."),
    stack: ["React", "Next.js", "Tailwind CSS", "Figma", "REST API", "Vercel"] },
  { id: "slates", company: "Slates App", role: "Application Developer", period: text("03/2026 — 08/2026", "03/2026 — 08/2026"), active: false,
    summary: text("Kastingový startup.", "Casting startup."),
    detail: text("Ako Application Developer som sa podieľal na vývoji a úpravách webovej aplikácie. Pracoval som s klientskou časťou platformy, komponentmi rozhrania a databázovými nástrojmi.", "As an Application Developer, I contributed to the development and maintenance of a web application. I worked on the client side of the platform, UI components and database tools."),
    stack: ["React", "JavaScript", "Supabase", "Docker", "SQL"] },
  { id: "hanya", company: "Hanya Corporation", role: "IT helpdesk | Data analyst", period: text("03/2025 — 05/2026", "03/2025 — 05/2026"), active: false,
    summary: text("Dáta, IT riešenia a používateľská podpora.", "Data, IT solutions and user support."),
    detail: text("Analyzoval som dáta pomocou SQL dotazov a pripravoval výstupy v Power BI a Exceli. V rámci firemného projektu som vytváral React komponenty, konzultoval vhodné IT riešenia a poskytoval používateľskú podporu pri technických problémoch.", "I analysed data using SQL queries and prepared reports in Power BI and Excel. As part of a company project, I built React components, consulted on suitable IT solutions and provided user support for technical issues."),
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

];
