import "./contactMeForm.css"
import sendIcon from "C:/Users/Sean/Documents/VSCode Files/giulia_website/src/Images/website_images/email_send_icon.png";

function ContactMeForm() {
    return (
      <div className="form-container">
        <form
          action="https://formsubmit.co/seansmith089@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://giuliafratiart.com/thanks"
          ></input>
          <input
            type="hidden"
            name="_subject"
            value="New Message from your Website!"
          ></input>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="contact-name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="contact-email"
            required
          ></input>
          <textarea
            name="message"
            placeholder="say hello!"
            className="contact-text"
            required
          ></textarea>
          <div className="contact-btn-container">
            <button type="submit" className="contact-button">
              <img className="contact-sendIcon" src={sendIcon} alt="" />
              <h1 className="contact-sendText">send</h1>
            </button>
          </div>
        </form>
      </div>
    );
}

export default ContactMeForm;