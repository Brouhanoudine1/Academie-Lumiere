
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import Reveal from './Reveal';
import '../styles/statistiques.css';

function Compteur({ valeur, suffixe = '' }) {
    const ref = useRef(null);
    const visible = useInView(ref, { once: true, amount: 0.5 });
    const prefersReducedMotion = useReducedMotion();
    const [compte, setCompte] = useState(0);

    useEffect(() => {
        if (!visible || prefersReducedMotion) {
            return undefined;
        }

        const duree = 1600;
        const debut = performance.now();
        let frameId;

        const animer = (tempsActuel) => {
            const progression = Math.min((tempsActuel - debut) / duree, 1);
            setCompte(Math.floor(progression * valeur));

            if (progression < 1) {
                frameId = requestAnimationFrame(animer);
            }
        };

        frameId = requestAnimationFrame(animer);
        return () => cancelAnimationFrame(frameId);
    }, [prefersReducedMotion, valeur, visible]);

    return (
        <h2 ref={ref} aria-label={`${valeur}${suffixe}`}>
            {prefersReducedMotion ? valeur : compte}{suffixe}
        </h2>
    );
}

export default function Statistiques() {
    const prefersReducedMotion = useReducedMotion();
    const statistiques = [
        { valeur: 94, suffixe: '%' , description: "d'insertions à 6 mois" },
        { valeur: 28, description: 'formations certifiées' },
        { valeur: 120, suffixe: '+', description: 'entreprises partenaires' },
        { valeur: 35, suffixe: ' ans', description: "d'excellences pédagogiques" },
    ];

    return (
        <div className="statistique">
            {statistiques.map(({ valeur, suffixe, description }, index) => (
                <Reveal key={description} delay={index * 0.12}>
                <motion.div
                    className="stat-card"
                    initial={prefersReducedMotion ? false : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.35 }}
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.55, ease: 'easeOut' },
                        },
                    }}
                >
                    <div className="barre"></div>
                    <div className="content">
                        <Compteur valeur={valeur} suffixe={suffixe} />
                        <motion.p
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.45, delay: 0.18 }}
                        >
                            {description}
                        </motion.p>
                    </div>
                </motion.div>
                </Reveal>
            ))}
        </div>
    )
}