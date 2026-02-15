import { motion } from "framer-motion";

const posts = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Mar 15, 2022",
    readTime: "6min read",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Feb 28, 2022",
    readTime: "6min read",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <motion.h2
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        DESIGN <span className="text-muted-foreground italic font-light">THOUGHTS</span>
      </motion.h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href="#"
            className="block bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ x: 8, boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-2xl leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm whitespace-nowrap">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
