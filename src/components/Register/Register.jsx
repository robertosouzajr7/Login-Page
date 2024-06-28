import React, { useState } from "react";
import "./Register.css";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { TiLockClosed } from "react-icons/ti";
import { BsPhoneFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin.tsx";

const RegisterForm = ({ LoginClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] =
    useState("Your email address");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "Enter your password"
  );
  const [phonePlaceholder, setPhonePlaceholder] = useState(
    "Enter your phone number"
  );
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTips, setShowPasswordTips] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };
  const validatePhone = (phone) => {
    const re = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    return re.test(phone);
  };
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setPhone(phone);
    if (validatePhone(phone)) {
      setPhoneError("");
    } else {
      setPhoneError("Número de telefone inválido.");
    }
  };
  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (validatePassword(pwd)) {
      setPasswordStrength("Senha forte");
      setPasswordError("");
    } else {
      setPasswordStrength("Senha fraca");
      setPasswordError(
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra e um número."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Senha fraca.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // Submit the form
      console.log("Form submitted");
    }
    window.alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="div--form">
      <FaCircleArrowLeft
        className="icon-seta"
        width="32px"
        height="32px"
        onClick={LoginClick}
      />
      <h1>Create Account</h1>
      <div className="div--mensagem">
        <p>Enter your information below or continue</p>
        <p>with social media account</p>
      </div>
      <form className="container--form" onSubmit={handleSubmit}>
        <div className="div--input">
          <div className="div--icons">
            <HiMail className="icons-form" />
          </div>
          <label>
            <span>Email Address</span>
            <input
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onFocus={() => setEmailPlaceholder("")}
              onBlur={(e) => setEmailPlaceholder("Your email address")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        {emailError && <p className="error-message">{emailError}</p>}

        <div className="div--input">
          <div className="div--icons">
            <BsPhoneFill className="icons-form" />
          </div>
          <label>
            <span>Mobile Number</span>
            <input
              type="tel"
              placeholder={phonePlaceholder}
              value={phone}
              onFocus={() => setPhonePlaceholder("")}
              onBlur={() => setPhonePlaceholder("Enter your phone number")}
              onChange={handlePhoneChange}
            />
          </label>
        </div>
        {phoneError && <p className="error-message">{phoneError}</p>}

        <div className="div--input">
          <div className="div--icons">
            <TiLockClosed className="icons-form" />
          </div>
          <label>
            <span>Password</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
              value={password}
              onFocus={() => {
                setPasswordPlaceholder("");
                setShowPasswordTips(true);
              }}
              onBlur={() => {
                setPasswordPlaceholder("Enter your password");
                setShowPasswordTips(false);
              }}
              onChange={handlePasswordChange}
            />
          </label>
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        {passwordStrength && (
          <p
            className={`password-strength ${
              passwordStrength === "Senha forte"
                ? "strong-password"
                : "weak-password"
            }`}
          >
            {passwordStrength}
          </p>
        )}

        {showPasswordTips}

        <button className="button-register" type="submit">
          Create Account
        </button>
        <p className="text-password">
          <a href="/senha">Forgot Password?</a>
        </p>
      </form>
      <p className="text-social-Accounts">Or Continue with Social Accounts</p>
      <SocialLogin />
      <p className="text-create-account ">
        Don`t have an account?{" "}
        <a href="/conta" onClick={LoginClick}>
          Create Now
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
