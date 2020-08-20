import React from "react";
import pic from "../../assets/DeliveryBoy.jpg";
import {Link} from 'react-router-dom';
import "./landingPage.scss";
const LandingPage = () => {
  return (
    <div className="landing-pageContainer">
      <span className="Details">
      Eat-O-Eat has been rated No. 1 online food delivery app in India and is
        currently available in almost all the cities across the country. Eat-O-Eat
        came up with an idea to provide delivery from the restaurants to
        big-time urban foodies.
        <Link to="/order" className="button">Oder Now</Link>
      </span>
      <img className="image" src={pic} alt="Landing Images" />
    </div>
  );
};
export default LandingPage;
