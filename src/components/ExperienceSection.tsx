import { motion } from "framer-motion";
import { useTranslate } from "@/lib/i18n";

const experiences = [
  {
    positionKey: "experience.freelance.position",
    bulletKeys: [
      "experience.freelance.bullet1",
      "experience.freelance.bullet2",
      "experience.freelance.bullet3",
      "experience.freelance.bullet4",
    ],
    periodKey: "experience.freelance.period",
    company: "Freelancer",
  },
  {
    positionKey: "experience.slates.position",
    bulletKeys: ["experience.slates.bullet1", "experience.slates.bullet2", "experience.slates.bullet3"],
    periodKey: "experience.slates.period",
    company: "Slates Platform",
  },
  {
    positionKey: "experience.support.position",
    bulletKeys: ["experience.support.bullet1", "experience.support.bullet2", "experience.support.bullet3"],
    periodKey: "experience.support.period",
    company: "Arval CC.",
  },
  {
    positionKey: "experience.tech.position",
    bulletKeys: ["experience.tech.bullet1", "experience.tech.bullet2", "experience.tech.bullet3"],
    periodKey: "experience.tech.period",
    company: "Arval CC.",
  },
] as const;

const ExperienceSection = () => {
  const { t } = useTranslate();

  return (
    <section id="experience" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <motion.h2
        className="mb-8 font-heading text-3xl font-bold leading-tight sm:mb-10 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t("experience.headingMain")}{" "}
        <span className="text-muted-foreground italic font-light">{t("experience.headingAccent")}</span>
      </motion.h2>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.article
            key={`${exp.company}-${exp.positionKey}`}
            className="group rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 sm:p-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -3, boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="break-words font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                  {t(exp.positionKey)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary sm:text-base [&_li]:break-words">
                  {exp.bulletKeys.map((bulletKey) => (
                    <li key={bulletKey}>{t(bulletKey)}</li>
                  ))}
                </ul>
              </div>

              <span className="shrink-0 text-sm text-muted-foreground md:text-right">
                {t(exp.periodKey)}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
