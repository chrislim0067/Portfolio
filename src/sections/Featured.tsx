import { ProjectsCarousel } from "@/components/projects";
import { SectionCard } from "@/components/SectionCard";

export function Featured() {
  return (
    <SectionCard id="projects" title="Projects">
      <ProjectsCarousel />
    </SectionCard>
  );
}
