import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { useTranslate } from "@/lib/i18n";
import { useCopy } from "@/hooks/use-portfolio-copy";
import { ContactIntro, Reveal, WindowBar } from "@/components/DeveloperSections";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useTranslate();
  const c = useCopy();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch("https://formspree.io/f/mvzlawlq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Failed to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="dev-section contact-section">
      <ContactIntro />
      <Reveal className="dev-panel contact-form-panel">
        <WindowBar title="new-message" extra={<Send size={13} />} />
        <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
          <div className="contact-form-heading">
            <h3>{c("Napíš mi.", "Drop me a line.")}</h3>
            
          </div>
          <div className="contact-fields-row">
            {[
              { label: t("contact.name"), name: "name", type: "text", placeholder: t("contact.namePlaceholder") },
              { label: t("contact.email"), name: "email", type: "email", placeholder: t("contact.emailPlaceholder") },
            ].map(field => (
              <div className="contact-field" key={field.name}>
                <label htmlFor={"contact-" + field.name}>{field.label}</label>
                <input id={"contact-" + field.name} name={field.name} type={field.type}
                  autoComplete={field.name} required placeholder={field.placeholder} />
              </div>
            ))}
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">{t("contact.message")}</label>
            <textarea id="contact-message" name="message" rows={5} required placeholder={t("contact.messagePlaceholder")} />
          </div>
          <div className="contact-form-footer"> 
            <button type="submit" disabled={status === "sending"} className="contact-submit">
              {status === "sending" ? t("contact.sending") : c("Odoslať správu", "Send message")}
              {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={17} />}
            </button>
          </div>
          {status === "success" && <p role="status" className="contact-feedback">{t("contact.success")}</p>}
          {status === "error" && <p role="alert" className="contact-feedback text-red-300">{t("contact.error")}</p>}
        </form>
      </Reveal>
    </section>
  );
}
