import subo from "@/assets/subo.jpg";
import sunyhouse from "@/assets/sunyhouse.jpg";

export const email = "matejsujansky@gmail.com";
export type LocalText = { sk: string; en: string };
export const text = (sk: string, en: string): LocalText => ({ sk, en });

// Source: Matej's CV. Dates refer to employment, not first contact with coding.
export const experiences = [
 
  { id: "freelance", company: "Freelance", role: "Full-stack developer", period: text("2023 — súčasnosť", "2023 — present"), active: true,
    summary: text("25+ webov a aplikácií od zadania po nasadenie.", "25+ websites and apps from requirements to deployment."),
    detail: text("Dodávam webové stránky a aplikácie pre malé firmy. Samostatne riešim rozsah projektu, UX, vývoj, testovanie, hosting aj komunikáciu s klientom. Vytvoril som aj SecretMenu — QR platformu pre reštaurácie s digitálnym menu, objednávkami pri stole, zľavami a kupónmi.", "I deliver websites and web applications for small businesses. I own scoping, UX, development, testing, hosting and client communication. I also built SecretMenu, a QR-based restaurant platform with digital menus, table orders, discounts and coupons."),
    stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"] },
  { id: "slates", company: "Slates App", role: "Full-stack developer", period: text("02/2026 — 10/2026", "Feb 2026 — Oct 2026"), active: false,
    summary: text("Vývoj, testovanie a údržba produkčnej platformy.", "Building, testing and maintaining a production platform."),
    detail: text("Vyvíjal som nové funkcie a redizajnoval rozhranie produkčnej webovej platformy — od databázy a API až po frontend. Riešil som chyby a bezpečnostné problémy nahlásené používateľmi a QA a udržiaval kvalitu kódu pomocou unit a end-to-end testov, code review a automatizovaných CI kontrol.", "I developed features and redesigned a production web platform from the database and API to the frontend. I fixed bugs and security issues reported by users and QA, and maintained code quality with unit and end-to-end tests, code review and automated CI checks."),
    stack: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Drizzle", "Vitest", "Playwright", "Docker"] },
  { id: "hanya", company: "Hanya CO.", role: "Frontend developer / IT Helpdesk", period: text("03/2025 — 05/2026", "Mar 2025 — May 2026"), active: false,
    summary: text("React, reporting a podpora používateľov.", "React, reporting and user support."),
    detail: text("Vyvíjal som a udržiaval React komponenty pre internú firemnú aplikáciu. Automatizoval som prevádzkové reporty pomocou SQL a Power BI, čím som nahradil manuálne exporty z Excelu. Riešil som aj používateľské požiadavky a pomáhal odhaľovať opakujúce sa problémy.", "I developed and maintained React components for an internal business application. I automated operational reporting with SQL and Power BI, replacing manual Excel exports. I also resolved user requests and helped identify recurring issues."),
    stack: ["React", "SQL", "Power BI", "IT support"] },
  { id: "arval", company: "Arval Competence Center", role: "IT support", period: text("letá 2023 a 2024", "Summers 2023 & 2024"), active: false,
    summary: text("Prvá línia podpory pre používateľov a zariadenia.", "First-line support for users and devices."),
    detail: text("Poskytoval som prvú líniu podpory pri problémoch s hardvérom, softvérom, používateľskými prístupmi a sieťou. Konfiguroval som zariadenia zamestnancov a pomáhal so základnou správou siete.", "I provided first-line support for hardware, software, user-access and network issues. I configured employee devices and supported basic network administration."),
    stack: ["Hardware", "Software", "Access management", "Networking"] },
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
