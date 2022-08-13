import React from "react";
import "./styles.css";
import List from "./List";

export default function Main() {
  return (
    <div id="mainContainer">
      <div id="mainHeader">
        <img id="pokeLogo" src="/assets/pokemonLogo.svg" alt="pokemon logo" />
      </div>
      <List />
    </div>
  );
}
