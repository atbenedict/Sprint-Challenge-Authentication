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
        <div className="logo">LOGO</div>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Jokes</NavLink>
        &nbsp;|&nbsp;
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
