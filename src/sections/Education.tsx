import { EntityLogo } from "@/components/EntityLogo";
import { SectionCard } from "@/components/SectionCard";
import { education, schoolLogos } from "@/data";

export function Education() {
  return (
    <SectionCard id="education" title="Education">
      <ul>
        {education.map((edu) => (
          <li key={edu.id} className="li-list-item">
            <div className="flex gap-3">
              <EntityLogo
                name={edu.school}
                logos={schoolLogos}
                imageClassName="object-contain p-0.5"
              />
              <div>
                <h3 className="text-base font-semibold li-text">
                  {edu.school}
                </h3>
                <p className="text-sm li-text">{edu.degree}</p>
                {edu.field && (
                  <p className="text-sm li-text-muted">{edu.field}</p>
                )}
                <p className="text-sm li-text-muted">{edu.duration}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
