import "./Contact.css";
import { contactlist } from "../../utils/contactlist";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="cont-text">CONTACT FORM</h1>

      <div className="contact-head">
        <div data-aos="flip-up">
          <div className="contacts-cards">
            {contactlist.map((cont) => (
              <a
                key={cont._id}
                target="_blank"
                href={cont.link}
                rel="noopener noreferrer"
              >
                <div className="card cont-card m-2">
                  <div className="card-body contact-card">
                    <p className="card-text cont-icon">
                      {cont.icon && <cont.icon />}
                    </p>
                    <h5 className="card-title">{cont.name}</h5>
                    <h6 className="card-title">{cont.info}</h6>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="card google-form">
            <h3>Get in Touch</h3>
            <br />
            <p>
              Have any queries or suggestions? Fill out the form below and we
              will get back to you soon.
            </p>
            <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSerUK3T5ewpnVhOVvz9Z9gpoWUUr61eobugD4mHIZDh5fCBMw/viewform?usp=header"
              target="_blank"
              style={{ color: "#00bec5", textDecoration: "none" }}
            >
              Open Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
