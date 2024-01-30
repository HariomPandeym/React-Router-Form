import React from 'react'
import Template from '../components/Template'
import image from '../assets/signup.jpeg'

const Signup = ({setisLoggedin}) => {
  return (
    <>
       <Template
      heading="Join the millions learning to code with Welcome Back"
      disc1="Build Skills for today, tomorrow, and beyond."
      disc2="Education to future-proof your career,"
      image={image}
      formtype="signup"
      setisLoggedin={setisLoggedin}
      /> 
    </>
  )
}

export default Signup;
