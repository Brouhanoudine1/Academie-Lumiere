import { useState } from "react";
import "../styles/Navigation.css";
import { AcademicCapIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="navbar" aria-label="Navigation principale">
        <div className="navbar-logo">
          <a href="#accueil" aria-label="Académie Lumière, accueil">
            <span className="heroicone">
              <AcademicCapIcon aria-hidden="true" />
            </span>
            <span className="navbar-nom">Académie Lumière</span>
          </a>
        </div>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOuvert}
          aria-controls="navigation-menu"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          {menuOuvert ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
        </button>

        <div
          className={`navbar-menu${menuOuvert ? " navbar-menu-ouvert" : ""}`}
          id="navigation-menu"
        >
          <div className="navbar-links">
            <a href="#formations" onClick={() => setMenuOuvert(false)}>Formations</a>
            <a href="#admissions" onClick={() => setMenuOuvert(false)}>Admissions</a>
            <a href="#enseignants" onClick={() => setMenuOuvert(false)}>Enseignants</a>
            <a href="#actualites" onClick={() => setMenuOuvert(false)}>Actualités</a>
          </div>
          <a
            href="#contact"
            className="navbar-button"
            onClick={() => setMenuOuvert(false)}
          >
            Demander des infos
          </a>
        </div>
    </nav>
  );
}
