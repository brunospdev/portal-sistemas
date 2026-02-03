import {
  FaPhone,
  FaCheckCircle,
  FaFileAlt,
  FaFileInvoice,
  FaChartBar,
} from "react-icons/fa";
import "./home.css";
import SystemCard from "/src/components/SystemCard";
import glpiLogo from "/src/assets/glpi logo.png";
import sisprevLogo from "/src/assets/sisprev logo.png";
import edocLogo from "/src/assets/e-doc logo.png";
import expressoLogo from "/src/assets/expresso logo.png";
import comprasnetLogo from "/src/assets/comprasnet logo.png";
import sergipeLogo from "/src/assets/sergipe logo.png";

const systems = [
  {
    id: 1,
    name: "Atendimento",
    icon: <FaPhone />,
    url: "http://172.23.41.3:5700/",
    color: "#ec4899",
  },
  {
    id: 2,
    name: "Prova de Vida",
    icon: <FaCheckCircle />,
    url: "http://172.23.41.3:5001/",
    color: "#22c55e",
  },
  {
    id: 3,
    name: "Concessão",
    icon: <FaFileAlt />,
    url: "http://172.23.41.4:8080/",
    color: "#f97316",
  },
  {
    id: 4,
    name: "Sistema Revisão de Folha",
    icon: <FaFileInvoice />,
    url: "http://ipesprevi-s004/Reports/browse/Revis%C3%A3o%20de%20Folha",
    color: "#a855f7",
  },
  {
    id: 5,
    name: "Sistema de Gestão Interna",
    icon: <FaChartBar />,
    url: "http://172.23.41.3:5173/",
    color: "#22c55e",
  },
];

const generalSystems = [
  {
    id: "g1",
    name: "GLPI",
    icon: <img src={glpiLogo} alt="GLPI" className="card-icon-image" />,
    url: "http://172.23.41.3/glpi/front/login.php",
    color: "#111827",
  },
  {
    id: "g2",
    name: "SISPREV",
    icon: <img src={sisprevLogo} alt="SISPREV" className="card-icon-image" />,
    url: "https://sisprev.sergipeprevidencia.se.gov.br/Login/Login.aspx",
    color: "#111827",
  },
  {
    id: "g3",
    name: "E-DOC",
    icon: <img src={edocLogo} alt="E-DOC" className="card-icon-image" />,
    url: "https://edoc.se.gov.br/docflow/xhtml/docflow/geral/login.jsf",
    color: "#111827",
  },
  {
    id: "g4",
    name: "Expresso",
    icon: <img src={expressoLogo} alt="Expresso" className="card-icon-image" />,
    url: "https://expresso.se.gov.br/login.php",
    color: "#111827",
  },
  {
    id: "g5",
    name: "ComprasNet",
    icon: (
      <img src={comprasnetLogo} alt="ComprasNet" className="card-icon-image" />
    ),
    url: "https://www.comprasnet.se.gov.br/",
    color: "#111827",
  },
  {
    id: "g6",
    name: "Sergipe\nPrevidência",
    icon: (
      <img
        src={sergipeLogo}
        alt="Sergipe Previdência"
        className="card-icon-image"
      />
    ),
    url: "https://sergipeprevidencia.se.gov.br/",
    color: "#111827",
  },
];

export default function Home() {
  return (
    <div className="portal-container home-portal">
      <div className="home-content">
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
                  color={system.color}
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
                  color={system.color}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
