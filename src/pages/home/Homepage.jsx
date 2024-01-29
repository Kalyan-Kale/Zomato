import React, { useState } from "react";
import Header from "../../components/common/header/Header";
import TabOptions from "../../components/common/tapOptions/TabOptions";
import Footer from "../../components/common/footer/Footer";
import Delivery from "../../components/delivery/Delivery";
import Diningout from "../../components/diningout/Diningout";
import NightLife from "../../components/nightlife/NightLife";

const Homepage = () => {
  const [activetab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header></Header>
      <TabOptions
        activetab={activetab}
        setActiveTab={setActiveTab}
      ></TabOptions>
      {getcorrectScreen(activetab)}
      <Footer></Footer>
    </div>
  );
};

const getcorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery></Delivery>
    case "Dining Out":
      return <Diningout></Diningout>
    case "NightLife":
      return <NightLife></NightLife>
    default:
      return <Delivery></Delivery>
  }
};

export default Homepage;
