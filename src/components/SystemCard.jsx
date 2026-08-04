import "./SystemCard.css";

function SystemCard({ title, icon, url }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Acessar ${title} em uma nova aba`}>
      <div className="card-icon-placeholder" aria-hidden="true">{icon}</div>
      <h3 className="card-title">{title}</h3>
    </a>
  );
}

export default SystemCard;
