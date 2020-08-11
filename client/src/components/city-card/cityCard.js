import React from "react";
import "./cityCard.scss";
const CityCard = (props) => {
  console.log(props);
  //url("https://b.zmtcdn.com/data/pictures/3/18970053/e1575be0fd34b12b3c4d348cb4157d03.jpg")

const url=props.restaurant.featured_image?props.restaurant.featured_image :"https://b.zmtcdn.com/data/pictures/3/18970053/e1575be0fd34b12b3c4d348cb4157d03.jpg"
  return (
    <div className="cardContainer">
      <div
        className="image"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />

      <div className="quick">{props.restaurant.establishment[0]}</div>
      <div className="name">{props.restaurant.name}</div>

      <div className="option1">
        <span className="star">
          &#9733;{props.restaurant.user_rating.aggregate_rating}
        </span>
        <span className="NumbarOfR">
          ({props.restaurant.all_reviews.reviews.length}Reviews)
        </span>
        <span className="review">
          {props.restaurant.user_rating.rating_text}
        </span>
      </div>
      <div className="address">{props.restaurant.location.locality_verbose}</div>
      <table className="table">
        <tr className="tr">
          <td className="th">CUISINES:</td>
          <td className="th1">{props.restaurant.cuisines}</td>
        </tr>
        <tr className="tr">
          <td className="th">COST FOR TWO:</td>
          <td className="th1">{props.restaurant.average_cost_for_two} Rs.</td>
        </tr>
        <tr className="tr">
          <td className="th">HOURS:</td>
          <td className="th1">{props.restaurant.timings}</td>
        </tr>
        <tr className="tr">
          <td className="th">CONTACT NUMBERS:</td>
          <td className="th1">{props.restaurant.phone_numbers}</td>
        </tr>
      </table>
    </div>
  );
};
export default CityCard;
