import React, { useState } from "react";
import googlelogo from "../../assests/google.png";
import "./login.css";
import logo from "../../assests/7.jpg";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../utils/validatePassword.js";
import { GoogleLoginkApi } from "../../utils/OAuth/OAuthLogin.js";
import { handleLoginApi } from "../../api/handleLoginApi.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validatePassword(password);
    if (validationError) {
      alert(validationError);
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    const result = await handleLoginApi(email, password);
    if (result) {
      navigate("/");
    }
  };

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  const handleGoogleClick = async () => {
    const googleLoginResult = await GoogleLoginkApi();
    if (googleLoginResult) {
      navigate("/");
    }
  };

  return (
    <div className="sign_in_container">
      <div className="sign_in_card">
        <div className="sign_in_logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="sign_in_welcome">Welcome back</h1>
        <p className="sign_in_detals_line">
          Please enter your details to login
        </p>
        <form onSubmit={handleSubmit}>
          <div className="sign_in_social-login">
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleClick}
            >
              <img src={googlelogo} alt="Google" />
            </button>
          </div>
          <div className="line-container">
            <div className="line"></div>
            <p className="sing_in_or">or</p>
            <div className="line"></div>
          </div>

          <div className="sign_in_form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="sign_in_form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="Login_password_requirements">
            <ul>
              <li>Password must have min 8 characters</li>
              <li>Include at least one uppercase letter</li>
              <li>Include at least one special character</li>
            </ul>
          </div>
          <a href="/" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="btn primary sign_in_button">
            Login
          </button>
        </form>
        <p className="create-account">
          Don't have an account?{" "}
          <span onClick={handleCreateAccountClick}>Create account</span>
        </p>
      </div>
    </div>
  );
}