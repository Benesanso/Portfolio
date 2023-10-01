import React, { useState } from 'react';
import './contacts.css';

const Contacts = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const handleEmailClick = (e) => {
    // Empêcher la propagation de l'événement de clic sur l'icône
    e.stopPropagation();

    // Inverser l'état de la section e-mail
    setIsEmailOpen(!isEmailOpen);
  };

  const handlePhoneClick = (e) => {
    // Empêcher la propagation de l'événement de clic sur l'icône
    e.stopPropagation();

    // Inverser l'état de la section téléphone
    setIsPhoneOpen(!isPhoneOpen);
  };

  return (
    <div className="contacts-box">
      {/* Section pour l'e-mail */}
      <div className='mail'>
        <i className={`fas ${isEmailOpen ? 'fa-envelope-open' : 'fa-envelope'} icon`} onClick={handleEmailClick}></i>
        {isEmailOpen && (
          <>
            <div className="contact-infos">
              <a href="mailto:benesanso34@gmail.com">benesanso34@gmail.com</a>
            </div>
          </>
        )}
      </div>

      {/* Section pour le téléphone */}
      <div className='telephone'>
        <i className={`fas ${isPhoneOpen ? 'fa-phone-volume' : 'fa-phone'} icon`} onClick={handlePhoneClick}></i>
        {isPhoneOpen && (
          <div className="contact-infos-tel">
            06.16.16.98.08
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
