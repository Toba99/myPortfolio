import { useState } from "react";
import { site } from "../../../data/site";
import { scatterChips } from "../../../lib/scatter";
import { FadeIn } from "../../animations/Motion";
import DotField from "../../fx/DotField";
import Draggable from "../../fx/Draggable";
import Playfield from "../../fx/Playfield";
import Magnet from "../../fx/Magnet";
import Tilt from "../../fx/Tilt";
import TextPressure from "../../fx/TextPressure";
import Button from "../../shared/Button";
import CopyEmailButton from "../../shared/CopyEmailButton";

const floaters = [
  { label: "Email", href: `mailto:${site.email}`, className: "bg-lime text-ink" },
  { label: "LinkedIn", href: site.social.linkedin, className: "bg-ink text-white" },
  { label: "GitHub", href: site.social.github, className: "bg-white text-ink border border-black/10" },
  { label: "X / Twitter", href: site.social.x, className: "bg-[#EAF8A8] text-ink" },
];

const channelPos = scatterChips(floaters.length, { cols: 2, maxRotate: 5, jitter: 0.4 });

export default function InteractiveContact() {
  const [status, setStatus] = useState("idle");
  const [resetKey, setResetKey] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio note from ${name || "someone"}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <div className="relative overflow-hidden bg-interactive-glow">
      <DotField />

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-6 pt-12 md:px-8 md:pt-20">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Contact · Interactive
          </p>
        </FadeIn>
        <TextPressure
          text={site.contactHeadline}
          className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl"
        />
        <FadeIn delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.contactSupporting} Drag the channels into place, then leave a note.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-3">
            <Magnet>
              <Button href={`mailto:${site.email}`} external>
                {site.email}
              </Button>
            </Magnet>
            <Magnet strength={16}>
              <CopyEmailButton />
            </Magnet>
          </div>
        </FadeIn>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex min-h-0 flex-col">
            <div className="mb-3 flex justify-end md:justify-start">
              <Magnet>
                <button
                  type="button"
                  onClick={() => setResetKey((n) => n + 1)}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-ash"
                >
                  Reset channels
                </button>
              </Magnet>
            </div>
            <Playfield
              key={resetKey}
              className="min-h-[320px] flex-1 overflow-hidden rounded-[2rem] border border-dashed border-black/15 bg-white/60 p-6 md:min-h-[420px]"
              hint="Drag contact channels"
            >
              {(constraints) =>
                floaters.map((item, index) => (
                  <Draggable
                    key={item.label}
                    dragConstraints={constraints}
                    className={`absolute rounded-full px-5 py-3 text-sm font-semibold shadow-card ${item.className}`}
                    style={{
                      left: channelPos[index].left,
                      top: channelPos[index].top,
                      rotate: channelPos[index].rotate,
                    }}
                  >
                    <a href={item.href} target="_blank" rel="noreferrer" className="block">
                      {item.label} ↗
                    </a>
                  </Draggable>
                ))
              }
            </Playfield>
          </div>

          <FadeIn className="h-full">
            <Tilt className="h-full overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-lift md:p-8">
              <form onSubmit={onSubmit} className="flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  Leave a message
                </p>
                <label className="mt-5 block text-sm font-semibold">
                  Name
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-ash px-4 py-3 text-sm outline-none ring-lime focus:ring-2"
                  />
                </label>
                <label className="mt-4 block text-sm font-semibold">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-ash px-4 py-3 text-sm outline-none ring-lime focus:ring-2"
                  />
                </label>
                <label className="mt-4 block flex-1 text-sm font-semibold">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-2xl border border-black/10 bg-ash px-4 py-3 text-sm outline-none ring-lime focus:ring-2 md:min-h-[140px]"
                  />
                </label>
                <Magnet className="mt-6 block w-full">
                  <Button type="submit" className="w-full">
                    Send message ↗
                  </Button>
                </Magnet>
                {status === "sent" && (
                  <p className="mt-3 text-sm text-ink-muted">
                    Opening your email client. If nothing appears, email me directly at {site.email}.
                  </p>
                )}
              </form>
            </Tilt>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
