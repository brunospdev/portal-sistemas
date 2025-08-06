import './App.css';
import SystemCard from './components/SystemCard';
import logo from './assets/logo-sergipe-previdencia.svg';

// Array com os dados dos sistemas
const systems = [
  { id: 1, name: 'SGI' },
  { id: 2, name: 'Prova de Vida' },
  { id: 3, name: 'Atendimento' },
  { id: 4, name: 'Concessão' },
];

function App() {
  return (
    <div className="app-wrapper">

      <div className="portal-container">
        <header className="portal-header">
          <h1>Portal de Sistemas</h1>
          <p>Acesse rapidamente os sistemas disponíveis.</p>
        </header>

        <main className="systems-grid">
          {systems.map(system => (
            <SystemCard key={system.id} title={system.name} />
          ))}
        </main>
        
        <footer className="portal-footer">
          <img src={logo} alt="Logo Sergipe Previdência" className="footer-logo" />
        </footer>
      </div>

      <div className="footer-bar"></div>
    </div>
  );
}

export default App;