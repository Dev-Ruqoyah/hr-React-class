import React from "react";
import HeroSection from "../Component/HeroSection";
import FaqContent from "../Component/FaqContent";
import Api from "../Component/api";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FaqContent />
      <Api />
      {/* <LinkedApi/> */}
    </>
  );
};

export default Home;
