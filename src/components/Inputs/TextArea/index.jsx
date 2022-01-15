/*
 * component: CustomFormInput
 * author:
 */

import React from 'react';
import {useField} from "formik";
import propTypes from 'prop-types';
import {__TextArea} from "./styles";
import {FormControl, InputWrapper} from "../../Box/styles";
import {Label} from "../input.styles";


/**
 * TextArea component interfaced directly with Formik
 * */
const TextAreaWithFormik = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      bngColor={"#FFF"}
      flexDir={"column"}
      alignItems={"flex-start"}
      width={props.width}
      justifyContent={"flex-start"}
    >
      {label ? (
        <Label htmlFor={props.name}>{label}</Label>
      ) : null}

      <InputWrapper {...props}>
        <__TextArea
          {...props}
          {...field}
        />

        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </InputWrapper>
    </FormControl>
  )
}

/**
 * TextArea component natively implemented
 * */
const TextAreaComponent = ({
  name,
  value,
  label,
  errors,
  handleBlur,
  handleChange,
  ...props
}) => {
  return (
    <FormControl
      bngColor={"#FFF"}
      flexDir={"column"}
      alignItems={"flex-start"}
      width={props.width}
      justifyContent={"flex-start"}
    >
      {label ? (
        <Label htmlFor={props.name}>{label}</Label>
      ) : null}

      <InputWrapper {...props}>
        <__TextArea
          name={name}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      </InputWrapper>
    </FormControl>
  )
}

const TextArea = ({withFormik, ...props}) => {
  return withFormik
    ? <TextAreaWithFormik {...props} />
    : <TextAreaComponent {...props} />;
}

// =============================================
// Typechecking enforcement implementation
// =============================================

TextArea.defaultProps = {
  name: 'textarea',
  withFormik: false,
  handleBlur: () => {},
  handleChange: () => {}
}

TextArea.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  withFormik: propTypes.bool,
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  placeholder: propTypes.string.isRequired,
}

export default TextArea;