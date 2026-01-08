import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaCheckCircle,
  FaFileAlt,
  FaFileInvoice,
  FaChartBar,
  FaSearch,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import "/src/App.css";
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
    badge: "Popular",
    color: "#10b981",
  },
  {
    id: 2,
    name: "Prova de Vida",
    icon: <FaCheckCircle />,
    url: "http://172.23.41.3:5001/",
    badge: null,
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "Concessão",
    icon: <FaFileAlt />,
    url: "http://172.23.41.4:8080/",
    badge: null,
    color: "#8b5cf6",
  },
  {
    id: 4,
    name: "Sistema Revisão de Folha",
    icon: <FaFileInvoice />,
    url: "http://ipesprevi-s004/Reports/browse/Revis%C3%A3o%20de%20Folha",
    badge: null,
    color: "#f59e0b",
  },
  {
    id: 5,
    name: "Sistema de Gestão Integrado",
    icon: <FaChartBar />,
    url: "http://172.23.41.3:5173/",
    badge: "Novo",
    color: "#ec4899",
  },
];

const generalSystems = [
  {
    id: "g1",
    name: "GLPI",
    icon: <img src={glpiLogo} alt="GLPI" className="card-icon-image" />,
    url: "http://172.23.41.3/glpi/front/login.php",
    badge: null,
    color: "#f97316",
  },
  {
    id: "g2",
    name: "SISPREV",
    icon: <img src={sisprevLogo} alt="SISPREV" className="card-icon-image" />,
    url: "https://sisprev.sergipeprevidencia.se.gov.br/Login/Login.aspx",
    badge: null,
    color: "#0ea5e9",
  },
  {
    id: "g3",
    name: "E-DOC",
    icon: <img src={edocLogo} alt="E-DOC" className="card-icon-image" />,
    url: "https://edoc.se.gov.br/docflow/xhtml/docflow/geral/login.jsf",
    badge: null,
    color: "#14b8a6",
  },
  {
    id: "g4",
    name: "Expresso",
    icon: <img src={expressoLogo} alt="Expresso" className="card-icon-image" />,
    url: "https://expresso.se.gov.br/login.php",
    badge: null,
    color: "#06b6d4",
  },
  {
    id: "g5",
    name: "ComprasNet",
    icon: (
      <img src={comprasnetLogo} alt="ComprasNet" className="card-icon-image" />
    ),
    url: "https://www.comprasnet.se.gov.br/",
    badge: null,
    color: "#22c55e",
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
    badge: null,
    color: "#6366f1",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Usuário";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const filterSystems = (systemsList) => {
    if (!searchTerm) return systemsList;
    return systemsList.filter((system) =>
      system.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredGeneralSystems = filterSystems(generalSystems);
  const filteredSystems = filterSystems(systems);

  return (
    <div className="app-wrapper">
      <div className="portal-container">
        <header className="portal-header">
          <div className="header-content">
            <div className="header-left">
              <h1 className="header-title">Portal de Aplicações</h1>
              <p className="header-subtitle">
                Acesse todos os sistemas em um só lugar
              </p>
            </div>
            <div className="header-right">
              <div className="user-info">
                <div className="user-avatar">
                  <FaUser />
                </div>
                <span className="user-name">{username}</span>
              </div>
              <button
                className="logout-button"
                onClick={handleLogout}
                title="Sair"
              >
                <FaSignOutAlt />
                <span>Sair</span>
              </button>
            </div>
          </div>

          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar sistemas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <main className="sections-wrapper">
          {filteredGeneralSystems.length > 0 && (
            <section className="section">
              <h2 className="section-title">Aplicações Gerais</h2>
              <p className="section-subtitle">Ferramentas gerais do portal</p>
              <div className="systems-grid">
                {filteredGeneralSystems.map((system) => (
                  <SystemCard
                    key={system.id}
                    title={system.name}
                    icon={system.icon}
                    url={system.url}
                    badge={system.badge}
                    color={system.color}
                  />
                ))}
              </div>
            </section>
          )}

          {filteredSystems.length > 0 && (
            <section className="section">
              <h2 className="section-title">Aplicações Específicas</h2>
              <p className="section-subtitle">
                Sistemas específicos por área de atuação
              </p>
              <div className="systems-grid">
                {filteredSystems.map((system) => (
                  <SystemCard
                    key={system.id}
                    title={system.name}
                    icon={system.icon}
                    url={system.url}
                    badge={system.badge}
                    color={system.color}
                  />
                ))}
              </div>
            </section>
          )}

          {filteredGeneralSystems.length === 0 &&
            filteredSystems.length === 0 && (
              <div className="no-results">
                <p>Nenhum sistema encontrado com "{searchTerm}"</p>
              </div>
            )}
        </main>

        <footer className="portal-footer-new">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Portal de Aplicações</h3>
              <p>Sergipe Previdência</p>
            </div>
            <div className="footer-section">
              <h4>Links Úteis</h4>
              <ul>
                <li>
                  <a
                    href="https://sergipeprevidencia.se.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="http://172.23.41.3/glpi/front/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suporte (GLPI)
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>TI - Sergipe Previdência</p>
              <p>© 2026 Todos os direitos reservados</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
