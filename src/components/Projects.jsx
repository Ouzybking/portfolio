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
];

// ─── Hook breakpoint ─────────────────────────────────────────
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
  const scrollRef = useRef(null);
  const designRef = useRef(null);

  const photoPaused = useRef(false);
  const designPaused = useRef(false);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [selectedImage, setSelectedImage] = useState(null);

  const { isMobile, isTablet } = useBreakpoint();

  // ─── AUTO SCROLL PHOTOS ─────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    const id = setInterval(() => {
      if (!el || photoPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 30);
    return () => clearInterval(id);
  }, []);

  // ─── AUTO SCROLL DESIGN ─────────────────────────────
  useEffect(() => {
    const el = designRef.current;
    const id = setInterval(() => {
      if (!el || designPaused.current) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, []);

  // ─── DRAG CONTROLS ─────────────────────────────
  const handleMouseDown = (e, ref) => {
    isDown.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e, ref) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const sectionPad = isMobile ? '72px 16px' : isTablet ? '80px 28px' : '96px 48px';
  const gridCols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  const gridGap = isMobile ? '12px' : '16px';
  const sectionGap = isMobile ? '60px' : '80px';

  const designW = isMobile ? '240px' : '320px';
  const designH = isMobile ? '300px' : '400px';
  const photoW = isMobile ? '220px' : '280px';
  const photoH = isMobile ? '280px' : '360px';

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
    overflow: 'hidden',
    marginTop: '20px',
    cursor: 'grab',
  };

  return (
    <section id="projects" style={{ padding: sectionPad }}>

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
            cursor: 'zoom-out',
          }}
        >
          <img
            src={selectedImage}
            alt="preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
            }}
          />
        </div>
      )}

      <h2 style={h2}>Projets Motion et Montage vidéo</h2>

      {/* ===== VIDEOS ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: gridGap }}>
        {projects.map((proj) => (
          <div key={proj.id} style={{ borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={proj.youtube}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===== DESIGN ===== */}
      <h2 style={{ ...h2, marginTop: sectionGap }}>Design Graphique</h2>

      <div
        ref={designRef}
        style={carouselWrap}
        onMouseDown={(e) => handleMouseDown(e, designRef)}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          designPaused.current = false;
          handleMouseLeave();
        }}
        onMouseMove={(e) => handleMouseMove(e, designRef)}
      >
        {[...designPhotos, ...designPhotos].map((img, i) => (
          <div key={i} style={{ minWidth: designW, height: designH }}>
            <img
              src={img}
              onClick={() => setSelectedImage(img)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }}
            />
          </div>
        ))}
      </div>

      {/* ===== PHOTOS ===== */}
      <h2 style={{ ...h2, marginTop: sectionGap }}>Photographie</h2>

      <div
        ref={scrollRef}
        style={carouselWrap}
        onMouseDown={(e) => handleMouseDown(e, scrollRef)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => handleMouseMove(e, scrollRef)}
      >
        {[...photos, ...photos].map((img, i) => (
          <div key={i} style={{ minWidth: photoW, height: photoH }}>
            <img
              src={img}
              onClick={() => setSelectedImage(img)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}