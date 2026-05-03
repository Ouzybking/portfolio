import { useState, useEffect, useRef } from 'react';

// 📸 PHOTOS PHOTOGRAPHIE
const photos = Array.from(
  { length: 35 },
  (_, i) => `/images/photography/photo_${i + 1}_2026-05-03_02-23-43.jpg`
);

// 🎨 DESIGN GRAPHIQUE
const designPhotos = [
  '/images/design/design_1.png',
  '/images/design/design_2.png',
  '/images/design/design_3.png',
  '/images/design/design_4.png',
  '/images/design/design_5.png',
  '/images/design/design_6.jpg',
  '/images/design/design_7.jpg',
  '/images/design/design_8.png',
  '/images/design/design_9.png',
  '/images/design/design_10.png',
];

// 🎬 PROJETS
const projects = [
  {
    id: 1,
    title: 'Projet Motion kirene avec orange',
    category: 'Motion Design',
    desc: 'Motion design et animation pour la marque Sonatel.',
    youtube: 'https://www.youtube.com/embed/qZn-cA4zxgM',
  },
  {
    id: 2,
    title: 'Projet Motion Design',
    category: 'Motion Design',
    desc: 'Animations 2D et transitions cinématographiques.',
    youtube: 'https://www.youtube.com/embed/je34dtK-AP0',
  },
  {
    id: 3,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/tN5mT5Da92w',
  },
  {
    id: 4,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/goBCKku1M8o',
  },
  {
    id: 5,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/7YAxV5OrVas',
  },
  {
    id: 6,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/smDNXdkAnBk',
  },
  {
    id: 7,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/n8uZY8mSMQM',
  },
  {
    id: 8,
    title: 'Projet Vidéo Corporate',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/vrzXZhgFGWk',
  },
  {
    id: 9,
    title: "L'IA, outil ou dépendance ?",
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/045ecCwpcoo',
  },
  {
    id: 10,
    title: 'Intelligence artificielle : opportunités',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/ZEw0DN_7wZY',
  },
  {
    id: 11,
    title: '🔥Ambiance incroyable au monument de la renaissance Finale Sénégal 🇸🇳 vs Maroc 🇲🇦',
    category: 'Vidéo',
    desc: 'Film corporate tournage et montage.',
    youtube: 'https://www.youtube.com/embed/3uzhgcpPKsI',
  },
];

// ─── Hook breakpoint ───────────────────────────────────────────────────────────
function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}

export default function Projects() {
  const scrollRef  = useRef(null);
  const designRef  = useRef(null);
  const photoPaused  = useRef(false);
  const designPaused = useRef(false);
  const { isMobile, isTablet } = useBreakpoint();

  // ─── Auto-scroll infini photos ────────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    const id = setInterval(() => {
      if (!el || photoPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 30);
    return () => clearInterval(id);
  }, []);

  // ─── Auto-scroll infini design ────────────────────────────────────────────
  useEffect(() => {
    const el = designRef.current;
    const id = setInterval(() => {
      if (!el || designPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, []);

  // ─── Valeurs responsives ──────────────────────────────────────────────────
  const sectionPad   = isMobile ? '72px 16px' : isTablet ? '80px 28px' : '96px 48px';
  const gridCols     = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  const gridGap      = isMobile ? '12px' : '16px';
  const sectionGap   = isMobile ? '60px' : '80px';

  // Carrousels
  const designW  = isMobile ? '240px' : '320px';
  const designH  = isMobile ? '300px' : '400px';
  const photoW   = isMobile ? '220px' : '280px';
  const photoH   = isMobile ? '280px' : '360px';

  const h2 = {
    color: '#f0eee8',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: isMobile ? '20px' : '26px',
    letterSpacing: '-0.5px',
    marginBottom: '24px',
  };

  const carouselWrap = {
    display: 'flex',
    gap: '12px',
    overflow: 'hidden',
    marginTop: '20px',
    cursor: 'grab',
    WebkitOverflowScrolling: 'touch',
  };

  return (
    <section id="projects" style={{ padding: sectionPad }}>

      {/* Label */}
      <p style={{
        fontSize: '11px', letterSpacing: '3px', color: '#ff4d1c',
        textTransform: 'uppercase', marginBottom: '10px',
      }}>
        Réalisations
      </p>

      {/* ══════════ VIDÉO / MOTION ══════════ */}
      <h2 style={h2}>Projets Motion et Montage vidéo</h2>

      <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: gridGap }}>
        {projects.map((proj, idx) => (
          <div
            key={`${proj.id}-${idx}`}
            style={{
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.02)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,77,28,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            {/* Ratio 16:9 natif */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                src={proj.youtube}
                title={proj.title}
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%', border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{ padding: isMobile ? '12px 14px' : '16px 18px' }}>
              <span style={{
                fontSize: '10px', color: '#ff8a65',
                background: 'rgba(255,77,28,0.1)',
                border: '0.5px solid rgba(255,77,28,0.25)',
                borderRadius: '3px', padding: '2px 8px',
                display: 'inline-block', marginBottom: '8px',
              }}>
                {proj.category}
              </span>
              <h3 style={{
                color: '#f0eee8', fontFamily: 'Syne, sans-serif',
                fontWeight: 700, fontSize: isMobile ? '13px' : '15px',
                lineHeight: 1.4, marginBottom: '4px',
              }}>
                {proj.title}
              </h3>
              <p style={{
                color: 'rgba(240,238,232,0.4)',
                fontSize: isMobile ? '12px' : '13px',
                lineHeight: 1.5,
              }}>
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════ DESIGN GRAPHIQUE ══════════ */}
      <h2 style={{ ...h2, marginTop: sectionGap }}>Projet Design Graphique</h2>

      <div
        ref={designRef}
        style={carouselWrap}
        onMouseEnter={() => (designPaused.current = true)}
        onMouseLeave={() => (designPaused.current = false)}
        onTouchStart={() => (designPaused.current = true)}
        onTouchEnd={() => setTimeout(() => (designPaused.current = false), 2000)}
      >
        {[...designPhotos, ...designPhotos].map((img, i) => (
          <div
            key={i}
            style={{
              minWidth: designW, height: designH,
              borderRadius: '12px', overflow: 'hidden', flex: '0 0 auto',
              border: '0.5px solid rgba(255,255,255,0.07)',
            }}
          >
            <img
              src={img}
              alt={`Design ${(i % designPhotos.length) + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* ══════════ PHOTOGRAPHIE ══════════ */}
      <h2 style={{ ...h2, marginTop: sectionGap }}>Photographie</h2>

      <div
        ref={scrollRef}
        style={carouselWrap}
        onMouseEnter={() => (photoPaused.current = true)}
        onMouseLeave={() => (photoPaused.current = false)}
        onTouchStart={() => (photoPaused.current = true)}
        onTouchEnd={() => setTimeout(() => (photoPaused.current = false), 2000)}
      >
        {[...photos, ...photos].map((img, i) => (
          <div
            key={i}
            style={{
              minWidth: photoW, height: photoH,
              borderRadius: '12px', overflow: 'hidden', flex: '0 0 auto',
              border: '0.5px solid rgba(255,255,255,0.07)',
            }}
          >
            <img
              src={img}
              alt={`Photo ${(i % photos.length) + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
