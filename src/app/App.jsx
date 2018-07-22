import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import HeaderComponent from './common/header/HeaderComponent';
import FooterComponent from './common/footer/FooterComponent';
import HomeComponent from './home/HomeComponent';
import BookListContainer from './books/BookListContainer';

import './common/common.scss';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <>
        <div className="container">
          <HeaderComponent />
          <div className="content">
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/books" component={BookListContainer} />
          </div>
        </div>
        <FooterComponent />
      </>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default hot(module)(App);
// export default App;
