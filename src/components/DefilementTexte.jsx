
import { motion } from 'motion/react';

export default function SmoothMarquee() {
  const items = [
    "Numérique ✦",
    "Business ✦",
    "Création ✦",
    "Santé ✦",
    "Alternance ✦",
    "International ✦"
  ];

  return (
    <div className="overflow-hidden bg-slate-900  text-white">
      {/* Conteneur contraint en largeur avec overflow hidden */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-8 text-7xl font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,          // Durée d'un cycle complet (plus c'est grand, plus c'est lent)
            ease: "linear",        // Vitesse constante
            repeat: Infinity,      // Répétition infinie
          }}
        >
          {/* On duplique le contenu 2 fois pour boucler de 0% à -50% sans trou */}
          {[...items, ...items].map((item, index) => (
            <span key={index} className="flex items-center gap-8">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}