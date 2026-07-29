# Expert Listing

A modern, responsive real estate dashboard and listing platform built for seamless property management and client browsing.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18+ recommended)
- **Yarn** package manager

### Cloning the Repository

```bash
git clone https://github.com/EmmanuelOkon/expert-listing.git
cd expert-listing
```


## How to Run

```bash
yarn install
yarn dev
```

Useful scripts:

```bash
yarn build
yarn preview
yarn lint
yarn typecheck
yarn check
```

## Features

- Dashboard-first experience with responsive tab navigation and property cards
- Shared loading skeletons for dashboard pages while content is resolving
- Lightweight "Coming soon" states for unfinished dashboard sections
- A floating app chat icon with a simple coming-soon popover
- Custom error page handling for invalid or missing routes

## Technology Choices

- `React` with `TanStack Start` and `TanStack Router` for the app and routing layer
- `Vite` for fast local development and production builds
- `Tailwind CSS` for utility-first styling and responsive layout work
- `Framer Motion` for lightweight UI transitions
- `Radix UI` and `shadcn/ui` primitives for accessible components
- `TypeScript` for type safety across the codebase

## Quality Checks

- `Husky` is enabled through the `prepare` script so git hooks can run locally
- `lint-staged` is configured to format staged files and run ESLint on `src/**/*.{js,jsx,ts,tsx}`
- `yarn lint` runs ESLint across the project
- `yarn typecheck` runs `tsc --noEmit` for strict TypeScript checking without producing build output
- `yarn check` applies Prettier formatting and ESLint autofixes

## Assumptions and Trade-offs

- I assumed the main workflow is local development with `yarn`, since that is what the repo is configured for.
- The dashboard UI favors responsive utility classes over custom layout abstractions to keep changes fast and predictable.
- Some placeholder dashboard sections are intentionally lightweight so the structure is ready without overbuilding unfinished features.
- Mobile behavior prioritizes touch usability and horizontal scrolling for tab navigation and property cards instead of forcing cramped wrapped layouts.
