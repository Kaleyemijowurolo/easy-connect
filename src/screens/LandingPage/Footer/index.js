import React from "react";
import styled from "styled-components";

// import video1 from "../../../assets/movie.mp4";
// import video2 from "../../../assets/movie.mp4";
// import video3 from "../../../assets/movie.mp4";

import video1 from "../../../assets/Video1@2x.png";
import video2 from "../../../assets/Video2@2x.png";
import video3 from "../../../assets/Video3@2x.png";
import colors from "../../../lib/colors";
import docs from "../../../assets/infinca@2x.png";
import LogoImage from "../../../assets/Logo.png";

import facebook from "../../../assets/fb.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import linkedIn from "../../../assets/linkedin.svg";
import youtube from "../../../assets/youtube.svg";

const videos = [video1, video2, video3];
const socialIcons = [facebook, twitter, instagram, linkedIn, youtube];

const OurStories = () => {
  return (
    <Container>
      <News>
        <Appointment>
          <Text
            style={{
              fontSize: "20px",
              color: colors.primary,
              fontWeight: "bold",
            }}
          >
            Fix an appointment
          </Text>
          <Text>
            PLOT 395A Etang Obuli Crescent, off Idris Ibrahim Crescent, Obafemi
            Awolowo Way, Jabi, Abuja.
          </Text>

          <SocialIcons>
            {socialIcons.map((icon, idx) => (
              <img key={idx} src={icon.src} />
            ))}
          </SocialIcons>
        </Appointment>
        <TextContainer>
          <Logo>
            <img src={LogoImage.src} />
          </Logo>
          <Text>
            At Easy Connect, we understand the terrain, versatility and
            socio-cultural dynamics of the average Nigerian MSME. We leverage
            careful research and experience by our very agile and young
            workforce, enabling us to operate with speed,enhanced
            decision-making process and providing critically needed credit at
            the right offer and timing.
          </Text>
          {/* <More href="#">more news</More> */}
        </TextContainer>
      </News>

      <Text style={{ fontSize: "10px" }}>
        Easy Connect™ regulated by the Money Lenders Act Cap 52. Mr. K™ and Easy
        Connect™ are registered trademarks of KiaKia Bits Ltd. Easy Connect™ and
        Mr. K™ are trading names for Easy Connect.
        <Text style={{ textAlign: "center" }}>
          © 2022. All Rights Reserved.{" "}
          <a style={{ textDecoration: "none" }} href="#">
            Terms & Conditions
          </a>{" "}
          apply. View{" "}
          <a style={{ textDecoration: "none" }} href="#">
            privacy policy
          </a>{" "}
        </Text>
      </Text>
    </Container>
  );
};

export default OurStories;

// header styles

const Container = styled("div")`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    display: none;
  }
`;
const News = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  display: flex;
`;

const Appointment = styled("div")`
  padding: 5px 15px;
  height: 100%;
  width: 40%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const SocialIcons = styled("div")`
  display: flex;
  align-items: center;
  height: 10%;

  img {
    height: 10px;
    width: 10px;
    object-fit: contain;
    padding: 15px;
  }
`;

const TextContainer = styled("div")`
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  display: flex;
  height: 100%;
  width: 60%;
`;

const Text = styled("div")`
  padding: 5px;
  color: ${colors.white};
  line-height: 20px;
  height: 30%;
  font-size: 13px;
  text-align: justify;
`;

const Link = styled("a")`
  align-self: flex-end;
  /* height: 30%; */
  /* width: 100%; */
  display: flex;
  align-items: flex-end;
  padding: 5px;
`;

const Logo = styled("div")`
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  display: flex;
  color: ${colors.white};
  /* height: 30%; */
  padding: 10px;

  img {
    height: 20px;
    width: 50px;
    object-fit: contain;
  }
`;
