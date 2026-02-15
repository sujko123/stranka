const stats = [
  { value: "+12", label: "YEARS OF", sublabel: "EXPERIENCE" },
  { value: "+46", label: "PROJECTS", sublabel: "COMPLETED" },
  { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16">
      <h1 className="font-heading font-bold text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6">
        <span className="text-foreground">SOFTWARE</span>
        <br />
        <span className="text-muted-foreground italic font-light">ENGINEER</span>
      </h1>

      <p className="text-muted-foreground max-w-lg text-base leading-relaxed mb-10">
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </p>

      {/* Stats */}
      <div className="flex gap-12 mb-10">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl font-bold font-heading text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground tracking-widest mt-1">
              {stat.label}
              <br />
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-primary rounded-2xl p-6 flex flex-col justify-between min-h-[160px] group hover:scale-[1.02] transition-transform">
          <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="text-primary-foreground font-heading font-semibold text-lg uppercase">Dynamic Animation,</p>
            <p className="text-primary-foreground font-heading font-semibold text-lg uppercase">Motion Design</p>
          </div>
          <div className="flex justify-end mt-2">
            <div className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground">→</div>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between min-h-[160px] group hover:scale-[1.02] transition-transform">
          <div className="w-10 h-10 rounded-lg bg-secondary-foreground/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary-foreground">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <p className="text-secondary-foreground font-heading font-semibold text-lg uppercase">Framer, Figma,</p>
            <p className="text-secondary-foreground font-heading font-semibold text-lg uppercase">WordPress, ReactJS</p>
          </div>
          <div className="flex justify-end mt-2">
            <div className="w-8 h-8 rounded-full border border-secondary-foreground/30 flex items-center justify-center text-secondary-foreground">→</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
