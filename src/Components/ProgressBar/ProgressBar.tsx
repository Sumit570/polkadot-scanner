import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  progress: number;
}

const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <ProgressBar
      completed={progress}
      bgColor="#653551"
      borderRadius="0px"
      height="6px"
      baseBgColor="#fff"
      isLabelVisible={false}
      transitionDuration="5s"
      width="100%"
      margin="auto"
    />
  );
};

export default Progress;
