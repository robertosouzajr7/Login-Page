import React from "react";
import "../SocialLogin/SocialLogin.css";
const SocialLogin = () => {
  return (
    <div className="div--socialLogin">
      <ul>
        <a href="/login">
          <li>
            <img src="https://i.imgur.com/mMH0HkY.png" alt="" />
          </li>
        </a>
        <a href="">
          <li>
            <img src="https://i.imgur.com/xsIs7Px.png" alt="" />
          </li>
        </a>
        <a href="">
          <li>
            <img src="https://i.imgur.com/hK5GOUc.png" alt="" />
          </li>
        </a>

        <a href="">
          <li>
            <img src="https://i.imgur.com/Jgdq60E.png" alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialLogin;
