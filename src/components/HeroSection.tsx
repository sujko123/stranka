import { Dribbble, Twitter, Instagram, Youtube, Flame } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "+12", label: "YEARS OF", sublabel: "EXPERIENCE" },
  { value: "+46", label: "PROJECTS", sublabel: "COMPLETED" },
  { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
];

const socials = [
  { icon: Dribbble, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Profile Card */}
        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
          {/* Dashed orange border decoration */}
          <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/40 rounded-3xl pointer-events-none" />
          
          <div className="bg-card rounded-2xl p-6 flex flex-col items-center relative z-10">
            {/* Profile Image with orange accent */}
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

        {/* Right Content */}
        <div className="flex-1">
          <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6">
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
                <div className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground">
                  →
                </div>
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
                <div className="w-8 h-8 rounded-full border border-secondary-foreground/30 flex items-center justify-center text-secondary-foreground">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
