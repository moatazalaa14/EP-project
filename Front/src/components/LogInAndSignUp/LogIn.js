import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./login.css";
import axios from "axios";
import SideBarAll from './../sharedComponents/sideBar';
const LogIn = () => {
  axios.get("http://localhost:5500/users").then(res => {
    console.log(res.data);
  });

  return (
      <>
      <SideBarAll />
    <div className="app">
      <div className="container">
        <h1>Log In</h1>

        <form method="GET" action="./data.json">
          <div className="field">
            <label>Email:</label>
            <input className="input" type="email" name="email" />
          </div>
          <div className="field">
            <label>Password:</label>
            <input className="input" type="password" name="password" />
          </div>
          <button className="button" type="submit">
            log in
          </button>
        </form>
        <p className="signUp">
          Don't have account ?
          <Link className="signUpLink" to="/signUp">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default LogIn;
