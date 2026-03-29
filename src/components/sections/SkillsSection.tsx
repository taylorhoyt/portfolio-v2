import React from "react";

interface Skill {
  label: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { label: "React", icon: "⚛️" },
      { label: "Next.js", icon: "▲" },
      { label: "TypeScript", icon: "TS" },
      { label: "JavaScript", icon: "JS" },
      { label: "Tailwind CSS", icon: "🎨" },
      { label: "HTML / CSS", icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "Spring Boot", icon: "🍃" },
      { label: "Node.js", icon: "🟩" },
      { label: "REST APIs", icon: "🔌" },
      { label: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { label: "Cypress", icon: "🧪" },
      { label: "Git / GitHub", icon: "🐙" },
      { label: "Web3 / Solidity", icon: "⛓️" },
      { label: "NVIDIA Omniverse", icon: "🎮" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-16">
      <div className="mx-auto flex w-[1200px] max-w-[90vw] flex-col gap-10">
        <div className="flex flex-row justify-center">
          <h2 className="text-primary-text text-center text-6xl font-bold">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="flex flex-col gap-4">
              <h3 className="text-primary-text border-b-secondary-background border-b pb-2 text-xl font-bold">
                {cat.category}
              </h3>
              <ul
                className="flex flex-wrap gap-3"
                aria-label={`${cat.category} skills`}
              >
                {cat.skills.map((skill) => (
                  <li
                    key={skill.label}
                    className="bg-secondary-background text-primary-text flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-shadow duration-200 hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-base leading-none">
                      {skill.icon}
                    </span>
                    <span>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
