# TEDxIGDTU — Event Registration Form

Practical assessment submission for the TEDxIGDTU Web Development team.

## What I built

A registration page that replaces the current Google Form — built as a
**pure React app with no backend server**. Attendee details are validated
on submit and saved to the browser's `localStorage`, which acts as the
"database" for this version. There's also a simple organiser view that
lists everyone who has registered.

- **Registration form:** name, email, phone, college, year of study,
  branch, ticket type, and a consent checkbox, each with a validation rule
  (e.g. phone must be 10 digits, email must look like an email).
- **Duplicate protection:** the same email can't register twice — checked
  against what's already stored before saving.
- **Confirmation screen** after a successful submit.
- **Organiser view** (`View registrations` link in the footer): a simple
  table of everyone who has registered, read straight from storage.

## Why this feature

The brief calls out "website-based recruitment... instead of Google Form"
as a suggested problem, and it's the page most people at TEDxIGDTU
actually touch — a Google Form can't stop duplicate submissions or
validate a phone number format, and it doesn't feel like part of the
TEDxIGDTU site at all.

## Key Technical / Design Decisions

- **Framework**: React (for component-based UI, fast rendering).  
- **Styling**: CSS (responsive, minimal design).  
- **Deployment**: Vercel (easy GitHub integration, fast CI/CD).  
- **Form Handling**: React state + validation for inputs.  
- **Future-ready**: Can connect to backend API or database later.

## Screenshots

_Add screenshots here after running the app locally:_
`docs/screenshot-form.png`, `docs/screenshot-validation.png`,
`docs/screenshot-confirmation.png`, `docs/screenshot-organiser-view.png`.

## AI tools used

Built with Claude (Anthropic), used for scaffolding the components. I reviewed 
the code and can explain the validation rules, the duplicate-check logic, and 
how `localStorage` is used as the storage layer.

## What I'd improve with more time

- Replace `localStorage` with a real hosted database (Firebase/Supabase or
  a small backend) so registrations are shared across every visitor's
  device, not just the browser they registered from.
- Add **email confirmation** after registration.  
- Integrate **payment gateway** for ticketing.  

## Setup

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173`. No other setup needed — there's no
backend to start separately.

## Project structure

```
tedx-registration-react/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── components/
│   │   ├── RegistrationForm.jsx
│   │   ├── Confirmation.jsx
│   │   └── RegistrationsList.jsx
│   └── utils/
│       └── storage.js       # localStorage read/write, duplicate check
├── index.html
└── package.json
```
