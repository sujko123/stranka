const experiences = [
  {
    company: "PixelForge Studios",
    description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    period: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    period: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    description: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    period: "Mar 2015 - May 2017",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
          12 YEARS OF <span className="text-muted-foreground italic font-light">EXPERIENCE</span>
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-2xl leading-relaxed">{exp.description}</p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
