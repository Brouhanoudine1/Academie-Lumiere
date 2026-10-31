import "../styles/Enseignants.css";
import Reveal from "./Reveal";
import { motion, useReducedMotion } from "motion/react";

const enseignants = [
  {
    id: 1,
    nom: "Sophie Lambert",
    specialite: "Directrice du pôle Numérique",
    description:
      "Ingénieure logicielle, elle dirige les formations en développement web et mobile.",
    image: "/ENS2.jpg",
  },
  {
    id: 2,
    nom: "Marc Delorme",
    specialite: "Responsable Business & Management",
    description:
      "Ancien entrepreneur, il enseigne la stratégie et la gestion de projet.",
    image: "/ENS1.jpg",
  },
  {
    id: 3,
    nom: "Claire Moreau",
    specialite: "Enseignante Design & UX",
    description:
      "Designer d'interfaces, elle forme les étudiants à la conception centrée utilisateur.",
    image: "/ENS3.jpg",
  },
  {
    id: 4,
    nom: "Henri Vasseur",
    specialite: "Docteur en mathématiques appliquées",
    description:
      "Chercheur en modélisation, il accompagne les étudiants en analyse de données.",
    image: "/ENS4.jpg",
  },
];

export default function Enseignant() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="enseignant-container" id="enseignants">
      <section className="">
        <div className=" max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Nos enseignants
            </span>
          </div>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-7xl leading-tight text-slate-900">
            Des professionnels qui{" "}
            <em className="text-amber-600">transmettent</em>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 text-xl">
            Praticiens, chercheurs et entrepreneurs : ils enseignent ce qu'ils
            vivent au quotidien.
          </p>

          <div className="card mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {enseignants.map((enseignant, index) => (
              <Reveal key={enseignant.id} delay={index * 0.1}>
              <motion.div
                className="group relative h-80 overflow-hidden rounded-2xl"
                whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {/* Photo : elle zoome légèrement au survol */}
                <img
                  src={enseignant.image}
                  alt={enseignant.nom}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Dégradé sombre en bas pour lire le texte */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                {/* Texte en bas de la carte */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-white">
                    {enseignant.nom}
                  </h3>

                  {/* Caché par défaut, il apparaît au survol */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-amber-400">
                      {enseignant.specialite}
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      {enseignant.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
