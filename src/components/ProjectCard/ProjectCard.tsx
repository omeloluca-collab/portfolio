import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0];

  return (
    <article className={styles.card}>
      {cover && <img className={styles.cover} src={cover.src} alt={cover.alt} loading="lazy" />}

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.shortDescription}</p>

        <div className={styles.tech}>
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className={styles.badge}>{t}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to={`/projetos/${project.slug}`} className={styles.link}>
            Ver detalhes →
          </Link>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.linkMuted}>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}