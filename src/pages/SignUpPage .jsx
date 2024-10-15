

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import person from "../assets/person.png";
import "../styles/CustomStyles.css"

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle form submission logic here
    if (email && username && contactNumber && password) {
      // Check if the user is already registered
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the email or username is already in use
      const userExists = existingUsers.some(user => user.email === email || user.username === username);

      if (userExists) {
        alert("Email or username is already taken. Please use a different one.");
        return;
      }

      // Add new user to the list
      const newUser = {
        email,
        username,
        contactNumber,
        password // Note: In a real application, you should hash the password!
      };

      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers)); // Store updated user list in local storage

      console.log("User registered:", newUser);

      // Navigate to the login page after successful registration
      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex-container">
      <div className="left-side">
        <h1 className="signin">Sign Up to</h1>
        <p className="signinpara">Lorem Ipsum is simply</p>
        <p className="regHere">
          If you already have an account <br />
          You can <a href="/login">Login here!</a>
        </p>
      </div>
      <div className="right-side">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="input1" 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            className="input1" 
            type="text" 
            placeholder="Create User name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            className="input1" 
            type="tel" 
            placeholder="Contact number" 
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)} 
          />
          <input 
            className="input1" 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <input 
            className="input1" 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <button className="btn-login" type="submit">Register</button>
        </form>
        <p className="text-center mt-6">or continue with</p>
        <div className="social-buttons" style={{ position: "relative", bottom: "20px" }}>
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

export default SignUpPage;

