import { useState } from "react";
import { site } from "../../../data/site";
import { FadeIn } from "../../animations/Motion";
import ColorWash from "../../fx/ColorWash";
import Magnet from "../../fx/Magnet";
import Button from "../../shared/Button";
import CopyEmailButton from "../../shared/CopyEmailButton";
import SplitText from "../../SplitText";
import { LimeBlob, RedSphere, SquiggleUnderline, YellowRays } from "./GraphicShapes";

export default function GraphicContact() {
  const [status, setStatus] = useState("idle");

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
    <div className="relative overflow-hidden">
      <ColorWash />
      <RedSphere className="pointer-events-none absolute -left-14 top-24 h-44 w-44 opacity-90" />
      <LimeBlob className="pointer-events-none absolute right-8 top-10 h-28 w-28 opacity-90" />
      <YellowRays className="pointer-events-none absolute bottom-24 left-[40%] hidden h-24 w-24 md:block" />

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-8 pt-12 md:px-8 md:pt-20">
        <FadeIn>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Contact · Direct line
          </p>
        </FadeIn>
        <div className="relative max-w-3xl">
          <SplitText
            text={site.contactHeadline}
            tag="h1"
            className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl lg:text-[4.4rem]"
            splitType="chars"
            effect="pop"
            delay={16}
            duration={0.65}
            accentColor="#FF5A3C"
            textAlign="left"
          />
          <SquiggleUnderline color="#FF5A3C" className="relative mt-2 h-4 w-36" />
        </div>
        <FadeIn delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.contactSupporting}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnet>
              <Button href={`mailto:${site.email}`} external className="!uppercase !tracking-[0.08em]">
                {site.email}
              </Button>
            </Magnet>
            <Magnet strength={16}>
              <CopyEmailButton className="!uppercase !tracking-[0.08em]" />
            </Magnet>
            <Magnet strength={16}>
              <Button href={site.social.linkedin} external variant="pill">
                LinkedIn ↗
              </Button>
            </Magnet>
            <Magnet strength={16}>
              <Button href={site.social.github} external variant="pill">
                GitHub ↗
              </Button>
            </Magnet>
          </div>
        </FadeIn>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-lift md:p-10">
              <span className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,90,60,0.5),transparent_70%)]" />
              <span className="absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(200,240,0,0.4),transparent_70%)]" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
                Poster note
              </p>
              <h2 className="relative mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Let&apos;s make something useful.
              </h2>
              <p className="relative mt-4 text-sm leading-relaxed text-white/70">
                Prefer email? Use the form. It opens your mail client with everything filled in. No
                backend, no waiting room.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {["Products", "AI", "Systems", "Ideas"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="relative rotate-[-0.6deg] rounded-[2rem] border border-black/10 bg-white p-6 shadow-lift md:p-8"
            >
              <span className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-coral" />
              <label className="block text-sm font-bold uppercase tracking-[0.08em]">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none ring-coral focus:ring-2"
                />
              </label>
              <label className="mt-4 block text-sm font-bold uppercase tracking-[0.08em]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none ring-coral focus:ring-2"
                />
              </label>
              <label className="mt-4 block text-sm font-bold uppercase tracking-[0.08em]">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none ring-coral focus:ring-2"
                />
              </label>
              <Magnet className="mt-6 block w-full">
                <Button type="submit" className="w-full !uppercase !tracking-[0.1em]">
                  Send message ↗
                </Button>
              </Magnet>
              {status === "sent" && (
                <p className="mt-3 text-sm text-ink-muted">
                  Opening your email client. If nothing appears, email me directly at {site.email}.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
