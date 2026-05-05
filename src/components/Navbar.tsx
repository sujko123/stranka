import { Home, Monitor, BarChart3, Wrench, PenLine } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/i18n";

const navItems = [
  { icon: Home, href: "#home", labelKey: "nav.home" },
  { icon: Monitor, href: "#projects", labelKey: "nav.projects" },
  { icon: BarChart3, href: "#experience", labelKey: "nav.experience" },
  { icon: Wrench, href: "#tools", labelKey: "nav.tools" },
  { icon: PenLine, href: "#contact", labelKey: "nav.contact" },
] as const;

const Navbar = () => {
  const { t, toggleLanguage } = useTranslate();

  return (
    <motion.nav
      className="fixed left-1/2 top-3 z-50 w-[calc(100vw-2rem)] max-w-[18rem] sm:top-6 sm:w-auto sm:max-w-none"
      initial={{ x: "-50%", y: -28, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      aria-label="Primary navigation"
    >
      <div className="flex w-full items-center justify-between rounded-full border border-border bg-card/90 px-1.5 py-1.5 shadow-[0_0_20px_hsl(var(--primary)/0.15)] backdrop-blur-xl sm:w-max sm:justify-center sm:gap-1 sm:bg-card/80 sm:px-2 sm:py-2">
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            aria-label={t(item.labelKey)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-primary sm:h-11 sm:w-11"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08 }}
          >
            <item.icon size={16} className="sm:h-[18px] sm:w-[18px]" />
          </motion.a>
        ))}
        <motion.button
          type="button"
          aria-label="Toggle language"
          className="flex h-9 w-9 items-center justify-center rounded-full font-heading text-xs font-bold text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-primary sm:h-11 sm:w-11"
          onClick={toggleLanguage}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + navItems.length * 0.08 }}
        >
          {t("nav.toggle")}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
