import donneesEtapes from "../etapes.json";
import Reveal from "./Reveal";
import { motion, useReducedMotion } from "motion/react";

export default function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="timeline-container bg-slate-900 p-4 sm:p-8 lg:p-10">
      {donneesEtapes.etapes.map((etape, index) => {
        // index commence à 0, donc on ajoute 1 : 0 devient "01"
        const numero = String(index + 1).padStart(2, "0");
        const estDerniere = index === donneesEtapes.etapes.length - 1;

        return (
          <Reveal key={etape.id} delay={index * 0.1}>
          <div className="timeline-etape relative flex gap-4 sm:gap-8 pb-10">
            {/* Ligne verticale : absente après la dernière étape */}
            {!estDerniere && (
              <motion.div
                className="absolute left-7 top-14 bottom-0 w-px bg-amber-400"
                initial={prefersReducedMotion ? false : { scaleY: 0 }}
                whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            )}

            {/* Cercle avec le numéro */}
            <motion.div
              className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-amber-400 bg-slate-900 font-serif text-xl text-amber-400"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.08, backgroundColor: "#1d2b43" }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              {numero}
            </motion.div>

            {/* Titre et description */}
            <div className="pt-3">
              <h3 className="font-serif text-2xl text-white">{etape.titre}</h3>
              <p className="mt-2 text-lg text-slate-400">{etape.description}</p>
            </div>
          </div>
          </Reveal>
        );
      })}
    </div>
  );
}