import React from 'react';
import logo from '../images/tictail_logo_square.png';
import { Link } from 'react-router-dom';

import { edit } from '../actions';

const Contact = props => {
  const { contact, match } = props;

  return (
    <div className="contact__wrapper">
      <div className="contact__image">
        <img
          src={contact.image
            ? contact.image
            : logo
          }
          alt={contact.first_name} />
      </div>

      <div className="contact__info">
        <div
          className="contact__color"
          style={{backgroundColor: `#${contact.color}`} || '#171b1f'} />
        <p><span>First Name:</span> {contact.first_name || '--no First Name--'}</p>
        <p><span>Last Name:</span> {contact.last_name || '--no Last Name--'}</p>
        <p><span>Location:</span> {contact.location || '--Everywhere..--'}</p>
        <p><span>Team:</span> {contact.team || '--no Team--'}</p>
        <p><span>Title:</span> {contact.title || '--no Title--'}</p>

        <Link
          to={`${match.url}id:${contact.id}`}
          onClick={() => edit(contact)}
          className="contact__button">
          Edit
        </Link>
      </div>

    </div>
  )
}

export default Contact;