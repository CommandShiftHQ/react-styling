import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownStyles.js';

const Dropdown = ({title, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const selectedOption = options.find((option) => option.id === selectedValue);

  const getDropdownTitle = selectedOption 
      ? `${title} - ${selectedOption.label}`
      : title;

  const {
    root, button, ul, li
  } = styles; 

  return (
    <div className="dropdown" style={root} >
      <button
        className="dropdown__header"
        style={button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getDropdownTitle}
      </button>
      {
        isOpen && (
          <div className="dropdown__body">
            <ul style={ul} >
              {options.map((option) => (
              <li 
                key={option.id}
                style={li}
                onClick={() => setSelectedValue(option.id)}
              >
                {option.label}
              </li>
            ))}
            </ul>
          </div>
        )
      }
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;