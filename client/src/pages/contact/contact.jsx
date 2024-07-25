import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [otherInput, setOtherInput] = useState(""); // new state for other input

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleHearAboutUsChange = (e) => {
    setHearAboutUs(e.target.value);
    if (e.target.value === "Other") {
      setOtherInput(""); // reset other input field
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInput(e.target.value);
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f3a61023-1bcc-450f-9f68-2e8582f4f08d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult(""); // Clear the result after 3 seconds
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult(""); 
      }, 3000);
    }
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="content">
              <div className="close-button" onClick={handleModalClose}>
                ✖
              </div>
              <h1>Reach out to us</h1>

              <form onSubmit={onSubmit}>
                <div className="leftDiv">
                  <label className="nameField">Name / Company</label>
                  <br />
                  <input
                    className="inputField"
                    type="text"
                    name="name"
                    placeholder="Insert Name*"
                    required
                  />

                  <br />
                  <label className="nameField">Phone Number</label>
                  <br />
                  <input
                    className="inputField"
                    type="tel"
                    name="phone"
                    placeholder="(92) 3472567672"
                    required
                  />
                </div>
                <div className="rightDiv">
                  <label className="nameField">Email</label>
                  <br />
                  <input
                    className="inputField"
                    type="email"
                    name="email"
                    placeholder="Insert Email*"
                    required
                  />

                  <br />
                  <label className="nameField">
                    How did you hear about us?
                  </label>
                  <br />
                  <select
                    className="inputField"
                    name="hearAboutUs"
                    value={hearAboutUs}
                    onChange={handleHearAboutUsChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend or Family">Friend or Family</option>
                    <option value="Online Ad">Online Ad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {hearAboutUs === "Other" && (
                  <div className="othersDiv">
                    <label className="nameField">Please specify:</label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      value={otherInput}
                      onChange={handleOtherInputChange}
                      placeholder="Insert your answer"
                      required
                    />
                  </div>
                )}

                <div className="msgDiv">
                  <label className="nameField">Tell us about your idea</label>
                  <br />
                  <textarea
                    className="inputField msgField"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="let's hear about your brilliant ideas"
                    required
                  />
                </div>

                <div className="rightDiv r2">
                  <button className="button2" type="submit">Submit</button>
                  <br/>
                  <span className="resultSpan">{result}</span>
                </div>


              </form>
              
              <div className="endContent">
                <div className="leftDiv">
                  <span className="qs">
                    Don’t like the form? Drop us a line via email.
                  </span>
                  <br />
                  <span className="email">
                    <span>Info@</span>
                    <span>stelalliance.com</span>
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
