import { useState } from 'react';

const WHATSAPP_NUMBER = '221778592682';

const socials = [
  {
    label: 'LinkedIn',
    icon: '💼',
    href: 'https://linkedin.com/in/ousmanediallookm',
  },
  {
    label: 'Instagram',
    icon: '📸',
    href: 'https://instagram.com/ousmanediallookm',
  },
  {
    label: 'YouTube',
    icon: '▶',
    href: 'https://youtube.com/@ousmanediallookm',
  },
];

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = [
      'Bonjour Ousmane !',
      '',
      'Je vous contacte depuis votre portfolio.',
      '',
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Sujet : ${form.subject}`,
      '',
      'Message :',
      form.message,
    ].join('\n');

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  const inputStyle = {
    width: '100%',
    minWidth: 0,
    background: 'rgba(255,255,255,0.03)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    borderRadius: '7px',
    padding: '12px 16px',
    color: '#f0eee8',
    fontSize: '16px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontSize: '12px',
    color: 'rgba(240,238,232,0.5)',
    display: 'block',
    marginBottom: '6px',
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(56px, 8vw, 96px) clamp(16px, 5vw, 48px) 80px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <p className="section-label">Contact</p>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '-2px',
            color: '#f0eee8',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          Travaillons
          <br />
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,77,28,0.6)',
            }}
          >
            ensemble
          </span>
          <span style={{ color: '#ff4d1c' }}>.</span>
        </h2>

        <p
          style={{
            fontSize: '15px',
            color: 'rgba(240,238,232,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Tu as un projet de motion design, vidéo ou digital ?
          <br />
          Contacte-moi, je réponds sous 24h.
        </p>
      </div>

      <div
        className="contact-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
          gap: 'clamp(24px, 5vw, 60px)',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Informations de contact */}
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontSize: '12px',
              color: 'rgba(240,238,232,0.5)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Contact direct
          </p>

          {[
            { icon: '📱', label: 'WhatsApp', value: '+221 77 859 26 82' },
            { icon: '📧', label: 'Email', value: 'ousman@diallookm@gmail.com' },
            { icon: '📍', label: 'Localisation', value: 'Dakar, Sénégal, Ouakam' },
            { icon: '⏱', label: 'Disponibilité', value: 'Ouvert aux projets' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '12px',
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '0.5px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
                overflowWrap: 'anywhere',
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '11px',
                    color: 'rgba(240,238,232,0.5)',
                    marginBottom: '2px',
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: '13px', color: '#f0eee8' }}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}

          <p
            style={{
              fontSize: '12px',
              color: 'rgba(240,238,232,0.5)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              margin: '32px 0 16px',
            }}
          >
            Réseaux sociaux
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  color: 'rgba(240,238,232,0.7)',
                  textDecoration: 'none',
                  fontSize: '12px',
                }}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Formulaire WhatsApp */}
        <form onSubmit={handleSubmit} style={{ minWidth: 0 }}>
          <div
            className="contact-fields"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <div>
              <label htmlFor="contact-name" style={labelStyle}>
                Nom complet
              </label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Ton nom"
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="contact-email" style={labelStyle}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="ton@email.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="contact-subject" style={labelStyle}>
              Sujet
            </label>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Motion design, vidéo, collaboration..."
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="contact-message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Décris ton projet..."
              style={{
                ...inputStyle,
                resize: 'vertical',
                lineHeight: 1.6,
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: '#25D366',
              color: '#fff',
              border: 'none',
              borderRadius: '7px',
              padding: '14px',
              fontSize: '15px',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
            }}
          >
            Envoyer sur WhatsApp ↗
          </button>

          <p
            style={{
              marginTop: '12px',
              fontSize: '12px',
              color: 'rgba(240,238,232,0.5)',
              textAlign: 'center',
            }}
          >
            Tes informations seront préparées dans WhatsApp.
            Tu devras confirmer l’envoi dans l’application.
          </p>
        </form>
      </div>
    </section>
  );
}
