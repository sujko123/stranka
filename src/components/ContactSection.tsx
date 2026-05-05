import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/i18n";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useTranslate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzlawlq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <motion.h2
        className="mb-8 text-center font-heading text-3xl font-bold leading-tight sm:mb-10 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t("contact.headingMain")} <br></br>{" "}
        <span className="text-muted-foreground italic font-light">{t("contact.headingAccent")}</span>
      </motion.h2>

      <motion.form
        className="mx-auto max-w-2xl space-y-4 sm:space-y-5"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[
          { label: t("contact.name"), name: "name", type: "text", placeholder: t("contact.namePlaceholder") },
          { label: t("contact.email"), name: "email", type: "email", placeholder: t("contact.emailPlaceholder") },
        ].map((field, i) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <label className="mb-2 block text-sm text-muted-foreground">{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              required
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
              placeholder={field.placeholder}
            />
          </motion.div>
        ))}

       

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <label className="mb-2 block text-sm text-muted-foreground">{t("contact.message")}</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
            placeholder={t("contact.messagePlaceholder")}
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-primary py-3 font-heading font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          whileHover={{ scale: 1.02, boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "sending" ? t("contact.sending") : t("contact.submit")}
        </motion.button>

        {status === "success" && (
          <p className="text-center text-sm font-medium text-primary">{t("contact.success")}</p>
        )}

        {status === "error" && (
          <p className="text-center text-sm font-medium text-destructive">{t("contact.error")}</p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactSection;
