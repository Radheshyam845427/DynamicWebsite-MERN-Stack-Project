import React, { useState } from "react";
import helpToUseApp from "../API/helpToUse.js";
const Helpus = () => {
  const [helpData] = useState(helpToUseApp);
  return (
    <>

    <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/callcenter.png" alt="helpusIMg" />
            </div>

            {/* right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
              Talk To Only One Languges
              </h3>
              <h1 className="main-heading">
                World class support is <br /> available 24X7
              </h1>

              {helpData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Helpus;
