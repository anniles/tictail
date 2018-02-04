import React from 'react';
import logo from '../images/tictail_logo_square.png';

const Contact = props => {
  const { contact } = props;
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

        <button className="contact__edit">Edit</button>
      </div>

    </div>
  )
}

export default Contact;