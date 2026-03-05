import styles from "./Home.module.css";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { SkillPill } from "../../components/SkillPill/SkillPill";

export function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.h1}>Anderson de Luca Melo — Desenvolvedor Front-end</h1>
          <p className={styles.lead}>
            Portfólio criado para consolidar os projetos do curso, destacando evolução, boas práticas e entregas reais.
          </p>

          <div className={styles.heroActions}>
            <a href="#projetos" className={styles.primaryBtn}>Ver projetos</a>
            <a href="#contato" className={styles.secondaryBtn}>Contato</a>
          </div>
        </div>

        {/* Foto */}
        <div className={styles.photoBox}>
          <img
            src="/profile.jpg"
            alt="Foto de perfil"
            className={styles.photo}
          />
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className={styles.section}>
        <h2>Sobre mim</h2>
        <p className={styles.text}>
          Tenho 25 anos, estudo na EBAC e faço o curso de Full Stack Java, com foco em Back-end. Sou apaixonado por videogames, amo música eletrônica e já produzi algumas músicas eletrônicas utilizando o Ableton. Curto aprender e evoluir constantemente, buscando unir tecnologia, criatividade e dedicação em tudo o que faço..
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className={styles.section}>
        <h2>Projetos</h2>
        <p className={styles.textMuted}>Seleção de projetos desenvolvidos durante o curso.</p>

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section}>
        <h2>Habilidades</h2>
        <div className={styles.skills}>
          {skills.map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className={styles.section}>
        <h2>Contato</h2>
        <p className={styles.textMuted}>
          Você pode me chamar no LinkedIn/GitHub ou enviar uma mensagem por e-mail.
        </p>
                <div className={styles.contactRow}>
          <a href="mailto:seuemail@email.com">omelo.luca@icloud.com</a>
          <a href="https://www.linkedin.com/in/anderson-luca-29aa623a1/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/omeloluca-collab" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  );
}