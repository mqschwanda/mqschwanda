/* eslint-disable max-len */

/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/

import 'normalize-css'; // normalize helps standardize browser defaults
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import Typography from 'typography';

import { App } from 'layouts';
import { typography } from 'modules';
import store from 'reducers/index';

typography.injectStyles(); // insert typography styles directly into the <head>

render(<Provider {...{ store }}><App/></Provider>, document.getElementById('app'));

if (module && module.hot) module.hot.accept();
