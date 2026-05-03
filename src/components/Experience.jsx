const experiences = [
  {
    period: '2023 — Présent',
    title: 'Motion Designer & Vidéaste',
    company: 'Indépendant',
    location: 'Dakar, Sénégal',
    desc: 'Réalisation de projets motion design, vidéo corporate et campagnes réseaux sociaux pour des clients locaux et internationaux. Projets notables : Sonatel, identités de marques, contenus digitaux.',
    tags: ['After Effects', 'Premiere Pro', 'Canva'],
    current: false,
  },
   {
    period: '2025 — 2026',
    title: 'Motion Designer & Vidéaste',
    company: 'Leegui Groupe',
    location: 'Dakar, Sénégal',
    desc: 'Réalisation de projets motion design, vidéo corporate et campagnes réseaux sociaux pour des clients locaux et internationaux. Projets notables : Sonatel, identités de marques, contenus digitaux.',
    tags: ['After Effects', 'Premiere Pro', 'Canva'],
    current: false,
  },
  {
    period: '2025 — 2026',
    title: 'Vidéaste',
    company: 'Etincelles des Marques',
    location: 'Dakar, Sénégal',
    desc: 'Réalisation vidéo corporate et campagnes réseaux sociaux pour des clients locaux et internationaux.',
    tags: ['Davinci', 'Premiere Pro', 'Capcut','Canva'],
    current: false,
  },
  {
    period: '2023 — Présent',
    title: 'Photographe',
    company: 'Indépendant',
    location: 'Dakar, Sénégal',
    desc: 'Photographe des evenements .',
    tags: ['After Effects', 'Photoshop', 'Canva'],
    current: false,
  },
  {
    period: '2024 — 2026',
    title: 'Community Manager & Webmaster',
    company: 'Sonatel Academy',
    location: 'Dakar',
    desc: 'Gestion des réseaux sociaux, création de contenu, animation des communautés et maintenance de sites WordPress pour des marques sénégalaises.',
    tags: ['WordPress', 'Social Media', 'Community Management'],
    current: false,
  },
  {
    period: '2020 — 2022',
    title: 'Vidéaste & Monteur',
    company: 'Sonatel Academy',
    location: 'Dakar',
    desc: 'Prise de vue, montage vidéo et post-production pour des productions événementielles, clips musicaux et spots publicitaires.',
    tags: ['Premiere Pro', 'CapCut', 'Capture One'],
    current: false,
  },

  {
    period: '2025 — 2026',
    title: 'Gestion de Projet',
    company: 'Sonatel Academy',
    location: 'Dakar',
    desc: 'Prise de vue, montage vidéo et post-production pour des productions événementielles, clips musicaux et spots publicitaires.',
    tags: ['Premiere Pro', 'CapCut', 'Capture One'],
    current: false,
  },
];

const formations = [
  {
    year: '2025',
    diploma: 'Formation Referent digital',
    school: 'Soatel Academy',
    mention: '',
  },
  {
    year: '2025',
    diploma: 'Formation Montage Vidéo',
    school: 'Sonatel Academy',
    mention: 'Premiere Pro · DaVinci · CapCut',
  },
  {
    year: '2018',
    diploma: 'Baccalauréat',
    school: 'Dakar, Sénégal',
    mention: 'L2',
  },
   {
    year: '2026',
    diploma: 'Licence 3 Communication Digital',
    school: 'Dakar, Sénégal',
    mention: 'L3',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px' }}>

        {/* Expériences */}
        <div>
          <p className="section-label">Parcours</p>
          <h2 className="section-title">Expériences</h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '130px 1fr',
                gap: '20px', padding: '28px 0',
                borderBottom: '0.5px solid rgba(255,255,255,0.05)',
                position: 'relative',
              }}>
                {/* Dot timeline */}
                <div style={{
                  position: 'absolute', left: '122px', top: '34px',
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: exp.current ? '#ff4d1c' : 'rgba(255,255,255,0.15)',
                  border: exp.current ? '2px solid rgba(255,77,28,0.3)' : 'none',
                }} />

                <div>
                  <p style={{
                    fontSize: '12px', color: 'rgba(240,238,232,0.3)',
                    paddingTop: '4px', lineHeight: 1.5,
                  }}>
                    {exp.period}
                  </p>
                  {exp.current && (
                    <span style={{
                      display: 'inline-block', marginTop: '6px',
                      background: 'rgba(255,77,28,0.12)',
                      border: '0.5px solid rgba(255,77,28,0.3)',
                      borderRadius: '3px', padding: '2px 7px',
                      fontSize: '10px', color: '#ff8a65',
                    }}>
                      Actuel
                    </span>
                  )}
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700,
                    fontSize: '15px', color: '#f0eee8', marginBottom: '4px',
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#ff8a65', marginBottom: '2px' }}>
                    {exp.company}
                  </p>
                  <p style={{
                    fontSize: '11px', color: 'rgba(240,238,232,0.25)',
                    marginBottom: '10px',
                  }}>
                    📍 {exp.location}
                  </p>
                  <p style={{
                    fontSize: '13px', color: 'rgba(240,238,232,0.4)',
                    lineHeight: 1.65, marginBottom: '12px',
                  }}>
                    {exp.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '11px', padding: '3px 8px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '0.5px solid rgba(255,255,255,0.08)',
                        borderRadius: '3px', color: 'rgba(240,238,232,0.4)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formations */}
        <div>
          <p className="section-label">Formation</p>
          <h2 className="section-title">Diplômes &<br />certifications</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {formations.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: '10px', padding: '22px',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,77,28,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: '8px',
                }}>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700,
                    fontSize: '15px', color: '#f0eee8',
                  }}>
                    {f.diploma}
                  </h3>
                  <span style={{
                    fontSize: '12px', color: 'rgba(240,238,232,0.3)',
                    flexShrink: 0, marginLeft: '12px',
                  }}>
                    {f.year}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#ff8a65', marginBottom: '4px' }}>
                  {f.school}
                </p>
                {f.mention && (
                  <p style={{ fontSize: '12px', color: 'rgba(240,238,232,0.3)' }}>
                    {f.mention}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Outils maîtrisés */}
          <div style={{ marginTop: '40px' }}>
            <p style={{
              fontSize: '12px', color: 'rgba(240,238,232,0.3)',
              letterSpacing: '1px', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Outils maîtrisés
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'After Effects', 'Premiere Pro', 'CapCut', 'Canva',
                'Photoshop', 'Illustrator', 'Capture One', 'WordPress',
              ].map(tool => (
                <span key={tool} style={{
                  fontSize: '12px', padding: '6px 12px',
                  background: 'rgba(255,77,28,0.07)',
                  border: '0.5px solid rgba(255,77,28,0.2)',
                  borderRadius: '4px', color: 'rgba(240,238,232,0.6)',
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
