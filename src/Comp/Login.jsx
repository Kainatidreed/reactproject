import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [user, setuser] = useState({ email: "", password: "", confirm: "" });
  const [error, seterror] = useState({});
  const newerror = {};

  const disp = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const login = () => {
    if (user.email == "") {
      newerror.email = "Please fill this field";
    } else if (user.email.indexOf("@") <= 0) {
      newerror.email = "@ invalid position";
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3) != "."
    ) {
      newerror.email = ". invalid position";
    }
    if (user.password == "") {
      newerror.password = "Please fill this field";
    } else if (user.password.length <= 7 || user.password.length > 8) {
      newerror.password = "Please enter eight digits";
    }
    if (user.confirm == "") {
      newerror.confirm = "Please fill this field ";
    } else if (user.confirm != user.password) {
      newerror.confirm = "Please enter Confirm Password";
    }
    else{
      toast.success("You are successfully Login!");
    }
    seterror(newerror);
  };
  return (
    <div className="mt-28">
      <div className='h-[700px] w-full bg-[url("https://images.pexels.com/photos/1350197/pexels-photo-1350197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] pt-4'>
        <div className=" px-16 py-10 h-[680px] w-[580px]  bg-[white] ml-10 md:ml-80 ">
          <h1 className="text-center font-bold text-[35px] my-6">Login</h1>

          <div>
            <input
              type="text"
              placeholder="Your Email"
              value={user.email}
              name="email"
              onChange={disp}
              onKeyUp={login}
              className="my-6  h-[50px] w-[450px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
            ></input>
            <span style={{color:"red", fontSize:"20px"}}>{error.email}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Password"
              value={user.password}
              name="password"
              onChange={disp}
              onKeyUp={login}
              className="my-6  h-[50px] w-[450px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
            ></input>
            <span style={{color:"red", fontSize:"20px"}}>{error.password}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm Password"
              value={user.confirm}
              name="confirm"
              onChange={disp}
              onKeyUp={login}
              className="my-6  h-[50px] w-[450px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
            ></input>
            <span style={{color:"red", fontSize:"20px"}}>{error.confirm}</span>
          </div>

          <button
            className="my-6  h-[50px] w-[500px] px-8 text-[20px] bg-[black] font-bold text-[white] outline-none  rounded-full"
            onClick={login}
          >
            Login
          </button>
          <ToastContainer />
          <Link to="/sign">
            <button className="text-[20px] text-[black] ">
              Not a member?{" "}
              <span className="text-[20px] text-[blue] ">Register Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
