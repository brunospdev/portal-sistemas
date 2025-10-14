import "./SystemCard.css";

function SystemCard({ title, icon, url }) {
  return (
    <div className="card">
      <div className="card-icon-placeholder">
        {typeof icon === "string" ? (
          <span className="card-icon-emoji" aria-hidden="true">
            {icon}
          </span>
        ) : (
          icon
        )}
      </div>
      <p className="card-title">{title}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="card-button">Acessar</button>
      </a>
    </div>
  );
}

export default SystemCard;
