/*
 * component: CustomFormInput
 * author: George Favour
 * Date: August 26th, 2020
 * EmBED MultiSelect Styles component
 */

import styled from "styled-components";

export const MultiSelectWrap = styled('aside')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const SelectPills = styled('div')`
  background-color: #DEDEDE;
  border-radius: 2rem;
  margin: 0.15rem 0.27rem 0.15rem 0.15rem;
  padding: 0.15rem 0.25rem 0.15rem 0.5rem;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    background-color: #BDBDBD;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.25s ease-in;
    margin-left: 0.5rem;
    
    &:hover {
      background-color: #979797;
    }
  }
`;