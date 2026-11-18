# Iwwwan-labs web template

Starter for web applications. Vite, React 18, and TypeScript in strict mode, with
linting, formatting, testing, and CI wired up.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually http://localhost:5173.

## Scripts

| Command                | What it does                                        |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload                |
| `npm run build`        | Typecheck and produce a production build in `dist/` |
| `npm run preview`      | Serve the production build locally                  |
| `npm test`             | Run the test suite once                             |
| `npm run test:watch`   | Run tests in watch mode                             |
| `npm run lint`         | Run ESLint                                          |
| `npm run typecheck`    | Typecheck without emitting                          |
| `npm run format`       | Format with Prettier                                |
| `npm run format:check` | Check formatting without writing                    |

## Layout

```text
src/
├── App.tsx          <- root component
├── App.test.tsx     <- colocated tests
├── main.tsx         <- entry point
├── index.css        <- global styles
└── test/
    └── setup.ts     <- test environment setup
```

## Conventions

- The `@/` alias points at `src/`.
- Tests live next to the code they cover, as `*.test.ts(x)`.
- Strict TypeScript. No `any` without a written reason.
- Components are function components with named exports.

## Using this as a template

1. Rename the package in `package.json`.
2. Replace `src/App.tsx` with your application.
3. Update this README.

## Contributing

See [`Iwwwan-labs/.github/CONTRIBUTING.md`](https://github.com/Iwwwan-labs/.github/blob/main/CONTRIBUTING.md).

## License

[MIT](LICENSE) © Iwwwan-labs
