import { ArrowUp, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import "../styles/PiedPages.css";

const liensNavigation = [
  { href: "#formations", label: "Nos formations" },
  { href: "#admissions", label: "Admissions" },
  { href: "#enseignants", label: "Nos enseignants" },
  { href: "#actualites", label: "Actualités" },
  { href: "#contact", label: "Nous contacter" },
];

export default function PiedPages() {
  return (
    <footer className="pied-page">
      <div className="pied-page-contenu">
        <div className="pied-page-identite">
          <a className="pied-page-logo" href="#accueil" aria-label="Académie Lumière, accueil">
            <span className="pied-page-icone">
              <GraduationCap size={24} aria-hidden="true" />
            </span>
            <span>Académie Lumière</span>
          </a>
          <p>
            Révélez votre talent et construisez un avenir qui vous ressemble.
          </p>
        </div>

        <nav className="pied-page-navigation" aria-label="Navigation de pied de page">
          <h2>Explorer</h2>
          <ul>
            {liensNavigation.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href}>{lien.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="pied-page-coordonnees">
          <h2>Nous contacter</h2>
          <a href="tel:+90240014">
            <Phone size={17} aria-hidden="true" />
            <span>90 42 00 14</span>
          </a>
          <a href="mailto:contact.brouhanoudine2@gmail.com">
            <Mail size={17} aria-hidden="true" />
            <span>contact.brouhanoudine2@gmail.com</span>
          </a>
          <p>
            <MapPin size={17} aria-hidden="true" />
            <span>Lomé - Togo</span>
          </p>
        </address>
      </div>

      <div className="pied-page-bas">
        <p>© {new Date().getFullYear()} Académie Lumière. Tous droits réservés.</p>
        <a className="pied-page-retour" href="#accueil">
          Retour en haut <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}