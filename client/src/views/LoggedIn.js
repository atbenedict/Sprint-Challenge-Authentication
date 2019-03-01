import React from "react";
import ItemList from "../components/ItemList";

const LoggedOut = () => {
  return (
    <div>
      You are logged in.
      <ItemList />
    </div>
  );
};

export default LoggedOut;
