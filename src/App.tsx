import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToHash } from "./components/ScrollToHash";
import { Home } from "./pages/Home/Home";
import { ProjectPage } from "./pages/Project/Project";
import { NotFound } from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}