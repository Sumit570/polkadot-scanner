import React from "react";
import Form from "../Form/Form";
import FormContainer from "../FormContainer/FormContainer";
import styles from "./style.module.css";
import FormData from "../../Types/formData";

interface Props {
children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  );
};

export default Modal;
