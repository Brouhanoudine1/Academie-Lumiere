import "../styles/Admissions.css";
import Timeline from "./Timelines";
import ConditionsAdmission from "./ConditionsAdmissions";

export default function Admissions() {
  return (
    <div className="admission-container" id="admissions">
      <header className="formations-header">
        <div className="title">
          <div className="barre-title"></div>
          <h2>Admissions</h2>
        </div>
        <h3>
          Réjoindre l'Académie en {" "}
          <i>
            <span>quatre étapes</span>
          </i>
        </h3>
        <p className="formations-intro">
          Un processus simple et transparent,
          avec un interlocuteur dédié à chaque étape.
        </p>
      </header>
       <Timeline />
       <ConditionsAdmission />
    </div>
  );
}
