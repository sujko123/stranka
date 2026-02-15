import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { image: project1, title: "NajmAI", subtitle: "SaaS Template" },
  { image: project2, title: "Damas", subtitle: "Free Template" },
  { image: project3, title: "Faseelh", subtitle: "Free Template" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
          RECENT <span className="text-muted-foreground italic font-light">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
};

export default ProjectsSection;
