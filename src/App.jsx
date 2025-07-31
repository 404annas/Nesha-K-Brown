import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Text from "./components/Text";
import Cards from "./components/Cards";
import Experience from "./components/Experience";
import Founders from "./components/Founders";
import Hire from "./components/Hire";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Text />
      <Cards />
      <Experience />
      <Hire />
      {/* <Founders /> */}
    </div>
  );
};

export default App;
