import React from "react";
import "../components/Login.css";

export default function Login() {
  return (
    <div>
      <h1>Welcome back !! eShop</h1>
      <div className="login__screen">
        <h1>Sign In</h1>
        <label>Email or mobile phone number</label>
        <br></br>
        <input type="text" id="username" className="text__userpass"></input>
        <br></br>
        <br></br>
        <label>Enter Password</label>
        <br></br>
        <input type="password" id="password" className="text__userpass"></input>
        <br></br>
        <br></br>
        <button className="login__signin">Sign In</button>
      </div>
    </div>
  );
}
