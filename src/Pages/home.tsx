import React, { useContext } from "react";
import FormContainer from "../Components/FormContainer/FormContainer";
import Table from "../Components/Table/Table";
import styles from "./style.module.css";
import Header from "../Components/Header/Header";
import Progress from "../Components/ProgressBar/ProgressBar";
import Modal from "../Components/Modal/Modal";
import { AppContext, ContextType } from "../Context/Context";
import Description from "../Components/HomeDescription/Description";

const Home = () => {
  const { displayModel, data, loading } = useContext(AppContext) as ContextType;
  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.homePageContent}>
        {displayModel && <Modal><FormContainer /></Modal>}
        <Progress />
        {data?.length > 0 ? <Table /> : <Description />}
      </div>
    </div>
  );
};

export default Home;
