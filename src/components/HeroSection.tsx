import { motion } from "framer-motion";
import { Route, PanelsTopLeft, MoveRight } from "lucide-react";
import { useTranslate } from "@/lib/i18n";

const stats = [
  { value: "+6", labelKey: "hero.stat1.label", sublabelKey: "hero.stat1.sublabel" },
  { value: "+30", labelKey: "hero.stat2.label", sublabelKey: "hero.stat2.sublabel" },
  { value: "+40", labelKey: "hero.stat3.label", sublabelKey: "hero.stat3.sublabel" },
] as const;

const HeroSection = () => {
  const { t } = useTranslate();

  return (
    <section id="home" className="scroll-mt-24 pb-12 pt-8 sm:pb-16 lg:pt-24">
      <motion.h1
        className="mb-6 break-words font-heading text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-foreground inline-block hover:text-primary transition-colors duration-300">
          {t("hero.titleTop")}
        </span>
        <br />
        <motion.span
          className="text-muted-foreground italic font-light inline-block"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("hero.titleBottom")}
        </motion.span>
      </motion.h1>

      <motion.p
        className="mb-8 max-w-lg break-words text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {t("hero.description")}
      </motion.p>

      {/* Stats with stagger */}
      <div className="mb-10 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, y: -4 }}
          >
            <div className="font-heading text-3xl font-bold text-foreground drop-shadow-[0_0_12px_hsl(var(--primary)/0.3)] sm:text-4xl md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-1 text-[0.68rem] leading-tight tracking-widest text-muted-foreground sm:text-xs">
              {t(stat.labelKey)}
              <br />
              {t(stat.sublabelKey)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <motion.a
          href="#timeline"
          className="relative flex min-h-[140px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-primary p-5 sm:min-h-[160px] sm:p-6"
          whileHover={{ scale: 1.03, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
            <Route size={20} strokeWidth={2} className="text-primary-foreground" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold uppercase text-primary-foreground sm:text-lg">
              {t("hero.card1.line1")}
            </p>
            <p className="font-heading text-base font-semibold uppercase text-primary-foreground sm:text-lg">
              {t("hero.card1.line2")}
            </p>
          </div>
          <div className="mt-2 flex justify-end">
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
              whileHover={{ rotate: 45, scale: 1.2 }}
            >
              <MoveRight size={20} strokeWidth={2} className="text-primary-foreground" />
            </motion.div>
          </div>
        </motion.a>

        <motion.a
          href="#projects"
          className="relative flex min-h-[140px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-secondary p-5 sm:min-h-[160px] sm:p-6"
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-foreground/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-foreground/20">
            <PanelsTopLeft size={20} strokeWidth={2} className="text-primary-foreground" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold uppercase text-secondary-foreground sm:text-lg">
              {t("hero.card2.line1")}
            </p>
            <p className="font-heading text-base font-semibold uppercase text-secondary-foreground sm:text-lg">
              {t("hero.card2.line2")}
            </p>
          </div>
          <div className="mt-2 flex justify-end">
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
              whileHover={{ rotate: 45, scale: 1.2 }}
            >
              <MoveRight size={20} strokeWidth={2} className="text-primary-foreground" />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
