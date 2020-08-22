import React from 'react';
import { Link, Redirect} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {getNumbers} from '../../Redux/Action/getAction';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    getNumbers();
    console.log(this.props);
}
renderRedirect = () => {
  if (this.props.currentUser) {
    return <Redirect to='/order' />
  }
}

 
  render(){
    var userName,userEmail;
    if(this.props.currentUser){
      userName="Welcome "+this.props.currentUser.displayName;
      userEmail=this.props.currentUser.email;
    console.log(userName);

    }
  return(
  
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div style={{fontSize:'40px',padding:'10px'}}>Eat-O-Eat</div>
    <div className='options'>
    <Link to='/cart' >Cart <i class="fa fa-shopping-cart" aria-hidden="true">:{this.props.basketProps.basketNumbers}</i></Link>
      <Link className='option' to='/order'>
        ORDER
      </Link>
      <dev className='option1'>
         {
          userName
        }
        <div className="option2">
          {
            userEmail
          }
        </div>
      </dev>
      {this.props.currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option3' to='/signin'>
          SIGN IN
        </Link>
          
        
          
      )
      
      }
      {this.renderRedirect()}
    </div>
  </div>
  
);
      };
    }

    const mapStateToProps=(state)=>({
      basketProps:state.basketState
  
  })
  export default connect(mapStateToProps,{getNumbers})(Header);
