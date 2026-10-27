# SkillBridge — Talent & Freelancer Directory

SkillBridge is a responsive web application that helps individuals and small business owners discover professionals with specific skills. Users can browse professional profiles, search by name or skill, filter by category, and save interesting profiles for later.

The project is being developed as part of the **BuildLab Africa Stage 1 Frontend Development Internship**.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Target Users](#target-users)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Source](#data-source)
- [Testing](#testing)
- [Accessibility and Responsiveness](#accessibility-and-responsiveness)
- [Project Scope](#project-scope)
- [Roadmap](#roadmap)
- [Author](#author)

## Overview

Finding the right professional for a project can be challenging when information is scattered across different platforms. SkillBridge provides a simple, centralized directory where users can explore fictional professional profiles and keep track of people whose skills match their needs.

**Core user journey:**

Browse professionals → Search or filter → View a profile → Save a profile → Revisit saved profiles.

## Problem Statement

Individuals and small business owners often need professionals such as frontend developers, graphic designers, content writers, and video editors but may struggle to find relevant profiles efficiently.

SkillBridge aims to simplify the discovery process through a searchable, filterable directory with individual profile pages and a personal saved-profiles list.

## Target Users

- Small business owners looking for professionals to support their projects.
- Individuals seeking freelancers with specific skills.
- Users who want a simple way to shortlist professionals for later consideration.

## Features

### Core Features

- **Professional directory:** Browse a collection of professional profiles.
- **Search:** Find professionals by name, role, or skill.
- **Category filtering:** Narrow results by professional category.
- **Profile details:** View a professional's biography, skills, experience, and available portfolio link.
- **Saved profiles:** Save and remove favourite professionals.
- **Persistent storage:** Keep saved profiles available after refreshing the page using `localStorage`.
- **Client-side routing:** Navigate between the directory, individual profiles, saved profiles, and not-found page.
- **Interface states:** Provide appropriate loading, empty, error, and invalid-profile states.

## Tech Stack

| Technology             | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| React                  | Building reusable UI components          |
| TypeScript             | Type safety and maintainable code        |
| Vite                   | Development server and build tooling     |
| Tailwind CSS           | Responsive interface styling             |
| React Router           | Client-side navigation                   |
| Vitest                 | Automated testing                        |
| React Testing Library  | Testing components and user interactions |
| Browser `localStorage` | Persisting saved profiles                |

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) — preferably a current LTS version.
- npm, included with Node.js.
- Git.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-github-repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd skillbridge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Available Scripts

The following scripts are typical for this stack. Confirm the actual script names in `package.json` and adjust this section if necessary.

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the local development server   |
| `npm run build`   | Creates a production build            |
| `npm run preview` | Previews the production build locally |
| `npm run test`    | Runs automated tests, if configured   |

## Project Structure

The project is expected to follow a structure similar to the one below. The final structure may change during development.

```text
skillbridge/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProfessionalCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── CategoryFilter.tsx
│   ├── data/
│   │   └── professionals.json
│   ├── pages/
│   │   ├── DiscoverPage.tsx
│   │   ├── ProfessionalDetailsPage.tsx
│   │   ├── SavedProfilesPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── services/
│   │   └── professionalService.ts
│   ├── types/
│   │   └── professional.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Data Source

SkillBridge uses curated mock JSON data containing fictional professional profiles. No real personal information is required.

Each profile may include:

- `id` — unique profile identifier.
- `name` — professional's display name.
- `title` — professional role or headline.
- `category` — professional category.
- `skills` — list of relevant skills.
- `bio` — short professional biography.
- `experience` — summary of relevant experience.
- `location` — optional location.
- `avatar` — local image path or initials.
- `portfolioUrl` — optional portfolio link.

The data-access layer will expose an asynchronous function so the application can handle loading and error states consistently.

Saved profile identifiers will be stored in the browser using `localStorage`. The initial version does not require a backend or user authentication.

## Testing

Automated tests will be written with Vitest and React Testing Library.

Testing will cover at least three scenarios, such as:

- Rendering professional cards correctly.
- Searching or filtering profiles.
- Saving and removing a profile.
- Displaying empty or error states.

The final test suite will reflect the implemented features.

## Accessibility and Responsiveness

SkillBridge is designed with a mobile-first approach.

Accessibility and usability goals include:

- Responsive layouts from 320px mobile screens to desktop.
- Semantic HTML and properly labelled controls.
- Keyboard-accessible navigation and interactions.
- Visible focus indicators.
- Sufficient text and background contrast.
- Clear feedback for actions and search results.
- No unintended horizontal overflow.

An accessibility audit and keyboard-only test will be completed before final submission.

## Project Scope

### In Scope

- Professional directory and profile cards.
- Search and category filtering.
- Individual profile pages.
- Saved profiles with persistent browser storage.
- Client-side routing and not-found handling.
- Responsive design, accessibility, and automated testing.

### Out of Scope

- User registration and authentication.
- Real-time messaging or chat.
- Payments, subscriptions, or booking services.
- Backend database and profile submissions.
- Ratings, reviews, or professional verification.

## Roadmap

- [ ] **Week 1:** Project setup, directory interface, search, category filtering, and initial deployment.
- [ ] **Week 2:** Reusable components, structured data handling, interface states, and issue tracking.
- [ ] **Week 3:** Profile details, routing, saved profiles, automated tests, accessibility audit, and final documentation.

## Deployment

**Live application:** [Add deployed application URL]

**GitHub repository:** [Add repository URL]

## Author

**Opeyemi Obatola**

Frontend Developer

- GitHub: [@opeyemi-code](https://github.com/opeyemi-code)

---

_SkillBridge is an educational portfolio project developed for the BuildLab Africa Stage 1 Frontend Development Internship. All professional profiles are fictional and intended for demonstration purposes._
