import React from "react";
import styled from "styled-components";

import colors from "../../../lib/colors";
import { Button } from "../../../components/Button";
import BackgroundImg from "../../../assets/small-bg.svg";
import HeroImg from "../../../assets/Man-illustrator.png";
import Icon2 from "../../../assets/vuesax-bold-money-send.svg";
import Icon from "../../../assets/vuesax-bold-dollar-circle.svg";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroText>
        <Space />
        <TextSection>
          <div
            className="text"
            style={{
              height: "15%",
              fontSize: "20px",
              lineHeight: "2rem",
            }}
          >
            The{" "}
            <span
              style={{
                fontSize: "23px",
                fontWeight: "bolder",
                color: colors.secondary,
              }}
            >
              financial marketplace
            </span>{" "}
            to access and lend <br />
            out personal and business capital.
          </div>

          <div className="text" style={{ height: "10%", lineHeight: "2rem" }}>
            Borrowing and lending{" "}
            <span style={{ color: colors.primary }}>reDEFINEd</span> .
            <br />
            With us, you borrow responsibly and also lend safely, earning
            fantastic returns.
          </div>

          <div
            className="text"
            style={{ color: colors.offwhite, height: "10%" }}
          >
            Borrow at amazing and very flexible interest rates. As low as 6.5%.
            <br />
            Earn over 28% as return on funds
          </div>
          <ButtonWrapper>
            <Button
              text="Get a loan"
              icon={<img src={Icon.src} />}
              size={"sm"}
            />
            <Button
              text="Fund loan"
              icon={<img src={Icon2.src} />}
              size={"sm"}
              secondary
            />
          </ButtonWrapper>
        </TextSection>
        <img src={BackgroundImg.src} alt="" />
      </HeroText>

      <HeroImage>
        <Image src={HeroImg.src} />
      </HeroImage>
    </HeroSectionContainer>
  );
};

export default HeroSection;

// header styles

const HeroSectionContainer = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const HeroText = styled("div")`
  flex-basis: 50%;
  /* background-image: url(${BackgroundImg.src}); */
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  height: 100%;

  @media (max-width: 750px) {
    flex-basis: 100%;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
const HeroImage = styled("div")`
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  display: flex;
  height: 100%;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 400px;
      width: 440px;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const Image = styled("img")`
  margin-bottom: 3rem;
  height: 600px;
  width: 740px;
`;

const TextSection = styled("div")`
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  padding: 20px 0;
  display: flex;
  height: 90%;
  width: 100%;

  .text {
    color: ${({ color }) => (color ? colors[color] : colors.white)};
    @media (max-width: 1115px) {
      height: 30%;
      padding: 10px 0;
      margin-bottom: 20px;
    }

    @media (max-width: 750px) {
      height: max-content;
      margin-bottom: 50px;
      font-size: small;
      padding: 0;
    }
  }
`;

const ButtonWrapper = styled("div")`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 52%;
  @media (max-width: 1115px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Space = styled("div")`
  height: 15%;
`;
