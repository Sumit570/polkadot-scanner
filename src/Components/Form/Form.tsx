import React, { useContext } from "react";
import Input from "../Input/Input";
import styles from "./style.module.css";
import FormData from "../../Types/formData";
import data from "../../Utils/formData.json";
import { AppContext, ContextType } from "../../Context/Context";

const Form: React.FC = () => {
  const { handleSubmit, formErrors } = useContext(AppContext) as ContextType;
  const formError: any = formErrors;
  const disabled = formError.endPoint || formError.endBlock || formError.startBlock;
  return (
    <form className={styles.form}>
      <fieldset className={styles.formFieldSet}>
        <legend className={styles.legend}>Get Event Details</legend>
        {
          data.map((item, index) => (
            <Input
              type={item.type}
              placeHolder={item.placeHolder}
              label={item.label}
              name={item.name}
              required={item.required}
            />
          ))
        }
        <button type="button" className={disabled ? styles.btnDisabled : styles.btn} disabled={disabled} onClick={handleSubmit}>Scan</button>
      </fieldset>
    </form>
  );
};

export default Form;
