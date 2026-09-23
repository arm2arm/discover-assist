import { ArrowLeft, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { editorialPosts } from "@/content/editorial";

const Article = () => {
  const { slug } = useParams();
  const post = editorialPosts.find((item) => item.slug === slug);
  if (!post) return <Navigate to="/news" replace />;
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <header className="border-b border-border bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-5xl">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-accent"><ArrowLeft className="h-4 w-4" /> All news</Link>
            <div className="mt-12 text-xs font-bold uppercase tracking-widest text-accent">{post.category} · <time dateTime={post.date}>{post.displayDate}</time></div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold leading-tight text-foreground mt-4">{post.title}</h1>
            <p className="text-xl leading-relaxed text-muted-foreground mt-6 max-w-3xl">{post.summary}</p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mt-6"><Clock className="h-4 w-4" /> {post.readTime}</p>
          </div>
        </header>
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-3xl">
          {post.body.map((section, index) => (
            <section key={section.heading ?? index} className="mb-12">
              {section.heading && <h2 className="font-heading text-2xl font-semibold text-foreground mb-5">{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-muted-foreground mb-5">{paragraph}</p>)}
              {section.bullets && <ul className="space-y-3 border-l-2 border-accent pl-6">{section.bullets.map((bullet) => <li key={bullet} className="text-muted-foreground">{bullet}</li>)}</ul>}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;