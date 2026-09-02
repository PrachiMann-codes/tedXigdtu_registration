export default function Confirmation({ name, onBack }) {
  return (
    <div className="confirmation">
      <div className="confirmation-mark">✓</div>
      <h2>You're in, {name.split(" ")[0]}.</h2>
      <p>
        Your seat for TEDxIGDTU is confirmed. Keep an eye on your inbox for
        event-day details closer to the date.
      </p>
      <button className="link-btn" onClick={onBack}>
        Register someone else
      </button>
    </div>
  );
}
