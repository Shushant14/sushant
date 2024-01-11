import React from "react";
import Navigation_Bar from "./Navigation_Bar";
import Options from "./Options";
import "./Container_Nav_Options.css";


export default function Container_Nav_Options() {
  return (
    <div className="container-nav-options">
      <Navigation_Bar></Navigation_Bar>
      <Options></Options>
    </div>
  );
}
