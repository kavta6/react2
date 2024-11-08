import React from "react";

const button = ({ backgroundColor, height, width, text }) => {
  const style = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  return <button style={style}>{text}</button>;
};

export default button;
