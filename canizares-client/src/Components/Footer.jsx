import { Link } from "react-router-dom";
import Divider from "./Divider";
import { useAuth } from "../contexts/AuthContext";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="border-t-2 border-zinc-900/50 bg-amber-50/95 backdrop-blur-sm text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
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
            </Link>
            <p className="text-sm leading-6 text-zinc-400">
              Crafted with passion. Served with pride.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/articles" className="hover:text-amber-400 transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Auth */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/auth/signin" className="hover:text-amber-400 transition-colors">Sign In</Link></li>
              <li><Link to="/auth/signup" className="hover:text-amber-400 transition-colors">Sign Up</Link></li>
              {user && (
                <li>
                  <Link to="/dashboard" className="hover:text-amber-400 transition-colors">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.privacypolicies.com/blog/privacy-policy-template/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Privacy</a></li>
              <li><a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Terms</a></li>
              <li><a href="mailto:hello@caulsburgers.com" className="hover:text-amber-400 transition-colors">Contact</a></li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="https://instagram.com/caulsburgers" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85 .07 3.252 .148 4.771 1.691 4.919 4.919 .058 1.265 .069 1.645 .069 4.849 0 3.205 -.012 3.584 -.069 4.849 -.149 3.225 -1.664 4.771 -4.919 4.919 -1.266 .058 -1.644 .07 -4.85 .07 -3.204 0 -3.584 -.012 -4.849 -.07 -3.26 -.149 -4.771 -1.699 -4.919 -4.92 -.058 -1.265 -.07 -1.644 -.07 -4.849 0 -3.204 .013 -3.583 .07 -4.849 .149 -3.227 1.664 -4.771 4.919 -4.919 1.266 -.057 1.645 -.069 4.849 -.069 z m 0 -2.163 c -3.259 0 -3.667 .014 -4.947 .072 -4.358 .2 -6.78 2.618 -6.98 6.98 -.059 1.281 -.073 1.689 -.073 4.948 0 3.259 .014 3.668 .072 4.948 .2 4.358 2.618 6.78 6.98 6.98 1.281 .058 1.689 .072 4.948 .072 3.259 0 3.668 -.014 4.948 -.072 4.354 -.2 6.782 -2.618 6.979 -6.98 .059 -1.28 .073 -1.689 .073 -4.948 0 -3.259 -.014 -3.668 -.072 -4.947 -.196 -4.354 -2.617 -6.78 -6.979 -6.98 -1.281 -.059 -1.69 -.073 -4.949 -.073 z m 0 5.838 c -3.403 0 -6.162 2.759 -6.162 6.162 s 2.759 6.162 6.162 6.162 6.162 -2.759 6.162 -6.162 -2.759 -6.162 -6.162 -6.162 z m 0 10.162 c -2.209 0 -4 -2.791 -4 -4.209 s 2.791 -4.209 4 -4.209 4.209 -2.759 4.209 -4.209 s -2.759 -4.209 -4.209 -4.209 z m 13.242 13.242 c 0 0 0 0 0 0 0 0 0 0 0 0" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/caulsburgers" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251 c7.547 0 11.675 -6.253 11.675 -11.675 0 -.178 0 -.355 -.012 -.53 A8.348 8.348 0 0022 5.92 a8.19 8.19 0 01 -.68 .75 4.652 4.652 0 001.89 -2.557 9.31 9.31 0 01 -2.932 1.124 4.662 4.662 0 00 -7.938 4.247 13.156 13.156 0 01 -9.451 4.836 4.627 4.627 0 001.413 .183 4.662 4.662 0 004.25 -2.794 4.662 4.662 0 001.152 0.125 A4.662 4.662 0 015.618 9.2 V9.15 a4.662 4.662 0 002.16 0.603 4.662 4.662 0 01 -.995 -2.264 4.662 4.662 0 001.634 -0.775 4.662 4.662 0 014.25 1.65 9.31 9.31 0 01 -2.362 -0.118 4.662 4.662 0 004.25 3.42 9.31 9.31 0 01 -4.374 0.602 A9.834 9.834 0 008.29 20.251 z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              📍 123 Burger St, Food City<br />
              📞 (555) 123-BURG
            </p>
          </div>
        </div>

        <Divider className="my-8 border-zinc-800" />

        <div className="flex flex-col items-center gap-2 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <p>&copy; 2024 Caul&apos;s Burgers + Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

