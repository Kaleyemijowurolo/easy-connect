/*
 * component: FlexibleDiv
 * author: Kayode
 * Date: January 12th, 2022
 *  FlexibleDiv component
 */


import propTypes from 'prop-types';
import styled from "styled-components";

export const FlexibleDiv = styled('div')`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "center"};
  align-items: ${({alignItems}) => alignItems || "center"};
  flex-wrap: ${({flexWrap}) => flexWrap || "wrap"};
  flex-direction: ${({flexDir}) => flexDir || "row"};
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || "auto"};
  min-width: ${({min, width}) => min && width};
  min-height: ${({min, height}) => min && height};
  max-width: ${({max, width}) => max && width};
  max-height: ${({max, height}) => max && height};
  background: ${({bgColor}) => bgColor || null};
  padding: ${({padding}) => padding || null};
`;


export const GridableDiv = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  background: ${({bgColor}) => bgColor || null};
  & > * {
    min-width: 0;
  }
`;

export const FormControl = styled('div')`
  display: flex;
  width: ${({width}) => width || "100%"};
  padding: ${({padding}) => padding || 0};
  height: ${({height}) => height || "auto"};
  margin: ${({margin}) => margin || "0 auto"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  flex-direction: ${({flexDir}) => flexDir || "row"};
  align-items: ${({alignItems}) => alignItems || "center"};
  justify-content: ${({justifyContent}) => justifyContent || "center"};
  background: ${({bngColor, theme}) => bngColor || theme.palette.background.default};
`;

export const InputWrapper = styled('div')`
  height: 100%;
  background-color: ${({bngColor}) => bngColor ? bngColor : '#f7f8fb'};
  width: ${({width}) => width ? width : '100%'};
  margin: 0 auto;
  outline: none;
  box-shadow: 0 2px 2px rgba(50, 50, 93, 0.11), 0 1px 1px rgba(0, 0, 0, 0.08);
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
  -webkit-appearance: none;
  border-radius: 0.3rem;
  border: ${({outlined}) => outlined ? `1px solid #CECECE` : null};
  display: flex;
  
  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 4px 7px rgba(50,50,93,0.11), 0 1px 5px rgba(0,0,0,0.08);
  }
  
  .invalid-feedback {
    color: #f98249;
    bottom: -18px;
    font-weight: 400;
    position: absolute;
    font-size: 11px;
    left: 0;
  }
  
  label.error {
    color: #ec392f;
  }
  
  .clear_icon {
    &:hover {
      background-color: rgba(221,221,221,0.46);
    }
  }
`;

export const InputPropsWrapper = styled('div')`
  border: ${({outlined}) => outlined ? '1px solid #E0E0E0' : 0};
  cursor: ${({isPassword}) => isPassword ? "pointer" : null};
  background-color: ${({theme, isPassword}) => isPassword ? "transparent" : theme.palette.grey[300]};
  justify-content: center;
  align-items: center;
  height: auto;
  display: flex;
  width: 2.5rem;
  
  svg {
    color: #454545;
    font-size: 1.2rem;
  }
`;

FlexibleDiv.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  flexDir: propTypes.string,
  flexWrap: propTypes.string,
  alignItems: propTypes.string,
  background: propTypes.string,
  justifyContent: propTypes.string,
};

GridableDiv.propTypes = {
  gap: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  gridRow: propTypes.string,
  gridCol: propTypes.string,
  alignItems: propTypes.string,
  background: propTypes.string,
  justifyContent: propTypes.string,
};

FormControl.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  margin: propTypes.string,
  padding: propTypes.string,
  flexDir: propTypes.string,
  flexWrap: propTypes.string,
  bngColor: propTypes.string,
  alignItems: propTypes.string,
  justifyContent: propTypes.string,
};

InputWrapper.propTypes = {
  width: propTypes.string,
  bngColor: propTypes.string,
};
