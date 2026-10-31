import { useState } from "react";
import { Clock, Briefcase } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import "../styles/formations.css";
import donneesFormations from "../formation.json";

export default function Formations() {
  const prefersReducedMotion = useReducedMotion();
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("Tout");
  const formationsFiltrees =
    categorieSelectionnee === "Tout"
      ? donneesFormations.formations
      : donneesFormations.formations.filter(
          (formation) => formation.category === categorieSelectionnee,
        );

  return (
    <section className="formations" id="formations">
      <header className="formations-header">
        <div className="title">
          <div className="barre-title"></div>
          <h2>Formations</h2>
        </div>
        <h3>
          Un parcours pensé pour <i><span>votre avenir</span></i>
        </h3>
        <p className="formations-intro">
          Des diplômes reconnus, construits avec les professionnels de chaque
          secteur.
        </p>
      </header>

      <div className="formation-categories" aria-label="Catégories de formation">
        <button
          className={`formation-category${categorieSelectionnee === "Tout" ? " active" : ""}`}
          type="button"
          aria-pressed={categorieSelectionnee === "Tout"}
          onClick={() => setCategorieSelectionnee("Tout")}
        >
          Tout
        </button>
        {donneesFormations.categories.map((categorie) => (
          <button
            className={`formation-category${categorieSelectionnee === categorie ? " active" : ""}`}
            type="button"
            key={categorie}
            aria-pressed={categorieSelectionnee === categorie}
            onClick={() => setCategorieSelectionnee(categorie)}
          >
            {categorie}
          </button>
        ))}
      </div>

      <div className="formation-grid">
        <AnimatePresence mode="popLayout">
          {formationsFiltrees.map((formation, index) => (
          <motion.article
            className="formation-card"
            key={formation.id}
            layout={!prefersReducedMotion}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.015 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
          >
            <figure className="formation-visual">
              <img src={formation.image} alt={`${formation.title} - ${formation.category}`} loading="lazy" />
              <span className="formation-badge formation-badge-category">
                {formation.category}
              </span>
              <span className="formation-badge formation-badge-level">
                {formation.level}
              </span>
            </figure>

            <div className="formation-info">
              <h4>{formation.title}</h4>
              <p>{formation.description}</p>
              <div className="formation-meta">
                <span><Clock size={16} aria-hidden="true" />{formation.duration}</span>
                <span><Briefcase size={16} aria-hidden="true" />{formation.rhythm}</span>
              </div>
            </div>
          </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
