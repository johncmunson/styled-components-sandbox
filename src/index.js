import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { injectGlobal } from 'styled-components';

// Set global styles here
/*eslint-disable */
injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;
/*eslint-enable */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
