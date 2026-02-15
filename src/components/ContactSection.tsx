import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="py-16 sm:py-20">
      <motion.h2
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        LET'S WORK <span className="text-muted-foreground italic font-light">TOGETHER</span>
      </motion.h2>

      <motion.form
        className="space-y-4 sm:space-y-5"
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[
          { label: "Name", type: "text", placeholder: "Your name" },
          { label: "Email", type: "email", placeholder: "your@email.com" },
        ].map((field, i) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <label className="block text-sm text-muted-foreground mb-2">{field.label}</label>
            <input
              type={field.type}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all"
              placeholder={field.placeholder}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm text-muted-foreground mb-2">Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all appearance-none"
          >
            <option value="">Select…</option>
            <option value="<3k">&lt;$3k</option>
            <option value="3k-5k">$3k - $5k</option>
            <option value="5k-10k">$5k - $10k</option>
            <option value=">10k">&gt;$10k</option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm text-muted-foreground mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all resize-none"
            placeholder="Tell me about your project…"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-xl transition-opacity"
          whileHover={{ scale: 1.02, boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
