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

const videos = [video1, video2, video3];
const OurStories = () => {
  return (
    <Container>
      <Heading>In the news...</Heading>
      <News>
        <DocumentContainer>
          <img src={docs.src} alt="document" />
        </DocumentContainer>
        <TextContainer>
          <Heading>Best Peer-2-Peer Lending Platform</Heading>
          <Text>
            In 2019, Easy Connect clinched the InFINCA Award for Best
            Peer-To-Peer Platform in Nigeria. A testament to their pioneering
            effort, sustained creation and delivery of value to the supply and
            demand end of the service. MSMEs have timely access to capital and
            fund owners get value and security for their funds committed to
            them. In over 3 years that this service has been operational, no
            single Individual or corporate that has committed funds to Easy
            Connect in trust as a tool to steward to their teeming customers has
            lost a single Naira.
          </Text>
          <More href="#">more news</More>
        </TextContainer>
      </News>
    </Container>
  );
};

export default OurStories;

// header styles

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const News = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  display: flex;
`;

const DocumentContainer = styled("div")`
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  display: flex;
  height: 100%;
  width: 40%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const TextContainer = styled("div")`
  justify-content: flex-end;
  align-items: center;
  padding: 5px 15px;
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;

  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

const Text = styled("span")`
  padding: 5px;
  color: ${colors.white};
  line-height: 30px;
  text-align: justify;

  @media (max-width: 800px) {
    font-size: 14px;
    width: 100%;
  }
`;

const More = styled("a")`
  align-self: flex-end;
  height: 30%;
  display: flex;
  align-items: flex-end;
  padding: 5px;
`;

const Heading = styled("h2")`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${colors.white};

  @media (max-width: 800px) {
    font-size: 18px;
    width: 100%;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
