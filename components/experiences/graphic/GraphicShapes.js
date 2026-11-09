import { cn } from "../../../lib/cn";

export function RedSphere({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        "rounded-full bg-[radial-gradient(circle_at_30%_28%,#ff8a74_0%,#ff5a3c_42%,#d63a22_100%)] shadow-[inset_-18px_-22px_40px_rgba(0,0,0,0.18)]",
        className
      )}
    />
  );
}

export function LimeBlob({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-lime shadow-[inset_-12px_-16px_30px_rgba(0,0,0,0.12)]",
        className
      )}
      style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
    />
  );
}

export function YellowRays({ className }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={cn("text-[#F5C542]", className)}>
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x="54"
          y="8"
          width="12"
          height="40"
          rx="6"
          fill="currentColor"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="14" fill="currentColor" />
    </svg>
  );
}

export function BlueTorus({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        "rounded-full border-[18px] border-sky shadow-[inset_0_0_0_4px_rgba(255,255,255,0.15)]",
        className
      )}
    />
  );
}

export function GreenAsterisk({ className }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={cn("text-lime", className)}>
      <g fill="currentColor">
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <rect
            key={deg}
            x="88"
            y="18"
            width="24"
            height="164"
            rx="12"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function SquiggleUnderline({ className, color = "currentColor" }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute left-0 right-0 -bottom-2 h-3 w-full", className)}
      viewBox="0 0 160 14"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 9C18 3 34 2 50 6C66 10 82 13 98 8C114 3 130 2 158 7"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M6 11C24 6 42 5 58 8C74 11 92 12 108 9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
