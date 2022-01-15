/*
 * component: FormStylesWrapper
 * author: 
 */

import styled from "styled-components";

const FormStylesWrapper = styled('div')`
  label {
    font-weight: 500;
    color: #828282;
    font-size: 1rem;
  }
  .field {
    width: 100%;
    height: 41px;
    border-radius: 4px;
    position: relative;
    background-color: #f7f8fb;
    /* background-color: rgb(255, 255, 255); */
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
  }

  .field:hover {
    background-color: #f9f9f9;
    /* background-color: rgba(255, 237, 217, 0.29); */
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
    /* box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.295); */
  }

  .field.active {
    background-color: #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .field.active input {
    padding: 24px 16px 8px 16px;
  }

  .field.active input + label {
    top: 2px;
    opacity: 0.8;
    color: #4e1980;
  }

  .field.locked {
    pointer-events: none;
  }

  .field input,
  select {
    width: 100%;
    height: 41px;
    position: relative;
    padding: 0 16px;
    border: none;
    border-radius: 4px;
    font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    color: #3e3e3e;
    outline: none;
    box-shadow: 0 2px 2px rgba(50, 50, 93, 0.11), 0 1px 1px rgba(0, 0, 0, 0.08);
    /* box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08); */
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
    -webkit-appearance: none;
  }

  .field select > option {
    color: #555555;
    padding: 1rem 0.1rem;
  }

  .field input::-webkit-input-placeholder {
    color: rgba(139, 139, 139, 0.75);
  }
  .field input::-moz-placeholder {
    color: rgba(139, 139, 139, 0.75);
  }

  .field.active input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  .field input:-ms-input-placeholder {
    color: rgba(139, 139, 139, 0.75);
  }
  .field input:-moz-placeholder {
    color: rgba(139, 139, 139, 0.75);
  }

  .field input + label {
    position: absolute;
    top: 24px;
    left: 16px;
    font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    color: #333333;
    opacity: 0;
    pointer-events: none;
    transition: 0.1s all ease-in-out;
  }

  .field input + label.error {
    color: #ec392f;
  }

  .invalid-feedback {
    color: #f98249;
    bottom: -18px;
    font-weight: 400;
    position: absolute;
    font-size: 11px;
    left: 0;
  }

  .field p.predicted {
    position: absolute;
    top: 8px;
    left: 16px;
    font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #e0e0e0;
    opacity: 1;
    pointer-events: none;
  }
`;

export { FormStylesWrapper };
