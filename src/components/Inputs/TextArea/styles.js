/*
 * component: CustomFormInput
 * author:
 */

import styled from "styled-components";


export const __TextArea = styled('textarea')`
  resize: none;
  width: 100%;
  font-size: 0.89rem;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: inherit;
  background-color: transparent;
  height: ${({col}) => col ? `${col}rem` : '8rem'};
  min-height: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  &:active, &:focus {
    background-color: #f9f9f9;
    box-shadow: 0 4px -1px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;
