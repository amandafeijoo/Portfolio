import React, { useContext, useMemo } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { ShowcaseWrap, ShowcaseGrid } from "./styles/SelectedWork.styles";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

export default function SelectedWorkSection() {
  const { projectList } = useContext(ProjectContext);

  const { hero, featured, concept } = useMemo(() => {
    const hero =
      projectList.find((p) => p.variant === "hero") || projectList[0];
    const featured = projectList
      .filter((p) => p.variant === "featured")
      .slice(0, 2);
    const concept =
      projectList.find((p) => p.variant === "concept") ||
      projectList[projectList.length - 1];

    return { hero, featured, concept };
  }, [projectList]);

  return (
    <ShowcaseWrap>
      <ShowcaseGrid>
        {/* HERO */}
        {hero && <ProjectShowcaseCard project={hero} variant="hero" />}

        {/* FEATURED */}
        {featured.map((p) => (
          <ProjectShowcaseCard
            key={p.id}
            project={p}
            variant="featured"
          />
        ))}

        {/* CONCEPT */}
        {concept && (
          <ProjectShowcaseCard project={concept} variant="concept" />
        )}
      </ShowcaseGrid>
    </ShowcaseWrap>
  );
}
