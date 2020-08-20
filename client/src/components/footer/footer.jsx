import React from "react";
import "./footer.scss";
import img from "../../assets/googleplay.png";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/developers" className="developer">Developers</Link>
      <a href="#">
        <img className="googleplayIcon" src={img} alt="" />
      </a>

      <div className="socialMedia">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-snapchat-ghost"></a>
<a href="#" class="fa fa-skype"></a>
      </div>
      <div className="keyword">&#169;Eat-O-Eat 2020 All rights reserved.</div>
    </div>
  );
};
export default Footer;
