import React from "react";
import FormResponse from "../../Types/FormResponse";
import FormError from "../FormError/FormError";
import styles from "./style.module.css";

interface Props {
    handleInput(ev: any): any;
    value: number | string;
    placeHolder: string;
    name: string;
    label: string;
    formErrors: any;
    required: boolean;
}

const Input: React.FC<Props> = ({ handleInput, value, placeHolder, label, name, formErrors, required }) => {
  // eslint-disable-next-line no-nested-ternary
  return (
    <div className={styles.inputErrorContainer}>
      <div className={styles.input}>
        <input
          type="text"
          name={name}
          id={name}
          onChange={handleInput}
          value={value}
          required={required}
          className={styles.inputField}
        />
        <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      </div>
      <FormError formError={formErrors && formErrors[name] ? formErrors[name] : ""} />
    </div>
  );
};

export default Input;
