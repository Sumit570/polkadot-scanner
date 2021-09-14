import React from "react";
import Input from "../Input/Input";
import styles from "./style.module.css";

interface Props {

}

const Form: React.FC<Props> = () => {
  return (
    <form className={styles.form}>
      <Input />
      <Input />
      <Input />
      <button type="submit">Scan</button>
    </form>
  );
};

export default Form;
