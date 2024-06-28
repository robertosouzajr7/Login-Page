import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LoginForm from "./components/Login/Login.jsx";
import RegisterForm from "./components/Register/Register.jsx";
import "./App.css";
import "./styles/Animations.css";
function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toogleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={isLogin ? "login" : "register"}
          timeout={350}
          classNames="slide-left"
        >
          {isLogin ? (
            <LoginForm RegisterClick={toogleForm} />
          ) : (
            <RegisterForm LoginClick={toogleForm} />
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
