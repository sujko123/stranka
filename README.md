# Matej Šujanský · portfolio

React, TypeScript, Vite, Tailwind CSS a Framer Motion.

## Spustenie

```bash
npm install
npm run dev
```

Lokálna adresa je http://localhost:8080 (alebo ďalší voľný port vypísaný Vite).

## Doplnenie troch projektov

Tri samostatné záznamy sú v `src/lib/portfolio.ts` v poli `upcomingProjects`.
Pre každý projekt:

1. Uprav `title` a slovenský aj anglický `description`.
2. Pridaj obrázok do `public/projects/` a vyplň `image: "/projects/nazov.webp"`.
3. Vyplň `url` skutočnou HTTPS adresou a `stack` použitými technológiami.
4. Zmeň `status` z `"placeholder"` na `"live"`.

Karta sa presunie do filtra publikovaných projektov a jej detail zobrazí obrázok,
technológie a odkaz. Kým zostane placeholderom, nebude predstierať hotový projekt.
Pôvodné tri projekty sú v `src/components/ProjectsSection.tsx`.

## Obsah a interakcie

- Pracovné skúsenosti podľa PDF: `src/lib/portfolio.ts`.
- O mne, terminál, stack, vzdelanie a záujmy: `src/components/DeveloperSections.tsx`.
- Terminál podporuje `help`, `whoami`, `skills`, `projects`, `contact`, `git log`, `clear`
  a históriu cez šípky. Ide o lokálnu simuláciu, nespúšťa shell ani ľubovoľný kód.
- SQL playground používa lokálne dáta, nepripája sa k databáze.
- Prepínač SK/EN funguje aj pre nové sekcie.
- Kontakt používa pôvodné Formspree napojenie. Kopírovanie emailu je samostatné.

## Overenie

```bash
npm run build
npx tsc --noEmit -p tsconfig.app.json
```
