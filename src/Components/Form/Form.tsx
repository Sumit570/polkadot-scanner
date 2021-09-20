import React from "react";
import Input from "../Input/Input";
import styles from "./style.module.css";
import FormData from "../../Types/formData";
import FormResponse from "../../Types/FormResponse";

interface Props {
  formData: Array<FormData>;
  startBlock: number;
  endBlock: number;
  endPoint: string;
  handleChange(ev: any): any;
  formErrors: any;
  handleSubmit(): any;
}

const Form: React.FC<Props> = ({ formData, handleSubmit, startBlock, endBlock, endPoint, handleChange, formErrors }) => {
  console.log(formData);
  return (
    <form className={styles.form}>
      <fieldset className={styles.formFieldSet}>
        <legend className={styles.legend}>Get Event Details</legend>
        {
          formData.map((item, index) => (
            <Input
              handleInput={handleChange}
              // eslint-disable-next-line no-nested-ternary
              value={item.name === "endPoint" ? endPoint : (item.name === "startBlock" ? startBlock : endBlock)}
              formErrors={formErrors}
              placeHolder={item.placeHolder}
              label={item.label}
              name={item.name}
              required={item.required}
            />
          ))
        }
        <button type="button" className={styles.btn} onClick={handleSubmit}>Scan</button>
      </fieldset>
    </form>
  );
};

export default Form;
