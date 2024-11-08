import React from "react";

const card = ({ price, quantity, name, description, color }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: "20px",
    borderRadius: "8px",
    margin: "10px",
    color: "#333",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default card;
