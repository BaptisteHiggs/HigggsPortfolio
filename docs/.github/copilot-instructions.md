# Copilot Instructions for HigggsPortfolio

## Project Overview
- This is a React (TypeScript) SPA bootstrapped with Create React App.
- Main entry: `src/App.tsx` (routes: `/` → `Page`, `/gridle` → `Gridle`).
- Major features are organized in `src/components/`, especially `gridle/` (custom word/grid game logic) and its subfolders.
- Styling uses CSS modules (`.module.scss`).
- Routing is handled by `react-router-dom` (see `src/App.tsx`).

## Key Patterns & Conventions
- All React components use `.tsx` and are function components.
- Component-specific styles are colocated as `.module.scss`.
- State management for the Gridle feature is in `src/components/gridle/gridleStore.ts`.
- Utility functions for Gridle are in `src/components/gridle/utils.ts`.
- Types are colocated (e.g., `types.ts` in relevant folders).
- Use named exports for all non-default exports.
- Test files use `.test.tsx` and `@testing-library/react`.

## Developer Workflows
- **Start dev server:** `npm start`
- **Run tests:** `npm test`
- **Build for production:** `npm run build`
- **Eject config:** `npm run eject` (irreversible, not recommended)

## Integration & External Dependencies
- Uses `ui-neumorphism` for UI components (see `src/App.tsx`).
- No backend/API integration; all logic is client-side.
- Public assets and PWA config in `public/`.

## Examples
- To add a new game feature, follow the structure in `src/components/gridle/`.
- To add a new route, update `src/App.tsx` and create a new component in `src/components/`.
- To add types, colocate a `types.ts` file in the relevant folder.

## References
- See `README.md` for more on scripts and Create React App conventions.
- See `src/components/gridle/` for advanced component patterns and state management.

---
For more, see [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started).
