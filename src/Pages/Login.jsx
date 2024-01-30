import React from 'react'
import Template from '../components/Template'
import image from '../assets/login.jpeg'

const Login = ({setisLoggedin}) => {
  return (
    
      <Template
      heading="Welcome Back"
      disc1="Build Skills for today, tomorrow, and beyond."
      disc2="Education to future-proof your career,"
      image={image}
      formtype="login"
      setisLoggedin={setisLoggedin}
      />
    
  )
}

export default Login
