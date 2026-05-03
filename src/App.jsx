import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';

function Divider() {
  return <div className="divider" />;
}

function Footer() {
  return (
    <footer style={{
      padding: '32px 48px',
      borderTop: '0.5px solid rgba(255,255,255,0.06)',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: '12px',
    }}>
      <p style={{ fontSize: '12px', color: 'rgba(240,238,232,0.2)' }}>
        © 2025 Ousmane Diallo — Tous droits réservés
      </p>
      <p style={{ fontSize: '12px', color: 'rgba(240,238,232,0.2)' }}>
        Dakar, Sénégal 🇸🇳
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
