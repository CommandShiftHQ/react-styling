import React, { useState } from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';
import { Root as DropdownRoot, Button, OptionList } from "./DropdownStyles";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const selectedOption = options.find((option) => option.id === selectedValue);

  const getDropdownTitle = selectedOption
    ? `${title} - ${selectedOption.label}`
    : title;

  return (
    <DropdownRoot>
      <Button onClick={() => setIsOpen(!isOpen)}>{getDropdownTitle}</Button>
      {isOpen && (
        <div className="dropdown__body">
          <OptionList>
            {options.map((option) => (
              <li key={option.id} onClick={() => setSelectedValue(option.id)}>
                {option.label}
              </li>
            ))}
          </OptionList>
        </div>
      )}
    </DropdownRoot>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
