/*
 * component: CustomFormInput
 * author: 
 */
import React from "react";
import { FormStylesWrapper } from "./Inputs.styled";
import { useField } from "formik";
import { generateID } from "../../lib/generateID";
import { getInputProps } from "../../lib/helper.lib";

{
  /**NOTICE
 getInputProps was imported in place of the section removed. still the same but few changes. 
 selectOptions was changed to option. this is global in EmBED
*/
}

const Input = ({ label, defaultOption, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormStylesWrapper width={props.width}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="field">
        {getInputProps(props, field )}
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    </FormStylesWrapper>
  );
};

export default Input;

export const CustomInput = ({
  label,
  placeholder,
  handleChange,
  onFocusValue,
}) => {
  return (
    <FormStylesWrapper>
      <div className="input-container">
        {label && <label htmlFor="">{label}</label>}
        <div className="field">
          <input
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            onFocus={({ target: { value } }) => (value = onFocusValue)}
          />
        </div>
      </div>
    </FormStylesWrapper>
  );
};
