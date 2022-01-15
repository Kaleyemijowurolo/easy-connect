import React from "react";
import styled from "styled-components";

import colors from "../../lib/colors";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import MarketPlaceSection from "./MarketPlace";
import OurStories from "./OurStories";
import InTheNews from "./InTheNews";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageContainer>
        <Header />
        <HeroSection />
        <MarketPlaceSection />
        <OurStories />
        <InTheNews />
        <Footer />
      </LandingPageContainer>
    </LandingPageWrapper>
  );
};

export default LandingPage;

// header styles

const LandingPageWrapper = styled("div")`
  background-color: ${colors.black};
  justify-content: center;
  height: max-content;
  align-items: center;
  /* width: 100vw; */
  display: flex;
`;

const LandingPageContainer = styled("div")`
  background-color: ${colors.black};
  width: calc(100% - 100px);
  height: max-content;
`;
