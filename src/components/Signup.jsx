import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signup = ({ setisLoggendin }) => {
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);

  const [formdata, setFormdata] = useState({
    firsrname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  function changeHandler(event) {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault;
    if (formdata.password != formdata.confirmpassword) {
      toast.error("Password and confirm password not matched!");
      return;
    }
    setisLoggendin(true);
    toast.success("Account Created");
    const accoutdata = { ...formdata };
    console.log("data of user is....")
    console.log(accoutdata);
    navigate("/Dashboard");
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        {/* firstname and lastname */}
        <div>
          <label>
            <p>
              FirstName <sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter first name"
              value={formdata.firstname}
              onChange={changeHandler}
              name="firstname"
              required
            />
          </label>

          <label>
            <p>
              LasttName <sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter last name"
              value={formdata.lastname}
              onChange={changeHandler}
              name="lastname"
              required
            />
          </label>
        </div>

        {/* email address  */}

        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            placeholder="enter email address"
            value={formdata.email}
            onChange={changeHandler}
            name="email"
            required
          />
        </label>


    {/* createpassword and confirmpassword */}
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter password"
              value={formdata.password}
              onChange={changeHandler}
              name="password"
              required
            />
            <span onClick={() => setShowpassword((prev) => !prev)}>
              {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Confirm password"
              value={formdata.confirmpassword}
              onChange={changeHandler}
              name="confirmpassword"
              required
            />
            <span onClick={() => setShowpassword((prev) => !prev)}>
              {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>


        <button>Create Account</button>

      </form>
    </div>
  );
};

export default Signup;
