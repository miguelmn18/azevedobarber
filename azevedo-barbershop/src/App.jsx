import React, { useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
  Scissors,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock3,
  Phone,
  Instagram,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",

    title: "Corte de cabelo",

    description:
      "Do clássico ao degradê moderno, com acabamento preciso e estilo pensado para você.",

    icon: Scissors,

    tag: "CORTE & ESTILO",
  },

  {
    number: "02",

    title: "Barba",

    description:
      "Modelagem, alinhamento e cuidado para um visual marcante e bem cuidado.",

    icon: Sparkles,

    tag: "RITUAL MASCULINO",
  },

  {
    number: "03",

    title: "Prótese Capilar",

    description: "Atendimento personalizado e feito com atenção aos detalhes.",

    icon: ShieldCheck,

    tag: "SOLUÇÃO ESTÉTICA",
  },

  {
    number: "04",

    title: "Relaxamento capilar",

    description:
      "Tratamento para ajudar a controlar o volume e deixar os fios mais alinhados.",

    icon: Sparkles,

    tag: "TRATAMENTO",
  },
];

const prosthesisBenefits = [
  "Aparência natural e personalizada",

  "Orientação individual para escolher a melhor opção",

  "Aplicação e acabamento com atenção aos detalhes",

  "Cuidados e manutenção explicados com clareza",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",

    phone: "",

    service: "Corte de cabelo",

    message: "",
  });

  // Substitua pelo WhatsApp comercial:

  // código do país + DDD + número, somente dígitos.

  const whatsappNumber = "5511930013421";

  // Troque pelo endereço real do sistema de agendamento.

  const bookingUrl = "/agendamento";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const submitContact = (e) => {
    e.preventDefault();

    const text = [
      "Olá, Azevedo Barber!",

      `Nome: ${form.name}`,

      `WhatsApp: ${form.phone}`,

      `Serviço: ${form.service}`,

      `Mensagem: ${form.message || "Gostaria de mais informações."}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` + `?text=${encodeURIComponent(text)}`;

    window.open(
      whatsappUrl,

      "_blank",

      "noopener,noreferrer",
    );
  };

  return (
    <main>
      {/* BARRA SUPERIOR */}

      <div className="topline">
        <span>BARBEARIA • ESTILO • IDENTIDADE</span>

        <span className="topline-right">
          ATITUDE EM CADA DETALHE
          <i className="live-dot" />
        </span>
      </div>

      {/* NAVEGAÇÃO */}

      <header className="navbar">
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Azevedo Barber - início"
        >
          <span className="brand-mark">
           <img src="/logo-azevedo.jpg" alt="" />
          </span>

          <span className="brand-copy">
            <strong>AZEVEDO</strong>

            <small>BARBER / BARBERSHOP</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#sobre" onClick={closeMenu}>
            A barbearia
          </a>

          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>

          <a href="#proteses" onClick={closeMenu}>
            Prótese capilar
          </a>

          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Entrar em contato
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* HERO / CABEÇALHO ANIMADO */}

      <section className="hero" id="inicio">
        <div className="hero-grid" />

        <div className="scanline" />

        <div className="hero-word word-one">AZEVEDO</div>

        <div className="hero-word word-two">BARBER</div>

        <div className="hero-word word-three">BARBERSHOP</div>

        <div className="hero-stamp">
          <span>EST.</span>

          <strong>
            20<span>26</span>
          </strong>

          <small>
            THE ORIGINAL
            <br />
            BARBER CLUB
          </small>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            VIBE CLÁSSICA. ATITUDE RETRÔ. CORTE ATUAL.
          </p>

          <h1>
            SEU ESTILO.
            <br />
            <span>SUA MARCA.</span>
          </h1>

          <p className="hero-description">
            Precisão no corte, personalidade no visual e cuidado em cada
            detalhe. Bem-vindo à experiência Azevedo Barber.
          </p>

          <div className="hero-actions">
            <a
              className="button button-light"
              href={bookingUrl}
              target={bookingUrl.startsWith("http") ? "_blank" : undefined}
              rel={bookingUrl.startsWith("http") ? "noreferrer" : undefined}
            >
              AGENDAR HORÁRIO
              <ArrowUpRight size={17} />
            </a>

            <a className="text-link" href="#servicos">
              EXPLORAR SERVIÇOS
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* FOTO FIXA DO PROPRIETÁRIO */}

        <div className="portrait-wrap">
          <div className="portrait-frame">
            {/* Substitua pela foto real do proprietário. */}

            <img
              className="owner-photo"
              src="/barber.jpg"
              alt="Retrato ilustrativo do proprietário"
            />

            <div className="portrait-vignette" />

            <div className="portrait-label">
              <span className="label-line" />

              <div>
                <small>O PROFISSIONAL</small>

                <strong>POR TRÁS DO ESTILO</strong>
              </div>
            </div>
          </div>

          <div className="portrait-index">
            AB<span> / 001</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL PARA DESCOBRIR</span>

          <div className="scroll-track">
            <i />
          </div>

          <span className="hero-bottom-right">CUIDADO. TÉCNICA. PRESENÇA.</span>
        </div>
      </section>

      {/* FAIXA ANIMADA */}

      <section className="ticker" aria-label="Especialidades">
        <div className="ticker-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              COUNTRY VIBES <b>✳</b>
              ARCADE MOOD <b>✳</b>
              PLAYSTATION GENERATION <b>✳</b>
              OLD SCHOOL, NEW STYLE <b>✳</b>
            </span>
          ))}
        </div>
      </section>

      {/* BIOGRAFIA */}

      <section className="section about-section" id="sobre">
        <div className="section-kicker">
          <span>01 / QUEM SOMOS</span>

          <span className="kicker-line" />
        </div>

        <div className="about-grid">
          <div className="about-heading">
            <p className="eyebrow">TRADIÇÃO COM VISÃO DE FUTURO</p>

            <h2>
              O DETALHE
              <br />
              FAZ <em>TODA</em>
              <br />A DIFERENÇA.
            </h2>

            <div className="outline-number">AB.</div>
          </div>

          <div className="about-copy">
            <p className="lead">
              A barbearia é mais do que um lugar para cortar o cabelo. É onde
              confiança, identidade e atitude se encontram.
            </p>

            <p>
              A Azevedo Barber nasceu para oferecer um atendimento próximo,
              técnica cuidadosa e um ambiente onde cada cliente se sinta à
              vontade. Aqui, cada detalhe importa: da conversa inicial ao
              acabamento final.
            </p>

            <p className="editable-note">
              Personalize este texto com a história do proprietário, sua
              formação, tempo de experiência e os valores que tornam a barbearia
              única.
            </p>

            <div className="signature">
              <span className="signature-line" />

              <div>
                <strong>AZEVEDO</strong>

                <small>BARBER & FOUNDER</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}

      <section className="services-section section" id="servicos">
        <div className="section-kicker">
          <span>02 / SERVIÇOS</span>

          <span className="kicker-line" />

          <span>FEITOS SOB MEDIDA</span>
        </div>

        <div className="section-heading-row">
          <div>
            <p className="eyebrow">NOSSO MENU</p>

            <h2>
              O SEU VISUAL.
              <br />
              <em>DO SEU JEITO.</em>
            </h2>
          </div>

          <p className="section-intro">
            Serviços essenciais e cuidados especiais para você sair daqui com a
            confiança renovada.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>

                <div className="service-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div className="service-info">
                  <span>{service.tag}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <a
                  href="#contato"
                  className="service-arrow"
                  aria-label={`Agendar ${service.title}`}
                >
                  <ArrowUpRight />
                </a>
              </article>
            );
          })}
        </div>

        <div className="service-footnote">
          <span>*</span>
          Consulte valores e disponibilidade diretamente com a barbearia.
        </div>
      </section>

      {/* PRÓTESE CAPILAR */}

      <section className="prosthesis-section" id="proteses">
        <div className="prosthesis-bg-text">REDEFINE</div>

        <div className="prosthesis-image">
          <video
            src="/video-divulgação-protese.mp4"
            alt="Ambiente de barbearia e cuidado masculino"
            controls 
            
          />

          <div className="image-caption">
            <span>PRECISÃO EM CADA ETAPA</span>

            <span>AB / CAPILAR</span>
          </div>
        </div>

        <div className="prosthesis-content">
          <div className="section-kicker">
            <span>03 / PRÓTESE CAPILAR</span>
          </div>

          <p className="eyebrow">NOVA CONFIANÇA. NOVA FASE.</p>

          <h2>
            RECUPERE
            <br />
            SUA <em>ESSÊNCIA.</em>
          </h2>

          <p className="prosthesis-lead">
            Uma solução personalizada para quem busca naturalidade, estilo e
            segurança ao se olhar no espelho.
          </p>

          <p className="prosthesis-copy">
            Cada pessoa tem uma necessidade diferente. Por isso, o atendimento
            começa com uma conversa para entender seu objetivo, avaliar
            possibilidades e orientar você sobre os cuidados e a manutenção.
          </p>

          <ul>
            {prosthesisBenefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={17} />

                {benefit}
              </li>
            ))}
          </ul>

          <a className="button button-light" href="#contato">
            QUERO SABER MAIS
            <ArrowUpRight size={17} />
          </a>

          <small className="disclaimer">
            Agende uma avaliação para entender qual solução é adequada ao seu
            caso.
          </small>
        </div>
      </section>

      {/* FRASE DE DESTAQUE */}

      <section className="quote-section">
        <span className="quote-mark">“</span>

        <p>
          ESTILO NÃO SE EXPLICA.
          <br />
          <em>SE SENTE.</em>
        </p>

        <div className="quote-rule" />

        <span className="quote-byline">
          AZEVEDO BARBER — SUA IDENTIDADE, EM EVIDÊNCIA.
        </span>
      </section>

      {/* LOCALIZAÇÃO */}

      <section className="location-section section" id="localizacao">
        <div className="section-kicker">
          <span>04 / ONDE ESTAMOS</span>

          <span className="kicker-line" />
        </div>

        <div className="location-grid">
          <div>
            <p className="eyebrow">VAMOS MARCAR?</p>

            <h2>
              SEU PRÓXIMO
              <br />
              <em>CORTE COMEÇA AQUI.</em>
            </h2>

            <p className="location-copy">
              Passe para tomar um café, renovar o visual e conhecer de perto a
              experiência Azevedo Barber.
            </p>

            <div className="location-detail">
              <MapPin size={19} />

              <div>
                <strong>ENDEREÇO DA BARBEARIA</strong>

                <span>Adicione rua, número, bairro e cidade aqui.</span>
              </div>
            </div>

            <div className="location-detail">
              <Clock3 size={19} />

              <div>
                <strong>HORÁRIO DE ATENDIMENTO</strong>

                <span>Adicione os dias e horários de funcionamento.</span>
              </div>
            </div>

            <div className="location-detail">
              <Phone size={19} />

              <div>
                <strong>CONTATO</strong>

                <span>Adicione o telefone e WhatsApp comercial.</span>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <iframe
              title="Localização da Azevedo Barber"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0729997559692!2d-35.796868791331896!3d-6.637856764857719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7addda53b2dfc0b%3A0xe0144dd48848b62f!2sR.%20Ant%C3%B4nio%20Fausto%20de%20Macedo%20-%20Cacimba%20de%20Dentro%2C%20PB%2C%2058230-000!5e0!3m2!1spt-BR!2sbr!4v1791936524113!5m2!1spt-BR!2sbr"
              width="100%"
              height="110%"
              style={{
                border: 0,
                display: "block",
                minHeight: "400px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <a
              className="map-directions"
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Ant%C3%B4nio+Fausto+de+Macedo%2C+Cacimba+de+Dentro%2C+PB"
              target="_blank"
              rel="noreferrer"
            >
              COMO CHEGAR
              <MoveUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}

      <section className="contact-section" id="contato">
        <div className="contact-left">
          <div className="section-kicker">
            <span>05 / CONTATO</span>

            <span className="kicker-line" />
          </div>

          <p className="eyebrow">VAMOS CUIDAR DO SEU ESTILO?</p>

          <h2>
            MARQUE SEU
            <br />
            <em>HORÁRIO.</em>
          </h2>

          <a
            className="button button-light booking-button"
            href={bookingUrl}
            target={bookingUrl.startsWith("http") ? "_blank" : undefined}
            rel={bookingUrl.startsWith("http") ? "noreferrer" : undefined}
          >
            ACESSAR SISTEMA DE AGENDAMENTO
            <ArrowUpRight size={17} />
          </a>

          <p className="contact-intro">
            Quer tirar uma dúvida antes de marcar? Use o formulário ao lado para
            perguntar sobre cortes, barba, prótese capilar, valores, manutenção
            ou qualquer outro serviço. Nossa equipe responde pelo WhatsApp.
          </p>

          <a
            className="social-link"
            href="https://www.instagram.com/azevedobarbershopka/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} />
            SIGA A AZEVEDO BARBER
            <ArrowUpRight size={15} />
          </a>
        </div>

        <form className="contact-form" onSubmit={submitContact}>
          <div className="form-top">
            <span>TIRE SUAS DÚVIDAS</span>

            <span>AB / CONTACT</span>
          </div>

          <p className="form-explainer">
            Este espaço é para perguntas sobre nossos serviços. Conte sua dúvida
            e enviaremos sua mensagem para o WhatsApp da barbearia.
          </p>

          <label>
            SEU NOME
            <input
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,

                  name: e.target.value,
                })
              }
              placeholder="Como podemos chamar você?"
            />
          </label>

          <label>
            WHATSAPP
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,

                  phone: e.target.value,
                })
              }
              placeholder="(00) 00000-0000"
            />
          </label>

          <label>
            SERVIÇO DE INTERESSE
            <select
              value={form.service}
              onChange={(e) =>
                setForm({
                  ...form,

                  service: e.target.value,
                })
              }
            >
              {[
                ...services.map((s) => s.title),

                "Prótese capilar",

                "Outro serviço",
              ].map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label>
            MENSAGEM
            <span className="optional">(OPCIONAL)</span>
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,

                  message: e.target.value,
                })
              }
              placeholder="Ex.: Qual o valor da prótese capilar? Como funciona a manutenção? Tenho dúvidas sobre um corte..."
            />
          </label>

          <button className="button button-light form-submit" type="submit">
            ENVIAR MINHA DÚVIDA PELO WHATSAPP
            <ArrowUpRight size={17} />
          </button>

          <small className="form-hint">
            O WhatsApp será aberto com sua mensagem pronta para envio.
          </small>
        </form>
      </section>

      {/* RODAPÉ */}

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">
           <img src="/logo-azevedo.jpg" alt="" />
          </span>

          <span className="brand-copy">
            <strong>AZEVEDO</strong>

            <small>BARBER / BARBERSHOP</small>
          </span>
        </a>

        <span className="footer-motto">CORTE LIMPO. PRESENÇA FORTE.</span>

        <span className="copyright">
          © {new Date().getFullYear()} AZEVEDO BARBER. TODOS OS DIREITOS
          RESERVADOS.
        </span>

        <a href="#inicio" className="back-top">
          VOLTAR AO TOPO ↑
        </a>
      </footer>
    </main>
  );
}
