import Link from "next/link";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-ink text-white hover:bg-black shadow-soft",
  secondary:
    "bg-transparent text-ink underline underline-offset-4 decoration-black/30 hover:decoration-black",
  pill:
    "bg-white text-ink border border-black/10 hover:border-black/30",
  lime:
    "bg-lime text-ink hover:bg-lime-deep",
};

export default function Button({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  onClick,
  type = "button",
}) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition",
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a className={classes} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
