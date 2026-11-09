import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { EXPERIENCE_KEY, EXPERIENCES } from "../data/site";

const ExperienceContext = createContext(null);

export function ExperienceProvider({ children }) {
  const [experience, setExperienceState] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(EXPERIENCE_KEY);
      if (stored === EXPERIENCES.graphic || stored === EXPERIENCES.interactive) {
        setExperienceState(stored);
        setSelectorOpen(false);
      } else {
        setSelectorOpen(true);
      }
    } catch {
      setSelectorOpen(true);
    }
    setHydrated(true);
  }, []);

  const setExperience = useCallback((next) => {
    if (next !== EXPERIENCES.graphic && next !== EXPERIENCES.interactive) return;
    try {
      window.localStorage.setItem(EXPERIENCE_KEY, next);
    } catch {
      // Ignore persistence failures
    }
    setExperienceState(next);
    setSelectorOpen(false);
  }, []);

  const openSelector = useCallback(() => setSelectorOpen(true), []);
  const closeSelector = useCallback(() => {
    if (experience) setSelectorOpen(false);
  }, [experience]);

  const value = useMemo(
    () => ({
      experience: experience || EXPERIENCES.interactive,
      hasChoice: Boolean(experience),
      hydrated,
      selectorOpen,
      setExperience,
      openSelector,
      closeSelector,
      isGraphic: (experience || EXPERIENCES.interactive) === EXPERIENCES.graphic,
      isInteractive: (experience || EXPERIENCES.interactive) === EXPERIENCES.interactive,
    }),
    [experience, hydrated, selectorOpen, setExperience, openSelector, closeSelector]
  );

  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>;
}

export function useExperience() {
  const ctx = useContext(ExperienceContext);
  if (!ctx) throw new Error("useExperience must be used within ExperienceProvider");
  return ctx;
}
