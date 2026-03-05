import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          © {new Date().getFullYear()} — Feito com React
        </p>
      </div>
    </footer>
  );
}