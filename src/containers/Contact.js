import React from 'react';
import {
  NavLink,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../components/Input';
import logo from '../images/tictail_logo_square.png';
import { editInput, save, emptyContact } from '../actions';
import { contactInitial } from '../constants';
import Header from '../components/Header';

const Contact = props => {
  const { match, contact } = props;

  if (!contact || contact.id === '') {
    const newId = match.url.split(':', 2);
    console.log(newId[1]);

    contact.id = newId[1];
  }

  console.log({contact});

  return [
    <Header key="header" title={!contact || !contact.first_name ? 'Add new contact' : 'Edit contact'} />,
    <div key="body" className="tictail__row contact-form">

      {contact && contact.image
        ? <img src={contact.image} alt={contact.name} />
        : <img src={logo} alt='tictail contact' />
      }

      <div className="contact-form__inputs">
        {Object.keys(contact).map(data => {
          console.log(contact);
          return <Input
            key={data}
            handleChange={(value, field) => editInput(value, field, contact)}
            type={data}
            value={contact[data]} />
        }
        )}
      </div>

      <div className="contact-form__actions">
        <Link
          to="/"
          onClick={() => emptyContact()}
          className="contact__button">
          Back to Contacts List
        </Link>

        <button
          className="contact__button"
          onClick={() => save(contact)}>
          Save
        </button>

        <button
          className="contact__button"
          onClick={() => {}}>
          Delete
        </button>
      </div>
    </div>
  ];
};

export default connect(state => state)(Contact);
        // {contact
        //   ? Object.keys(contact).map(data =>
        //     <Input
        //       key={data}
        //       handleChange={(value, field) => editInput(value, field, contact)}
        //       type={data}
        //       value={contact[data]} />
        //   )
        //   : Object.keys(contactInitial).map(data =>
        //     <Input
        //       key={data}
        //       handleChange={(value, field) => editInput(value, field, contactInitial)}
        //       type={data}
        //       value={contactInitial[data]} />
        //   )
        // }