import React from "react";
import Text from "./components/text";
import ProductCard from "./components/card";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Text fontSize="24px" color="blue" alignment="center">
        Welcome to the Product Store
      </Text>

      <ProductCard
        price="20.99"
        quantity="5"
        name="Cool T-Shirt"
        description="A stylish, comfortable t-shirt."
        color="#f0f0f0"
      />

      <Button
        backgroundColor="green"
        height="40px"
        width="100px"
        text="Add to Cart"
      />
    </div>
  );
}

export default App;
