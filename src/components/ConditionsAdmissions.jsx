import { useState } from "react";
import { Plus } from "lucide-react";

const conditions = [
  {
    id: 1,
    titre: "Niveau requis",
    contenu: "Baccalauréat ou équivalent. Une mise à niveau est possible sur dossier.",
  },
  {
    id: 2,
    titre: "Pièces du dossier",
    contenu: "Relevés de notes, copie du diplôme, CV, lettre de motivation et pièce d'identité.",
  },
  {
    id: 3,
    titre: "Frais de scolarité",
    contenu: "Les tarifs annuels sont communiqués lors de l'entretien, avec des options de paiement échelonné.",
  },
  {
    id: 4,
    titre: "Calendrier",
    contenu: "Les candidatures sont ouvertes de janvier à juin. La rentrée a lieu en septembre.",
  },
];

export default function ConditionsAdmission() {
  // Mémorise l'identifiant de l'élément ouvert. null = aucun élément ouvert.
  const [ouvert, setOuvert] = useState(null);

  const basculer = (id) => {
    // Si on clique sur l'élément déjà ouvert, on le ferme. Sinon, on ouvre le nouveau.
    setOuvert(ouvert === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-700 bg-slate-800/60 p-8">
      <h2 className="border-b border-slate-700 pb-4 font-serif text-3xl text-white">
        Conditions d'admission
      </h2>

      {conditions.map((condition) => {
        const estOuvert = ouvert === condition.id;

        return (
          <div key={condition.id} className="border-b border-slate-700 last:border-b-0">
            <button
              onClick={() => basculer(condition.id)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="text-xl font-semibold text-white">{condition.titre}</span>
              <Plus
                size={24}
                className={`text-amber-400 transition-transform duration-300 ${
                  estOuvert ? "rotate-45" : ""
                }`}
              />
            </button>

            {estOuvert && (
              <p className="pb-5 text-slate-400">{condition.contenu}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}