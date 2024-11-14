import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xbljywqd");
  const [sent, setSent] = useState(false);

  // Use effect to show thank you message if form submission succeeded
  useEffect(() => {
    if (state.succeeded) {
      setSent(true);
      setFormDetails({
        FullName: "",
        emailToContact: "",
        email: "henryenamo@gmail.com",
        message: "",
      });
    }
  }, [state.succeeded]);

  const formInitialDetails = {
    FullName: "",
    emailToContact: "",
    email: "henryenamo@gmail.com",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  {sent && (
                    <p className="bg-success p-3 rounded font-weight-bold h5">
                      Thank you for your submission!
                    </p>
                  )}
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.FullName}
                          placeholder="Name"
                          onChange={(e) =>
                            onFormUpdate("FullName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          name="emailToContact"
                          value={formDetails.emailToContact}
                          placeholder="Email to Contact"
                          onChange={(e) =>
                            onFormUpdate("emailToContact", e.target.value)
                          }
                        />
                        <ValidationError
                          prefix="emailToContact"
                          field="emailToContact"
                          errors={state.errors}
                        />
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value="henryenamo@gmail.com"
                          className="d-none"
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          id="message"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
