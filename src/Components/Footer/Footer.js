import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor cumque officiis
              dolore corporis mollitia ipsam vel facilis
              ad quaerat tempore iure ex omnis
              recusandae, placeat.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor cumque officiis
              dolore corporis mollitia ipsam vel facilis
              ad quaerat tempore iure ex omnis
              recusandae, placeat.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Algorithms</h6>
            <ul class="footer-links">
              <li><a href="#">Algo-1</a></li>
              <li><a href="#">Algo-2</a></li>
              <li><a href="#">Algo-3</a></li>
              <li><a href="#">Algo-4</a></li>
              <li><a href="#">Algo-5</a></li>
              <li><a href="#">Algo-6</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};
export default Footer;
