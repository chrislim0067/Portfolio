import { SectionCard } from "@/components/SectionCard";
import { skillGroups } from "@/data";

export function Skills() {
  return (
    <SectionCard id="skills" title="Skills">
      <div className="skills-layout">
        {skillGroups.map((group, index) => (
          <section
            key={group.id}
            className={`skills-group${index > 0 ? " skills-group--bordered" : ""}`}
            aria-labelledby={`skills-${group.id}`}
          >
            <h3 id={`skills-${group.id}`} className="skills-group-label">
              {group.label}
            </h3>
            <ul className="skills-group-list">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="skills-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SectionCard>
  );
}
