// Auth toggle (default: disabled)
// To enable without code changes, set: VITE_AUTH_ENABLED=true
export const AUTH_ENABLED = (import.meta.env.VITE_AUTH_ENABLED ?? "false") === "true";
