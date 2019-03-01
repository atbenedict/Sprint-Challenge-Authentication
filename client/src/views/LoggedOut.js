import React from "react";
import LoginForm from "../components/LoginForm";

const LoggedOut = () => {
  return (
    <div>
      You are logged out.
      <LoginForm />
    </div>
  );
};

export default LoggedOut;
