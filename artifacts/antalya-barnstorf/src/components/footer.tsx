import { Link } from 'wouter';
import logoPath from '@assets/erasebg-transformed_2_(1)_1778623995583.png';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <img
              src={logoPath}
              alt="Antalya Barnstorf"
              className="h-14 w-auto object-contain opacity-75 cursor-pointer hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {[
            { path: '/ueber-uns',       label: 'Über uns' },
            { path: '/speisekarte',     label: 'Speisekarte' },
            { path: '/oeffnungszeiten', label: 'Öffnungszeiten' },
            { path: '/anfahrt',         label: 'Anfahrt' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="text-xs tracking-widest uppercase text-foreground/40 hover:text-primary transition-colors"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-foreground/30 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Pizzeria &amp; Imbiss Antalya Barnstorf &mdash; Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
