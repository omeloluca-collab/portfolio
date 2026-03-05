import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Anderson de Luca Melo</Link>

        <nav className={styles.nav}>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#projetos">Projetos</Link>
          <Link to="/#habilidades">Habilidades</Link>
          <Link to="/#contato" className={styles.cta}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}