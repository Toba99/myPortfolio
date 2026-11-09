import Link from "next/link";
import { cn } from "../../lib/cn";

export default function ArrowLink({ href, children, className, external = false }) {
  const classes = cn(
    "group inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition hover:opacity-70",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classes}>{content}</a>
    </Link>
  );
}
