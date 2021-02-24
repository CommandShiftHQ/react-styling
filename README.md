# React Styling

This demo is continuation of our [React Intro](https://github.com/MCRcodes/react-intro), so if you want to code along with us, just clone the previous one to you machine.

## Objectives

After this demo presentation students should be familiar with basic, practical usage of:

- inline styles in React Components,
- `styled-components` library in React Components.

## Styling Techniques

### Inline Styles

1. Create `DropdownStyles.js` file in `components` directory.
2. Using `export default {}` create an object add properties of `root`, `button`, `ul`, and `li` inside. Each can be an empty object for now.
3. Style `<Dropdown />` using camel cased CSS properties with values in single quotes, for instance `fontSize: '16px'`.
4. Import styles in `<Dropdown />` component:

   `import styles from './DropdownStyles.js';`

5. Add `style` prop to each element you want to style. Value of each `style` prop should be an object imported from `DropdownStyles.js`, for instance `<div style={styles.root} >`. You can also deconstruct each styling object and use deconstructed constant names in JSX.

### CSS-in-JS: styled-components

1. Install `styled-components` library by running command below and start React app:

   `npm install --save styled-components`

2. Import library in `<Dropdown />` component:

   `import styled from 'styled-components';`

3. Add constants with colours (as objects), and with styled components using `styled` object, for instance:

   `` const DropdownRoot = styled.div`width: 300px;`; ``

Remember:

- constants storing reusable values should be camel cased.
- styled components should be camel cased, but start with capital letter, as any other component.
- property od styled component object should be desired tag name,
- styling rules should be listed between backticks (keeping CSS syntax), as a template literate, which means you can use JavaScript variables.

4. Replace appropriate tags with new styled components.

## Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
# styled-components-example
