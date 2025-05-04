import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onHandleInputs = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
    setError("");
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (!user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Success");
        Cookies.set("access_token", data.access_token, { expires: 30 });
        navigate("/");
      } else {
        console.log("Failure");
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="row">
        <div className="login-website-logo-desktop-img">.</div>
        <div className="right-container">
          <form className="form-container" onSubmit={submitForm}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              className="logo-mobile"
              alt="website logo"
            />
            <h1 className="website-logo">NovaWear</h1>

            <div className="input-container">
              <label className="input-label">Username</label>
              <input
                type="email"
                placeholder="Email or Username"
                name="email"
                value={user.email}
                onChange={onHandleInputs}
                className="username-input-field"
                required
                aria-label="Email"
              />
            </div>

            <div className="input-container">
              <label className="input-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={onHandleInputs}
                className="password-input-field"
                required
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password-btn"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && <p className="error-message">*{error}</p>}

            <div className="input-container">
              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
