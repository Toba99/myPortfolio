import Image from "next/image";
import { useState } from "react";
import { getProject } from "../../../data/projects";

/** Project previews: real website screenshots, with illustrated fallbacks */

export function PiggyVestVisual({ compact = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#6B8CFF] via-[#4F7CFF] to-[#3A5FE0] ${
        compact ? "h-full" : "h-full min-h-[180px]"
      }`}
    >
      <div className="absolute inset-3 rounded-2xl bg-white/95 p-3 shadow-soft">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-[#4F7CFF]/30" />
          <div className="h-5 w-5 rounded-full bg-[#4F7CFF]/20" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">Onboarding</p>
        <p className="text-lg font-bold text-ink">KYC · Verified</p>
        <p className="mt-1 text-[11px] font-semibold text-leaf">−20% time to complete</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["ID", "Docs", "AML"].map((label) => (
            <div
              key={label}
              className="rounded-xl bg-[#E8EEFF] px-1 py-2 text-center text-[9px] font-semibold text-[#4F7CFF]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KoplioVisual() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#2A2A2A] via-[#141414] to-[#0C0C0C]">
      <div className="absolute inset-3 rounded-2xl border border-white/10 bg-white/5 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">Identity</p>
        <p className="mt-2 text-sm font-bold text-white">Verification pipeline</p>
        <div className="mt-4 space-y-2">
          {["Document check", "Identity match", "Risk signals"].map((step, index) => (
            <div
              key={step}
              className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-[11px] text-white/85"
            >
              <span>{step}</span>
              <span className="rounded-full bg-lime/90 px-2 py-0.5 text-[9px] font-bold text-ink">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiverpoolVisual() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#E8A0AB] via-[#C8102E] to-[#8E0B20]">
      <div className="absolute inset-3 rounded-2xl bg-white/95 p-3 shadow-soft">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C8102E]">
          Digital Coach
        </p>
        <p className="mt-1 text-sm font-bold text-ink">Systems · Training · Change</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["M365", "Jira", "OBS", "Agile"].map((label) => (
            <div
              key={label}
              className="rounded-xl bg-[#F8E8EB] px-2 py-2 text-center text-[10px] font-semibold text-[#C8102E]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CarrotIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F27A2C] text-white shadow-card">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
        <path d="M16 4c2 3 3 5 2 7" stroke="#7AC943" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 5c1.5 2.5 1.2 4.5 0 6" stroke="#7AC943" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M12 11c4 1 8 5 10 11-6 1-11-1-13-6-1-2.5 0-4.5 3-5z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function BesaIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7B5CFF] text-white shadow-card">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M16 27s-9-5.8-9-12.2C7 10.5 10 8 13 8c1.7 0 3.1.9 3 2.4C16.1 8.9 17.5 8 19.2 8 22.2 8 25 10.5 25 14.8 25 21.2 16 27 16 27z" />
        <rect x="14.5" y="12" width="3" height="8" rx="1" fill="white" />
        <rect x="12" y="14.5" width="8" height="3" rx="1" fill="white" />
      </svg>
    </div>
  );
}

export function LiverpoolIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8102E] text-white shadow-card">
      <span className="font-display text-lg font-extrabold">UoL</span>
    </div>
  );
}

export function GroupTherapyVisual() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden rounded-[1.25rem] bg-[#1A1A1A]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,90,60,0.45), transparent 45%), linear-gradient(160deg, #2a2a2a, #111)",
        }}
      />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/50 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-coral">Group Therapy</p>
        <p className="mt-1 text-sm font-bold text-white">Night Session · Ticket</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/80">
            GA · Admit
          </span>
          <span className="h-8 w-8 rounded-lg bg-white/90" />
        </div>
      </div>
      <div className="absolute right-5 top-5 rotate-12 rounded-xl bg-coral px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white shadow-lift">
        Admit one
      </div>
    </div>
  );
}

export function SaladVisual() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#3CB56F] via-[#2F9E5B] to-[#217A45]">
      <div className="absolute inset-3 rounded-2xl bg-[#F3FBF6] p-3">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf text-xs font-bold text-white">
            S
          </span>
          <div className="h-2 w-20 rounded-full bg-leaf/25" />
        </div>
        <div className="space-y-2">
          <div className="rounded-xl bg-white p-2 shadow-sm">
            <div className="h-1.5 w-[75%] rounded-full bg-black/10" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-black/10" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 rounded-xl bg-white p-2 shadow-sm">
              <div className="mb-1 text-[9px] font-semibold text-leaf">AI</div>
              <div className="h-1.5 w-full rounded-full bg-leaf/20" />
            </div>
            <div className="flex-1 rounded-xl bg-white p-2 shadow-sm">
              <div className="mb-1 text-[9px] font-semibold text-ink-soft">Team</div>
              <div className="flex -space-x-1">
                <span className="h-4 w-4 rounded-full bg-[#F5C542]" />
                <span className="h-4 w-4 rounded-full bg-sky" />
                <span className="h-4 w-4 rounded-full bg-coral" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GroupTherapyIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A1A1A] text-white shadow-card">
      <span className="font-display text-sm font-extrabold tracking-tight text-coral">GT</span>
    </div>
  );
}

export function SaladIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf text-white shadow-card">
      <span className="font-display text-lg font-extrabold">S</span>
    </div>
  );
}

function IllustratedVisual({ slug }) {
  if (slug === "piggyvest" || slug === "piggyvest-business") return <PiggyVestVisual />;
  if (slug === "koplio") return <KoplioVisual />;
  if (slug === "liverpool-digital") return <LiverpoolVisual />;
  if (slug === "group-therapy") return <GroupTherapyVisual />;
  if (slug === "salad-ink") return <SaladVisual />;
  return (
    <div
      className="h-full min-h-[180px] rounded-[1.25rem]"
      style={{ background: "linear-gradient(145deg, #ddd, #fff)" }}
    />
  );
}

/**
 * Real website preview for a project (fills its parent). Falls back to the
 * illustrated visual if the screenshot is missing or fails to load.
 */
export function ProjectVisual({ slug, sizes = "(min-width: 768px) 33vw, 100vw", priority = false }) {
  const project = getProject(slug);
  const [failed, setFailed] = useState(false);

  if (!project?.image || failed) return <IllustratedVisual slug={slug} />;

  return (
    <div className="relative h-full w-full" style={{ background: project.surface }}>
      <Image
        src={project.image}
        alt={`${project.title} website preview`}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

/** Browser-window frame around the preview, linking to the live site. */
export function ProjectShot({ project, priority = false, className = "" }) {
  const domain = project.website
    ? project.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
    : null;

  return (
    <figure
      className={`overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-lift ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-black/5 bg-ash px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        </span>
        {domain && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto min-w-0 max-w-sm flex-1 truncate rounded-full bg-white px-3 py-1 text-center text-[11px] font-medium text-ink-muted transition hover:text-ink"
          >
            {domain} ↗
          </a>
        )}
        <span className="w-10 shrink-0" aria-hidden />
      </div>
      <div className="relative aspect-[16/10]">
        <ProjectVisual
          slug={project.slug}
          priority={priority}
          sizes="(min-width: 1024px) 900px, 100vw"
        />
      </div>
    </figure>
  );
}
