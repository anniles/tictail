import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../../images/tictail_logo_square.png';
import { contacts_res } from '../../constants';
import Contact from '../../components/Contact';

const Contacts = props => {
  const { contacts } = props;

  const url = 'http://127.0.0.1:5000';

  fetch(`${url}/contacts`, {
      mode: 'no-cors',
      // credentials: 'include',
      method: 'GET',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => response.json())
    .then(json => console.log(json, 'ee'))
    .catch(error => console.log('Authorization failed : ' + error.message));

  return (
    <div className="contacts">
      <header className="contacts-header">
        <img src={logo} className="contacts-logo" alt="logo" />
        <h1 className="contacts-title">Welcome to Tictail Admin</h1>
      </header>

      <div className="contacts__list">
        {contacts
          ? Object.keys(contacts).map(contactId =>
            <Contact
              key={contacts[contactId].id}
              contact={contacts[contactId]} />
          )
          : null
        }
      </div>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.object,
  // categories: PropTypes.array,
  // categories: PropTypes.array,
};

export default connect(state => state)(Contacts);
// export default Contacts;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';

// import Categories from 'components/Categories';
// import TreeView from '../components/TreeView';
// import CategoriesList from '../components/CategoriesList';

// import '../css/index.styl';

// const App = props => {
//   const { history, categories } = props;

//   return (
//     <div className="categories">
//       <Helmet>
//         <title>Categories</title>
//       </Helmet>

//       <div className="clusters-header__select">
//         <Categories
//           shouldRenderSelect={false}
//           onSelect={item => history.push(`/categories/${item.id}`)}
//           onChange={cid => history.push(`/categories/${cid}`)} />
//         <CategoriesList
//           categories={categories} />
//       </div>

//       {/*<TreeView />*/}

//     </div>
//   );
// };

// App.propTypes = {
//   history: PropTypes.object,
//   categories: PropTypes.array,
// };

// export default connect(state => state)(App);