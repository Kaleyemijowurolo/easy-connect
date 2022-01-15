/*
 * component: CustomFormInput
 * author: George Favour
 * Date: August 13th, 2020
 * EmBED TextField Styles component
 */

import styled from "styled-components";


function getPosition(inputProps) {
  if (inputProps && inputProps.position) {
    return inputProps.position === "right" ? "row-reverse" : "row";
  } else return "row"
}

export const __TextField = styled('input')`
  outline: 0;
  border: none;
  color: #333333;
  border-radius: 4px;
  font-size: 0.89rem;
  min-height: 2.6rem;
  padding-left: 0.5rem;
  background-color: #f7f8fb;
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : '100%'};
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
`;

export const TextFieldWrapper = styled('main')`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({inputProps}) => getPosition(inputProps) };
`;
