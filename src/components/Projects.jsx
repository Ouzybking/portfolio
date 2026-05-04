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

// ─── breakpoint ─────────────────────────
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
  };
}

export default function Projects() {
  const scrollRef = useRef(null);
  const designRef = useRef(null);

  const photoPaused = useRef(false);
  const designPaused = useRef(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const { isMobile, isTablet } = useBreakpoint();

  // ─── auto scroll photos ─────────────────
  useEffect(() => {
    const el = scrollRef.current;
    const id = setInterval(() => {
      if (!el || photoPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 30);
    return () => clearInterval(id);
  }, []);

  // ─── auto scroll design ─────────────────
  useEffect(() => {
    const el = designRef.current;
    const id = setInterval(() => {
      if (!el || designPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, []);

  // ─── scroll buttons ─────────────────
  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const amount = isMobile ? 250 : 400;
    ref.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const sectionPad = isMobile ? '72px 16px' : '96px 48px';
  const gridCols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';

  const h2 = {
    color: '#f0eee8',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: isMobile ? '20px' : '26px',
    marginBottom: '24px',
  };

  const carouselWrap = {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    marginTop: '20px',
    scrollbarWidth: 'none',
  };

  const arrowBtn = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.6)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 5,
  };

  const wrapper = {
    position: 'relative',
  };

  return (
    <section style={{ padding: sectionPad }}>

      {/* ===== LIGHTBOX ===== */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <img
            src={selectedImage}
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: 12 }}
          />
        </div>
      )}

      <h2 style={h2}>Projets Motion</h2>

      {/* ===== VIDEOS ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 16 }}>
        {projects.map((p) => (
          <div key={p.id} style={{ borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={p.youtube}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===== DESIGN ===== */}
      <h2 style={{ ...h2, marginTop: 80 }}>Design Graphique</h2>

      <div style={wrapper}>
        <button
          onClick={() => scroll(designRef, 'left')}
          style={{ ...arrowBtn, left: 10 }}
        >
          ‹
        </button>

        <div
          ref={designRef}
          style={carouselWrap}
          onMouseEnter={() => (designPaused.current = true)}
          onMouseLeave={() => (designPaused.current = false)}
        >
          {[...designPhotos, ...designPhotos].map((img, i) => (
            <div key={i} style={{ minWidth: isMobile ? 240 : 320, height: 380 }}>
              <img
                src={img}
                onClick={() => setSelectedImage(img)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'zoom-in',
                  borderRadius: 12,
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(designRef, 'right')}
          style={{ ...arrowBtn, right: 10 }}
        >
          ›
        </button>
      </div>

      {/* ===== PHOTOS ===== */}
      <h2 style={{ ...h2, marginTop: 80 }}>Photographie</h2>

      <div style={wrapper}>
        <button
          onClick={() => scroll(scrollRef, 'left')}
          style={{ ...arrowBtn, left: 10 }}
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          style={carouselWrap}
          onMouseEnter={() => (photoPaused.current = true)}
          onMouseLeave={() => (photoPaused.current = false)}
        >
          {[...photos, ...photos].map((img, i) => (
            <div key={i} style={{ minWidth: isMobile ? 220 : 280, height: 360 }}>
              <img
                src={img}
                onClick={() => setSelectedImage(img)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'zoom-in',
                  borderRadius: 12,
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(scrollRef, 'right')}
          style={{ ...arrowBtn, right: 10 }}
        >
          ›
        </button>
      </div>
    </section>
  );
}