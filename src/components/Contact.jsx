import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import fichierFormations from "../formation.json";
import "../styles/Contact.css";

// Le fichier est un objet : la liste est dans la clé "formations"
const formations = fichierFormations.formations;
const donneesVides = {
  nom: "",
  email: "",
  telephone: "",
  formation: "",
  message: "",
  accepte: false,
};

// Classe commune à tous les champs du formulaire
const champ =
  "w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500";

export default function Contact() {
  // Les valeurs saisies dans le formulaire
  const [donnees, setDonnees] = useState(donneesVides);
  // true une fois le formulaire envoyé
  const [envoye, setEnvoye] = useState(false);

  // Une seule fonction pour tous les champs : le "name" de chaque champ sert de clé
  const gererChangement = (e) => {
    const { name, value, type, checked } = e.target;
    setDonnees({
      ...donnees,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const envoyer = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    console.log(donnees); // pour l'instant, les données s'affichent dans la console
    setEnvoye(true);
    setDonnees(donneesVides);
  };

  return (
    <section className="contact-container bg-[#f0e8da] px-6 py-20" id="contact">
      <div className=" grid max-w-6xl gap-20 lg:grid-cols-2">
        {/* Colonne gauche : texte et coordonnées */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Demande d'informations
            </span>
          </div>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-7xl leading-tight text-slate-900">
            Parlons de <em className="text-amber-600">votre projet</em>
          </h2>
          <p className="mt-4 max-w-md text-slate-600 text-xl">
            Laissez-nous vos coordonnées : un conseiller vous répond sous 48 h
            avec la brochure et le calendrier d'admission.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-slate-700">
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Phone size={16} />
              </span>
              90 42 00 14
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Mail size={16} />
              </span>
              contact.brouhanoudine2@gmail.com
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <MapPin size={16} />
              </span>
              Lomé - Togo
            </li>
          </ul>

          <img
            src="/batiment.jpg"
            alt="Bâtiment de l'Académie Lumière"
            className="mt-10 h-56 w-full max-w-md rounded-2xl object-cover grayscale"
          />
        </div>

        {/* Colonne droite : formulaire dans une carte blanche */}
        <div className="min-w-0 rounded-3xl bg-white p-8 shadow-xl">
          {envoye ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <h3 className="font-serif text-3xl text-slate-900">Merci !</h3>
              <p className="mt-2 text-slate-600">
                Votre demande a bien été envoyée. Un conseiller vous répondra
                sous 48 h.
              </p>
              <button
                onClick={() => setEnvoye(false)}
                className="mt-6 text-sm text-amber-600 underline"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={envoyer} className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="nom"
                placeholder="Nom complet *"
                value={donnees.nom}
                onChange={gererChangement}
                required
                className={champ}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={donnees.email}
                onChange={gererChangement}
                required
                className={champ}
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                value={donnees.telephone}
                onChange={gererChangement}
                className={champ}
              />
              <select
                name="formation"
                value={donnees.formation}
                onChange={gererChangement}
                required
                className={champ}
              >
                <option value="">Formation souhaitée *</option>
                {formations.map((formation) => (
                  <option key={formation.id} value={formation.title}>
                    {formation.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Votre message"
                value={donnees.message}
                onChange={gererChangement}
                className={`${champ} sm:col-span-2`}
              />

              <label className="flex items-start gap-2 text-xs text-slate-500 sm:col-span-2">
                <input
                  type="checkbox"
                  name="accepte"
                  checked={donnees.accepte}
                  onChange={gererChangement}
                  required
                  className="mt-0.5"
                />
                J'accepte d'être contacté(e) au sujet de ma demande.
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:col-span-2"
              >
                Envoyer ma demande <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
