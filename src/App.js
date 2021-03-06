import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import OrderUpPage from "./pages/order/order.route";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import LandingPage from "./components/landingPage/landingPage";
import Footer from "./components/footer/footer";
import Developer from "./pages/developer/developer";
import MenuItems from './components/Menu/Menu';
import {Provider} from 'react-redux';
import store from './Redux/Store/store';
import cartItem from './components/Cart/Cart';

import "./App.css";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
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
        <div className="app">
        <Provider store={store}>
          <Header currentUser={this.state.currentUser} />
          <Switch>
          
            <Route path="/signin" component={SignInAndSignUpPage} />
            <Route path="/order" component={OrderUpPage} />
            <Route path="/menu" component={MenuItems} />
            <Route path="/cart" component={cartItem} />
            <Route path="/developers" component={Developer }/>
            <Route path="/" component={()=><LandingPage currentUser={this.state.currentUser} />} />
            
          </Switch>
          </Provider>
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default App;
