import "./App.css";
import SystemCard from "./components/SystemCard";
import glpiLogo from "./assets/glpi logo.png";
import sisprevLogo from "./assets/sisprev logo.png";
import edocLogo from "./assets/e-doc logo.png";
import expressoLogo from "./assets/expresso logo.png";
import comprasnetLogo from "./assets/comprasnet logo.png";
import sergipeLogo from "./assets/sergipe logo.png";

const systems = [
  { id: 1, name: "Atendimento", icon: "📞", url: "http://172.23.41.3:5700/" },
  { id: 2, name: "Prova de Vida", icon: "✅", url: "http://172.23.41.3:5001/" },
  { id: 3, name: "Concessão", icon: "📝", url: "http://172.23.41.4:8080/" },
  {
    id: 4,
    name: "Sistema Revisão de Folha",
    icon: "🧾",
    url: "http://ipesprevi-s004/Reports/browse/Revis%C3%A3o%20de%20Folha",
  },
  {
    id: 5,
    name: "Sistema de Gestão Interna",
    icon: "📊",
    url: "http://172.23.41.3:5173/",
  },
];

const generalSystems = [
  {
    id: "g1",
    name: "GLPI",
    icon: <img src={glpiLogo} alt="GLPI" className="card-icon-image" />,
    url: "http://172.23.41.3/glpi/front/login.php",
  },
  {
    id: "g2",
    name: "SISPREV",
    icon: <img src={sisprevLogo} alt="SISPREV" className="card-icon-image" />,
    url: "https://sisprev.sergipeprevidencia.se.gov.br/Login/Login.aspx",
  },
  {
    id: "g3",
    name: "E-DOC",
    icon: <img src={edocLogo} alt="E-DOC" className="card-icon-image" />,
    url: "https://edoc.se.gov.br/docflow/xhtml/docflow/geral/login.jsf",
  },
  {
    id: "g4",
    name: "Expresso",
    icon: <img src={expressoLogo} alt="Expresso" className="card-icon-image" />,
    url: "https://expresso.se.gov.br/login.php",
  },
  {
    id: "g5",
    name: "ComprasNet",
    icon: (
      <img src={comprasnetLogo} alt="ComprasNet" className="card-icon-image" />
    ),
    url: "https://www.comprasnet.se.gov.br/",
  },
  {
    id: "g6",
    name: "Sergipe Previdência",
    icon: (
      <img
        src={sergipeLogo}
        alt="Sergipe Previdência"
        className="card-icon-image"
      />
    ),
    url: "https://sergipeprevidencia.se.gov.br/",
  },
];

function App() {
  return (
    <div className="app-wrapper">
      <div className="portal-container">
        <header className="portal-header">
          <h1>Portal de Aplicações</h1>
        </header>

        <main className="sections-wrapper">
          <section className="section">
            <h2 className="section-title">Aplicações Gerais</h2>
            <p className="section-subtitle">Ferramentas gerais do portal</p>
            <div className="systems-grid">
              {generalSystems.map((system) => (
                <SystemCard
                  key={system.id}
                  title={system.name}
                  icon={system.icon}
                  url={system.url}
                />
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Aplicações Específicas</h2>
            <p className="section-subtitle">
              Sistemas específicos por área de atuação
            </p>
            <div className="systems-grid">
              {systems.map((system) => (
                <SystemCard
                  key={system.id}
                  title={system.name}
                  icon={system.icon}
                  url={system.url}
                />
              ))}
            </div>
          </section>
        </main>

        {/* footer removido */}
      </div>

      <div className="footer-bar"></div>
    </div>
  );
}

export default App;
