import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import styles from "./Project.module.css";

export function ProjectPage() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <main className="container">
        <h1>Projeto não encontrado</h1>
        <Link to="/#projetos">Voltar</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <div className={styles.top}>
        <div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.desc}>{project.longDescription}</p>

          <div className={styles.tech}>
            {project.technologies.map((t) => (
              <span key={t} className={styles.badge}>{t}</span>
            ))}
          </div>

          <div className={styles.links}>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">Repositório</a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo</a>
            )}
            <Link to="/#projetos">← Voltar para projetos</Link>
          </div>
        </div>
      </div>

      <section className={styles.gallery}>
        {project.images.map((img) => (
          <figure key={img.src} className={styles.figure}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <figcaption>{img.alt}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}