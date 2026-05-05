import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";
import TimelineMobile from "@/components/TimelineMobile";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslate } from "@/lib/i18n";

const timelineEvents = [
  {
    year: "21.05.2002",
    titleKey: "timeline.birth.title",
    descriptionKey: "timeline.birth.description",
    highlight: "primary" as const,
  },
  {
    year: "2007",
    titleKey: "timeline.swimming.title",
    descriptionKey: "timeline.swimming.description",
  },
  {
    year: "2017",
    titleKey: "timeline.school.title",
    descriptionKey: "timeline.school.description",
    highlight: "secondary" as const,
  },
  {
    year: "2020",
    titleKey: "timeline.coding.title",
    descriptionKey: "timeline.coding.description",
    highlight: "primary" as const,
  },
  {
    year: "2022",
    titleKey: "timeline.started.title",
    descriptionKey: "timeline.started.description",
    highlight: "primary" as const,
  },
  {
    year: "2025",
    titleKey: "timeline.present.title",
    descriptionKey: "timeline.present.description",
    highlight: "secondary" as const,
  },
] as const;

const Timeline = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslate();

  const translatedEvents = timelineEvents.map((event) => ({
    year: event.year,
    title: t(event.titleKey),
    description: t(event.descriptionKey),
    highlight: event.highlight,
  }));

  return (
    <section id="timeline" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center sm:mb-16 md:mb-20"
          >
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
              {t("timeline.headingMain")}{" "}
              <span className="italic text-muted-foreground font-normal">{t("timeline.headingAccent")}</span>
            </h1>
          </motion.div>

          {/* Timeline */}
          {isMobile ? (
            <TimelineMobile events={translatedEvents} />
          ) : (
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />

              <div className="space-y-12 md:space-y-16">
                {translatedEvents.map((event, index) => (
                  <TimelineItem
                    key={`${event.year}-${event.title}`}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    index={index}
                    highlight={event.highlight}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Timeline;
