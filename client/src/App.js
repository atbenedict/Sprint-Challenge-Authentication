import React, { setGlobal, useGlobal } from "reactn";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ItemList from "./components/ItemList";
import LoggedIn from "./views/LoggedIn";
import LoggedOut from "./views/LoggedOut";

const StyledHeader = styled.nav`
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0075b2;
  color: #231f20;
  a {
    text-decoration: inherit;
    color: inherit;
    &:hover {
      color: #a4c2db;
    }
  }
`;

const StyledMain = styled.div`
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;
`;

const App = function() {
  const [loggedIn] = useGlobal("loggedIn");
  console.log(loggedIn);
  return (
    <StyledMain>
      <StyledHeader>
        <NavLink to="/login">Login</NavLink>

        <NavLink to="/users">Jokes</NavLink>

        {loggedIn ? <button onClick={() => logout()}>Logout</button> : null}
      </StyledHeader>
      {loggedIn ? <LoggedIn /> : <LoggedOut />}
      <div>
        <Switch>
          <Route
            path="/register"
            render={props => <RegisterForm {...props} />}
          />
          <Route path="/login" render={props => <LoginForm {...props} />} />
          <Route path="/list" render={props => <ItemList {...props} />} />
        </Switch>
      </div>
    </StyledMain>
  );
};

const logout = () => {
  localStorage.removeItem("jwt");
  setGlobal({ loggedIn: false });
};

export default withRouter(App);
