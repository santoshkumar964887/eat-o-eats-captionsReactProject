import React from "react";
import StripeCheckoutButton from "../../components/Stripe/stripeButton.component";
import axios from "axios";
import cityDetail from "./cityDetail.json";
import CityCard from "../../components/city-card/cityCard";
import "./order.style.scss";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 500,
      data: null,
      inputSerch: "",
      cityDetail: "",
      getcityloationDetails: { lat: 28.651952, lng: 77.231495 },
      image: function () {
        let randomImageNames = [
          "cuisine",
          "dishes",
          "food",
          "delicious",
          "restaurant",
          "gourmet",
          "foodies",
          "meat",
          "bread",
          "fruit",
          "pizza",
          "burguer",
          "juice",
          "coke",
          "salad",
          "snack",
          "drink",
          "coffee",
          "cheese",
          "tea",
          "Biryani",
          "Chicken Do Pyaza ",
          " Tandoori",
          "Zeera ",
          "Chaat",
          "Dahl ",
          "Aloo gobi ",
          "Aloo tikki ",
          "Aloo matar ",
          "Aloo methi ",
        ];
        console.log(randomImageNames.length);
        let randomImage =
          randomImageNames[Math.floor(Math.random() * (30 - 0) + 0)];

        const images = `https://source.unsplash.com/500x300/?${randomImage}`;
        return images;
      },
    };
  }
  handleChange = (e) => {
    this.setState({ inputSerch: e.target.value }, () =>
      console.log(this.state.inputSerch)
    );
  };
  HandleonClickButton = () => {
    this.setState({});

    const getcityloation = cityDetail.find(
      (el) => el.city === this.state.inputSerch
    );
    this.setState({ getcityloationDetails: getcityloation });

    axios
      .get(
        `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${this.state.inputSerch}&count=100`,
        {
          headers: {
            Accept: "application/json",
            "user-key": "fd658b6fe54a98ebd7e25b03864e2327",
          },
        }
      )
      .then((res) =>
        this.setState({
          data: res,
        })
      );
  };

  render() {
    var card;
    if (this.state.data) {
      card = this.state.data.data.restaurants.map((el) => (
        <CityCard key={el.restaurant.R.res_id} restaurant={el.restaurant} />
      ));
    }

    return (
      <div>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${this.state.image()})` }}
        >
          <input
            type="text"
            className="input-serch"
            placeholder="Serch Restaurants  in your City"
            onChange={this.handleChange}
          />
          <button className="serch-Button" onClick={this.HandleonClickButton}>
            Serch
          </button>
          <div className="or">OR</div>
          <input
            type="text"
            className="input-serch1"
            placeholder=" Serch Restaurants Or Cuisines"
            onChange={this.handleChange}
          />
          <button className="serch-Button1" onClick={this.HandleonClickButton}>
            Serch
          </button>
        </div>

        <div className="card-Container">{card}</div>
        <div className="cardInformation">
          You can not use genuine card information in test mode. Here is a test
          card that is widely accepted for Stripe test mode: Credit card number:
          4242 4242 4242 4242 Expiration date: any date in the future with the
          format MM/YY CVC: any 3-digits number
        </div>
        <StripeCheckoutButton price={this.state.price} />
      </div>
    );
  }
}
export default Order;
