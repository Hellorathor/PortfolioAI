import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

import modernImg from "./templates/modern.png";
import creativeImg from "./templates/creative.png";
import glassImg from "./templates/glass.png";
import developerImg from "./templates/developer.png";

import "../../assets/css/pages/login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [selectedTemplate, setSelectedTemplate] = useState(modernImg);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", form);

      login(res.data.token, res.data.user);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>

      <div className="login-wrapper">

        {/* LEFT */}
        <div className="login-left">
          <div className="brand">
            <span className="rocket">🚀</span>
            <span>PortfolioAI</span>
          </div>

          <h1>
            Build Your
            <br />
            Professional
            <br />
            Portfolio with AI
          </h1>

          <p>
            Create beautiful developer portfolios,
            customize premium templates,
            generate AI content and publish
            your portfolio in minutes.
          </p>

          <div className="portfolio-preview">
            <img
              src={selectedTemplate}
              alt="Portfolio Preview"
            />
          </div>

          <div className="template-grid">

            <div
              className={`template-box ${
                selectedTemplate === modernImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(modernImg)}
            >
              <img src={modernImg} alt="" />
              <span>Modern</span>
            </div>

            <div
              className={`template-box ${
                selectedTemplate === creativeImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(creativeImg)}
            >
              <img src={creativeImg} alt="" />
              <span>Creative</span>
            </div>

            <div
              className={`template-box ${
                selectedTemplate === glassImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(glassImg)}
            >
              <img src={glassImg} alt="" />
              <span>Glass</span>
            </div>

            <div
              className={`template-box ${
                selectedTemplate === developerImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(developerImg)}
            >
              <img src={developerImg} alt="" />
              <span>Developer</span>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <div className="login-card">

            <h2>Welcome Back</h2>

            <p className="subtitle">
              Login to continue building your portfolio.
            </p>

            {error && (
              <div className="error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* NEW */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "-8px",
                  marginBottom: "18px",
                }}
              >
                <Link
                  to="/forgot-password"
                  style={{
                    color: "#6366f1",
                    fontSize: "14px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                className="login-btn"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login →"}
              </button>

            </form>

            <div className="register-link">
              Don't have an account?
              <Link to="/register">
                Register
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;