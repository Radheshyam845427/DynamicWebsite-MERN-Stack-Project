import React, { useEffect, useState, user } from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('contacts');
    if (auth) {
      navigate('/')
    }
  }, [])

  const collectData = async () => {
    console.warn(firstName, lastName, phone, email, address, message);
    let result = await fetch("http://localhost:5000/contacts", {
      method: 'post',
      body: JSON.stringify({ firstName, lastName, phone, email, address, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("contacts", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));

    navigate('/')
  }


  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Use connecting sales team to build effective links. Use topic sentences and concluding
                    sentences to build effective links Online Payment Mode.
                  </p>
                  <figure>
                    <img
                      src="./images/salesteam.png"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={phone} onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={address} onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={message} onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree send to Radheshyam my all details.
                      </label>
                    </div>

                    <button
                      type="submit"
                      onClick={collectData}
                      className="btn btn-style w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
