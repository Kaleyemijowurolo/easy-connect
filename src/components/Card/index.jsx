/*
 * component: CustomCard
 * author:
 * Date: 
 * Crunchies CustomCard component
 */

import React from "react";
import { SingleCard } from "./card.styled";
import PropTypes from "prop-types";

export const Card = (
  {
  cardData = "",
  cardImgContainerHeight,
  cardBg,
  cardPad,
  cardWidth,
  cardImgHeight,
  cardObjectFit,
  cardImgWidth,
  cardHeadJustifyContent,
  cardHeadCol,
  cardParagraphWidth,
  cardParagrapghTxtAlgin,
  cardParagraphCol,
  cardBtnJustifyContent,
  cardParagrapghFtSize,
  cardSubHeadJustifyContent,
  cardSubHeadFtSize,
  cardSubHeadCol,
  cardOverlayBg,
  cardOverlayFtSize,
  cardImgOpac,
  cardBoxShd,
  customKey,
  iconBckg,
  iconBRad,
  imgContWidth, 
  className
}
) => {
  return (
    <SingleCard
      className={className}
      cardImgContainerHeight={cardImgContainerHeight}
      cardBg={cardBg}
      cardPad={cardPad}
      cardWidth={cardWidth}
      cardImgHeight={cardImgHeight}
      cardImgWidth={cardImgWidth}
      cardObjectFit={cardObjectFit}
      cardHeadJustifyContent={cardHeadJustifyContent}
      cardHeadCol={cardHeadCol}
      cardParagraphWidth={cardParagraphWidth}
      cardParagrapghFtSize={cardParagrapghFtSize}
      cardParagrapghTxtAlgin={cardParagrapghTxtAlgin}
      cardParagraphCol={cardParagraphCol}
      cardBtnJustifyContent={cardBtnJustifyContent}
      cardSubHeadJustifyContent={cardSubHeadJustifyContent}
      cardSubHeadFtSize={cardSubHeadFtSize}
      cardSubHeadCol={cardSubHeadCol}
      cardOverlayBg={cardOverlayBg}
      cardOverlayFtSize={cardOverlayFtSize}
      cardImgOpac={cardImgOpac}
      cardBoxShd={cardBoxShd}
      customKey={customKey}
      iconBckg={iconBckg}
      iconBRad={iconBRad}
      imgContWidth={imgContWidth}>
      {Object.keys(cardData).map((item, index) =>
        item === "subHead2" ? null : (
          <div className={item} key={customKey + index}>
            {item === "img" ? (
              <React.Fragment>
                <div className="imgContainer">
                  {
                    <img
                      src={cardData.img}
                      alt={cardData.imgAlt ? cardData.imgAlt : "card image"}
                    />
                  }
                </div>
                {cardData.overlayParagraph && (
                  <div className="overlay">
                    <p> {cardData.overlayParagraph}</p>
                  </div>
                )}
              </React.Fragment>
            ) : item === "icon" ? (
              <div>{cardData.icon}</div>
            ) : item === "header" ? (
              <h3>{cardData.header}</h3>
            ) : item === "paragraph" ? (
              <p>{cardData.paragraph}</p>
            ) : item === "btn" ? (
              <button>{cardData.btn}</button>
            ) : item === "subHead" || item === "subHead2" ? (
              <>
                <span>{cardData.subHead && cardData.subHead}</span>
                <span>{cardData.subHead2 && cardData.subHead2}</span>
              </>
            ) : null}
          </div>
        )
      )}
    </SingleCard>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
  cardImgContainerHeight: PropTypes.string,
  cardBg: PropTypes.string,
  cardPad: PropTypes.string,
  cardWidth: PropTypes.string,
  cardImgHeight: PropTypes.string,
  cardObjectFit: PropTypes.string,
  cardImgWidth: PropTypes.string,
  cardHeadJustifyContent: PropTypes.string,
  cardHeadCol: PropTypes.string,
  cardParagraphWidth: PropTypes.string,
  cardParagrapghTxtAlgin: PropTypes.string,
  cardParagraphCol: PropTypes.string,
  cardBtnJustifyContent: PropTypes.string,
  cardParagrapghFtSize: PropTypes.string,
  cardSubHeadJustifyContent: PropTypes.string,
  cardSubHeadFtSize: PropTypes.string,
  cardSubHeadCol: PropTypes.string,
  cardOverlayBg: PropTypes.string,
  cardOverlayFtSize: PropTypes.string,
  cardImgOpac: PropTypes.string,
  cardBoxSh: PropTypes.string,
  iconBckg: PropTypes.string,
  iconBRad: PropTypes.string
};
