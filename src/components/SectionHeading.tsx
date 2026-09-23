type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="max-w-3xl mb-10 md:mb-14">
    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{eyebrow}</p>
    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">{title}</h2>
    {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
