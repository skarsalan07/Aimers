import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showGlow, setShowGlow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setShowGlow(true);
      setTimeout(() => {
        alert("Login success");
        navigate("/");
      }, 2000);
    } else {
      alert(data.detail || "Login failed. Please try again.");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className="button-group">
          <button type="submit" className="animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>

          <button
            type="button"
            onClick={handleSignupRedirect}
            className="animated-button"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Signup
          </button>
        </div>
      </form>

      {showGlow && (
        <button className="glow-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login Successful !
        </button>
      )}
    </div>
  );
};

export default LoginPage;
