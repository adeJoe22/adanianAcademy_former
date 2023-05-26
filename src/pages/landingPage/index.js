import React from "react";
import Activate from "../../components/landingPageComp/Activate";
import Courses from "../../components/landingPageComp/Courses";
import HeroSection from "../../components/landingPageComp/HeroSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Activate />
      <Courses />
    </>
  );
};

export default LandingPage;
