import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: "primary" | "secondary";
}

const TimelineMobile = ({ events }: { events: TimelineEvent[] }) => (
  <div className="relative pl-7">
    {/* Vertical line */}
    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

    <div className="space-y-10">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="group relative min-w-0"
        >
          {/* Dot */}
          <div
            className={`absolute -left-7 top-1 h-4 w-4 rounded-full border-2 transition-all group-hover:scale-125 ${
              event.highlight === "primary"
                ? "bg-primary border-primary"
                : event.highlight === "secondary"
                ? "bg-secondary border-secondary"
                : "bg-muted border-muted-foreground/40"
            }`}
          />
          <span
            className={`text-xs font-display font-bold uppercase tracking-widest ${
              event.highlight === "primary"
                ? "text-primary"
                : event.highlight === "secondary"
                ? "text-secondary"
                : "text-muted-foreground"
            }`}
          >
            {event.year}
          </span>
          <h3 className="mt-0.5 break-words font-heading text-lg font-bold text-foreground">{event.title}</h3>
          <p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground">{event.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TimelineMobile;
