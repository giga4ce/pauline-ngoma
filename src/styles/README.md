# Styles Architecture

- `main.scss`: unique entrypoint imported by the app.
- `abstracts/`: design tokens and low-level variables.
- `base/`: generic primitives, TeleportHQ legacy utilities, shared UI helpers.
- `components/`: styles tied to shared React components.
- `pages/`: page-level styles, including former page-local wrappers.
- `responsive/`: global media-query overrides loaded last.

Rule of thumb:

- Add global tokens and primitives in `abstracts/` or `base/`.
- Add shared component styles in `components/`.
- Add page-specific styles in `pages/`.
- Avoid recreating a monolithic stylesheet; split by ownership.
