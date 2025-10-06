import "./SystemCard.css";

function SystemCard({ title, icon }) {
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
      <button className="card-button">Acessar</button>
    </div>
  );
}

export default SystemCard;
