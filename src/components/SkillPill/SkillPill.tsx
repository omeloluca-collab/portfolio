import styles from "./SkillPill.module.css";

export function SkillPill({ label }: { label: string }) {
  return <span className={styles.pill}>{label}</span>;
}