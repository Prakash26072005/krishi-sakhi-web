import React from "react";
import styles from "./UpperNav.module.css";
import logo from '../../../src/assets/logo.png'; // Adjust path as needed

const UpperNav = () => {
  return (
    <div className={styles.upperNav}>
      <img src={logo}></img>
      <h1>Krishi Sakhi</h1>
    </div>
  );
};

export default UpperNav;