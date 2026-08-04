import { useMemo, useState } from "react";
import { FaChartBar, FaFileInvoice, FaPhone, FaSearch } from "react-icons/fa";
import "./home.css";
import SystemCard from "../components/SystemCard";
import glpiLogo from "../assets/glpi logo.png";
import sisprevLogo from "../assets/sisprev logo.png";
import edocLogo from "../assets/e-doc logo.png";
import expressoLogo from "../assets/expresso logo.png";
import comprasnetLogo from "../assets/comprasnet logo.png";
import sergipeLogo from "../assets/sergipe logo.png";
import logosei from "../assets/logosei.png";
import brandLogo from "../assets/logo-azul.svg";

const imageIcon = (src) => (
  <img src={src} alt="" className="card-icon-image" />
);

const generalSystems = [
  { id: "g1", name: "GLPI", description: "Suporte técnico e abertura de chamados.", icon: imageIcon(glpiLogo), url: "http://172.23.41.3/glpi/front/login.php" },
  { id: "g2", name: "SISPREV", description: "Gestão previdenciária.", icon: imageIcon(sisprevLogo), url: "https://sisprev.sergipeprevidencia.se.gov.br/Login/Login.aspx" },
  { id: "g3", name: "E-DOC", description: "Documentos e processos digitais.", icon: imageIcon(edocLogo), url: "https://edoc.se.gov.br/docflow/xhtml/docflow/geral/login.jsf" },
  { id: "g4", name: "Expresso", description: "Comunicação e correio institucional.", icon: imageIcon(expressoLogo), url: "https://expresso.se.gov.br/login.php" },
  { id: "g5", name: "ComprasNet", description: "Compras e contratações públicas.", icon: imageIcon(comprasnetLogo), url: "https://www.comprasnet.se.gov.br/" },
  { id: "g6", name: "Sergipe Previdência", description: "Portal institucional da SergipePrevidência.", icon: imageIcon(sergipeLogo), url: "https://sergipeprevidencia.se.gov.br/" },
  { id: "g7", name: "SEI!", description: "Sistema Eletrônico de Informações.", icon: imageIcon(logosei), url: "https://sei.se.gov.br/sip/login.php?sigla_orgao_sistema=SE&sigla_sistema=SEI&infra_url=L3NlaS8=" },
];

const specificSystems = [
  { id: 1, name: "Atendimento", description: "Acesso ao sistema de atendimento.", icon: <FaPhone />, url: "http://172.23.41.3:5700/" },
  { id: 4, name: "Sistema Revisão de Folha", description: "Relatórios e processos de revisão de folha.", icon: <FaFileInvoice />, url: "http://ipesprevi-s004/Reports/browse/Revis%C3%A3o%20de%20Folha" },
  { id: 5, name: "Sistema de Gestão Integrada (SGI)", description: "Acesso ao ambiente integrado de gestão.", icon: <FaChartBar />, url: "http://172.23.41.3:5173/" },
];

function filterSystems(systems, query) {
  const term = query.trim().toLocaleLowerCase("pt-BR");
  if (!term) return systems;
  return systems.filter(({ name, description }) =>
    `${name} ${description}`.toLocaleLowerCase("pt-BR").includes(term),
  );
}

function SystemsSection({ label, title, subtitle, systems }) {
  if (!systems.length) return null;
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{label}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <span className="section-count">
          {systems.length} {systems.length === 1 ? "aplicação" : "aplicações"}
        </span>
      </div>
      <div className="systems-grid">
        {systems.map((system) => <SystemCard key={system.id} {...system} title={system.name} />)}
      </div>
    </section>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const generalResults = useMemo(() => filterSystems(generalSystems, query), [query]);
  const specificResults = useMemo(() => filterSystems(specificSystems, query), [query]);
  const hasResults = generalResults.length + specificResults.length > 0;

  return (
    <div className="home-portal">
      <main className="home-content">
        <div className="page-heading-row">
          <div className="page-heading">
            <span className="eyebrow">SERGIPE PREVIDÊNCIA</span>
            <h1>Portal de Aplicações</h1>
            <p>Acesse rapidamente as aplicações disponíveis.</p>
            <div className="brand-accent" aria-hidden="true">
              <span /><span /><span />
            </div>
          </div>
          <label className="search-field">
            <FaSearch aria-hidden="true" />
            <span className="sr-only">Pesquisar aplicações</span>
            <input type="search" placeholder="Pesquisar aplicação..." value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>
        {hasResults ? (
          <div className="sections-wrapper">
            <SystemsSection label="ACESSO ESPECÍFICO" title="Aplicações Específicas" subtitle="Sistemas específicos por área de atuação." systems={specificResults} />
            <SystemsSection label="ACESSO GERAL" title="Aplicações Gerais" subtitle="Ferramentas e serviços disponíveis para todos." systems={generalResults} />
          </div>
        ) : (
          <div className="empty-state"><FaSearch aria-hidden="true" /><h2>Nenhuma aplicação encontrada</h2><p>Tente pesquisar usando outro nome ou termo.</p></div>
        )}
        <img src={brandLogo} alt="Sergipe Previdência" className="portal-signature" />
      </main>
    </div>
  );
}
