// src/components/SystemCard.jsx
import './SystemCard.css'; // Vamos criar este arquivo de estilo já já

function SystemCard({ title }) { // Recebemos 'title' como uma prop
  return (
    <div className="card">
      <div className="card-icon-placeholder"></div>
      <p className="card-title">{title}</p>
      <button className="card-button">Acessar</button>
    </div>
  );
}

export default SystemCard;