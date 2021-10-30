import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-summary-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            ratione vitae tempore quisquam commodi, <br></br> consequuntur
            veritatis, repudiandae repellat, <br></br> aut accusamus nesciunt
            facilis illo necessitatibus officiis aliquam asperiores ex quod
            odio!
          </div>

          <div className="footer-links">
            <div className="col">
              <div className="link ">
                <a href="/" className="">
                  <span className="footer-col-heading">Algo</span>
                </a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
            </div>

            <div className="col">
              <div className="link ">
                <a href="/" className="">
                  <span className="footer-col-heading">More</span>
                </a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
              <div className="link">
                <a href="/">Algo</a>
              </div>
            </div>

            <div className="col">
              <div className="contact">
                <div className="link ">
                  <a href="/" className="">
                    <span className="footer-col-heading">Contact</span>
                  </a>
                </div>
                <div className="address">XYZ, abc, India</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
