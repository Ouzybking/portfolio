const posts = [
  {
    id: 1,
    title: 'Comment réussir son motion design en 2025',
    excerpt: 'Les tendances, les outils et les techniques indispensables pour créer des animations qui captivent en 2025.',
    category: 'Motion Design',
    date: 'Mars 2025',
    readTime: '5 min',
    gradient: 'linear-gradient(135deg, #1a0830, #2d1050)',
  },
  {
    id: 2,
    title: 'Stratégie réseaux sociaux pour les créatifs',
    excerpt: 'Comment construire une présence digitale forte quand on est motion designer ou vidéaste indépendant.',
    category: 'Social Media',
    date: 'Fév. 2025',
    readTime: '4 min',
    gradient: 'linear-gradient(135deg, #0d1f3c, #183058)',
  },
  {
    id: 3,
    title: 'Mon workflow vidéo de A à Z',
    excerpt: 'De la prise de vue à l\'export final — le processus complet que j\'utilise pour mes projets clients.',
    category: 'Vidéo',
    date: 'Jan. 2025',
    readTime: '7 min',
    gradient: 'linear-gradient(135deg, #1c1205, #3d2a0a)',
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '96px 48px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px',
      }}>
        <div>
          <p className="section-label">Blog</p>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Partage<br />
            <span style={{ color: 'rgba(240,238,232,0.22)' }}>& conseils</span>
          </h2>
        </div>
        <a href="#" style={{
          color: 'rgba(240,238,232,0.4)', textDecoration: 'none',
          fontSize: '13px', border: '0.5px solid rgba(255,255,255,0.1)',
          padding: '9px 18px', borderRadius: '6px',
          transition: 'color 0.2s, border-color 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#ff4d1c';
            e.currentTarget.style.borderColor = 'rgba(255,77,28,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'rgba(240,238,232,0.4)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          Tous les articles →
        </a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
      }}>
        {posts.map((post, i) => (
          <article key={post.id} style={{
            background: 'rgba(255,255,255,0.02)',
            border: '0.5px solid rgba(255,255,255,0.07)',
            borderRadius: '12px', overflow: 'hidden',
            cursor: 'pointer', transition: 'all 0.25s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,77,28,0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Header coloré */}
            <div style={{
              height: '120px', background: post.gradient,
              position: 'relative', display: 'flex',
              alignItems: 'flex-end', padding: '16px',
            }}>
              <span style={{
                background: 'rgba(0,0,0,0.35)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: '3px', padding: '3px 8px',
                fontSize: '10px', color: 'rgba(240,238,232,0.7)',
                letterSpacing: '0.3px',
              }}>
                {post.category}
              </span>
            </div>

            {/* Contenu */}
            <div style={{ padding: '22px' }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: '15px', color: '#f0eee8',
                lineHeight: 1.4, marginBottom: '10px',
              }}>
                {post.title}
              </h3>
              <p style={{
                fontSize: '13px', color: 'rgba(240,238,232,0.4)',
                lineHeight: 1.65, marginBottom: '20px',
              }}>
                {post.excerpt}
              </p>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '0.5px solid rgba(255,255,255,0.05)',
                paddingTop: '14px',
              }}>
                <span style={{ fontSize: '11px', color: 'rgba(240,238,232,0.25)' }}>
                  {post.date}
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(240,238,232,0.25)' }}>
                  {post.readTime} de lecture
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
