import React from "react";
import styled from "styled-components";

// import video1 from "../../../assets/movie.mp4";
// import video2 from "../../../assets/movie.mp4";
// import video3 from "../../../assets/movie.mp4";

import video1 from "../../../assets/Video1@2x.png";
import video2 from "../../../assets/Video2@2x.png";
import video3 from "../../../assets/Video3@2x.png";
import colors from "../../../lib/colors";

const videos = [video1, video2, video3];
const OurStories = () => {
  return (
    <Container>
      <Heading>Our Stories</Heading>
      <OurStoriesContainer>
        {videos.map((video, idx) => (
          <VideoSlideContainer>
            <img
              key={idx}
              src={video.src}
              style={{ height: "100%", width: "100%" }}
            />
            {/* <video width="400" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support HTML video.
          </video> */}
          </VideoSlideContainer>
        ))}
      </OurStoriesContainer>
    </Container>
  );
};

export default OurStories;

// header styles

const Container = styled("div")`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OurStoriesContainer = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  display: flex;
`;

const VideoSlideContainer = styled("div")`
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  display: flex;
`;

const Heading = styled("h2")`
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  display: flex;
  color: ${colors.white};
`;
