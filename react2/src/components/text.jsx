import React from "react";

const text = ({ fontSize, color, alignment, children }) => {
  const style = {
    fontSize: fontSize,
    color: color,
    textAlign: alignment,
  };

  return <h1 style={style}>{children}</h1>;
};

export default text;
