import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/LoginPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState("");
  const [error, setError] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedInterests = interests
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (trimmedInterests.length !== 3) {
      setError("Please enter exactly 3 comma-separated interests.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          interests: trimmedInterests,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setShowAnimation(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError("An error occurred during signup.");
    }
  };

  return (
    <div>
      {/* OUTSIDE Home Button */}
      <button className="top-left-home-button" onClick={() => navigate("/")}>
        ← Home
      </button>

      {/* Signup Form */}
      <div className="login-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
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
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
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
          <div className="user-box">
            <input
              type="text"
              required
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
            <label>Interests (exactly 3, comma-separated)</label>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="button-group">
            <button type="submit" className="glow-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Up
            </button>
            <p style={{ color: "#fff", marginTop: "20px" }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: "#03E9F4" }}>
                Login
              </a>
            </p>
          </div>
        </form>

        {showAnimation && (
          <div
            className="success-animation"
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            <p style={{ color: "#03E9F4", fontSize: "18px" }}>
              Signup successful! Redirecting...
            </p>
            <div className="glow-button" style={{ pointerEvents: "none" }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
