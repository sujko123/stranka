import { Layers, Figma, CreditCard, Bot, BookOpen, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/i18n";

const tools = [
  { icon: Layers, name: "React", categoryKey: "tools.react.category" },
  { icon: Figma, name: "Vercel", categoryKey: "tools.vercel.category" },
  { icon: CreditCard, name: "Typescript", categoryKey: "tools.typescript.category" },
  { icon: Bot, name: "Figma", categoryKey: "tools.figma.category" },
  { icon: BookOpen, name: "Framer", categoryKey: "tools.framer.category" },
  { icon: Code2, name: "Wordpress", categoryKey: "tools.wordpress.category" },
] as const;

const ToolsSection = () => {
  const { t } = useTranslate();

  return (
    <section id="tools" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <motion.h2
        className="mb-8 font-heading text-3xl font-bold leading-tight sm:mb-10 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t("tools.headingMain")}{" "}
        <span className="text-muted-foreground italic font-light">{t("tools.headingAccent")}</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="group flex min-h-[132px] cursor-pointer flex-col items-center rounded-2xl border border-border bg-card p-4 text-center transition-all duration-300 hover:border-primary/50 sm:p-5"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ y: -6, scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/20 sm:h-12 sm:w-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <tool.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
            <h3 className="font-heading text-xs font-semibold text-foreground sm:text-sm">{tool.name}</h3>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{t(tool.categoryKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
