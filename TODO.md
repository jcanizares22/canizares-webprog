- [ ] Inspect current auth/token flow (client AuthContext + RequireAuth, backend JWT middleware)
- [ ] Add backend endpoint: GET /api/users/me protected by JWT
- [ ] Add client API helper fetchMe()
- [ ] Update AuthContext to validate token on initial load using /users/me, and keep loading=true until done
- [x] Ensure RequireAuth uses loading correctly (no premature redirect)

- [ ] Run backend + client sanity checks (hard refresh /dashboard)

