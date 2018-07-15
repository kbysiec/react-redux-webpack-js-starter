import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import App from './app/App';
import store from './store';

// **** solution 1 - classic approach, no changes in App.jsx ****
// const renderRoot = (Component: JSX.Element) => {
//   ReactDOM.render(
//     <AppContainer>{Component}</AppContainer>,
//     document.getElementById('root'),
//   );
// };

// renderRoot(<App store={store} />);

// if (module.hot) {
//   module.hot.accept('./app/App', async () => {
//     // const NextApp = require('./app/App').default;
//     const NextApp = (await import('./app/App')).default;
//     renderRoot(<NextApp store={store} />);
//   });
// }

// **** solution 2 - new approach, change in App.jsx - make component hot reloadable ****
ReactDOM.render(<App store={store} />, document.getElementById('root'));
