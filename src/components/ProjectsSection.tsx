import { motion } from "framer-motion";
import mimoza from "@/assets/mimoza.png";
import sao from "@/assets/sao.png";
import mf from "@/assets/mf.png";
import { useTranslate } from "@/lib/i18n";

const projects = [
  { image: sao, title: "SAO Optika", subtitleKey: "projects.sao.subtitle", href: "https://www.saooptika.sk/" },
  { image: mimoza, title: "Mimóza Gelato", subtitleKey: "projects.mimoza.subtitle", href: "https://www.mimoza.sk/" },
  { image: mf, title: "Marek Franc", subtitleKey: "projects.mf.subtitle", href: "https://www.marekfranc.cz/" },
] as const;

const ProjectsSection = () => {
  const { t } = useTranslate();

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <motion.h2
        className="mb-8 font-heading text-3xl font-bold leading-tight sm:mb-10 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {t("projects.headingMain")}{" "}
        <span className="text-muted-foreground italic font-light">{t("projects.headingAccent")}</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="overflow-hidden relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover sm:h-52"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-heading text-lg font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{t(project.subtitleKey)}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
