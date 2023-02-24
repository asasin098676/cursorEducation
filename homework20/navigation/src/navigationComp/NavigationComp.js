import React from "react";
import "./navigationComp.css";
import { Link } from "react-router-dom";

const NavigationComp = () => {
  return (
    <header>
      <Link to="main">головна</Link>
      <Link to="publication">публікації</Link>
      <Link to="photo">фотографії</Link>
      <Link to="contact">контакти</Link>
    </header>
  );
};

export default NavigationComp;
