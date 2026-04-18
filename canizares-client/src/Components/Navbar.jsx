import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200",
    isActive
      ? "border-amber-900 bg-amber-900 text-white shadow-sm shadow-amber-900/20"
      : "border-transparent text-zinc-600 hover:border-amber-900 hover:bg-amber-100 hover:text-zinc-950",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-amber-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 ring-2 ring-amber-900/15">
            <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="#FDE68A" stroke="#4B2E00" strokeWidth="4" />
              <path d="M16 33.5C16 26 22 20 32 20s16 6 16 13.5-7 9.5-16 9.5S16 41 16 33.5Z" fill="#8B4513" />
              <path d="M15 27c4-4 20-4 26 0" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />
              <path d="M18 36h28" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
              <path d="M21 30h4M31 25h4M39 30h4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="space-y-0.5">
            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-zinc-950">
              Caul&apos;s
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Burgers + Pizza
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
