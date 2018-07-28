
# react-redux-webpack-generic-starter

Another react redux template...
What does differ it from the wide list of similar starters?


## Info
This project consists of both JavaScript and TypeScript src directories with the same project files. The only difference is used syntax.
Once you choose your prefered version, you can freely delete the other src folder.
For pure JavaScript starter check react-redux-webpack-js-starter.
For pure TypeScript starter check react-redux-webpack-ts-starter.

## Main features - tl;dr
- built on the top of the `webpack` and `babel`
- up to date with the newest versions of packages (e.g. `webpack 4`, `react-hot-loader 4` and `babel 7`)
- plain readable project structure after production build
- implementation of duck pattern (easy in development, maintenance, scalability)
- separate config files for dev and prod environments
- languages: JavaScript and TypeScript
- styles: css, less, scss
- linters: eslint and tslint with airbnb style guides, stylelint
- unit testing using `jest` framework (100% code coverage)
- hot module replacement
- code formatter: `prettier` integrated with linters rules
- automatically added polyfills based on declared browser support

## How to use it
- clone repository
    ```
    git clone https://github.com/agileplayers/react-redux-webpack-generic-starter
    ```
- install all dependencies
    ```
    npm install
    ```
- remove redundant src (src - JavaScript; src-ts - TypeScript) and rename it to src (in case of src-ts)
- run project and start coding :)
    ```
    npm run dev 
    ```

## Description
The starter consists of two routes:

- home - counter increasing its value by 1 after every second,
- books - data got from google books api using axios library to present async operation.

Both of them are connected with redux which is used for state management. Application routing is covered by react-router package.

## Available CLI Commands 
- `dev` - run `webpack-dev-server` with HMR (hot module replacement) and development config
- `dev:dashboard` - run `webpack-dev-server` with HMR, `webpack-dashboard` and development config
- `build` - run `webpack` with production config
- `lint:scripts` - run both `eslint` and `tslint` linters accordingly to file extension
- `lint:styles` - run `stylelint` linter on css, less and scss files
- `lint:js` - run `eslint` linter on js and jsx files
- `lint:ts` - run `tslint` linter on ts and tsx files
- `lint:scss` - run `stylelint` linter on scss files
- `lint:less` - run `stylelint` linter on less files
- `lint:css` - run `stylelint` linter on css files
- `pretty` - run `prettier` on all files inside src directory
- `test` - run unit tests (`jest` framework)
- `test:details` - run unit tests with code coverage report (both in terminal and generated `istanbul` report)
- `test:watch` - run unit tests in watch mode
- `test:update` - run unit tests and update `jest` snapshots

## Project structure
- root: contains plugins configuration files
  - .eslintignore - ignore directories for `eslint` validation
  - .eslintrc - `eslint` validator config file
  - .gitignore
  - .prettierignore - ignore directories for `prettier` code formatter
  - .prettierrc - `prettier` code formatter config file
  - .stylelintignore - ignore directories for `stylelint` validation
  - .stylelintrc - `stylelint` validator config file
  - index.html - project start file - all script and link tags will be automatically populated with `webpack`, no necessity to do it manually
  - jest.json - `jest` unit testing framework config file
  - package.json
  - package-lock.json
  - tsconfig.json - TypeScript config file
  - tslint.json - `tslint` validator config file
- config: contains project config files
  - config.vars.js - include project paths and vars
  - webpack.dev.config.js - `webpack` development config
  - webpack.prod.config.js - `webpack` production config
  - jest.babel.processor.setup.js - `jest` processor for JavaScript test files (custom processor to avoid .babelrc config file)
  - jest.framework.setup.js - `jest` + `enzyme` setup \* jest.stubs.setup.js - `jest` stubs setup
- coverage: contains `istanbul` unit testing code coverage report (100% coverage, more than 50 tests written for each of src)
- src: contains application source files - written in JavaScript (to be deleted after chosen of TypeScript version),
- src-ts: contains application source files - written in TypeScript (to be deleted after chosen of JavaScript version),

## Configuration paths - available in config.vars.js
| Name | Description            |
| :--- | :--------------------: |
| root | path to project root   |
| src  | path to src directory  |
| dist | path to dist directory |

## Configuration options - available in config.vars.js
| Name              | Type                  | Options                             | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | :-------------------- | :---------------------------------- | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useDashboard      | boolean               | true &#x7c; false                   | false      | decides if `webpack-dashboard` should be used. Used in npm script 'dev:dashboard'                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| useBabelPolyfill  | string &#x7c; boolean | 'usage' &#x7c; 'entry' &#x7c; false | 'entry'    | original source: `@babel/preset-env`. <br><br> 'usage' - adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once. <br><br> 'entry' - this option enables a new plugin that replaces the statement `import '@babel/polyfill'` or `require('@babel/polyfill')` with individual requires for `@babel/polyfill` based on environment. <br><br> false - don't add polyfills automatically per file, or transform `import '@babel/polyfill'` to individual polyfills. |
| useSourceMaps     | boolean               | true &#x7c; false                   | true       | decides if source maps for project should be generated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| useAwesomeLoader  | boolean               | true &#x7c; false                   | false      | decides if `awesome-typescript-loader` should be used instead of `ts-loader`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| supportedBrowsers | Array<string>         | true &#x7c; false                   | ['>0.25%'] | provides list of supported browsers (`browserslist` config). Used for babel polyfills and autoprefixer for styles                                                                                                                                                                                                                                                                                                                                                                                                                                               |


## Src
Both 'src' and 'src-ts' inside contain the same folder structure.
Components are placed in directories according to placement in routing. Start directory is app.
Each component directory includes name.scss file for component styles, NameComponent.jsx file which is a dumb component and in case of connecting it with redux - NameContainer.js.
Additionally, directory '\_\_tests\_\_' contains all unit tests. All assets should be divided into img directory for all images and font directory for fonts related to component.
The recommended approach (but it is not necessary) is to place img and font directories to another folder (e.g. '\_assets') to avoid polluting component directory.
If the component is splitted into smaller components, you can create 'components' directory and place there all necessary components (keeping twin structure).
For components connected with redux (containers) there is a special directory named '\_duck' - duck pattern implementation.

Helpers directory is a place to put there files including project helper functions.

## Dist
- js: contains transpiled and minified JavaScript files
- css: contains compiled, minified and optimized (removed redundant code) css files
- img: contains used images larger than 30000 bytes (images less than 30000 bytes are converted to base64)
- font: contains used fonts
- map: contains source maps splitted into js and css directories (if optimization \* css plugin is used, css source maps are not generated)
- report: generated bundle report from production build

## Duck pattern
The starter implements duck pattern to allow easy project development, maintenance and scaling. For each component which is connected with redux (container)
there is a special directory named '\_duck'. Please check https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7
for details.

## Webpack 4
The starter is built on the top of `webpack 4` which gives the best performance and its configuration e.g. in case of chunks optimization is much easier then ever.
To provide clarity over minimalization, there are two separate config files: for development and production.

## Polyfills
Forget to take care of manual polyfills management for older browsers support! In config you can turn on auto polyfills and declare browser support using browserlist.

## Languages (Syntax)
The starter can be used for JavaScript, TypeScript or mixed projects. If you would like to use only JavaScript - check project react-redux-webpack-js-starter, if TypeScript - react-redux-webpack-ts-starter.
This project contains starter with configuration for both languages simultanously. Hot module replacement is supported apart from chosen syntax.

## Styles:
The starter support styles written in css, less and scss. At the end all of them are compiled into css (in development there are injected to the style tag in DOM,
in production extracted to css file(s).

## Linters:
The starter contains settings for three linters:

- `eslint` with airbnb style guide for JavaScript files
- `tslint` with airbnb style guid for TypeScript files
- `stylelint` for css, less and scss files

## Unit testing
Starter uses `jest` library to unit test the project with `istanbul` code coverage report. Project has written more than 50 unit tests and has 100% code coverage.

## Hot Module Replacement
HMR is fully supported both for JavaScript and TypeScript src version.

## Code formatter
The starter has `prettier` config to support consistent code formatting.
Integrated with `eslint` and `tslint` to support formating complient with linters.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
