import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Confirmation from "./components/Confirmation.jsx";
import RegistrationsList from "./components/RegistrationsList.jsx";

export default function App() {
  // "form" | "confirmed" | "list"
  const [stage, setStage] = useState("form");
  const [confirmedName, setConfirmedName] = useState("");

  const handleSuccess = (name) => {
    setConfirmedName(name);
    setStage("confirmed");
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="wordmark">
          TED<span className="x-mark">x</span>IGDTU
        </div>
        <h1>Register for the event</h1>
        <p className="hero-sub">
          Ideas worth spreading, live at IGDTU. Fill in your details below to
          save your seat.
        </p>
      </header>

      <main className="content">
        {stage === "form" && <RegistrationForm onSuccess={handleSuccess} />}
        {stage === "confirmed" && (
          <Confirmation name={confirmedName} onBack={() => setStage("form")} />
        )}
        {stage === "list" && (
          <RegistrationsList onBack={() => setStage("form")} />
        )}
      </main>

      <footer className="footer">
        <span>
          This independent TEDx event is operated under license from TED.
        </span>
        {stage !== "list" && (
          <button className="admin-link" onClick={() => setStage("list")}>
            View registrations (organiser view)
          </button>
        )}
      </footer>
    </div>
  );
}
