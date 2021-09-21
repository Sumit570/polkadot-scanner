import React from "react";
import Form from "../Form/Form";
import styles from "./style.module.css";

const FormContainer: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <Form />
    </div>
  );
};

export default FormContainer;
