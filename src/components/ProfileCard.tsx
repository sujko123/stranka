import { Dribbble, Twitter, Instagram, Youtube, Flame } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Dribbble, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const ProfileCard = () => {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto lg:mx-0"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Animated dashed border */}
      <motion.div
        className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/40 rounded-3xl pointer-events-none"
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="bg-card rounded-2xl p-6 flex flex-col items-center relative z-10 backdrop-blur-sm">
        {/* Profile image with glow */}
        <motion.div
          className="relative mb-4 w-40 h-48 sm:w-48 sm:h-56 overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply rounded-xl" />
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <motion.h3
          className="text-xl font-bold font-heading text-foreground mb-1"
          whileHover={{ scale: 1.05 }}
        >
          Aaabad Ahmed
        </motion.h3>

        <motion.div
          className="my-3"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" size={24} />
        </motion.div>

        <p className="text-muted-foreground text-center text-sm leading-relaxed mb-5">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
