import { Layers, Figma, CreditCard, Bot, BookOpen, Code2 } from "lucide-react";

const tools = [
  { icon: Layers, name: "Framer", category: "Website Builder" },
  { icon: Figma, name: "Figma", category: "Design Tool" },
  { icon: CreditCard, name: "Lemon Squeezy", category: "Payments Provider" },
  { icon: Bot, name: "ChatGPT", category: "AI Assistant" },
  { icon: BookOpen, name: "Notion", category: "Productivity Tool" },
  { icon: Code2, name: "Next.js", category: "React Framework" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
          PREMIUM <span className="text-muted-foreground italic font-light">TOOLS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <tool.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground">{tool.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ToolsSection;
