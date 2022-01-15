import React from "react";
import styled from "styled-components";
import Img1 from "../../../assets/w4@2x.png";
import Img2 from "../../../assets/w1@2x.png";
import mrK from "../../../assets/mrkv3@2x.png";
import Img01 from "../../../assets/p2pimage1@2x.png";
import Img03 from "../../../assets/p2pimage3@2x.png";
import Img04 from "../../../assets/p2pimage4@2x.png";
import Img05 from "../../../assets/p2pimage5@2x.png";
import colors from "../../../lib/colors";

const cardDisplayData = [mrK, Img01, Img03, Img04, Img05];

const cardData = [
  {
    image: Img1.src,
    title: "Borrow. Smartly. Responsibly",
    text: (
      <>
        That swift, smarter, more convenient place to safely borrow and
        <br /> securely lend out real-time. Mr. K gives you access to personal
        <br /> and small business loans, and also enables you safely lend out{" "}
        <br /> funds at unbeatable interest rates.
      </>
    ),
  },
  {
    image: Img2.src,
    title: "Borrow. Smartly. Responsibly",
    text: (
      <>
        That swift, smarter, more convenient place to safely borrow and
        <br /> securely lend out real-time. Mr. K gives you access to personal
        <br /> and small business loans, and also enables you safely lend out{" "}
        <br /> funds at unbeatable interest rates.
      </>
    ),
  },
];

const MarketPlace = () => {
  return (
    <MarketPlaceSectionContainer>
      <Cards>
        {cardData.map(({ image, title, text }, idx) => {
          return (
            // <div >
            <Card image={image} title={title} text={text} />
            // </div>
          );
        })}
        {/* <div>
          <Card />
        </div> */}
      </Cards>

      <P2PMarketPlace>
        <div className="heading">The P2P Marketplace</div>
        <CardDisplay>
          {cardDisplayData.map((asset, idx) => {
            return (
              <img
                key={idx}
                src={asset.src}
                alt=""
                style={{ height: "230px", width: "150px" }}
              />
            );
          })}
        </CardDisplay>
      </P2PMarketPlace>
    </MarketPlaceSectionContainer>
  );
};

export default MarketPlace;

const Card = ({ image, title, text }) => (
  <MarketPlaceCard>
    <Image src={image} />
    <Heading>{title}</Heading>
    <Text>{text}</Text>
  </MarketPlaceCard>
);

// header styles

const MarketPlaceSectionContainer = styled("div")`
  height: max-content;
  width: 100%;
`;

const Cards = styled("section")`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    font-size: 12px;
    height: 50vh;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 930px) {
    font-size: 12px;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

const P2PMarketPlace = styled("div")`
  height: 70vh;
  width: 100%;
  text-align: center;
  color: ${colors.white};

  .heading {
    font-size: 24px;
    font-weight: bold;
    height: 15%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 10px;
  }
`;

const CardDisplay = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
  flex-wrap: wrap;
  overflow-y: scroll;

  img {
    /* transform: translateY(0px); */
    transition: transform ease-in-out 300ms;
    &:hover {
      /* transform: translateY(-10px); */
      transform: scale(1.2);
    }
  }

  @media (max-width: 1100px) {
    img {
      height: 200px;
      width: 100px;
      margin: 10px;
      overflow-y: scroll;
    }
  }
`;

const MarketPlaceCard = styled("div")`
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 13px;
    margin: 0 10px;
  }
`;

const Heading = styled("h2")`
  color: ${colors.white};
`;

const Text = styled("span")`
  color: ${colors.white};
`;

const Image = styled("img")`
  height: 150px;
  width: 200px;

  @media (max-width: 1100px) {
    height: 100px;
    width: 150px;
  }
`;
