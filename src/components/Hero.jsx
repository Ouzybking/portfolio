export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        padding: '100px 48px 80px',
      }}
    >
      {/* LEFT — TEXTE */}
      <div>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,77,28,0.1)',
            border: '0.5px solid rgba(255,77,28,0.35)',
            borderRadius: '20px',
            padding: '6px 14px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              background: '#ff4d1c',
              borderRadius: '50%',
            }}
          />
          <span style={{ fontSize: '12px', color: '#ff8a65' }}>
            Disponible pour des missions
          </span>
        </div>

        {/* TITRE */}
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(44px, 6vw, 72px)',
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: '24px',
            color: '#f0eee8',
          }}
        >
          Ousmane <br />
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,77,28,0.7)',
            }}
          >
            Diallo
          </span>
          <span style={{ color: '#ff4d1c' }}>.</span>
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(240,238,232,0.45)',
            lineHeight: 1.7,
            maxWidth: '400px',
            marginBottom: '32px',
          }}
        >
          Motion Designer · Vidéaste · Webmaster · Community Manager
          <br />
          <span style={{ fontSize: '13px', opacity: 0.6 }}>
            Basé à Dakar, Sénégal 🇸🇳
          </span>
        </p>

        {/* BOUTONS */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href="#projects"
            style={{
              background: '#ff4d1c',
              color: '#fff',
              padding: '12px 26px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '12px 26px',
              borderRadius: '6px',
              color: '#ccc',
              textDecoration: 'none',
            }}
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div
        style={{
          position: 'relative',
          borderRadius: '18px',
          overflow: 'hidden',
          border: '0.5px solid rgba(255,255,255,0.07)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* IMAGE */}
        <img
          src="/images/me1.jpeg"   // 👈 mets ton image ici (ou .png)
          alt="Ousmane Diallo"
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* overlay cinematic */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)',
          }}
        />

        {/* label */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'Syne, sans-serif',
            }}
          >
            Portfolio 2025
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
            Motion Design · Vidéo · Design
          </p>
        </div>
      </div>
    </section>
  );
}