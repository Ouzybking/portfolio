import { useState, useEffect } from 'react';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 48px', height: '64px',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.07)' : '0.5px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px',
          letterSpacing: '-0.5px', color: '#f0eee8',
        }}>
          OD<span style={{ color: '#ff4d1c' }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '32px', listStyle: 'none',
        alignItems: 'center',
      }}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{
              color: 'rgba(240,238,232,0.5)', textDecoration: 'none',
              fontSize: '13px', letterSpacing: '0.3px', fontWeight: 400,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#ff4d1c'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.5)'}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            background: '#ff4d1c', color: '#fff', textDecoration: 'none',
            fontSize: '13px', padding: '8px 18px', borderRadius: '6px',
            fontWeight: 400, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Me contacter
          </a>
        </li>
      </ul>
    </nav>
  );
}
