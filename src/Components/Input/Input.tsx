import React from "react";
import styles from "./style.module.css";

interface Props {
    // handleInput(ev: any): any;
    // value: string;
    // placeHolder: string;
}

const Input: React.FC<Props> = () => {
  // { handleInput, value, placeHolder }
  return (
    <input
      type="text"
      // onChange={handleInput}
      // value={value}
      // placeholder={placeHolder}
      className={styles.inputField}
    />
  );
};

export default Input;
