/*
 * component: CustomFormInput
 * author: 
 */

import React from 'react';
import propTypes from 'prop-types';
import {__SelectInput} from "./__SelectInput";
import {__MultipleSelect} from "./__MultipleSelect";


const Select = ({multiple, ...props}) => {

  return multiple ? <__MultipleSelect {...props} /> : <__SelectInput {...props} />

};

Select.defaultProps = {
  name: 'select',
  withFormik: false,
  defaultValue: "Choose from list",
  handleBlur: () => {
  },
  handleChange: () => {
  }
};

Select.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  multiple: propTypes.bool,
  clearable: propTypes.bool,
  withFormik: propTypes.bool,
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  placeholder: propTypes.string,
  options: propTypes.array.isRequired,
  defaultValue: propTypes.string.isRequired,
};

export default Select;