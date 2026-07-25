import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/authService";
import "../../assets/css/pages/login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      return setError("Please enter your email.");
    }

    try {
      setLoading(true);

      const res = await forgotPassword(email);

      setMessage(res.message);
      setEmail("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h1>Forgot Password?</h1>

          <p>
            Enter your registered email address and we'll send you a password
            reset link.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {message && (
              <p
                style={{
                  color: "#16a34a",
                  marginBottom: "15px",
                }}
              >
                {message}
              </p>
            )}

            {error && (
              <p
                style={{
                  color: "#dc2626",
                  marginBottom: "15px",
                }}
              >
                {error}
              </p>
            )}

            <button
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <Link to="/">
              Back to Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;