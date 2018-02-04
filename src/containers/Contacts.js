import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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