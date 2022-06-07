import React from "react";
import Image from "./avatar2.jpg";
import Beverages from "./beverages-food-svgrepo-com.svg";
import ClickCounter from "./Components/ClickCounter";
import Header from "./Components/Header";

import "./style.css";

const App = () => {
  return (
    <>
      <h1 className="text">Test Css Hahah ookokoko</h1>
      <h2>Test {process.env.NODE_ENV}</h2>
      <Header />
      <img src={Image} alt="react-logo" width={100} height={100} />
      <img src={Beverages} alt="logo" width={100} height={100} />
      <ClickCounter />
    </>
  );
};

export default App;
