import { Layers, Figma, CreditCard, Bot, BookOpen, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  { icon: Layers, name: "Framer", category: "Website Builder" },
  { icon: Figma, name: "Figma", category: "Design Tool" },
  { icon: CreditCard, name: "Lemon Squeezy", category: "Payments Provider" },
  { icon: Bot, name: "ChatGPT", category: "AI Assistant" },
  { icon: BookOpen, name: "Notion", category: "Productivity Tool" },
  { icon: Code2, name: "Next.js", category: "React Framework" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 sm:py-20">
      <motion.h2
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        PREMIUM <span className="text-muted-foreground italic font-light">TOOLS</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ y: -6, scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <tool.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
            <h3 className="font-heading font-semibold text-xs sm:text-sm text-foreground">{tool.name}</h3>
            <p className="text-muted-foreground text-xs mt-1">{tool.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
