import styled from "styled-components";

export const SingleCard = styled('div')`
  background: ${props => props.cardBg || "#fff"};
  padding: ${props => props.cardPad || "20px"};
  width: ${props => props.cardWidth || "300px"};
  box-shadow: ${props => props.cardBoxShd || "none"};

  .img {
    height: ${props => props.cardImgContainerHeight || "150px"};
    width: 100%;
    position: relative;
    .imgContainer {
      height: 100%;
      width: ${({ imgContWidth }) => imgContWidth || "100%"};
      margin: auto;
    }
    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: ${props => props.cardOverlayBg || " #0e0e0f6e"};
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 20px;
      visibility: hidden;
      p {
        color: white;
        font-size: ${props => props.cardOverlayFtSize || "12px"};
      }
    }
    img {
      height: ${props => props.cardImgHeight || "100%"};
      width: ${props => props.cardImgWidth || "100%"};
      opacity: ${props => props.cardImgOpac || "1"};
      object-fit: ${props => props.cardObjectFit || "cover"};
      margin: auto;
    }
  }
  .icon {
    width: 100%;
    position: relative;
    height: ${props => props.cardImgContainerHeight || "150px"};
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      height: 100%;
      width: ${({ imgContWidth }) => imgContWidth || "100%"};
      margin: auto;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      background: ${({ iconBckg }) => iconBckg || "#fff"};
      border-radius: ${({ iconBRad }) => iconBRad || "0%"};
    }
  }

  .header {
    margin: 10px 0 0 0;
    display: flex;
    justify-content: ${props => props.cardHeadJustifyContent || "center"};
    h3 {
      color: ${props => props.cardHeadCol || "#555457"};
      font-size: 1.1rem;
      font-weight: bold;
      text-align: center;
    }
  }

  .paragraph {
    margin: 10px 0;
    width: ${props => props.cardParagraphWidth || "100%"};
    p {
      text-align: ${props => props.cardParagrapghTxtAlgin || "start"};
      color: ${props => props.cardParagraphCol || "#555457"};
      font-size: ${props => props.cardParagrapghFtSize || "12px"};
      line-height: 1.5em;
    }
  }

  .btn {
    margin: 10px 0;
    display: flex;
    justify-content: ${props => props.cardBtnJustifyContent || "flex-start"};
  }

  .subHead {
    margin-top: 10px;
    display: flex;
    justify-content: ${props =>
      props.cardSubHeadJustifyContent || "space-between"};
    span {
      font-size: ${props => props.cardSubHeadFtSize || "12px"};
      color: ${props => props.cardSubHeadCol || "#555457"};
    }
  }

  &:hover .overlay {
    visibility: visible;
  }
`;

export const SectionalCard = styled('div')``;
