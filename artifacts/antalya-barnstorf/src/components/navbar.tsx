import { useLocation, Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const logoPath = import.meta.env.BASE_URL + 'images/logo.png';

const navItems = [
  { path: '/',                 label: 'Start' },
  { path: '/ueber-uns',       label: 'Über uns' },
  { path: '/speisekarte',     label: 'Speisekarte' },
  { path: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  { path: '/anfahrt',         label: 'Anfahrt' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
    setScrolled(false);
  }, [location]);

  // On sub-pages: always solid. On home: solid only when scrolled.
  const solid = !isHome || scrolled || open;

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solid
          ? 'bg-background/97 backdrop-blur-md border-b border-border py-3 shadow-md shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" data-testid="nav-logo" aria-label="Zur Startseite">
          <img
            src={logoPath}
            alt="Antalya Barnstorf"
            className="h-10 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ path, label }) => {
            const active = location === path || (path !== '/' && location.startsWith(path));
            return (
              <Link
                key={path}
                href={path}
                data-testid={`nav-link-${path.replace('/', '') || 'home'}`}
                className={`text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-200 hover:text-primary ${
                  active ? 'text-primary' : 'text-foreground/55'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          data-testid="nav-cta"
          href="tel:05442804581"
          className="hidden md:flex items-center bg-primary text-primary-foreground hover:bg-primary/85 transition-colors duration-200 px-5 py-2 text-[11px] font-semibold tracking-wider"
        >
          Jetzt anrufen
        </a>

        {/* Mobile hamburger */}
        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setOpen(p => !p)}
          aria-label="Menü öffnen"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 flex flex-col gap-5">
          {navItems.map(({ path, label }) => {
            const active = location === path || (path !== '/' && location.startsWith(path));
            return (
              <Link
                key={path}
                href={path}
                className={`text-sm tracking-[0.15em] uppercase font-medium transition-colors ${
                  active ? 'text-primary' : 'text-foreground/65'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:05442804581"
            className="mt-2 text-center bg-primary text-primary-foreground py-3 text-sm font-semibold tracking-wider"
          >
            Jetzt anrufen
          </a>
        </div>
      )}
    </nav>
  );
}
