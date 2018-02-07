import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Contact from '../components/Contact';
import Header from '../components/Header';
import { updateFilter, filterContacts } from '../actions';

const mapProperties = {
  color: 'Color',
  first_name: 'First Name',
  last_name: 'Last Name',
  location: 'Location',
  team: 'Team',
  title: 'Title',
};

const Contacts = props => {
  const { contacts, match, isLoading, contact_property, filter_value, dispatch } = props;

  const handleKeyPress = e => {
    if (e.target.keyCode === 13) {
      filterContacts(contact_property, filter_value, dispatch);
    }
  }

  return (
    <div className="contacts">
      <Header title="Welcome to Tictail Admin" />

      {isLoading
        ? <h1 className="loading">Loading...</h1>
        : <div className="tictail__row">

          <div className="contacts__actions">
            <Link
              to={`${match.url}new`}
              className="contact__button contact__button--add">
              Add Contact
            </Link>

            <div className="contacts__actions-filter">
              <div className="contacts__inputs-filter">
                <div className="contacts__actions-filter--select">
                  <select onChange={e => updateFilter(e.target.value, 'contact_property')}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="title">Title</option>
                    <option value="location">Location</option>
                    <option value="color">Color</option>
                    <option value="team">Team</option>
                  </select>
                </div>

                <input
                  onChange={e => updateFilter(e.target.value, 'filter_value')}
                  //onKeyPress={e => handleKeyPress(e)}
                  placeholder={`Search for ${mapProperties[contact_property] || '...'}`}
                  type="text"/>
              </div>

              <button
                onClick={() => filterContacts(contact_property, filter_value, dispatch)}
                className="contact__button contact__button--search">
                Search
              </button>
            </div>
          </div>

          <div className="contacts__list">
            {contacts && Object.keys(contacts).length !== 0
              ? Object.keys(contacts).map((contactId, i) =>
                <Contact
                  match={match}
                  key={i}
                  contact={contacts[contactId]} />
              )
              : <h1>We need some people over here...I think!</h1>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default connect(state => state)(Contacts);