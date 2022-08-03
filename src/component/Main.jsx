import React from "react";
import "./styles.css";
import List from "./List";

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="mainHeader">Pokemon: Gotta Catch 'em all!</div>
      <List />
    </div>
  );
}
