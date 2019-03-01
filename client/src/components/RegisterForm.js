import React, { useState } from "react";

import axios from "axios";
import Input from "./Input";

const RegisterForm = props => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const submitRegister = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/register";

    console.log("endpoint", endpoint);

    console.log("userInfo", values);
    axios
      .post(endpoint, values)
      .then(res => {
        props.history.push("/login");
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div className="register">
        <h2>New Member</h2>
        <form onSubmit={submitRegister}>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
