import React, { useState } from "react";
import FormContainer from "../Components/FormContainer/FormContainer";
import Table from "../Components/Table/Table";
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <FormContainer />
      <Table />
    </div>
  );
};

export default Home;
