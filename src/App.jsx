import PageAccueil from "./pages/PageAccueil";
import Statistiques from "./components/Statistiques";
import Formations from "./components/Formations";
import Admissions from "./components/Admissions";
import Enseignant from "./components/Enseignants";
import Actualites from "./components/Actualites";
import Contact from "./components/Contact";
import PiedPages from "./pages/PiedPages";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Reveal><PageAccueil /></Reveal>
      <Reveal delay={0.05}><Statistiques /></Reveal>
      <Reveal><Formations /></Reveal>
      <Reveal><Admissions /></Reveal>
      <Reveal><Enseignant /></Reveal>
      <Reveal><Actualites /></Reveal>
      <Reveal><Contact /></Reveal>
      <Reveal><PiedPages /></Reveal>
    </div>
  );
}
