import React from "react";
import MainContent from "../components/ui/MainContent";
import HomeContent from "../components/ui/HomeContent";
import Cards from "../components/ui/Cards";

import "../styles/pages/home.css";

const Home = () => {
  return (
    <>
      <MainContent />
      <HomeContent />
      <Cards />
    </>
  );
};

export default Home;