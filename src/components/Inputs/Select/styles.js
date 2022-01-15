/*
 * component: CustomFormInput
 * author:
 */

import styled from "styled-components";

function getPosition(inputProps) {
  if (inputProps && inputProps.position) {
    return inputProps.position === "right" ? "row-reverse" : "row";
  } else return "row"
}

export const ListItem = styled('li')`
  display: none;
  list-style: none;
  padding: 1rem 0.5rem;
  background-color: ${({selected}) => selected ? '#f99ce914' : '#FCFCFC'};
  transition: background-color .3s ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid #EDEDED;
  }
  
  &.active {
    display: block;
    max-height: 50px; 
  }
  
  :hover {
    background-color: #EEE;
    cursor: pointer;
  }
`;

export const SelectWrapper = styled('ul')`
  width: 100%;
  height : 100%;
  border: none;
  overflow: auto;
  font-size: 0.89rem;
  border-radius: inherit;
  background-color: transparent;
  
  .selector_wrap {
    width: 100%;
    height : 100%;
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    justify-content: space-between;
    flex-direction: ${({inputProps}) => getPosition(inputProps) };
    padding: 0;
    
    .selected-base {
      width: 100%;
      min-height: 2.6rem;
      padding-left: 0.5rem;
      display: flex;
      justify-content: ${({inputProps}) => inputProps && inputProps.position === 'right' ? 'space-between' : null};
      align-items: center;
      //background-color: grey;
    }
    
    .selected-base__ms {
      padding: 0.12rem 0 0.12rem 0.5rem;
    }
    
    .selected {
      width: 100%;
      height: 100%;
      display: flex;
      cursor: pointer;
      font-weight: 500;
      position: relative;
      align-items: center;
      justify-content: space-between;
    }
    
    .controls {
      top: 0;
      right: 0;
      display: flex;
      width: max-content;
      align-items: center;
      justify-content: space-around;
      height: ${({inputProps}) => inputProps && inputProps.position === "right" ? '100%' : '100%'};
      position: ${({inputProps}) => inputProps && inputProps.position === "right" ? 'none' : 'absolute'};
        
      .arrow, .clear_icon {
        height: 100%;
        display: flex;
        padding: 0 0.5rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
