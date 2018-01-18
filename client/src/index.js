import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import './index.css';
import config from './app.config'; //okta authorization ids
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// tells okta if someone tries to access but not logged in, then re-route to login
function onAuthRequired({ history }) {
  history.push('/login');
}

// added react router component
// added security component from okta react sdk
ReactDOM.render(
	<Router>
    <Security issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}>
      <App />
    </Security>
  </Router>,
   document.getElementById('root'));
registerServiceWorker();
