# Woof Woof Application

Dog Image recognition react app with tensorflow/tfjs-models

## Getting Started

Clone app to a destination folder. The application is built on React framework.

### Git cloning

Open bash/terminal and type following lines in your prefered folder (Make sure
Git in installed locally).

```bash
git clone https://github.com/pawangujral/woof.git

// check git current branch
git branch

// Change branch to main if required
git checkout main
```

### Install

To install project dependencies, you can run at root folder:

```bash
cd woof
yarn

OR

cd woof
npm install
```

#### Third-party utility libraries list

The project is using `styled-components` for dynamic class name handling as
third party dependencies & `jest-axe` for accessibility testing.

### Start

To start the project In the project directory, you can run:

```bash
yarn start

OR

npm run start
```

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The
page will reload if you make edits. You will also see any lint errors in the console.

### Build

```bash
yarn build

OR

npm run build
```

Builds the app for production to the `build` folder. You can run with static
local server on mac.

```bash
cd build
python -m SimpleHTTPServer 8080
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
It correctly bundles React in production mode and optimizes the build for the
best performance. The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Project structure | Type - Typescript | Description

- assets - application assets e.g images
- components - Non-functional partial views that are reused in multiple screens
  across the application.
- hooks - custom react hooks
- theme - Contain Global style settings for app
- utils - helper functions
- views - Functional partial/whole views that are used to present UX on-screen.
- **tests** - Folder to place functional/unit test cases.

#### Folder structure

All component folders must follow below structure to keep consistancy in
project.

```bash
├── componentFolderName
    ├── componentFolderName.tsx
    ├── componentFolderName.css
    ├── index.ts
    ├── __tests__
        ├── componentFolderName.test.tsx
```

#### Project src folder

All project related assets are in `assets` folder.

```bash
order-tracking
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
    ├── app.tsx
    ├── index.css
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    ├── __tests__
        ├── app.test.tsx
    ├── components
        ├── button
        │    ├── button.style.ts
        │    ├── button.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── button.test.tsx
        ├── card
        │    ├── card.style.ts
        │    ├── card.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── card.test.tsx
    ├── container
        ├── error
        │    ├── error.style.ts
        │    ├── error.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── error.test.tsx
        ├── header
        │    ├── header.style.ts
        │    ├── header.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── header.test.tsx
        ├── loader
        │    ├── loader.style.ts
        │    ├── loader.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── loader.test.tsx
        ├── notFound
        │    ├── notFound.style.ts
        │    ├── notFound.tsx
        │    ├── index.ts
        │    ├── __tests__
        │        ├── notFound.test.tsx
    ├── context
        ├── quizContext
            ├── quizProvider.tsx
            ├── quizStore.ts
    ├── router
        ├── route.ts
    ├── style
        ├── global.css
    ├── utils
        ├── constants.ts
        ├── types.ts
    ├── views
        ├── consent
        │    ├── consent.tsx
        │    ├── consent.style.ts
        │    ├── index.ts
        │    ├── __tests__
        │        ├── consent.test.tsx
        ├── quiz
        │    ├── quiz.style.ts
        │    ├── quiz.tsx
        │    ├── index.ts
        │    ├── __tests__
        │            ├── quiz.test.tsx
        ├── result
        │    ├── result.style.ts
        │    ├── result.tsx
        │    ├── index.ts
        │    ├── __tests__
        │            ├── result.test.tsx

```

## Testing

Testing is done with jest & react testing library. all test cases are placed in
`__tests__` of each component's root folder.

_Note: this is currently in TODO list & not yet implemented._

e.g :

```bash
├── __tests__
    ├── app.test.tsx
```

For code coverage run:

```bash
yarn test
Or
npm run test

// To generate coverage report add following to package.json test script. it will be generate in coverage folder at root level.

  "test": "react-scripts test --coverage",

```

You can use testing method like `getByText`, `getByTestID`, `getByTitle`,
`getAllByLabelText` & more to interact with DOM elements to write test cases.

### Locale i18n support

For locale, you can use
[Format js](https://formatjs.io/docs/getting-started/installation/) library.
formatjs is a set of libraries that help you set up internationalization in any
project.

_Note: this is currently in TODO list & not yet implemented._

## Links

- [React](https://reactjs.org/)
- [styled-components](http://styled-components.com/)
- [React Testing Libary](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest-axe](https://www.npmjs.com/package/jest-axe)

## Next additional features/functionalites

- Unit test cases
- Usability implmentation (fully ADA compliance)
- Locale support for different languages
