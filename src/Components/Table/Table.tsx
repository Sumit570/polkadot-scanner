import React, { useContext } from "react";
import Form from "../Form/Form";
import styles from "./style.module.css";
import { AppContext, ContextType } from "../../Context/Context";

const Table: React.FC = () => {
  const { data, loading } = useContext(AppContext) as ContextType;
  return (
    <div className={styles.eventsTableContainer}>
      {loading && <div className={styles.loadingInfo}>Scanning in progress...</div>}
      <table className={styles.eventsTable}>
        <thead>
          <tr>
            <td>block number</td>
            <td>event name</td>
            <td>event arguments</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr>
              <td>{item?.blockNumber}</td>
              <td>{item?.method}.{item?.section}</td>
              <td>{item?.args}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
