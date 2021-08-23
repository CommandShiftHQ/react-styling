import styles from "styled-components";

const color = {
  backgroundButton: "#cde7f7",
  backgroundOptions: "#f2f7fa",
  colorOnHover: "#1c7dbd",
};

export const Root = styles.div`
  max-width: 300px;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Button = styles.button`
  width: 100%;
  background-color: ${color.backgroundButton};
  border: none;
  outline: none;
  padding: 10px;
  text-align: left;
  font-size: 16px;
`;

export const OptionList = styles.ul`
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
      color: ${color.colorOnHover};
      padding-left: 15px;
    }
  }
`;
