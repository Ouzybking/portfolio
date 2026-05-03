import { useState, useEffect } from 'react';

const skillCategories = [
  {
    icon: '🎬',
    name: 'Motion Design',
    desc: 'Animation & vidéo créative',
    tools: ['After Effects', 'Premiere Pro', 'CapCut', 'DaVinci Resolve'],
    level: 92,
    color: 'rgba(255,77,28,0.12)',
    borderColor: 'rgba(255,77,28,0.25)',
  },
  {
    icon: '🎥',
    name: 'Vidéaste',
    desc: 'Prise de vue & post-prod',
    tools: ['Capture One', 'Premiere Pro', 'Étalonnage'],
    level: 88,
    color: 'rgba(30,80,200,0.1)',
    borderColor: 'rgba(30,80,200,0.2)',
  },
  {
    icon: '🎨',
    name: 'Design Graphique',
    desc: 'Identité visuelle & création',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    level: 90,
    color: 'rgba(140,50,220,0.1)',
    borderColor: 'rgba(140,50,220,0.2)',
  },
  {
    icon: '🌐',
    name: 'Webmaster',
    desc: 'Création & gestion de sites',
    tools: ['WordPress', 'HTML/CSS'],
    level: 78,
    color: 'rgba(20,160,100,0.1)',
    borderColor: 'rgba(20,160,100,0.2)',
  },
  {
    icon: '📱',
    name: 'Social Media',
    desc: 'Stratégie & animation',
    tools: ['Community Management', 'Ads'],
    level: 85,
    color: 'rgba(255,77,28,0.1)',
    borderColor: 'rgba(255,77,28,0.2)',
  },
  {
    icon: '📸',
    name: 'Photographie',
    desc: 'Retouche & direction artistique',
    tools: ['Lightroom', 'Photoshop'],
    level: 80,
    color: 'rgba(200,160,20,0.1)',
    borderColor: 'rgba(200,160,20,0.2)',
  },
];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900);
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section style={{ padding: '100px 48px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* ================= LEFT ================= */}
        <div>
          <p className="section-label">Compétences</p>

          <h2 className="section-title">
            Mon expertise <br />
            <span style={{ color: 'rgba(240,238,232,0.25)' }}>
              digitale
            </span>
          </h2>

          {/* GRID SKILLS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px',
              marginTop: '40px',
            }}
          >
            {skillCategories.map((sk) => (
              <div
                key={sk.name}
                style={{
                  background: sk.color,
                  border: `0.5px solid ${sk.borderColor}`,
                  borderRadius: '12px',
                  padding: '24px',
                  transition: '0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '26px' }}>{sk.icon}</div>

                <h3 style={{ color: '#fff', marginTop: '10px' }}>
                  {sk.name}
                </h3>

                <p style={{ color: '#aaa', fontSize: '12px' }}>
                  {sk.desc}
                </p>

                {/* BAR */}
                <div
                  style={{
                    height: '2px',
                    background: '#222',
                    marginTop: '14px',
                  }}
                >
                  <div
                    style={{
                      width: `${sk.level}%`,
                      height: '100%',
                      background: '#ff4d1c',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT (GRANDE PHOTO) ================= */}
        {!isMobile && (
          <div
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              height: '850px',
              position: 'relative',
            }}
          >
            <img
              src="/images/me1.jpeg"
              alt="Ousmane Diallo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* overlay stylé */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
              }}
            />

            {/* texte sur image */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
              }}
            >
              <h3 style={{ color: '#fff' }}>Ousmane Diallo</h3>
              <p style={{ color: '#ccc', fontSize: '12px' }}>
                Motion Designer et Videaste
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}