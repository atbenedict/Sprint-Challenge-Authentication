import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const LoggedOut = () => {
  return (
    <div>
      You are logged out.
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default LoggedOut;
