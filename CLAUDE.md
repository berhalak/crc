# CLAUDE.md

## Project Overview

A Vue 2 card/note management board application. Users create cards, drag them around a canvas, edit properties (name, description, links), and save layouts. Data persists via localStorage. Deployed to Firebase Hosting.

## Tech Stack

- **Vue 2.6** with TypeScript 3.8, class-based components via `vue-strict`
- **Tailwind CSS 1.2** with PostCSS (mixins, animations, preset-env)
- **Vue CLI 4.3** (Webpack under the hood)
- **Node v12** (see `.nvmrc`)
- **Yarn** package manager

## Commands

```bash
yarn install          # Install dependencies
yarn dev              # Dev server with hot reload
yarn serve            # Same as dev
yarn build            # Production build to dist/
yarn deploy           # Build + firebase deploy
yarn test:unit        # Unit tests (not yet implemented)
yarn test:e2e         # E2E tests (not yet implemented)
```

## Project Structure

```
src/
├── main.ts              # App entry point, Vue initialization
├── app.ts               # Core business logic (Card, Board, Navigation, Application classes)
├── App.vue / App.vue.ts # Root component
├── components/          # Reusable UI components (Box, Button, Panel, Textbox)
├── domain/              # Domain components (Board, Navigation, Position, CardInfo)
├── pages/               # Page-level routed components (Home)
├── setup/               # App initialization (router, component registration, event bus, SW)
├── infra/               # Base classes (Component with event decorator)
├── style/               # Global CSS (tailwind.css, mixins.css)
└── assets/              # Static assets
public/                  # Static HTML, manifest, favicon
```

## Architecture & Patterns

### Component Structure
- Vue templates (`.vue`) are paired with separate logic files (`.vue.ts`)
- Components extend `Component` from `src/infra/Component.ts` (wraps `vue-strict`)
- Props use `@prop` decorator; events use `@handler()` decorator
- All `.vue` files are auto-registered globally via `src/setup/registerComponents.js`

### State Management
- No Vuex. State is managed through classes in `src/app.ts`:
  - `Card` - card data (name, description, links, uid)
  - `Navigation` - card list and sidebar state
  - `Board` - card positions on canvas
  - `CardList` - card creation and storage
  - `Application` - orchestrates all systems
- `Bus<T>` class provides pub/sub messaging between components
- `vue-event-manager` plugin for global event bus

### Data Persistence
- localStorage for cards and positions
- Board auto-saves every 2 seconds

### Key Dependency: `@berhalak/js`
- Custom utility library providing `String.uid()`, array methods like `.removeBy()`, `.last()`

## Conventions

- **No linter or formatter configured** - follow existing code style
- **TypeScript strict mode** is on, but `noImplicitAny` and `strictNullChecks` are disabled
- Path alias: `@/*` maps to `src/*`
- Component filenames use PascalCase; auto-registered as kebab-case
- Domain logic lives in `src/app.ts`; UI in `src/domain/` and `src/components/`
- No tests exist yet - infrastructure is set up but no test files written

## Deployment

- Firebase Hosting (project: `berhalak-6d423`)
- `dist/` is the public directory
- SPA rewrites configured (all routes -> index.html)
- PWA support with service worker registration
