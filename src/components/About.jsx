const stats = [
  { num: '50+', label: 'Projets livrés' },
  { num: '4+', label: "Ans d'expérience" },
  { num: '20+', label: 'Clients satisfaits' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '96px 48px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '72px',
          alignItems: 'center',
        }}
      >

        {/* LEFT — PHOTO */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '4/5',
              background:
                'linear-gradient(160deg, #1a0830 0%, #0a0a14 40%, #0d1830 100%)',
              borderRadius: '14px',
              border: '0.5px solid rgba(255,255,255,0.07)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >

            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(255,77,28,0.15) 0%, transparent 70%)',
              }}
            />

            {/* IMAGE PRINCIPALE */}
            <img
              src=" /images/me.png" // 👈 mets ta photo ici
              alt="Ousmane Diallo"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '90%',
                objectFit: 'cover',
                filter: 'contrast(1.05)',
              }}
            />

            {/* NOM */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.55)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '14px 18px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#f0eee8',
                }}
              >
                Ousmane Diallo
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: '#ff8a65',
                  marginTop: '2px',
                }}
              >
                Motion Designer · Vidéaste · Dakar 🇸🇳
              </p>
            </div>
          </div>

          {/* BADGE */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '-16px',
              background: '#ff4d1c',
              borderRadius: '8px',
              padding: '10px 14px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '22px',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              4+
            </p>
            <p
              style={{
                fontSize: '10px',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '2px',
              }}
            >
              Ans d'exp.
            </p>
          </div>
        </div>

        {/* RIGHT — TEXTE */}
        <div>
          <p className="section-label">À propos</p>

          <h2
            className="section-title"
            style={{ marginBottom: '24px' }}
          >
            Créatif digital <br />
            <span style={{ color: 'rgba(240,238,232,0.22)' }}>
              basé à Dakar
            </span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: 'rgba(240,238,232,0.55)',
              lineHeight: 1.85,
              marginBottom: '20px',
            }}
          >
            Je suis <strong style={{ color: '#f0eee8' }}>
              Ousmane Diallo
            </strong>
            , un créatif digital polyvalent basé à Dakar, Sénégal.
            Passionné par l'image sous toutes ses formes, je combine
            motion design, vidéo, design graphique et stratégie digitale
            pour produire des contenus qui marquent les esprits.
          </p>

          <p
            style={{
              fontSize: '15px',
              color: 'rgba(240,238,232,0.55)',
              lineHeight: 1.85,
              marginBottom: '36px',
            }}
          >
            Mon approche est simple : comprendre les besoins de mes
            clients, raconter leur histoire visuellement, et livrer des
            rendus professionnels adaptés aux plateformes modernes.
          </p>

          {/* STATS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  padding: '18px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '28px',
                    color: '#ff4d1c',
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    color: 'rgba(240,238,232,0.4)',
                    marginTop: '6px',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* BOUTON */}
          <a
            href="/cv/Ousmanediallorefdig.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              color: 'rgba(240,238,232,0.7)',
              textDecoration: 'none',
              padding: '12px 22px',
              borderRadius: '7px',
              fontSize: '13px',
            }}
          >
            ↓ Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}