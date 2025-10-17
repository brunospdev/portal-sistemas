import React, { useState } from "react";
import { login } from "../service/api";
import { useNavigate } from "react-router-dom";
import sergipeLogo from "/src/assets/sergipe logo.png";
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
      <div className="login-box">
        <h2>Login</h2>
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
  );
}
