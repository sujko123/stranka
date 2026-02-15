import { Home, Monitor, BarChart3, Wrench, PenLine } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, href: "#home" },
  { icon: Monitor, href: "#projects" },
  { icon: BarChart3, href: "#experience" },
  { icon: Wrench, href: "#tools" },
  { icon: PenLine, href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="p-2.5 sm:p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08 }}
          >
            <item.icon size={18} />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
