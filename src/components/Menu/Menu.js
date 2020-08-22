import React, { Component } from "react";
import Axios from "axios";
import './Menu.css';
import {connect} from 'react-redux';
import {addToBasket} from '../../Redux/Action/addAction';

class Menu extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      display:'notdisplayed',
      
    };
    console.log(props)
  }
  
  componentDidMount() {
    Axios.get("https://api.npoint.io/c31a078ddc2370a5d21d").then((res) => {
      this.setState({
        menus: res.data.foodMenus,
      });
    });
  }
  showButton = e => {
    e.preventDefault();
    this.setState({display:"displayed"});
  };

  hideButton = e => {
    e.preventDefault();
    this.setState({display:"notdisplayed"});
  };
  
  render() {
    
    let newArray = this.state.menus.map((item) => (
      <>
      
        <div onMouseEnter={e => this.showButton(e)}
              onMouseLeave={e => this.hideButton(e)} 
              className="item">

          <div className="firstChild">
            <h3>{item.name}</h3>
            <span className="rupee"> {item.price}</span>
            <span className="rating">Reviews: {item.rating}</span>
            <button onClick={()=>this.props.addToBasket(item.menu_id)} className={this.state.display}>Add to Cart</button>
            <p className="desc">{item.description}</p>
          </div>

          <div className="secondChild">
            <img className="img" src={item.img} alt="Food items"></img>
          </div>
          
        </div>
      </>
    ));
    return <div>
      
      {newArray}
      </div>;
  }
}
export default connect(null,{addToBasket})(Menu);
