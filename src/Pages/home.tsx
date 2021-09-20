import React, { useEffect, useState } from "react";
import FormContainer from "../Components/FormContainer/FormContainer";
import Table from "../Components/Table/Table";
import styles from "./style.module.css";
import getEventDetails from "../Utils/getBlockDetails";
import Header from "../Components/Header/Header";
import Progress from "../Components/ProgressBar/ProgressBar";
import formData from "../Utils/formData.json";

const Home = () => {
  const [endPoint, setEndPoint] = useState<string>("wss://rpc.polkadot.io");
  const [startBlock, setStartBlock] = useState<number>(0);
  const [endBlock, setEndBlock] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [progress, setProgress] = useState<number>(0);
  const [formErrors, setFormErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getBlockDetails = async (endpoint: string, startblock: number, endblock: number) => {
    const responseData: Array<object | undefined> = [];
    let counter = 0;
    for (let a = startblock; a <= endblock; a++) {
      // eslint-disable-next-line no-await-in-loop
      await getEventDetails(endpoint, a).then((response) => setData([...data, response]));
      counter += 1;
      setProgress(+((counter * 100) / ((endblock - startblock) + 1)).toFixed(2));
      console.log(startblock, endblock, counter);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const formError: any = formErrors;
    switch (name) {
      case "endPoint":
        if (!value.startsWith("wss://")) {
          formError[name] = "Invalid End Point.";
        } else {
          formError[name] = "";
        }
        setEndPoint(value);
        break;

      case "startBlock":
        if (endBlock && startBlock > endBlock) {
          formError[name] = "Start block should be less than end block.";
        } else {
          formError[name] = "";
        }
        setStartBlock(value);
        break;

      case "endBlock":
        if (startBlock && startBlock > endBlock) {
          formError[name] = "End block should be greater than start block.";
        } else {
          formError[name] = "";
        }
        setEndBlock(value);
        break;

      default:
        break;
    }
    setFormErrors(formErrors);
  };

  const getData = async () => {
    await getBlockDetails(endPoint, startBlock, endBlock);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    getData();
  };

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.homePageContent}>
        <FormContainer
          formData={formData}
          handleChange={handleChange}
          endPoint={endPoint}
          startBlock={startBlock}
          endBlock={endBlock}
          formErrors={formErrors}
          handleSubmit={handleSubmit}
        />
        <Progress progress={progress} />
        <Table />
      </div>
    </div>
  );
};

export default Home;
