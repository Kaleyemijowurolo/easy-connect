/*
 * component: CustomFormInput
 * author:
 */

import React, {useState} from 'react';
import propTypes from "prop-types";
import {Label} from "../../input.styles";
import {FormControl, InputPropsWrapper, InputWrapper} from "../../../Box/styles";
import {ListItem, SelectWrapper} from "../styles";
import {MdClear as ClearIcon} from "react-icons/md";
import {TiArrowSortedDown as DownArrowIcon, TiArrowSortedUp as UpArrowIcon} from "react-icons/ti";
import {MultiSelectWrap, SelectPills} from "./styles";
import {P} from "../../../FontSize/styles";
import {generateID} from "../../../../lib/generateID";


const initialState = {
  showMSList: false,
  selectValue: []
}

export const __MultipleSelect = ({withFormik, clearable, handleChange, label, ...props}) => {
  const inputRef = React.useRef(null);
  const [state, setState] = useState(initialState);
  const clearableRef = React.useRef(null);

  // Handle click-away function addition to the DOM
  // and clean up when component is ready to be destroyed
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    }
  }, []);

  const handleShowList = () => setState(prev => ({...prev, showMSList: !state.showMSList}));

  /*
  * Clear the selected items from the select field
  */
  const handleClearSelect = () =>
    setState(prev => ({...prev, selectValue: []}));

  const handleDeleteSelectedItem = (e, value) => {
    e.stopPropagation();

    setState(prev => ({
      ...prev,
      selectValue: state.selectValue.filter(item => item !== value),
    }))
  }

  const handleSelectChange = ({target}) => {
    const value = target.getAttribute('data-name');
    setState(prev => ({
      ...prev,
      selectValue: [...new Set([...state.selectValue, value])],
    }))

    handleChange(value)
  };

  /**
   * Close the select list when user clicks outside the select component
   */
  const handleClickAway = (e) => {
    const canClose = [...inputRef.current.children].includes(e.target)
    if (canClose) {
      if (!clearableRef.current) {
        setState(prev => ({...prev, showList: !state.showList}))
      }
    }
  }

  return (
    <FormControl
      flexDir={"column"}
      width={props.width}
      margin={"0.5rem auto"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      bngColor={props.bngColor || '#F4F6FC'}
    >
      {label ? (
        <Label htmlFor={props.name}>{label}</Label>
      ) : null}

      <InputWrapper {...props}>
        <SelectWrapper ref={inputRef} {...props}>
          <main className={'selector_wrap'}>
            {props.inputProps ? (
              <InputPropsWrapper {...props}>
                {props.inputProps.icon}
              </InputPropsWrapper>
            ) : null}

            <section className={"selected-base selected-base__ms"}>
              <MultiSelectWrap
                onClick={handleShowList}
                {...props}
              >
                {!!state.selectValue.length ? (
                  state.selectValue.map(value => (
                    <SelectPills key={generateID(8)}>
                      <P>{value}</P>
                      <span
                        className={"delete-item"}
                        onClick={(e) => handleDeleteSelectedItem(e, value)}
                      >
                        <ClearIcon className={"delete-item"} />
                      </span>
                    </SelectPills>
                  ))
                ) : props.defaultValue}
              </MultiSelectWrap>

              <div className={'controls'}>
                {/* show clear icon only if the clearable props is passed and an item has been selected */}
                {clearable && !!state.selectValue.length ? (
                  <span
                    ref={clearableRef}
                    className={'clear_icon'}
                    onClick={handleClearSelect}
                  >
                  <ClearIcon className={'clear_icon_svg'} />
                </span>
                ) : null}

                <span
                  className={"arrow"}
                  onClick={handleShowList}
                >
                {state.showMSList ? <UpArrowIcon/> : <DownArrowIcon/>}
              </span>
              </div>
            </section>
          </main>

          {state.showMSList && props.options.map((option, idx) =>
            <ListItem
              key={idx}
              data-name={option}
              onClick={handleSelectChange}
              selected={state.selectValue.includes(option)}
              className={`${state.showMSList ? 'active' : null}`}
            >
              {option}
            </ListItem>)
          }
        </SelectWrapper>
      </InputWrapper>
    </FormControl>
  )
}

__MultipleSelect.defaultProps = {
  name: 'select',
  withFormik: false,
  defaultValue: "Choose from list",
  handleBlur: () => {
  },
  handleChange: () => {
  }
};

__MultipleSelect.propTypes = {
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