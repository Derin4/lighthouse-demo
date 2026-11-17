export default function SectionHead({
  eyebrow,
  title,
  text,
  className = "",
  center = false,
  light = false,
}) {
  return (
    <div
      className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-accent-deep"} ${center ? "justify-center" : ""}`}
        >
          <span
            className={`h-px w-8 ${light ? "bg-gold" : "bg-accent"}`}
            aria-hidden='true'
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${light ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-3 font-body ${light ? "text-paper/70" : "text-muted"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
