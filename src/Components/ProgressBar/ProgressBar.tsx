import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { AppContext, ContextType } from "../../Context/Context";

const Progress: React.FC = () => {
  const { progress } = useContext(AppContext) as ContextType;
  return (
    <ProgressBar
      completed={progress}
      bgColor="#653551"
      borderRadius="0px"
      height="4px"
      baseBgColor="#fff"
      isLabelVisible={false}
      transitionDuration="1s"
      width="100%"
      margin="auto"
    />
  );
};

export default Progress;
