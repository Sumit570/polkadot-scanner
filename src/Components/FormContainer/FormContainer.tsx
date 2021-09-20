import React from "react";
import Form from "../Form/Form";
import styles from "./style.module.css";
import FormData from "../../Types/formData";

interface Props {
  formData: Array<FormData>;
  handleChange(e: any): any;
  formErrors: any;
  endPoint: string;
  startBlock: number;
  endBlock: number;
  handleSubmit(): any;
}

const FormContainer: React.FC<Props> = ({ formData, formErrors, handleSubmit, handleChange, endBlock, endPoint, startBlock }) => {
  return (
    <div className={styles.formContainer}>
      <Form
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        endPoint={endPoint}
        endBlock={endBlock}
        startBlock={startBlock}
      />
    </div>
  );
};

export default FormContainer;
