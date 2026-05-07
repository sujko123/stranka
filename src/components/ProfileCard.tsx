import { Dribbble, X, Instagram, Linkedin, Flame, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/ja.png";
import { useTranslate } from "@/lib/i18n";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/sujanskyyy/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/matej-%C5%A1ujansk%C3%BD-542915264/?locale=en" },
  { icon: Github, href: "https://github.com/sujko123" },
  { icon: Mail, href: "mailto:matejsujansky@gmail.com" },
];

const ProfileCard = () => {
  const { t } = useTranslate();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:mx-0"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Animated dashed border */}
      <motion.div
        className="pointer-events-none absolute -left-2 -top-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] rounded-3xl border-2 border-dashed border-primary/40 sm:-left-4 sm:-top-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center rounded-2xl bg-card p-5 backdrop-blur-sm sm:p-6">
        {/* Profile image with glow */}
        <motion.div
          className="relative mb-4 h-44 w-36 overflow-hidden rounded-xl sm:h-56 sm:w-48"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply rounded-xl" />
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-xl" />
        </motion.div>

        <motion.h3 className="mb-1 text-center font-heading text-xl font-bold text-foreground">
          {t("profile.name")}
        </motion.h3>

        <motion.div
          className="my-3"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" size={24} />
        </motion.div>

        <p className="mb-5 text-center text-sm leading-relaxed text-muted-foreground">
          {t("profile.bio")} <br /> {t("profile.study")} <br /> {t("profile.building")}
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              whileHover={{ scale: 1.3, y: -4 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
