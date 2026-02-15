import { useState } from "react";

const ContactSection = () => {
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
          LET'S WORK <span className="text-muted-foreground italic font-light">TOGETHER</span>
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="">Select…</option>
              <option value="<3k">&lt;$3k</option>
              <option value="3k-5k">$3k - $5k</option>
              <option value="5k-10k">$5k - $10k</option>
              <option value=">10k">&gt;$10k</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project…"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
