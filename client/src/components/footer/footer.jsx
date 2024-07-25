import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    if (!email) {
      setEmailError("Please enter an email address");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else if (
     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(?:\.[a-zA-Z]{2,6})?$/.test(
        email
      )
    ) {
      setEmailError("Invalid email address");
      setTimeout(() => {
        setEmailError("");
        setEmail("");
      }, 2000);
    } else {
      setEmailError("");
      setEmailSent(true);
      setEmail("");
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  };

  return (
    <div className="ft-wrapper">
      <div className="ft-container">
        <div className="ft-left">
          <div className="ft-left1">
            <img src="./logo.png" alt="logo" width={150} />

            <span className="info">
              <h3>Send us a meassage</h3>
              <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                you all.
              </p>

              <ul>
                <li>
                  <img src="emailIcon.png" alt="email" />
                  info@stelalliance.com
                </li>
                <li>
                  <img src="callIcon.png" alt="call" />
                  0323-7426337
                </li>
                <li>
                  <img src="locationIcon.png" alt="location" />
                  NASTP-Alpha, Old Airport Rd, Old Chaklala Cantt
                  <br />
                  Rawalpindi - 46000
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="ft-right">
          <div className="ft-right2">
            <span className="ft1">Let's Connect</span>
            <br />
            <span className="ft2">
              Ready to Collaborate? Or Just Chat? We're Here!
            </span>

            <button className="button2">Become a Client</button>

            <br />
            <span>Subscribe to our News Letter:</span>
            <input
              type="email"
              placeholder="Email"
              className="emailInput"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <button className="sendBtn" type="submit" onClick={handleSendClick}>
              send
            </button>
            <br />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            {emailSent && (
              <span className="sendMsg">Subscribed successfully</span>
            )}

            <br/>
            <span className="connInfo">Connect With Us :</span>
            <br />
            <span className="social-links">
              <a
                href="https://www.linkedin.com/company/stelalliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="linkedinIcon.png" alt="linkedin" width={24} />
              </a>
              <a
                href="https://www.facebook.com/Stelalliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="fbIcon.png" alt="facebook" width={24} />
              </a>
              <a
                href="https://www.instagram.com/stelalliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="igIcon.png" alt="instagram" width={24} />
              </a>
            </span>
          </div>

          <div className="ft-right3">
            <div className="ft-right1">
              <ul>
                <li><a href="">Solutions</a></li>
                <li><a href="">Innovation</a></li>
                <li><a href="">Insights</a></li>
                <li><a href="">Resources</a></li>
              </ul>
            </div>

            <span className="rights">
              © 2024 Stelalliance.
              <br />
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
