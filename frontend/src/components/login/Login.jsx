import React, { useState } from "react";
import googlelogo from "../../assests/google.png";
import "./login.css";
import logo from "../../assests/7.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
            <button type="button" className="google-btn">
              <img src={googlelogo} alt="Google" />
            </button>
          </div>
          <div class="line-container">
            <div class="line"></div>
            <p className="sing_in_or">or</p>
            <div class="line"></div>
          </div>

          <div className="sign_in_form-group">
            <label htmlFor="email">Email address</label>
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
          <a href="/" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="btn primary sign_in_button">
            Login
          </button>
        </form>
        <p className="create-account">
          Don't have an account? <a href="/signup">Create account</a>
        </p>
      </div>
    </div>
  );
}
