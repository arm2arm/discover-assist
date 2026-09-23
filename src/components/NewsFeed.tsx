import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { editorialPosts } from "@/content/editorial";
import SectionHeading from "./SectionHeading";

const NewsFeed = () => (
  <section id="news" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading eyebrow="Project journal" title="News and events" description="Dated updates, guidance, events, and stories from across the project." />
        <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-accent mb-14 hover:text-foreground transition-colors">
          View all posts <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 border-y border-border">
        {editorialPosts.map((post) => (
          <article key={post.slug} className="py-8 lg:px-8 first:pl-0 last:pr-0 border-b lg:border-b-0 lg:border-r last:border-0 border-border">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span>{post.category}</span><span aria-hidden="true">·</span>
              <time dateTime={post.date}>{post.displayDate}</time>
            </div>
            <h3 className="font-heading text-xl font-semibold leading-snug text-foreground mt-4">
              <Link to={`/news/${post.slug}`} className="hover:text-accent transition-colors">{post.title}</Link>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mt-3">{post.summary}</p>
            <Link to={`/news/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground mt-6 hover:text-accent transition-colors">
              Read article <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays aria-hidden="true" className="h-4 w-4 text-accent" /> New posts can be added without changing this layout.
      </div>
    </div>
  </section>
);

export default NewsFeed;
