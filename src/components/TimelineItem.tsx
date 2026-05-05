import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  highlight?: "primary" | "secondary";
}

const TimelineItem = ({ year, title, description, index, highlight }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex w-full items-center"
    >
      {/* Left content */}
      <div className={`w-1/2 min-w-0 pr-8 text-right xl:pr-12 ${!isLeft ? "invisible" : ""}`}>
        {isLeft && <ItemContent year={year} title={title} description={description} highlight={highlight} align="right" />}
      </div>

      {/* Center dot */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
            highlight === "primary"
              ? "bg-primary border-primary"
              : highlight === "secondary"
              ? "bg-secondary border-secondary"
              : "bg-muted border-muted-foreground/40"
          }`}
        />
      </div>

      {/* Right content */}
      <div className={`w-1/2 min-w-0 pl-8 xl:pl-12 ${isLeft ? "invisible" : ""}`}>
        {!isLeft && <ItemContent year={year} title={title} description={description} highlight={highlight} align="left" />}
      </div>
    </motion.div>
  );
};

const ItemContent = ({
  year,
  title,
  description,
  highlight,
  align,
}: {
  year: string;
  title: string;
  description: string;
  highlight?: "primary" | "secondary";
  align: "left" | "right";
}) => (
  <div className={`${align === "right" ? "text-right" : "text-left"}`}>
    <span
      className={`text-sm font-display font-bold uppercase tracking-widest ${
        highlight === "primary"
          ? "text-primary"
          : highlight === "secondary"
          ? "text-secondary"
          : "text-muted-foreground"
      }`}
    >
      {year}
    </span>
    <h3 className="mt-1 break-words font-heading text-xl font-bold text-foreground">{title}</h3>
    <p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground">{description}</p>
  </div>
);

export default TimelineItem;
