import React from "react";
import { Switch, Route } from "react-router-dom";
import StripeCheckoutButton from "./components/Stripe/stripeButton.component";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import './App.css';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      price: 500,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
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

export default App;
