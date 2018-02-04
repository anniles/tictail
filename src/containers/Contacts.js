import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

import logo from '../images/tictail_logo_square.png';

import { contacts_res } from '../constants';
import Contact from '../components/Contact';
import Header from '../components/Header';

const Contacts = props => {
  const { contacts, match } = props;
  const newContactId = Math.random().toString(36).substr(2, 10);

  return (
    <div className="contacts">
      <Header title="Welcome to Tictail Admin" />

      <div className="tictail__row">
        <Link
          to={`${match.url}id:${newContactId}`}
          className="contact__button contact__button--add">
          Add Contact
        </Link>

        <div className="contacts__list">
          {contacts
            ? Object.keys(contacts).map(contactId =>
              <Contact
                match={match}
                key={contacts[contactId].id}
                contact={contacts[contactId]} />
            )
            : null
          }
        </div>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.object,
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