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
    <section className="py-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
          DESIGN <span className="text-muted-foreground italic font-light">THOUGHTS</span>
        </h2>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href="#"
              className="block bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-2xl leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm whitespace-nowrap">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
};

export default BlogSection;
