import { useState } from 'react';

const socials = [
  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/ousmanediallookm' },
  { label: 'Instagram', icon: '📸', href: 'https://instagram.com/ousmanediallookm' },
  { label: 'YouTube', icon: '▶', href: 'https://youtube.com/@ousmanediallookm' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu connecteras ton backend ou EmailJS
    console.log('Form submitted:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.03)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    borderRadius: '7px', padding: '12px 16px',
    color: '#f0eee8', fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '96px 48px 80px' }}>
      {/* Header centré */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <p className="section-label">Contact</p>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-2px',
          color: '#f0eee8', lineHeight: 1.1, marginBottom: '20px',
        }}>
          Travaillons<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,77,28,0.6)' }}>
            ensemble
          </span>
          <span style={{ color: '#ff4d1c' }}>.</span>
        </h2>
        <p style={{
          fontSize: '15px', color: 'rgba(240,238,232,0.4)',
          maxWidth: '480px', margin: '0 auto', fontWeight: 300, lineHeight: 1.7,
        }}>
          Tu as un projet de motion design, vidéo ou digital ?<br />
          Contacte-moi, je réponds sous 24h.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: '60px', maxWidth: '960px', margin: '0 auto',
      }}>
        {/* LEFT — infos contact */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <p style={{
              fontSize: '12px', color: 'rgba(240,238,232,0.3)',
              letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px',
            }}>
              Contact direct
            </p>
            {[
              { icon: '📧', label: 'Email', value: 'ousman@diallookm@gmail.com' },
              { icon: '📍', label: 'Localisation', value: 'Dakar, Sénégal, Ouakam' },
              { icon: '⏱', label: 'Disponibilité', value: 'Ouvert aux projets' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                marginBottom: '18px', padding: '14px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
              }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: '11px', color: 'rgba(240,238,232,0.3)', marginBottom: '2px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '13px', color: '#f0eee8' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Réseaux sociaux */}
          <p style={{
            fontSize: '12px', color: 'rgba(240,238,232,0.3)',
            letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Réseaux sociaux
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '6px', padding: '8px 14px',
                color: 'rgba(240,238,232,0.5)', textDecoration: 'none',
                fontSize: '12px', transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#ff4d1c';
                  e.currentTarget.style.borderColor = 'rgba(255,77,28,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(240,238,232,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <span style={{ fontSize: '14px' }}>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — formulaire */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <div>
              <label style={{ fontSize: '12px', color: 'rgba(240,238,232,0.35)', display: 'block', marginBottom: '6px' }}>
                Nom complet
              </label>
              <input
                name="name" value={form.name} onChange={handleChange}
                required placeholder="Ton nom"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(255,77,28,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: 'rgba(240,238,232,0.35)', display: 'block', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                required placeholder="ton@email.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(255,77,28,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '12px', color: 'rgba(240,238,232,0.35)', display: 'block', marginBottom: '6px' }}>
              Sujet
            </label>
            <input
              name="subject" value={form.subject} onChange={handleChange}
              required placeholder="Projet motion design, vidéo, collaboration..."
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(255,77,28,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', color: 'rgba(240,238,232,0.35)', display: 'block', marginBottom: '6px' }}>
              Message
            </label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              required rows={5} placeholder="Décris ton projet..."
              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,77,28,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <button type="submit" style={{
            width: '100%', background: sent ? 'rgba(20,160,80,0.8)' : '#ff4d1c',
            color: '#fff', border: 'none', borderRadius: '7px',
            padding: '14px', fontSize: '14px', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
            transition: 'all 0.3s', letterSpacing: '0.2px',
          }}>
            {sent ? '✓ Message envoyé !' : 'Envoyer le message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
