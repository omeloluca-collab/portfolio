import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="container" style={{ padding: "30px 0" }}>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para Home</Link>
    </main>
  );
}