import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { motion, useReducedMotion } from "motion/react";
import "../styles/Actualites.css";

const articles = [
  {
    id: 1,
    categorie: "Événement",
    date: "14 mars",
    titre: "Journée Portes Ouvertes : découvrez le campus",
    lieu: "Campus principal · 10h–17h",
    image: "/JPOP.jpg",
  },
  {
    id: 2,
    categorie: "Actualité",
    date: "02 mars",
    titre: "Hackathon IA : nos étudiants sur le podium",
    image: "/ACT1.jpg",
  },
  {
    id: 3,
    categorie: "Événement",
    date: "28 mars",
    titre: "Forum des entreprises et de l'alternance",
    image: "/ACT3.jpg",
  },
  {
    id: 4,
    categorie: "Actualité",
    date: "18 fév.",
    titre: "Nouveau partenariat avec un leader du numérique",
    image: "/ACT2.jpg",
  },
];

export default function Actualites() {
  const prefersReducedMotion = useReducedMotion();
  // Le premier article est mis en avant, les suivants vont dans la colonne de droite
  const [vedette, ...autres] = articles;

  return (
    <section className="actualite-container bg-[#f9f6f0] px-6 py-20" id="actualites">
      <div className=" max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-amber-500" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Actualités & événements
          </span>
        </div>

        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-7xl text-slate-900">
          La vie à <em className="text-amber-600">l'Académie</em>
        </h2>
        <p className="mt-4 max-w-xl text-slate-600 text-xl">
          Rencontres, concours, forums : restez au plus près du campus.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Article mis en avant : il prend deux colonnes sur grand écran */}
          <Reveal className="lg:col-span-2">
          <motion.div
            className="group relative min-h-90 overflow-hidden rounded-2xl"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img
              src={vedette.image}
              alt={vedette.titre}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-900">
              {vedette.date}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                {vedette.categorie}
              </span>
              <h3 className="mt-2 font-serif text-3xl leading-snug text-white">
                {vedette.titre}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-200">
                <MapPin size={16} />
                {vedette.lieu}
              </p>
            </div>
          </motion.div>
          </Reveal>

          {/* Colonne de droite : les autres articles */}
          <div className="flex flex-col gap-4">
            {autres.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.08}>
              <motion.div
                className="flex flex-1 gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                whileHover={prefersReducedMotion ? undefined : { x: 5, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <img
                  src={article.image}
                  alt={article.titre}
                  className="h-24 w-24 shrink-0 rounded-xl object-cover"
                />
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    <Calendar size={12} />
                    {article.categorie} · {article.date}
                  </p>
                  <h3 className="mt-1 font-serif text-base leading-snug text-slate-900">
                    {article.titre}
                  </h3>
                  <ArrowRight size={16} className="mt-2 text-slate-500" />
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}