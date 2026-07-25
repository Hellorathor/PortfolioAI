import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";

import modernImg from "../../assets/images/templates/modern.png";
import creativeImg from "../../assets/images/templates/creative.png";
import glassImg from "../../assets/images/templates/glass.png";
import developerImg from "../../assets/images/templates/developer.png";

import "../../assets/css/pages/login.css";

function Register() {

  const navigate = useNavigate();

  const [selectedTemplate, setSelectedTemplate] = useState(modernImg);

  const [form, setForm] = useState({
    name: "",
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

      await api.post("/auth/register", form);

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message || "Registration Failed"
      );

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

          {/* BIG PREVIEW */}

          <div className="portfolio-preview">

            <img
              src={selectedTemplate}
              alt="Portfolio Preview"
            />

          </div>

          {/* TEMPLATE GRID */}

          <div className="template-grid">

            <div
              className={`template-box ${
                selectedTemplate === modernImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(modernImg)}
            >

              <img src={modernImg} alt="Modern Template" />

              <span>Modern</span>

            </div>

            <div
              className={`template-box ${
                selectedTemplate === creativeImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(creativeImg)}
            >

              <img src={creativeImg} alt="Creative Template" />

              <span>Creative</span>

            </div>

            <div
              className={`template-box ${
                selectedTemplate === glassImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(glassImg)}
            >

              <img src={glassImg} alt="Glass Template" />

              <span>Glass</span>

            </div>

            <div
              className={`template-box ${
                selectedTemplate === developerImg ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(developerImg)}
            >

              <img src={developerImg} alt="Developer Template" />

              <span>Developer</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <div className="login-card">

            <h2>Create Account</h2>

            <p className="subtitle">

              Start building your AI-powered portfolio.

            </p>

            {error && (

              <div className="error">

                {error}

              </div>

            )}

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                />

              </div>

              <button
                className="login-btn"
                disabled={loading}
              >

                {loading
                  ? "Creating Account..."
                  : "Create Account →"}

              </button>

            </form>

            <div className="register-link">

              Already have an account?

              <Link to="/">

                Login

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;