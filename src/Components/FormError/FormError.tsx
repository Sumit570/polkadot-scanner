import React from "react";
import styles from "./style.module.css";

interface Props {
    formError: string;
}

const FormError: React.FC<Props> = ({ formError }) => {
  return (
    <div className={styles.formError}>
      {formError !== "" && formError}
    </div>
  );
};

export default FormError;
