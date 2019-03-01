import React from "react";
import { useGlobal } from "reactn";
import Item from "./Item";

export default function ItemList() {
  const [jokes] = useGlobal("jokes");
  return (
    <>
      {jokes.map((joke, id) => {
        return <Item joke={joke} key={joke.id} />;
      })}
    </>
  );
}
