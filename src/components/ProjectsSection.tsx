import { motion } from "framer-motion";
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
    <section id="projects" className="py-16 sm:py-20">
      <motion.h2
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        RECENT <span className="text-muted-foreground italic font-light">PROJECTS</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href="#"
            className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="overflow-hidden relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-heading font-bold text-lg text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
