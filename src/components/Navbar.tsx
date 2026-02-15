import { Home, Monitor, BarChart3, Wrench, PenLine } from "lucide-react";

const navItems = [
  { icon: Home, href: "#home" },
  { icon: Monitor, href: "#projects" },
  { icon: BarChart3, href: "#experience" },
  { icon: Wrench, href: "#tools" },
  { icon: PenLine, href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-full px-2 py-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
