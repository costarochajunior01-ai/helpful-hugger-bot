import { createFileRoute } from "@tanstack/react-router";
import logoKLibra from "@/assets/logo-k-libra.png";
import logoPegasus from "@/assets/logo-pegasus.png";

const css = `
:root {
  --primary-orange: #FC5A00;
  --primary-black: #0C0C0C;
  --primary-white: #FFFFFF;
  --dark-orange: #C14000;
  --light-orange: #FF7B39;
  --secondary-red: #FF3333;
  --secondary-graphite: #181818;
  --bg-light: #F8FAFC;
  --text-dark: #1E293B;
  --text-muted: #64748B;
  --border-color: #E2E8F0;
  --font-main: 'Montserrat', sans-serif;
}
.kl * { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
.kl {
  font-family: var(--font-main);
  color: var(--text-dark);
  background-color: var(--primary-white);
  line-height: 1.6;
  font-weight: 400;
}
.kl h1, .kl h2, .kl h3, .kl h4 {
  font-family: var(--font-main);
  text-transform: uppercase;
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.kl .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 0 15px; }
.kl .section-padding { padding: 100px 0; }
.kl .bg-light { background-color: var(--bg-light); }
.kl .bg-dark { background-color: var(--primary-black); color: var(--primary-white); }
.kl .bg-dark h2, .kl .bg-dark h3 { color: var(--primary-white); }
.kl .text-center { text-align: center; }
.kl .section-header { margin-bottom: 60px; max-width: 850px; margin-left: auto; margin-right: auto; }
.kl .section-header h2 {
  font-size: 2.2rem; color: var(--primary-black); margin-bottom: 15px;
  position: relative; display: inline-block;
}
.kl .bg-dark .section-header h2 { color: var(--primary-white); }
.kl .section-header h2::after {
  content: ''; display: block; width: 70px; height: 5px;
  background: var(--primary-orange); margin: 15px auto 0; transform: skewX(-15deg);
}
.kl .btn {
  display: inline-block; padding: 18px 36px; font-family: var(--font-main);
  font-weight: 800; font-style: italic; font-size: 0.95rem; text-decoration: none;
  text-transform: uppercase; letter-spacing: 0.05em; border-radius: 2px;
  transition: all 0.3s ease; cursor: pointer; border: none;
}
.kl .btn-primary {
  background-color: var(--primary-orange); color: var(--primary-white);
  box-shadow: 0 4px 15px rgba(252, 90, 0, 0.3);
}
.kl .btn-primary:hover {
  background-color: var(--dark-orange); transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(193, 64, 0, 0.4);
}
.kl .btn-secondary {
  background-color: transparent; color: var(--primary-white);
  border: 2px solid var(--primary-white);
}
.kl .btn-secondary:hover { background-color: var(--primary-white); color: var(--primary-black); }
.kl header {
  background-color: var(--primary-black); padding: 15px 0; position: fixed;
  width: 100%; top: 0; z-index: 1000; border-bottom: 2px solid var(--primary-orange);
}
.kl .nav-container { display: flex; justify-content: space-between; align-items: center; }
.kl .brand-logo { display: flex; align-items: center; text-decoration: none; padding: 5px 0; }
.kl .brand-logo img { height: 38px; width: auto; display: block; object-fit: contain; }
.kl .nav-links { display: flex; align-items: center; gap: 25px; list-style: none; }
.kl .nav-links a {
  color: var(--primary-white); text-decoration: none; font-weight: 700;
  font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;
  transition: color 0.3s ease;
}
.kl .nav-links a:hover { color: var(--primary-orange); }
.kl .header-cta { padding: 12px 24px; font-size: 0.85rem; }
.kl .hero {
  background: linear-gradient(rgba(12, 12, 12, 0.88), rgba(12, 12, 12, 0.95)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  padding: 180px 0 100px; color: var(--primary-white); min-height: 90vh;
  display: flex; align-items: center; position: relative;
}
.kl .hero::before {
  content: ''; position: absolute; top: 0; right: 0; width: 30%; height: 100%;
  background: linear-gradient(135deg, transparent 50%, rgba(252, 90, 0, 0.05) 50%);
  pointer-events: none;
}
.kl .hero-content { max-width: 850px; }
.kl .hero h1 { font-size: 3.2rem; line-height: 1.1; color: var(--primary-white); margin-bottom: 24px; }
.kl .hero h1 span { color: var(--primary-orange); }
.kl .hero p { font-size: 1.2rem; color: #CBD5E1; margin-bottom: 40px; max-width: 700px; }
.kl .hero-btns { display: flex; gap: 20px; margin-bottom: 60px; flex-wrap: wrap; }
.kl .hero-indicators {
  display: flex; gap: 30px; border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 30px; flex-wrap: wrap;
}
.kl .indicator-item {
  display: flex; align-items: center; gap: 10px; font-weight: 700;
  font-size: 0.85rem; letter-spacing: 0.05em; color: #94A3B8;
}
.kl .indicator-item i { color: var(--primary-orange); font-size: 1.1rem; }
.kl .graphic-arrows {
  color: var(--primary-orange); font-style: italic; font-weight: 900;
  letter-spacing: -2px; margin-right: 5px;
}
.kl .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.kl .card {
  background: var(--primary-white); padding: 40px 30px; border-radius: 4px;
  border: 1px solid var(--border-color); border-bottom: 4px solid var(--primary-black);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: all 0.3s ease;
}
.kl .card:hover { transform: translateY(-5px); border-bottom-color: var(--primary-orange); }
.kl .card-icon { font-size: 2.2rem; color: var(--primary-orange); margin-bottom: 20px; }
.kl .card h3 { font-size: 1.25rem; margin-bottom: 15px; color: var(--primary-black); }
.kl .thesis {
  background: linear-gradient(90deg, var(--primary-black) 0%, var(--secondary-graphite) 100%);
  border-left: 8px solid var(--primary-orange); position: relative; overflow: hidden;
}
.kl .thesis::after {
  content: '>>'; position: absolute; right: -20px; bottom: -40px; font-size: 15rem;
  font-family: var(--font-main); font-weight: 900; font-style: italic;
  color: rgba(252, 90, 0, 0.03); pointer-events: none;
}
.kl .thesis h2 { font-size: 2.5rem; line-height: 1.2; margin-bottom: 20px; color: var(--primary-white); }
.kl .thesis p { font-size: 1.2rem; color: #E2E8F0; max-width: 900px; }
.kl .pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }
.kl .pillar-card {
  background: var(--bg-light); padding: 40px; border-radius: 4px; position: relative;
  overflow: hidden; border-top: 3px solid var(--primary-orange);
}
.kl .pillar-number {
  font-size: 4rem; font-weight: 900; font-style: italic; color: rgba(12, 12, 12, 0.06);
  position: absolute; top: 10px; right: 20px;
}
.kl .pillar-card h3 { font-size: 1.1rem; color: var(--primary-orange); margin-bottom: 10px; }
.kl .pillar-card h4 { font-size: 1.3rem; color: var(--primary-black); margin-bottom: 15px; }
.kl .power-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.kl .power-img {
  width: 100%; height: 400px; object-fit: cover; border-radius: 4px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); border-left: 6px solid var(--primary-orange);
}
.kl .brands-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px; margin-top: 40px; }
.kl .brand-item {
  background: var(--primary-white); padding: 30px 20px; border: 1px solid var(--border-color);
  border-radius: 4px; display: flex; flex-direction: column; align-items: center;
  justify-content: center; text-align: center; transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}
.kl .brand-item:hover {
  border-bottom-color: var(--primary-orange); transform: translateY(-4px);
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.08);
}
.kl .brand-logo-img { max-width: 140px; height: auto; max-height: 60px; object-fit: contain; margin-bottom: 12px; }
.kl .brand-name {
  font-family: var(--font-main); font-weight: 900; font-style: italic; font-size: 1.4rem;
  color: var(--primary-black); letter-spacing: 0.05em; margin-bottom: 8px;
}
.kl .brand-tag {
  display: inline-block; background: rgba(252, 90, 0, 0.1); color: var(--primary-orange);
  font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 20px;
  text-transform: uppercase; margin-bottom: 12px;
}
.kl .brand-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; }
.kl .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; margin-bottom: 40px; }
.kl .product-category-card {
  background: var(--primary-white); border: 1px solid var(--border-color); border-radius: 4px;
  overflow: hidden; text-align: left; transition: all 0.3s ease;
  border-top: 4px solid var(--primary-black); display: flex; flex-direction: column;
  justify-content: space-between;
}
.kl .product-category-card:hover {
  border-top-color: var(--primary-orange); transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.08);
}
.kl .product-img-wrapper {
  position: relative; width: 100%; height: 200px; overflow: hidden;
  background-color: var(--secondary-graphite);
}
.kl .product-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.kl .product-category-card:hover .product-img-wrapper img { transform: scale(1.08); }
.kl .product-card-body {
  padding: 25px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;
}
.kl .product-category-card h3 { font-size: 1.2rem; color: var(--primary-black); margin-bottom: 10px; }
.kl .product-category-card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px; flex-grow: 1; }
.kl .product-list { list-style: none; border-top: 1px solid var(--border-color); padding-top: 15px; }
.kl .product-list li {
  font-size: 0.85rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;
  display: flex; align-items: center; gap: 8px;
}
.kl .product-list li i { color: var(--primary-orange); font-size: 0.75rem; }
.kl .turnover-box {
  background: var(--primary-white); padding: 50px; border-radius: 4px; border: 1px solid var(--border-color);
}
.kl .turnover-equation {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;
  gap: 20px; margin-top: 40px; padding: 30px; background: var(--secondary-graphite); border-radius: 4px;
}
.kl .eq-item { font-weight: 800; font-style: italic; font-size: 1.1rem; color: var(--primary-white); text-align: center; }
.kl .eq-operator { font-size: 1.5rem; color: var(--primary-orange); font-weight: 900; }
.kl .eq-result { color: var(--primary-orange); }
.kl .diff-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.kl .diff-card {
  background: var(--primary-white); padding: 30px 20px; border-radius: 4px;
  border-top: 4px solid var(--primary-black); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: border-color 0.3s ease;
}
.kl .diff-card:hover { border-top-color: var(--primary-orange); }
.kl .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 30px; }
.kl .step-card { position: relative; }
.kl .step-num {
  display: inline-block; width: 45px; height: 45px; background: var(--primary-orange);
  color: var(--primary-white); font-weight: 900; font-style: italic; text-align: center;
  line-height: 45px; border-radius: 2px; margin-bottom: 20px; font-size: 1.1rem;
}
.kl .institutional-data-container {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;
  align-items: stretch; margin-bottom: 50px;
}
.kl .stat-card {
  background: #ffffff; border: 1px solid var(--border-color); border-radius: 4px;
  padding: 30px 20px; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  display: flex; flex-direction: column; justify-content: center; align-items: center;
}
.kl .stat-icon { font-size: 2rem; color: var(--primary-orange); margin-bottom: 12px; }
.kl .stat-number {
  font-size: 2.2rem; font-weight: 900; font-style: italic; color: var(--primary-black);
  line-height: 1; margin-bottom: 8px;
}
.kl .stat-label { font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
.kl .testimonial-card {
  background: var(--primary-black); color: var(--primary-white); border-radius: 4px;
  padding: 30px 25px; border-left: 4px solid var(--primary-orange);
  display: flex; flex-direction: column; justify-content: space-between;
}
.kl .quote-icon { color: var(--primary-orange); font-size: 1.4rem; margin-bottom: 10px; }
.kl .testimonial-text { font-size: 0.9rem; font-style: italic; color: #CBD5E1; margin-bottom: 15px; }
.kl .testimonial-author strong { display: block; font-size: 0.85rem; color: var(--primary-white); }
.kl .testimonial-author span { font-size: 0.75rem; color: var(--text-muted); }
.kl .authority-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.kl .authority-card {
  background: var(--primary-white); padding: 35px 25px; border-radius: 4px;
  border: 1px solid var(--border-color); border-left: 4px solid var(--primary-orange);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.kl .authority-card .number {
  font-size: 2.5rem; font-weight: 900; font-style: italic; color: var(--primary-orange);
  line-height: 1; margin-bottom: 10px;
}
.kl .authority-card h3 { font-size: 1.1rem; color: var(--primary-black); margin-bottom: 10px; }
.kl .authority-card p { font-size: 0.9rem; color: var(--text-muted); }
.kl .coverage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.kl .coverage-list { list-style: none; margin-top: 20px; }
.kl .coverage-list li {
  font-size: 1rem; font-weight: 600; color: var(--text-dark); margin-bottom: 12px;
  display: flex; align-items: center; gap: 12px;
}
.kl .coverage-list li i { color: var(--primary-orange); font-size: 1.1rem; }
.kl .faq-grid { max-width: 850px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
.kl .faq-item {
  border: 1px solid var(--border-color); border-radius: 4px; padding: 28px;
  background: var(--primary-white); border-left: 4px solid var(--primary-black);
}
.kl .faq-item h3 { font-size: 1.1rem; margin-bottom: 12px; color: var(--primary-black); }
.kl .conversion-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.kl .form-container {
  background: var(--primary-white); padding: 40px; border-radius: 4px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.4); color: var(--text-dark);
  border-top: 6px solid var(--primary-orange);
}
.kl .form-container h3 { margin-bottom: 10px; font-size: 1.5rem; color: var(--primary-black); }
.kl .form-container p { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 25px; }
.kl .form-group { margin-bottom: 20px; }
.kl .form-group label {
  display: block; font-weight: 700; font-size: 0.8rem; margin-bottom: 6px;
  text-transform: uppercase; color: var(--primary-black);
}
.kl .form-control {
  width: 100%; padding: 14px; border: 1px solid var(--border-color); border-radius: 2px;
  font-family: var(--font-main); font-size: 0.95rem; background-color: #FAFAFA;
}
.kl .form-control:focus { outline: none; border-color: var(--primary-orange); background-color: var(--primary-white); }
.kl .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.kl .btn-full { width: 100%; padding: 20px; }
.kl .whatsapp-float {
  position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px;
  background-color: #25d366; color: #FFF; border-radius: 50px; text-align: center;
  font-size: 30px; box-shadow: 2px 4px 12px rgba(0,0,0,0.3); z-index: 100;
  display: flex; align-items: center; justify-content: center; text-decoration: none;
  transition: transform 0.3s ease;
}
.kl .whatsapp-float:hover { transform: scale(1.1); }
.kl footer {
  background-color: #060606; color: #64748B; padding: 40px 0; font-size: 0.85rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}
@media (max-width: 992px) {
  .kl .hero h1 { font-size: 2.4rem; }
  .kl .power-section, .kl .conversion-wrapper, .kl .coverage-grid { grid-template-columns: 1fr; }
  .kl .turnover-equation { flex-direction: column; text-align: center; }
  .kl .nav-links { display: none; }
}
@media (max-width: 768px) {
  .kl .section-padding { padding: 60px 0; }
  .kl .hero { padding: 140px 0 60px; }
  .kl .form-row { grid-template-columns: 1fr; }
  .kl .hero-btns { flex-direction: column; }
  .kl .btn { text-align: center; }
}
`;

const TITLE = "K-Libra | Distribuição B2B de Pneus, Câmaras e Reparação";
const DESCRIPTION =
  "Distribuidora B2B parceira para revendas, borracharias e oficinas. Pneus, câmaras de ar e produtos de reparação com reposição ágil e blindagem de margem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="kl">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header>
        <div className="container nav-container">
          <a href="#" className="brand-logo" aria-label="K-Libra B2B">
            <img src={logoKLibra} alt="K-Libra B2B Logo" />
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#marcas">Marcas Parceiras</a></li>
              <li><a href="#sobre">A K-Libra</a></li>
              <li><a href="#cobertura">Atendimento</a></li>
            </ul>
          </nav>

          <a href="#formulario" className="btn btn-primary header-cta">Solicitar Atendimento B2B</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>SUA REVENDA ABASTECIDA.<br /><span>SUA MARGEM PROTEGIDA.</span></h1>
            <p>Pneus, câmaras de ar e materiais de reparação para revendas, borracharias e oficinas que precisam de disponibilidade, condições competitivas e reposição ágil.</p>
            <div className="hero-btns">
              <a href="#formulario" className="btn btn-primary"><span className="graphic-arrows">&gt;&gt;</span> Solicitar Atendimento B2B</a>
              <a href="#produtos" className="btn btn-secondary">Ver Produtos B2B</a>
            </div>
            <div className="hero-indicators">
              <div className="indicator-item"><i className="fa-solid fa-truck-fast"></i> DISTRIBUIÇÃO B2B</div>
              <div className="indicator-item"><i className="fa-solid fa-rotate-right"></i> REPOSIÇÃO ÁGIL</div>
              <div className="indicator-item"><i className="fa-solid fa-boxes-stacked"></i> PORTFÓLIO ESTRATÉGICO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>QUANTO CUSTA FICAR SEM O PRODUTO CERTO?</h2>
            <p>Quando o produto não está disponível, sua venda pode ir para o concorrente. Quando a condição de compra não é competitiva, sua margem fica pressionada. E quando o produto não entrega a confiança esperada, o problema chega ao pós-venda.</p>
          </div>
          <div className="problem-grid">
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-store-slash"></i></div>
              <h3>01. VENDA PERDIDA</h3>
              <p>Seu cliente procura, não encontra no seu estoque e realiza a compra no concorrente que possui pronta entrega.</p>
            </div>
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-chart-line-down"></i></div>
              <h3>02. MARGEM PRESSIONADA</h3>
              <p>Condições desfavoráveis de aquisição dificultam a competitividade do preço final e comprimem a lucratividade.</p>
            </div>
            <div className="card">
              <div className="card-icon"><i className="fa-solid fa-shield-cat"></i></div>
              <h3>03. RISCO DE GARANTIA</h3>
              <p>Produtos sem padrão técnico geram devoluções frequentes, retrabalho e desgaste da imagem com o seu cliente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark thesis" id="sobre">
        <div className="container">
          <h2>VOCÊ NÃO VENDE APENAS PRODUTO.<br />VOCÊ VENDE DISPONIBILIDADE.</h2>
          <p>Para uma revenda, ter o produto certo no momento certo significa a diferença entre fechar um negócio ou perder o cliente. É por isso que a K-Libra atua como parceira para facilitar sua reposição, preservar sua competitividade e eliminar riscos na sua cadeia de abastecimento.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>UMA DISTRIBUIÇÃO PENSADA PARA O SEU NEGÓCIO.</h2>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-number">01</div>
              <h3>EFICIÊNCIA LOGÍSTICA</h3>
              <h4>Produto disponível. Reposição no momento certo.</h4>
              <p>Uma operação de distribuição preparada para facilitar o abastecimento da sua empresa e reduzir o tempo entre a necessidade e a chegada do pedido.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">02</div>
              <h3>BLINDAGEM DE MARGEM</h3>
              <h4>Compre bem para continuar competitivo.</h4>
              <p>Condições comerciais e poder de negociação em escala desenvolvidos para ajudar sua revenda a manter margens saudáveis no mercado B2B.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">03</div>
              <h3>SEGURANÇA TÉCNICA</h3>
              <h4>Venda produtos em que você pode confiar.</h4>
              <p>Um portfólio rigidamente selecionado para diferentes aplicações, focado em alta durabilidade e confiabilidade operacional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="power-section">
            <div>
              <h2>O PODER DE COMPRA QUE SUA REVENDA NÃO TEM SOZINHA.</h2>
              <p style={{ marginTop: 20, fontSize: "1.1rem" }}>A escala de compras da K-Libra amplia nossa capacidade de negociação direta e nos permite repassar condições altamente competitivas para a sua operação comercial.</p>
              <p style={{ marginTop: 15, color: "var(--text-muted)" }}>Trabalhamos para converter o volume de distribuição em poder de compra real para o lojista, garantindo rentabilidade sustentável.</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                alt="Operação Logística K-Libra"
                className="power-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marcas" className="section-padding bg-light" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="container text-center">
          <div className="section-header">
            <h2>MARCAS DE CONFIANÇA QUE DISTRIBUÍMOS</h2>
            <p>Trabalhamos em parceria com as fabricantes líderes de mercado para entregar tecnologia, alta performance e garantia comercial direta.</p>
          </div>

          <div className="brands-grid">
            <div className="brand-item">
              <img src={logoPegasus} alt="Logo Pegasus" className="brand-logo-img" loading="lazy" />
              <span className="brand-tag">Pneus de Moto</span>
              <p className="brand-desc">Referência em durabilidade, aderência e alto rendimento quilométrico para o segmento de duas rodas.</p>
            </div>
            <div className="brand-item">
              <span className="brand-name">TORTUGA</span>
              <span className="brand-tag">Câmaras de Ar</span>
              <p className="brand-desc">Liderança nacional em câmaras de ar reforçadas para uso agrícola, utilitários e carga pesada.</p>
            </div>
            <div className="brand-item">
              <span className="brand-name">VIPAL</span>
              <span className="brand-tag">Reparação &amp; Insumos</span>
              <p className="brand-desc">Tecnologia mundial em vulcanização, remendos, manchetes e insumos profissionais de borracharia.</p>
            </div>
            <div className="brand-item">
              <span className="brand-name">VULCAFLEX</span>
              <span className="brand-tag">Soluções de Reparo</span>
              <p className="brand-desc">Especialistas em produtos para reparação rápida e insumos técnicos de alta resistência.</p>
            </div>
            <div className="brand-item">
              <span className="brand-name">FVA</span>
              <span className="brand-tag">Acessórios &amp; Ferramentas</span>
              <p className="brand-desc">Linha completa de suprimentos, válvulas e ferramentas para manutenção profissional de pneus.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="section-padding">
        <div className="container text-center">
          <div className="section-header">
            <h2>LINHA DE PRODUTOS B2B</h2>
            <p>Abasteça sua loja ou oficina com um portfólio completo focado em alto giro e alto padrão de qualidade.</p>
          </div>

          <div className="products-grid">
            <div className="product-category-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80" alt="Pneus de Moto de alta qualidade" loading="lazy" />
              </div>
              <div className="product-card-body">
                <div>
                  <h3>PNEUS DE MOTO</h3>
                  <p>Linha completa para street, trail e entrega. Modelos desenvolvidos para alta durabilidade e máxima aderência no piso seco e molhado.</p>
                </div>
                <ul className="product-list">
                  <li><i className="fa-solid fa-chevron-right"></i> Medidas urbanas de alto giro</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Pneus reforçados para carga/moto-frete</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Opções para uso On/Off Road</li>
                </ul>
              </div>
            </div>

            <div className="product-category-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" alt="Câmaras de Ar reforçadas" loading="lazy" />
              </div>
              <div className="product-card-body">
                <div>
                  <h3>CÂMARAS DE AR</h3>
                  <p>Câmaras industriais e automotivas produzidas com elastômeros de alta retenção de ar e grande resistência a perfurações.</p>
                </div>
                <ul className="product-list">
                  <li><i className="fa-solid fa-chevron-right"></i> Câmaras para motos e utilitários</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Linha pesada e agrícola reforçada</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Válvulas de alta vedação</li>
                </ul>
              </div>
            </div>

            <div className="product-category-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80" alt="Produtos de Reparo e Vulcanização" loading="lazy" />
              </div>
              <div className="product-card-body">
                <div>
                  <h3>REPAROS &amp; VULCANIZAÇÃO</h3>
                  <p>Insumos essenciais para borracharias e autocenters. Soluções definitivas para vulcanização a frio e a quente.</p>
                </div>
                <ul className="product-list">
                  <li><i className="fa-solid fa-chevron-right"></i> Remendos a frio e manchetes</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Cimentos vulcanizantes e colas</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Macarrões/plaquetas de reparo rápido</li>
                </ul>
              </div>
            </div>

            <div className="product-category-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" alt="Ferramentas e Acessórios Profissionais" loading="lazy" />
              </div>
              <div className="product-card-body">
                <div>
                  <h3>ACESSÓRIOS &amp; SUPRIMENTOS</h3>
                  <p>Ferramentas de bancada e consumíveis necessários para garantir agilidade e precisão no atendimento de oficina.</p>
                </div>
                <ul className="product-list">
                  <li><i className="fa-solid fa-chevron-right"></i> Válvulas e bicos (Snap-in e aço)</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Pastas de montagem e lubrificantes</li>
                  <li><i className="fa-solid fa-chevron-right"></i> Calibradores, espátulas e saca-núcleos</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#formulario" className="btn btn-primary"><span className="graphic-arrows">&gt;&gt;</span> Solicitar Tabela de Preços B2B</a>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="turnover-box">
            <div className="section-header text-center" style={{ marginBottom: 20 }}>
              <h2>ESTOQUE PARADO NÃO É ESTOQUE ESTRATÉGICO.</h2>
              <p>O objetivo não é simplesmente acumular produtos na prateleira. É manter os itens corretos, no volume adequado e no tempo exato da sua demanda, preservando o capital de giro.</p>
            </div>
            <div className="turnover-equation">
              <div className="eq-item">PRODUTO CERTO</div>
              <div className="eq-operator">+</div>
              <div className="eq-item">MOMENTO CERTO</div>
              <div className="eq-operator">+</div>
              <div className="eq-item">REPOSIÇÃO ÁGIL</div>
              <div className="eq-operator">=</div>
              <div className="eq-item eq-result"><i className="fa-solid fa-arrows-spin"></i> ESTOQUE GIRANDO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>POR QUE ABASTECER SUA REVENDA COM A K-LIBRA?</h2>
          </div>
          <div className="diff-grid">
            <div className="diff-card">
              <h3>PODER DE COMPRA</h3>
              <p>Escala comercial para buscar condições competitivas no mercado B2B.</p>
            </div>
            <div className="diff-card">
              <h3>DISTRIBUIÇÃO</h3>
              <p>Estrutura focada em otimizar o tempo e facilitar a reposição do lojista.</p>
            </div>
            <div className="diff-card">
              <h3>PORTFÓLIO</h3>
              <p>Soluções completas para diferentes aplicações em um único parceiro.</p>
            </div>
            <div className="diff-card">
              <h3>QUALIDADE</h3>
              <p>Produtos rigorosamente selecionados para garantir segurança na ponta.</p>
            </div>
            <div className="diff-card">
              <h3>ATENDIMENTO B2B</h3>
              <p>Equipe comercial orientada para entender e suprir as necessidades do seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>DO PEDIDO À SUA PRATELEIRA.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3>VOCÊ APRESENTA SUA DEMANDA</h3>
              <p>Nossa equipe identifica o mix ideal e os volumes necessários para a sua operação.</p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h3>MONTAMOS A CONDIÇÃO COMERCIAL</h3>
              <p>Alinhamos preços, prazos e estoque de acordo com a realidade do seu mercado local.</p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h3>A K-LIBRA SEPARA E ENTREGA</h3>
              <p>Seu pedido é expedido via logística focada no cumprimento ágil de prazos.</p>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <h3>ESTOQUE GIRANDO</h3>
              <p>Sua revenda fica abastecida sem interrupções e pronta para atender a demanda final.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>SOLIDEZ E CONFIANÇA NA SUA CADEIA DE SUPRIMENTOS</h2>
            <p>Estrutura própria e processos otimizados para garantir a máxima eficiência no abastecimento do seu negócio.</p>
          </div>

          <div className="institutional-data-container">
            <div className="stat-card">
              <div className="stat-icon"><i className="fa-solid fa-business-time"></i></div>
              <div className="stat-number">Desde 2022</div>
              <div className="stat-label">Atuação no Mercado B2B</div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
              <p className="testimonial-text">"A pontualidade nas entregas e a constância no estoque facilitam muito o nosso giro semanal. Um parceiro B2B de extrema confiança."</p>
              <div className="testimonial-author">
                <strong>— Carlos Eduardo</strong>
                <span>Gerente de Compras</span>
              </div>
            </div>
          </div>

          <div className="authority-grid">
            <div className="authority-card">
              <div className="number">+1000</div>
              <h3>CLIENTES ATENDIDOS</h3>
              <p>Revendas, oficinas e borracharias que mantêm seu estoque girando com a nossa parceria de distribuição.</p>
            </div>
            <div className="authority-card">
              <div className="number">100%</div>
              <h3>FOCO EM CNPJ</h3>
              <p>Atendimento estritamente B2B, garantindo que o consumidor final não concorra com as suas condições comerciais.</p>
            </div>
            <div className="authority-card">
              <div className="number">24/48h</div>
              <h3>DESPACHO ÁGIL</h3>
              <p>Processamento rápido de pedidos para que sua loja não perca vendas por falta de reposição no estoque.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cobertura" className="section-padding bg-light">
        <div className="container">
          <div className="coverage-grid">
            <div>
              <h2>COBERTURA REGIONAL E ROTAS PROGRAMADAS</h2>
              <p style={{ marginTop: 15 }}>A K-Libra opera com logística integrada e rotas periódicas para entregar agilidade e frete competitivo em toda a região de atuação.</p>
              <ul className="coverage-list">
                <li><i className="fa-solid fa-truck-ramp-box"></i> Entregas diretas na sua loja ou borracharia</li>
                <li><i className="fa-solid fa-calendar-check"></i> Rotas fixas semanais de reposição</li>
                <li><i className="fa-solid fa-warehouse"></i> Centro de distribuição com estoque de pronta entrega</li>
              </ul>
            </div>
            <div>
              <div style={{ background: "var(--primary-black)", padding: 40, borderRadius: 4, borderLeft: "6px solid var(--primary-orange)", color: "var(--primary-white)" }}>
                <h3 style={{ color: "var(--primary-white)", marginBottom: 15 }}>
                  <i className="fa-solid fa-map-pin" style={{ color: "var(--primary-orange)" }}></i> ATENDIMENTO NA BAHIA
                </h3>
                <p style={{ color: "#CBD5E1", fontSize: "0.95rem" }}>Atendemos o Oeste da Bahia e fornecemos para todo o estado da Bahia com logística própria e transportadoras parceiras credenciadas.</p>
                <a href="#formulario" className="btn btn-primary" style={{ marginTop: 25, fontSize: "0.8rem", padding: "12px 20px" }}>CONSULTAR SUA CIDADE</a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="section-padding bg-dark" id="formulario">
        <div className="container">
          <div className="conversion-wrapper">
            <div>
              <h2>PRONTO PARA ABASTECER SUA REVENDA?</h2>
              <p style={{ marginTop: 20, fontSize: "1.2rem", color: "#CBD5E1" }}>Fale com nossa equipe comercial e descubra o portfólio e as condições B2B disponíveis para a sua empresa.</p>
              <div style={{ marginTop: 30 }}>
                <p style={{ fontSize: "0.9rem", color: "var(--primary-orange)", fontWeight: 800, textTransform: "uppercase" }}><i className="fa-solid fa-check"></i> Atendimento exclusivo para CNPJ</p>
                <p style={{ fontSize: "0.9rem", color: "var(--primary-orange)", fontWeight: 800, textTransform: "uppercase", marginTop: 10 }}><i className="fa-solid fa-check"></i> Condições comerciais competitivas</p>
              </div>
            </div>
            <div className="form-container">
              <h3>SOLICITE ATENDIMENTO COMERCIAL</h3>
              <p>Informe os dados da sua empresa. Nossa equipe entrará em contato para apresentar o portfólio e as condições disponíveis.</p>

              <form action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input type="text" id="nome" name="nome" className="form-control" required placeholder="Seu nome" maxLength={100} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" className="form-control" required placeholder="Nome da sua empresa" maxLength={120} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" className="form-control" required placeholder="00.000.000/0001-00" maxLength={20} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" className="form-control" required placeholder="(77) 90000-0000" maxLength={20} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail Comercial</label>
                    <input type="email" id="email" name="email" className="form-control" required placeholder="nome@suaempresa.com.br" maxLength={255} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade/UF</label>
                    <input type="text" id="cidade" name="cidade" className="form-control" required placeholder="Sua cidade - BA" maxLength={80} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="negocio">Tipo de Negócio</label>
                    <select id="negocio" name="negocio" className="form-control" required defaultValue="">
                      <option value="">Selecione...</option>
                      <option value="Revenda">Revenda / Loja de Pneus</option>
                      <option value="Borracharia">Borracharia</option>
                      <option value="Oficina">Oficina Mecânica</option>
                      <option value="Outro">Outro segmento B2B</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="interesse">Produtos de Interesse</label>
                  <select id="interesse" name="interesse" className="form-control" required defaultValue="">
                    <option value="">Selecione...</option>
                    <option value="Motos">Pneus de Moto</option>
                    <option value="Camaras">Câmaras de Ar</option>
                    <option value="Reparos">Reparos &amp; Vulcanização</option>
                    <option value="Acessorios">Acessórios &amp; Suprimentos</option>
                    <option value="Todos">Mix Completo</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-full"><span className="graphic-arrows">&gt;&gt;</span> QUERO RECEBER ATENDIMENTO B2B</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5577999999999?text=Olá,%20gostaria%20de%20solicitar%20atendimento%20B2B%20para%20minha%20empresa."
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a K-Libra no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <footer>
        <div className="container text-center">
          <p><strong>K-LIBRA ARTEFATOS DE BORRACHA</strong> — Sua parceira de abastecimento B2B.</p>
          <p style={{ marginTop: 8, fontSize: "0.8rem" }}>&copy; Todos os direitos reservados. Aplicação exclusiva para o mercado corporativo B2B.</p>
        </div>
      </footer>
    </div>
  );
}
