import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/welcome");
    } catch (error) {
      console.error("Login Failed:", error.message);
    }
  };

  return (
    <div className="container">
      <h2>Google Login App</h2>
      <button className="login-btn" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
