# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

A starter template for web applications: Vite + React 18 + TypeScript (strict),
with Vitest, Testing Library, ESLint, Prettier, and a CI workflow.

## Commands

```bash
npm ci                # install exactly from the lockfile
npm run dev           # dev server
npm run build         # typecheck + production build
npm run lint          # ESLint
npm run format:check  # Prettier check
npm run typecheck     # tsc --noEmit
npm test              # Vitest, single run
```

Always run `lint`, `typecheck`, and `test` before considering a change complete.
`npm run build` catches type errors that `typecheck` may not, because it runs `tsc -b`.

## Layout

- `src/App.tsx` — root component, named export.
- `src/main.tsx` — entry point; mounts `App`.
- `src/index.css` — global styles and design tokens.
- `src/test/setup.ts` — imported by Vitest before each test file.
- `vite.config.ts` — Vite and Vitest configuration, including the `@/` alias.

## Rules

- TypeScript is strict. Do not weaken `tsconfig.json` to make code compile.
- Do not use `any`. If unavoidable, add a comment explaining why.
- Components are function components with named exports, not default exports.
- Put tests next to the code they cover, named `*.test.ts` or `*.test.tsx`.
- Use the `@/` alias for imports from `src/` rather than long relative paths.
- Keep dependencies minimal. Justify every new dependency in the pull request.
- Never commit secrets. Use `.env` locally (gitignored) and repository secrets in CI.

## Testing

- Test behavior through the DOM with Testing Library, not implementation details.
- Query by role and accessible name. Avoid `data-testid` unless there is no accessible query.
- Use `userEvent`, not `fireEvent`, for interactions.

Follow the organization conventions in
[`Iwwwan-labs/.github`](https://github.com/Iwwwan-labs/.github/blob/main/docs/CONVENTIONS.md).
