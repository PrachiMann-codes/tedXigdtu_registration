import { getRegistrations } from "../utils/storage.js";

export default function RegistrationsList({ onBack }) {
  const registrations = getRegistrations();

  return (
    <div className="list-view">
      <h2>Registrations ({registrations.length})</h2>

      {registrations.length === 0 ? (
        <p className="hero-sub">No one has registered yet.</p>
      ) : (
        <table className="reg-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((r) => (
              <tr key={r.id}>
                <td>{r.full_name}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>{r.college}</td>
                <td>{r.ticket_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className="link-btn" onClick={onBack}>
        Back to registration form
      </button>
    </div>
  );
}
