import React, { useContext } from "react";
import FormError from "../FormError/FormError";
import styles from "./style.module.css";
import { AppContext, ContextType } from "../../Context/Context";

interface Props {
    placeHolder: string;
    name: string;
    label: string;
    required: boolean;
    type: string;
}

const Input: React.FC<Props> = ({ placeHolder, label, name, required, type }) => {
  const { handleChange, endBlock, endPoint, startBlock, formErrors } = useContext(AppContext) as ContextType;
  const formError: any = formErrors;
  return (
    <div className={styles.inputErrorContainer}>
      <div className={styles.input}>
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          // eslint-disable-next-line no-nested-ternary
          value={name === "endPoint" ? endPoint : (name === "startBlock" ? startBlock : endBlock)}
          required={required}
          className={styles.inputField}
        />
        <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      </div>
      <FormError formError={formError && formError[name] ? formError[name] : ""} />
    </div>
  );
};

export default Input;
