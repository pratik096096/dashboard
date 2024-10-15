

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import person from "../assets/person.png";
import '../styles/CustomStyles.css'

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve the stored users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find a user that matches the entered email and password
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    // Check if user exists
    if (user) {
      console.log("Login successful:", user);
      // Navigate to the dashboard page
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleRegisterNavigation = () => {
    // Navigate to the signup page
    navigate("/signup");
  };

  return (
    <div className="flex-container">
      <div className="left-side">
        <h1 className="signin">Sign in to</h1>
        <p className="signinpara">Lorem Ipsum is simply</p>
        <p className="regHere">
          If you don't have an account register <br />
          You can <span onClick={handleRegisterNavigation} className="link">Register here!</span>
        </p>
      </div>
      
      <div className="right-side">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="input1" 
            type="email" 
            placeholder="Enter email or username" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            className="input2" 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="text-right">
            <a className="forgotpass" href="/forgot-password">Forgot password?</a>
          </div>
          <button className="btn-login" type="submit">Login</button>
        </form>
        <p className="text-center mt-6">or continue with</p>
        <div className="social-buttons">
          <a className="social-button">
            <img src={google} alt="Google" style={{ height: "36px", width: "36px" }} />
          </a>
        </div>
      </div>
      <div className="person">
        <img className="personimg" src={person} alt="" />
      </div>
    </div>
  );
};

export default SignInPage;

