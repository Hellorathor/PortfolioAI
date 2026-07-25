import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../services/authService";
import "../../assets/css/pages/login.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!password || !confirmPassword) {
      return setError("Please fill all fields.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await resetPassword(token, password);

      setMessage(res.message);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">

          <h1>Create New Password</h1>

          <p>
            Enter your new password below.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>New Password</label>

              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Updating..." : "Reset Password"}
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

export default ResetPassword;