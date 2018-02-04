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
          style={{backgroundColor: `#${contact.color}`}} />
        <p>First Name: {contact.first_name}</p>
        <p>Last Name: {contact.last_name}</p>
        <p>Location: {contact.location}</p>
        <p>Team: {contact.team}</p>
        <p>Title: {contact.title}</p>
      </div>
    </div>
  )
}

export default Contact;