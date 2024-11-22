import React, { useRef } from 'react';
import '../styles/LandingPage.css';
import Header from '../components/Header';

const LandingPage: React.FC = () => {
  const promotionsRef = useRef<HTMLElement>(null);

  const handleScrollToPromotions = () => {
    promotionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <i className="fas fa-dice" style={{ fontSize: '100px', color: '#fff' }}></i> {/* Ícone de cassino */}
          <h1>Venha conhecer o melhor cassino</h1>
          <p>Experimente a emoção dos grandes cassinos sem sair de casa. Jogue os melhores jogos de cassino com segurança e aproveite bônus exclusivos.</p>
          <button className="cta-button" onClick={handleScrollToPromotions}>
            Saber mais
          </button>
        </div>
      </section>

      <section id="promotions" className="promotions" ref={promotionsRef}>
        <h2>Promoções Exclusivas</h2>
        <div className="promotion-cards">
          <div className="promotion-card">
            <i className="fas fa-gift"></i>
            <h3>Bônus de Boas-Vindas</h3>
            <p>Ganhe um bônus de até 100% no seu primeiro depósito!</p>
          </div>
          <div className="promotion-card">
            <i className="fas fa-coins"></i>
            <h3>Rodadas Grátis</h3>
            <p>Aproveite 50 rodadas grátis em slots selecionados ao se registrar. Jogue e ganhe sem gastar nada!</p>
          </div>
          <div className="promotion-card">
            <i className="fas fa-refresh"></i>
            <h3>Bônus de Recarga</h3>
            <p>Ganhe 20% de bônus em todos os seus depósitos durante o fim de semana!</p>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="contact">
        <h2>Entre em Contato</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className="footer">
  <div className="footer-content">
    <p>&copy; 2024 Casa de Apostas. Todos os direitos reservados.</p>
    <p>&copy; Criado por: Gabriel Vanz</p>

    <div className="footer-links">
      <p><a href="https://www.instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      <p><a href="https://www.facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      <p><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
      <p><a href="45 99811-2752">45 99811-2752</a></p>
      <p><a href="gzvanz@minha.fag.edu.br<">gzvanz@minha.fag.edu.br</a></p>
    </div>

    <div className="about-us">
      <p><a href="/sobre-nos">Sobre nós</a></p>
    </div>
  </div>
</section>
    </div>
  );
};

export default LandingPage;
