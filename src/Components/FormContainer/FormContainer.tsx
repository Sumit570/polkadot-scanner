import React from "react";
import Form from "../Form/Form";
import styles from "./style.module.css";

interface Props {

}

const FormContainer: React.FC<Props> = () => {
  return (
    <div className={styles.formContainer}>
      <Form />
    </div>
  );
};

export default FormContainer;
