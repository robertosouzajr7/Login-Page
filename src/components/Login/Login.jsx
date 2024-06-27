import React from "react";
import "../Login/Login.css";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { TiLockClosed } from "react-icons/ti";
import SocialLogin from "../SocialLogin/SocialLogin.tsx";
const LoginForm = () => {
  return (
    <div className="div--form">
      <FaCircleArrowLeft
        className="icon-seta"
        width="32px"
        height="32px"
        href="/register"
      />
      <h1>Login</h1>
      <div className="div--mensagem">
        <p>WelCome back!</p>
        <p>Please login to continue</p>
      </div>
      <form className="container--form">
        <div className="div--input">
          <div className="div--icons">
            <HiMail className="icons-form" />
          </div>
          <label>
            <span>Email Address</span>
            <input type="email" placeholder="Your email address" />
          </label>
        </div>
        <div className="div--input">
          <div className="div--icons">
            <TiLockClosed className="icons-form" />
          </div>
          <label>
            <span>Password</span>
            <input type="password" placeholder="Enter your password" />
          </label>
        </div>
        <button>Login</button>
        <p className="text-password">
          <a href="/senha">Forgot Password?</a>
        </p>
      </form>
      <p className="text-social-Accounts">Or Continue with Social Accounts</p>
      <SocialLogin />
      <p className="text-create-account ">
        Don`t have an account? <a href="/conta">Create Now</a>
      </p>
    </div>
  );
};

export default LoginForm;
