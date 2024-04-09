import React from 'react'
import { Link } from 'react-router-dom'
import './forgotSuccess.css'
import { useEffect } from 'react'

import { runFireworks } from '../../libs/utils'


const RegisterationSuccess = () => {

  useEffect(() => {
    localStorage.clear();
    runFireworks();
  }, []);



  return (
    <div className='--reg-success'>
        <h1>Success !</h1>
        <h3>Registeration Successfull</h3>
        <img className='regImg' src="https://w7.pngwing.com/pngs/709/448/png-transparent-green-check-business-internet-service-organization-computer-software-web-page-green-registration-success-button-web-design-company-text-thumbnail.png" alt="" />
        <p>Kindly Proceed to login</p>
        <Link to='/login'>
        <button className="button-login">Login</button>
      </Link>
    </div>
  )
}

export default RegisterationSuccess