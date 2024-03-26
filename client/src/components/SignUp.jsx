import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, location } = state;
    const response = await fetch("https://food-hub-1246.onrender.com//register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        location,
      }),
    });
    const json = await response.json();
    console.log(json);
    navigate("/");
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form_main" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            name="name"
            value={state.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={onChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            value={state.ConfirmPassword}
            onChange={onChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Address"
            name="location"
            value={state.location}
            onChange={onChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Above details is correct
          </label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
        <span>
          <Link to="/" className="m-3 ">
            sign in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
