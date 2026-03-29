import React, { useEffect, useState } from "react";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import MenuButton from "@/components/buttons/MenuButton";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Timeline", href: "/#timeline", sectionId: "timeline" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
  {
    label: "Resume",
    href: "/resume/resume.pdf",
    sectionId: null,
    external: true,
  },
];

const HeaderContents = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.sectionId)
      .filter((id): id is string => id !== null);

    const observers: IntersectionObserver[] = [];

    // Use a map to track intersection ratios
    const ratioMap: Record<string, number> = {};

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratioMap[id] = entry.intersectionRatio;
          });
          // Pick the section with the highest visibility
          const best = Object.entries(ratioMap).reduce(
            (acc, [key, val]) => (val > acc[1] ? [key, val] : acc),
            ["home", 0] as [string, number],
          );
          if (best[1] > 0) setActiveSection(best[0]);
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "-70px 0px 0px 0px" },
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <div className="flex h-full gap-4">
        {/* Hamburger — mobile only */}
        <div className="my-auto flex h-fit md:hidden">
          <MenuButton />
        </div>
        <div className="my-auto flex h-fit">
          <Link
            href="/"
            rel="noopener noreferrer"
            aria-label="Taylor Hoyt - Home"
          >
            <span className="text-primary-text pb-1 text-center text-3xl font-bold">
              Taylor Hoyt
            </span>
          </Link>
        </div>
        {/* Desktop nav links */}
        <nav
          className="my-auto hidden h-fit md:flex"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.sectionId !== null && activeSection === link.sectionId;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-expressive-blue font-semibold"
                        : "text-primary-text hover:text-expressive-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="my-auto flex h-fit">
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default HeaderContents;
