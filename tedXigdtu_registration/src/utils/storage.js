// Registrations are stored in the browser's localStorage.
// This is our "database" for this pure-React version.

const STORAGE_KEY = "tedxigdtu_registrations";
const EVENT_NAME = "TEDxIGDTU 2026";

export function getRegistrations() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveRegistration(values) {
  const registrations = getRegistrations();
  const email = values.email.trim().toLowerCase();

  const alreadyRegistered = registrations.some((r) => r.email === email);
  if (alreadyRegistered) {
    return { success: false, error: "This email is already registered." };
  }

  const newRegistration = {
    id: Date.now(),
    full_name: values.full_name.trim(),
    email: email,
    phone: values.phone.trim(),
    college: values.college.trim(),
    year_of_study: values.year_of_study,
    branch: values.branch.trim(),
    ticket_type: values.ticket_type,
    event_name: EVENT_NAME,
    created_at: new Date().toLocaleString(),
  };

  registrations.push(newRegistration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));

  return { success: true };
}
