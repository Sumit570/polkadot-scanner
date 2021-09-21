import React from "react";
import styles from "./style.module.css";

interface Props {
}

const Description: React.FC<Props> = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.description}>
        <img src={`${process.env.PUBLIC_URL}polkadot.gif`} alt="No Data Found" />
        <h4 className={styles.h4}>
          Polkadot scanner
        </h4>
        <p>Polkadot scanner helps you scan the event information for the range of blocks.</p>
        <p>You can scan the data using the button on the top right corner of the screen.</p>
      </div>
    </div>
  );
};

export default Description;
