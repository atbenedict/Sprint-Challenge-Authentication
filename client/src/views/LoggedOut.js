import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";

const MainView = styled.div`
  width: 100%;
  margin: 40px auto;
`;
const LoggedOut = () => {
  return (
    <MainView>
      You are logged out.
      <LoginForm />
      <RegisterForm />
    </MainView>
  );
};

export default LoggedOut;
