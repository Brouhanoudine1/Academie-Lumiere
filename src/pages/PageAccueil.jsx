import Navigation from "../components/Navigation";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import "../styles/PageAccueil.css";
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform } from "motion/react";
import SmoothMarquee from "../components/DefilementTexte";
import { useRef } from "react";

export default function PageAccueil() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 80],
  );

  const heroVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };
  const heroItemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="page-accueil" id="accueil" ref={heroRef}>
      <motion.div
        className="accueil-background"
        style={{ y: backgroundY }}
        aria-hidden="true"
      />
      <Navigation />
      <motion.div
        className="accueil-content"
        variants={heroVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? undefined : "visible"}
      >
        <motion.div variants={heroItemVariants} className="parent-cligne flex gap-2 items-center justify-center border-2 border-white rounded-2xl p-4">
          <div className="point-clignotant"></div>
          <p className="text-white text-lg font-bold">
            Inscriptions ouvertes : Rentrée Novembre
          </p>
        </motion.div>
        <motion.div variants={heroItemVariants} className="titre">
          <h2 className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold">
            Rélévez le{" "}
            <i>
              <span className="text-yellow-400">talent</span>
            </i>{" "}
            qui est en <br /> vous.
          </h2>
        </motion.div>
        <motion.div variants={heroItemVariants} className="texte">
          <p className="text-white text-sm font-bold">
            Une école à taille humaine où la pédagogie par projet, des
            enseignants professionnels et un réseau d'entreprises ouvrent la
            voie vers un métier qui vous ressemble.
          </p>
        </motion.div>
        <motion.div variants={heroItemVariants} className="accueil-actions flex items-center justify-start mt-8 gap-4">
          <motion.div
            className="accueil-action bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 h-13 rounded-2xl flex items-center justify-center gap-3"
            whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            <a href="#formations">Découvrir les formations</a>
            <ArrowRightIcon className="h-5 w-5 ml-2 arrow-icone" />
          </motion.div>
          <motion.div
            className="accueil-action bg-transparent border-2 border-white text-white font-bold py-2 px-4 h-13 rounded-2xl flex items-center justify-center gap-3"
            whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            <a href="#contact">Être rappelé</a>
            <ArrowRightIcon className="h-5 w-5 ml-2 arrow-icone" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="defilement-texte">
        <MotionConfig reducedMotion="user">
          <SmoothMarquee />
        </MotionConfig>
      </div>
    </div>
  );
}
