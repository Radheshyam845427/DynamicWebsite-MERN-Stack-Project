import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="/about">About</a>
                    </li> 
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="/service">Services</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-6">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-2 auto-max">
                    <a
                        href="https://www.facebook.com/radheshyam.prasadgupta.79"
                        target="_radheshyam">
                        <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 auto-max">
                      <a
                        href="https://twitter.com/Radhesh37706853?t=ow4lrlSl0SyRawJFQa9O1Q&s=08"
                        target="_radheshyam">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 auto-max">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-2 auto-max">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
