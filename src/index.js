import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './store';
import Contacts from './containers/Contacts';
import registerServiceWorker from './registerServiceWorker';

import './css/index.sass';

const Init =  props => {
  return [
    <Provider key="provider" store={getStore(props)}>
      <Contacts {...props} />
    </Provider>,
  ];
};

render(
  <Init /> , document.getElementById('root'));
registerServiceWorker();
