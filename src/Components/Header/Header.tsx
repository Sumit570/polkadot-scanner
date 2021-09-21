import React, { useContext } from "react";
import styles from "./style.module.css";
import { AppContext, ContextType } from "../../Context/Context";

const Header: React.FC = () => {
  const { handleDisplayModel, clearResults, data } = useContext(AppContext) as ContextType;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p>Polkadot Scanner</p>
      </div>
      {
          data?.length > 0
            ? <button className={styles.btn} type="submit" onClick={clearResults}>Clear Results</button>
            : <button className={styles.btn} type="submit" onClick={handleDisplayModel}>Scan here</button>
      }
    </div>
  );
};

export default Header;
