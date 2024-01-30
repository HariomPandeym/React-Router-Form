import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setisLoggedin }) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [showpassword, setShowpassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setisLoggedin(true);
    toast.success("Logged in Successfully!");
    navigate("/Dashboard");
  }

  function clickHandler(event) {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="text"
            placeholder="Enter your email id"
            value={formdata.email}
            name="email"
            onChange={clickHandler}
            required
          />
        </label>

        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input
            type={showpassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formdata.password}
            name="password"
            onChange={clickHandler}
            required
          />
          <span onClick={() => setShowpassword((prev) => !prev)}>
            {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <Link to="#">
            <p>forgot password</p>
          </Link>
        </label>

        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
