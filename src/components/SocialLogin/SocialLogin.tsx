import React from "react";
import "../SocialLogin/SocialLogin.css";
const SocialLogin = () => {
  return (
    <div className="div--socialLogin">
      <ul>
        <a href="/login">
          <li>
            <img src="/google.png" alt="" />
          </li>
        </a>
        <a href="">
          <li>
            <img src="/facebook (2).png" alt="" />
          </li>
        </a>
        <a href="">
          <li>
            <img src="/apple.png" alt="" />
          </li>
        </a>

        <a href="">
          <li>
            <img src="/twitter.png" alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialLogin;
