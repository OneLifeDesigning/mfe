import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { Browserouter } from "react-router-dom";

const App = () => {
  return (
    <Browserouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Browserouter>
  );
};

export default App;
