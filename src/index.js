import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import getStore from './store';
import Root from './containers/Root';
import './css/index.sass';

let store = getStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker();
