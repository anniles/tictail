import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './store';
import Root from './containers/Root';
// import Contact from './containers/Contact';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './css/index.sass';

let store = getStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)

// const Init =  props => {
//   return (
//     <Provider key="provider" store={getStore(props)}>
//       <Router>
//         <div>
//           <Contacts {...props} />

//           <Route exact path="/" component={Contacts}/>
//           <Route path="/id" component={Contact}/>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// render(
//   <Init /> , document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// import getStore from './store';
// import Contacts from './containers/Contacts';
// import Contact from './containers/Contact';
// import registerServiceWorker from './registerServiceWorker';

// import './css/index.sass';

// const Init =  props => {
//   return (
//     <Provider key="provider" store={getStore(props)}>
//       <Router>
//         <div>
//           <Contacts {...props} />

//           <Route exact path="/" component={Contacts}/>
//           <Route path="/id" component={Contact}/>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// render(
//   <Init /> , document.getElementById('root'));
// registerServiceWorker();
