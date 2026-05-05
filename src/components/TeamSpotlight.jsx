import { ArrowRight } from 'lucide-react';

export default function TeamSpotlight({
  name,
  role,
  imageSrc,
  initials,
  photoPosition,
  personalParagraph,
  accentPills,
  neutralPills,
  actionLink,
}) {
  const isPhotoRight = photoPosition === 'right';

  const photoEl = (
    <div className="rounded-lg overflow-hidden h-[200px] md:h-[280px]">
      {imageSrc ? (
        <img src={imageSrc} alt={name} className="object-cover w-full h-full" />
      ) : (
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <span className="font-display text-3xl text-primary">{initials}</span>
        </div>
      )}
    </div>
  );

  const contentEl = (
    <div className="flex flex-col justify-center">
      <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{name}</h3>
      <p className="text-foreground/70 text-base mb-4">{role}</p>
      <blockquote className="font-serif italic text-foreground/80 border-l-2 border-primary pl-4 leading-relaxed mb-5">
        {personalParagraph}
      </blockquote>
      <div className="flex flex-wrap gap-2 mb-4">
        {accentPills.map((pill) => (
          <span
            key={pill}
            className="text-xs font-display uppercase tracking-wide px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {pill}
          </span>
        ))}
        {neutralPills.map((pill) => (
          <span
            key={pill}
            className="text-xs font-display uppercase tracking-wide px-3 py-1 rounded-full bg-secondary text-foreground/60 border border-border"
          >
            {pill}
          </span>
        ))}
      </div>
      {actionLink.href ? (
        <a
          href={actionLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-fit"
        >
          {actionLink.text} <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <p className="font-serif italic text-foreground/50 text-sm">{actionLink.text}</p>
      )}
    </div>
  );

  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8">
      {/* Mobile: stack vertically, photo on top */}
      <div className="flex flex-col gap-6 md:hidden">
        {photoEl}
        {contentEl}
      </div>
      {/* Desktop: zigzag grid */}
      <div
        className={`hidden md:grid gap-8 items-center ${
          isPhotoRight ? 'grid-cols-[1fr_38%]' : 'grid-cols-[38%_1fr]'
        }`}
      >
        {isPhotoRight ? (
          <>
            {contentEl}
            {photoEl}
          </>
        ) : (
          <>
            {photoEl}
            {contentEl}
          </>
        )}
      </div>
    </div>
  );
}
