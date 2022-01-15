import React from "react";
import {ButtonStyled} from "./button.styled";
import propTypes from 'prop-types';
// import Loader from "../Loaders";
import { BiLoader } from "react-icons/bi";

export const Button = React.forwardRef(({type, text, loading, disabled, click, icon, ...otherProps}, ref) => {
  const renderText = (
    <span className={'text__icon'}>
      <span>{text}</span>
      <span className={"icon"}>{icon}</span>
    </span>
  );

  return (
    <ButtonStyled
      ref={ref}
      type={type}
      onClick={click}
      hasIcon={!!icon}
      disabled={disabled}
      text={text}
      {...otherProps}
    >
      {loading ? 
      <BiLoader size={"sm"} {...otherProps} /> : (
        !icon ? text : renderText
      )}
    </ButtonStyled>
  );
});

Button.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  click: propTypes.func,
  icon: propTypes.any,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  variant: propTypes.string,
  size: propTypes.string
};

 ;
