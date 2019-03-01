import React, { useState } from "react";
import { setGlobal } from "reactn";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "./Input";

const LoginForm = props => {
  const [values, setValues] = useState({ username: "", password: "" });
  console.log(values);

  const handleInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const submitLogin = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    // const endpoint = API;
    console.log("endpoint", endpoint);

    console.log("userLogin", values);
    axios
      .post(endpoint, values)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        setGlobal({ loggedIn: true });
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div className="login">
        <h2>Returning Member</h2>
        <form onSubmit={submitLogin}>
          <Input
            name="username"
            placeholder="username"
            type="text"
            value={values.username}
            onChange={handleInputChange}
          />
          <Input
            name="password"
            placeholder="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
          />

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
