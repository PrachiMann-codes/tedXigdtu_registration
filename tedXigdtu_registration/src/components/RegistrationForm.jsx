import { useState } from "react";
import { saveRegistration } from "../utils/storage.js";

const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Other"];

const INITIAL_STATE = {
  full_name: "",
  email: "",
  phone: "",
  college: "",
  year_of_study: "",
  branch: "",
  ticket_type: "Student",
  agreed_to_terms: false,
};

function validate(values) {
  const errors = {};

  if (values.full_name.trim().length < 2) {
    errors.full_name = "Enter your full name.";
  }
  if (!values.email.includes("@") || !values.email.includes(".")) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.trim().length !== 10 || isNaN(values.phone.trim())) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }
  if (values.college.trim().length < 2) {
    errors.college = "College / organisation name is required.";
  }
  if (values.year_of_study === "") {
    errors.year_of_study = "Select your year of study.";
  }
  if (values.branch.trim().length < 2) {
    errors.branch = "Branch / department is required.";
  }
  if (!values.agreed_to_terms) {
    errors.agreed_to_terms = "You need to accept this to register.";
  }

  return errors;
}

export default function RegistrationForm({ onSuccess }) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, name, type, value, checked } = e.target;
    const key = id || name;
    setValues({ ...values, [key]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const result = saveRegistration(values);

    if (!result.success) {
      setErrors({ email: result.error });
      return;
    }

    onSuccess(values.full_name.trim());
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="full_name">Full name</label>
        <input
          id="full_name"
          type="text"
          value={values.full_name}
          onChange={handleChange}
          placeholder="Aditi Sharma"
        />
        {errors.full_name && <span className="error">{errors.full_name}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@igdtu.ac.in"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="college">College / organisation</label>
        <input
          id="college"
          type="text"
          value={values.college}
          onChange={handleChange}
          placeholder="Indira Gandhi Delhi Technical University for Women"
        />
        {errors.college && <span className="error">{errors.college}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="year_of_study">Year of study</label>
          <select id="year_of_study" value={values.year_of_study} onChange={handleChange}>
            <option value="">Select year</option>
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          {errors.year_of_study && <span className="error">{errors.year_of_study}</span>}
        </div>

        <div className="field">
          <label htmlFor="branch">Branch / department</label>
          <input
            id="branch"
            type="text"
            value={values.branch}
            onChange={handleChange}
            placeholder="Computer Science"
          />
          {errors.branch && <span className="error">{errors.branch}</span>}
        </div>
      </div>

      <div className="field">
        <span className="radio-label">Ticket type</span>
        <div className="radio-group">
          {["Student", "Guest"].map((t) => (
            <label key={t} className="radio-option">
              <input
                type="radio"
                name="ticket_type"
                value={t}
                checked={values.ticket_type === t}
                onChange={handleChange}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      <label className="checkbox-field">
        <input
          id="agreed_to_terms"
          type="checkbox"
          checked={values.agreed_to_terms}
          onChange={handleChange}
        />
        <span>I confirm my details are correct and agree to be contacted about this event.</span>
      </label>
      {errors.agreed_to_terms && <span className="error">{errors.agreed_to_terms}</span>}

      <button type="submit" className="submit-btn">
        Confirm registration
      </button>
    </form>
  );
}
