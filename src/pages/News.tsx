import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { editorialPosts } from "@/content/editorial";

const News = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-accent"><ArrowLeft className="h-4 w-4" /> Home</Link>
      <p className="text-xs font-bold uppercase tracking-widest text-accent mt-12">Project journal</p>
      <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground mt-3">News and events</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mt-5">Updates, practical guidance, public events, and stories from PhysicsLLM.</p>
      <div className="mt-14 border-t border-border">
        {editorialPosts.map((post) => (
          <article key={post.slug} className="grid md:grid-cols-[12rem_1fr_auto] gap-4 md:gap-8 py-8 border-b border-border items-start">
            <div className="text-xs font-bold uppercase tracking-widest text-accent"><time dateTime={post.date}>{post.displayDate}</time><br />{post.category}</div>
            <div><h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground"><Link to={`/news/${post.slug}`} className="hover:text-accent">{post.title}</Link></h2><p className="text-sm text-muted-foreground mt-3 max-w-2xl">{post.summary}</p></div>
            <Link to={`/news/${post.slug}`} aria-label={`Read ${post.title}`} className="text-accent"><ArrowRight className="h-5 w-5" /></Link>
          </article>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default News;
