import { motion } from "framer-motion";

const stats = [
  { value: "+12", label: "YEARS OF", sublabel: "EXPERIENCE" },
  { value: "+46", label: "PROJECTS", sublabel: "COMPLETED" },
  { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16">
      <motion.h1
        className="font-heading font-bold text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-foreground inline-block hover:text-primary transition-colors duration-300">
          SOFTWARE
        </span>
        <br />
        <motion.span
          className="text-muted-foreground italic font-light inline-block"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ENGINEER
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-muted-foreground max-w-lg text-sm sm:text-base leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </motion.p>

      {/* Stats with stagger */}
      <div className="flex flex-wrap gap-8 sm:gap-12 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, y: -4 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground drop-shadow-[0_0_12px_hsl(var(--primary)/0.3)]">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground tracking-widest mt-1">
              {stat.label}
              <br />
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          className="bg-primary rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] cursor-pointer overflow-hidden relative"
          whileHover={{ scale: 1.03, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
          <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="text-primary-foreground font-heading font-semibold text-base sm:text-lg uppercase">Dynamic Animation,</p>
            <p className="text-primary-foreground font-heading font-semibold text-base sm:text-lg uppercase">Motion Design</p>
          </div>
          <div className="flex justify-end mt-2">
            <motion.div
              className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground"
              whileHover={{ rotate: 45, scale: 1.2 }}
            >
              →
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-secondary rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] cursor-pointer overflow-hidden relative"
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-foreground/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
          <div className="w-10 h-10 rounded-lg bg-secondary-foreground/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary-foreground">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <p className="text-secondary-foreground font-heading font-semibold text-base sm:text-lg uppercase">Framer, Figma,</p>
            <p className="text-secondary-foreground font-heading font-semibold text-base sm:text-lg uppercase">WordPress, ReactJS</p>
          </div>
          <div className="flex justify-end mt-2">
            <motion.div
              className="w-8 h-8 rounded-full border border-secondary-foreground/30 flex items-center justify-center text-secondary-foreground"
              whileHover={{ rotate: 45, scale: 1.2 }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
