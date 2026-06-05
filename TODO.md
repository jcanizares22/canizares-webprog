# TODO

## Users page not appearing in sidebar
- [ ] Inspect and fix role-based sidebar rendering in `src/layouts/DashLayout.jsx` and/or `src/contexts/AuthContext.jsx`.
- [ ] Ensure `user.role` is set from backend `/users/me` (and fallback to `parsed.user.role` from localStorage).
- [ ] Ensure RequireRole and sidebar both use the same role source (case/undefined handling).
- [ ] Add safe defaults: treat missing role as `editor` and/or read role from `me.user.role`.
- [ ] Run the app and verify `/dashboard/users` link appears for admin and is hidden otherwise.

