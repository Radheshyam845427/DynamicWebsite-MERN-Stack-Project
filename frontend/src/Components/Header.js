import React from "react";

const Header = () => {
  return (
    <>
      <header>
      <section className="container main-hero-container">
          <div className="col-12 col-lg-6 header-left-side d-flex 
          justify-content-center align-items-center main-herosection-images ">
          <img
            src="./images/payment.png"
            alt="heroimg"
            className="img-fluid"
          />
          </div>
          <div className="row">
          <div className="col-12 col-lg-6 header-right-side d-flex 
          justify-content-center flex-column align-items-start ">
              <h1 className="display-4">
              Net Banking Payment <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
              Online transaction is a payment method in which the transfer of fund or money happens 
              online over electronic fund transfer. Online transaction process (OTP) is secure and 
              password protected. Three steps involved in the online transaction are Registration, 
              Placing an order, and, Payment.
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
