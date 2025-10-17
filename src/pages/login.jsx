import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoAzul from "../assets/logo-azul.svg";
import "/src/App.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await login(username, password);
      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("Erro na conexão com o servidor");
      }
    }
  }

  return (
    <div className="login-container">
      <div className="right-col" aria-hidden="true">
        <div className="top-stripe" aria-hidden="true">
          <span className="seg blue" />
          <span className="seg green" />
          <span className="seg orange" />
        </div>

        <div className="hero">
          <h1>
            Bem-vindo ao
            <br />
            portal de aplicações!
          </h1>
        </div>

        <div className="bottom-logo">
          <img src={logoAzul} alt="Logo Sergipe Previdência" />
        </div>
      </div>

      <div className="left-col">
        <div className="login-box">
          <h2>Login</h2>
          <h4>Entre com suas credenciais para acessar o portal</h4>
          <form onSubmit={handleSubmit}>
            <label>Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>

          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}
