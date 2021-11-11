import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './mailChimp.css';

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });
}


  return (
    <form className="mc__form pt-3" onSubmit={(e) => handleSubmit(e)}>
      <h4 className="mc__title pb-3" style={{color: 'white'}}>Pour vous tenir informé de nos activités, inscrivez-vous à notre newsletter.</h4>
      {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      <div className="form-container">
            <input
              className= "mc__input"
              label="First Name"
              onChange={e => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="Votre prénom"
              isRequired
            />

            <input
              className= "mc__input"
              label="Last Name"
              onChange={e => setLastName(e.target.value)}
              type="text"
              value={lastName}
              placeholder="Votre nom"
              isRequired
            />

            <input
              className= "mc__input"
              label="Email"
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="votre e-mail"
              isRequired
            />

              <input
              className="d-none d-md-inline mc__submit"
              label="subscribe"
              type="submit"
              formValues={[email, firstName, lastName]}
              />
            
      </div>
              <input
              className="d-inline d-md-none mc__submit"
              label="subscribe"
              type="submit"
              formValues={[email, firstName, lastName]}
              />
            

    </form>
  );
};

const index = props => {

    const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}id=${process.env.REACT_APP_MAILCHIMP_ID}`
    return (

        <div className="form-container text-center">
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
    )
}

export default index



