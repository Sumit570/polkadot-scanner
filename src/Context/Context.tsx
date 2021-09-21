import { useState } from "react";
import * as React from "react";
import getEventDetails from "../Utils/getBlockDetails";

export type ContextType = {
  handleDisplayModel: () => void;
  endPoint: string;
  startBlock: number;
  endBlock: number;
  data: Array<object>;
  loading: boolean;
  progress: number;
  formErrors: object;
  displayModel: boolean;
  handleSubmit(): void;
  handleChange(e: any): void;
  clearResults(): void;
};

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [endPoint, setEndPoint] = useState<string>("wss://rpc.polkadot.io");
  const [startBlock, setStartBlock] = useState<number>(0);
  const [endBlock, setEndBlock] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [progress, setProgress] = useState<number>(0);
  const [formErrors, setFormErrors] = useState<any>({ startBlock: "", endBlock: "", endPoint: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [displayModel, setDisplayModel] = useState<boolean>(false);

  const handleDisplayModel = () => {
    setDisplayModel(!displayModel);
  };

  const clearResults = () => {
    setData([]);
    setStartBlock(0);
    setEndBlock(0);
    setEndPoint("wss://rpc.polkadot.io");
    setFormErrors({ startBlock: "", endBlock: "", endPoint: "" });
    setLoading(false);
  };

  const getBlockDetails = async (endpoint: string, startblock: number, endblock: number) => {
    let counter = 0;
    const responseData = data;
    for (let a = startblock; a <= endblock; a++) {
      // eslint-disable-next-line no-await-in-loop
      await getEventDetails(endpoint, a).then((response) => {
        responseData.push(response);
        setData(responseData);
      });
      counter += 1;
      setProgress(+((counter * 100) / ((endblock - startblock) + 1)).toFixed(2));
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const formError: any = formErrors;
    switch (name) {
      case "endPoint":
        if (value === "") {
          formError[name] = "This field is required";
        } else if (!value.startsWith("wss://") && !value.startsWith("https://") && !value.startsWith("http://")) {
          formError[name] = "Invalid End Point.";
        } else {
          formError[name] = "";
        }
        setEndPoint(value);
        break;

      case "startBlock":
        if (value.length === 0) {
          formError[name] = "This field is required";
        } else if (endBlock && (value > endBlock)) {
          formError[name] = "Start block should be less than end block.";
        } else {
          formError[name] = "";
          formError.endBlock = "";
        }
        setStartBlock(value);
        break;

      case "endBlock":
        if (value.length === 0) {
          formError[name] = "This field is required";
        } else if (startBlock && (value < startBlock)) {
          formError[name] = "End block should be greater than start block.";
        } else {
          formError[name] = "";
          formError.startBlock = "";
        }
        setEndBlock(value);
        break;

      default:
        break;
    }
    setFormErrors(formErrors);
  };

  const getData = async () => {
    setLoading(true);
    await getBlockDetails(endPoint, startBlock, endBlock).then((res) => setLoading(false));
  };

  const handleSubmit = () => {
    getData();
    handleDisplayModel();
  };

  return (
    <AppContext.Provider value={{ clearResults,
      endPoint,
      startBlock,
      endBlock,
      handleDisplayModel,
      handleSubmit,
      handleChange,
      displayModel,
      data,
      formErrors,
      loading,
      progress }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
