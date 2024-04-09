import React from 'react'
import { useContext } from 'react';
import ChangeNetwork from "../changeWalletAccount/ChangeNetwork";
import { AuthContext } from '../context/AuthContext'
import Navbar from './Navbar';

const UserAuth = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <div className='--nav-section'>
        <div style={{}}>
          <div className='usersAuth'>
            <img style={{width: '6rem', height: "5.7rem", borderRadius: '40px'}} src={currentUser.photoURL} alt="" />
            <h4>Hi, <strong style={{textTransform: "uppercase"}}>{currentUser.displayName}</strong></h4> <br />
          </div>
          <p className='usersP'>Send crypto with ease.</p>
          {/* <hr /> */}
        </div>
        <Navbar/>
      </div>


      <div>
        <ChangeNetwork />
      </div>
    </>
  );
};

export default UserAuth;
