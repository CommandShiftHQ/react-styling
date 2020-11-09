# React Styling

This demo is continuation of our [React Intro](https://github.com/MCRcodes/react-intro), so if you want to code along with us, just clone the previous one to you machine.

## Objectives

...

## Styling Techniques

### Inline Styles

1. Create `DropdownStyles.js` file in `components` directory.
2. Using `export default {}` create an object add properties of `root`, `button`, `ul`, and `li` inside. Each can be an empty object for now.
3. Style `<Dropdown />` using camel cased CSS properties with values in single quotes, for instance `fontSize: '16px'`.
4. Import styles in `<Dropdown />` component:

   `import styles from './DropdownStyles.js';`

5. Add `style` prop to each element you want to style. Value of each `style` prop should be an object imported from `DropdownStyles.js`, for instance `<div style={styles.root} >`. You can also deconstruct each styling object and use deconstructed constant names in JSX.

### CSS-in-JS: styled-components

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
