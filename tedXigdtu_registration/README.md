# TEDxIGDTU — Event Registration Flow (Pure React, no backend)

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

## Key decisions

- **No backend, by design for this version.** Everything — validation,
  duplicate checking, storage — happens in the browser. `src/utils/storage.js`
  is the one file that touches `localStorage`; every other component just
  calls its functions, so swapping in a real backend later only means
  rewriting that one file.
- **Why `localStorage` and not a real database:** it needed zero setup —
  no server to run, nothing to deploy separately — which fit the 60-90
  minute window. The honest trade-off: data only lives in the browser it
  was entered in. It won't sync across devices, and clearing browser data
  clears the registrations. For a real production version I'd swap this
  file for calls to a hosted database (see "what I'd improve" below).
- **Kept the form logic plain.** One `values` object in state, one
  `handleChange` for every field, one `validate()` function that returns
  an errors object — no extra state machines or abstractions, so it's easy
  to read top to bottom and easy for me to explain any line of it.
- **Design:** black / red (`#e62b1e`) / off-white, matching TEDx's visual
  identity, with underline-style inputs instead of boxed cards.

## Screenshots

_Add screenshots here after running the app locally:_
`docs/screenshot-form.png`, `docs/screenshot-validation.png`,
`docs/screenshot-confirmation.png`, `docs/screenshot-organiser-view.png`.

## AI tools used

Built with Claude (Anthropic), used for scaffolding the components and
drafting this README. I reviewed the code and can explain the validation
rules, the duplicate-check logic, and how `localStorage` is used as the
storage layer.

## What I'd improve with more time

- Replace `localStorage` with a real hosted database (Firebase/Supabase or
  a small backend) so registrations are shared across every visitor's
  device, not just the browser they registered from.
- Add a way to export the organiser view as CSV.
- Add password protection to the organiser view.
- Send a confirmation email on successful registration.

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
