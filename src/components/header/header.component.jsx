import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) =>{
  var userName,userEmail; 
  if(currentUser){
    userName="Welcome "+currentUser.displayName;
    userEmail=currentUser.email;
  console.log(userName);
  }
  return(
  
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div style={{fontSize:'40px',padding:'10px'}}>Eat-O-Eat</div>
    <div className='options'>
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
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option3' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
  
);
      };

export default Header;
