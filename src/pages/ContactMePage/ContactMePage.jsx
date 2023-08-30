import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";

import "./contactMePage.css"

function ContactMe() {
    return (
      <div className="contact-me-container">
        <h1 className="page-title">- contact me -</h1>
        <div className="contact-submessage-containter">
          <h2 className="contact-submessage">Thanks for getting in touch. I'll get back to you as soon as possible! </h2>
        </div>
        <ContactMeForm />
      </div>
    );
}

export default ContactMe;