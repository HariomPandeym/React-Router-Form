import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setisLoggedin = props.setisLoggedin;
  return (
    <div className="flex justify-evenly bg-blue-800 font-bold ">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32}/>
      </Link>

      <nav>
        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className=" flex gap-10">
        {!isLoggedin && (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedin && (
          <Link to="/Signup">
            <button>Signup</button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/">
            <button
              onClick={() => {
                setisLoggedin(false);
                toast.success("Logged out Successfully!");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
