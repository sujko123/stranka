import { Dribbble, Twitter, Instagram, Youtube, Flame } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Dribbble, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Dashed orange border decoration */}
      <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/40 rounded-3xl pointer-events-none" />

      <div className="bg-card rounded-2xl p-6 flex flex-col items-center relative z-10">
        <div className="relative mb-4 w-48 h-56 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply rounded-xl" />
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h3 className="text-xl font-bold font-heading text-foreground mb-1">Aaabad Ahmed</h3>

        <div className="my-3">
          <Flame className="text-primary" size={24} />
        </div>

        <p className="text-muted-foreground text-center text-sm leading-relaxed mb-5">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
