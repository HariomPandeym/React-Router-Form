import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import background from "../assets/background.jpeg";


const Template = ({
  heading,
  disc1,
  disc2,
  image,
  formtype,
  setisLoggedin,
}) => {
  return (
    <div>
      <h1>{heading}</h1>

      <p>
        <span>{disc1}</span>
        <span>{disc2}</span>
      </p>
      <div>
      {formtype === "login" ? (
        <Login setisLoggedin={setisLoggedin} />
      ) : (
        <Signup setisLoggedin={setisLoggedin} />
      )}
      </div>

      <div>
        <div></div>
        <p>Or</p>
        <div></div>
      </div>

      <button>Sign up with Google</button>
      <div>
        <img
          src={background}
          alt="background"
          width={558}
          height={504}
          loading="lazy"
        />
        <img src={image} alt="image" width={558} height={490} loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
