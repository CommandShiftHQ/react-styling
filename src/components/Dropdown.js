import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const color = {
  backgroundButton: '#cde7f7',
  backgroundOptions: '#f2f7fa',
  colorOptionOnHover: '#1c7dbd',
};

const DropdownRoot = styled.div`
  width: 300px;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${color.backgroundButton};
  border: none;
  font-size: 16px;
  padding: 10px;
  text-align: left;
  outline: none;
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${color.backgroundOptions};

  li {
    text-align: left;
    padding: 10px;
    cursor: pointer;
    transition: padding .2s;

    &:hover {
      color: ${color.colorOptionOnHover};
      padding-left: 15px;
    }
  }
`;

const Dropdown = ({title, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const selectedOption = options.find((option) => option.id === selectedValue);

  const getDropdownTitle = selectedOption 
      ? `${title} - ${selectedOption.label}`
      : title;

  return (
    <DropdownRoot>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {getDropdownTitle}
      </Button>
      {
        isOpen && (
          <div className="dropdown__body">
            <OptionList>
              {options.map((option) => (
              <li key={option.id} onClick={() => setSelectedValue(option.id)}>
                {option.label}
              </li>
            ))}
            </OptionList>
          </div>
        )
      }
    </DropdownRoot>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
