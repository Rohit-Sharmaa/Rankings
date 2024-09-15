import React, { useState } from "react";
import googlelogo from "../../assests/google.png";
import "./signUp.css";
import logo from "../../assests/7.jpg";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../utils/validatePassword.js";
import { GoogleSignUpApi } from "../../utils/OAuth/OAuthSignUp.js";
import { handleSignUpApi, sentOtpApi } from "../../api/handleSignUpApi.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [isOTPRequested, setIsOTPRequested] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isOTPRequested) {
      const validationError = validatePassword(password);
      if (validationError) {
        alert(validationError);
        return;
      }
      console.log(email, " ", OTP, " ", password);
      const result = await handleSignUpApi(email, OTP, password);
      if (result) {
        navigate("/");
      }
    } else {
      //logic to send otp
      const result = await sentOtpApi(email);

      if (result) {
        setIsOTPRequested(true);
      }
    }
  };

  const handleGoToLoginClick = () => {
    navigate("/login");
  };

  const handleGoogleClick = async () => {
    const googleLoginResult = await GoogleSignUpApi();
    if (googleLoginResult) {
      navigate("/");
    }
  };

  return (
    <div className="sign_up_container">
      <div className="sign_up_card">
        <div className="sign_up_logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="sign_up_welcome">Welcome back</h1>
        <p className="sign_up_detals_line">
          Please enter your details to Register
        </p>
        <form onSubmit={handleSubmit}>
          <div className="sign_up_social-login">
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
            <p className="sign_up_or">or</p>
            <div className="line"></div>
          </div>

          <div className="sign_up_form-group">
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
          {!isOTPRequested && (
            <button type="submit" className="btn primary sign_up_button">
              Send OTP
            </button>
          )}
          {isOTPRequested && (
            <>
              <div className="sign_up_form-group">
                <label htmlFor="OTP">OTP</label>
                <input
                  type="number"
                  id="OTP"
                  value={OTP}
                  placeholder="Enter OTP"
                  onChange={handleOTPChange}
                  required
                />
              </div>
              <div className="sign_up_form-group">
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
              <div className="sign_up_password_requirements">
                <ul>
                  <li>Password must have min 8 characters</li>
                  <li>Include at least one uppercase letter</li>
                  <li>Include at least one special character</li>
                </ul>
              </div>
              <button
                type="submit"
                className="btn primary sign_up_button register"
              >
                Register
              </button>
            </>
          )}
        </form>
        <p className="create-account">
          Already have an account?
          <span onClick={handleGoToLoginClick}>Login</span>
        </p>
      </div>
    </div>
  );
}