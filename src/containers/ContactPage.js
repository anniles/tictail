import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../components/Input';
import logo from '../images/tictail_logo_square.png';
import { editInput, save, emptyContact, deleteContact, updateImage } from '../actions';
import Header from '../components/Header';

import { UPDATE_IMAGE, LOAD } from '../constants/actions';

const ContactPage = props => {
  const { histrory, match, contact, dispatch } = props;
  console.log(props);

  if (!contact || contact.id === '') {
    const newId = match.url.split(':', 2);

    contact.id = newId[1];
  }

  const handleImageChange = event => {
    event.preventDefault();

    let file = event.target.files[0];

    updateImage(URL.createObjectURL(file), contact);
  }

  return [
    <Header key="header" title={!contact || !contact.first_name ? 'Add new contact' : 'Edit contact'} />,
    <div key="body" className="tictail__row contact-form">

      <div className="contact-form__image">
        {contact && contact.image
          ? <img
              src={contact.image}
              alt={contact.name} />
          : <img
              src={logo}
              alt='tictail contact' />
        }
        <input
          onChange={event => handleImageChange(event)}
          type="file"
          accept="image/gif, image/jpeg, image/png" />
      </div>

      <div className="contact-form__wrapper">
        <div className="contact-form__inputs">
          {Object.keys(contact).map(data =>
            <Input
              key={data}
              handleChange={(value, field) => editInput(value, field, contact)}
              type={data}
              id={contact.id}
              value={contact[data]} />
          )}
        </div>

        <div className="contact-form__actions">
          <span
            // to="/"
            onClick={() => {
              dispatch({
                type: LOAD,
              });

              emptyContact();
              window.location.href = '/';
            }}
            className="contact__button">
            Back to Contacts List
          </span>

          <div className="contact-form__buttons">
            <Link
              to="/"
              className="contact__button contact__button--small"
              onClick={() => {
                save(contact, dispatch);
                emptyContact();
              }}>
              Save
            </Link>

            <Link
              to="/"
              className="contact__button contact__button--black contact__button--small"
              onClick={() => {
                deleteContact(contact);
                emptyContact();
              }}>
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  ];
};

export default connect(state => state)(ContactPage);
