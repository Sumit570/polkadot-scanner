import React from "react";
import styles from "./style.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p>Polkadot Scanner</p>
      </div>
      <button type="button">Sign Out</button>
    </div>
  );
};

export default Header;
