/*
 * component: CustomFormInput
 * author: 
 */

import React from "react";
import { FormStylesWrapper } from "./input.styles";
// import { useField } from "formik";
// import {getInputProps} from "../../lib/helper.lib";

// const Input = ({ label, defaultOption, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <FormStylesWrapper width={props.width}>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <div className="field">
//         {getInputProps(props, field)}
//         {meta.touched && meta.error ? (
//           <div className="invalid-feedback">{meta.error}</div>
//         ) : null}
//       </div>
//     </FormStylesWrapper>
//   );
// };

// export default Input;

export const CustomInput = ({ label, placeholder }) => {
  return (
    <FormStylesWrapper>
      <div className="input-container">
        {label && <label htmlFor="">{label}</label>}
        <div className="field">
          <input placeholder={placeholder} />
        </div>
      </div>
    </FormStylesWrapper>
  );
};
