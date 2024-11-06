import React, { useState } from "react";
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const Sign = () => {
    const [user, setuser] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
      });
      const display2 = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
      };
      const[error,seterror]=useState({})
      const newerror={}
      const submit=(e)=>{
        e.preventDefault();
        if(user.username=="")
        {
          newerror.username="Please fill this field"
        }
        else if(user.username.length<=3 || user.username.length>10)
        {
          newerror.username="Your name must be between 3 and 10 "
        }
         if(user.fullname=="")
        {
          newerror.fullname="Please fill this field"
        }
        else if(user.fullname.length<=3 || user.fullname.length>10)
        {
          newerror.fullname="Your name must be between 3 and 10 "
        }
        if(user.email=="")
        {
          newerror.email="Please fill this field"
        }
        else if(user.email.indexOf("@")<=0)
        {
          newerror.email="@ invalid position"
        }
        else if((user.email.charAt(user.email.length-4)!=".") && (user.email.charAt(user.email.length-3)!="."))
        {
          newerror.email=". invalid position"
        }
        if(user.password=="")
        {
          newerror.password="Please fill this field"
        }
        else if(user.password.length<=5||user.password.length>8)
        {
          newerror.password="Enter 8 digits"
        }
       
        else{
          toast.success('You are successfully Signup!'),{
            theme:"dark"
          }
           
          }
        
        seterror(newerror)

      }
  return (
   <div className='h-[900px] mt-28 '>
    <div className='bg-[url("https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] h-[800px] bg-cover pt-3 w-full]'>
    <div className="  px-24 py-4 h-[780px] w-[750px]  bg-[white] md:ml-72 ">
          <h1 className="text-center font-bold text-[31px] my-3">Sign Up</h1>
          <div>
            <input
              type="text"
              className="my-6 h-[50px] w-[500px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
              placeholder=" Your Name"
              value={user.username}
              onChange={display2}
              name="username"
              onKeyUp={submit}
            ></input><br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.username}</span>
          </div>
          <div>
            <input
              type="text"
              className="my-6   h-[50px] w-[500px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
              placeholder="Your FullName"
              value={user.fullname}
              onChange={display2}
              name="fullname"
              onKeyUp={submit}
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.fullname}</span>
          </div>
          <div>
            <input
              type="text"
              className="my-6  h-[50px] w-[500px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
              placeholder="Your Email"
              value={user.email}
              onChange={display2}
              name="email"
              onKeyUp={submit}
              ></input>
              <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.email}</span>
            </div>
  
            <div>
              <input
                type="text"
                className="my-6  h-[50px] w-[500px] px-8 text-[20px] bg-[#f1f5f9] outline-none  rounded-full"
                placeholder="Your Password"
                value={user.password}
                onChange={display2}
                name="password"
                onKeyUp={submit}
              ></input>
              <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.password}</span>
            </div>
            <div>
              <button className="my-6  h-[50px] w-[500px] px-8 text-[20px] bg-[black] font-bold text-[white] outline-none  rounded-full" onClick={submit}>
                Submit
                </button>
                <ToastContainer/>
                
               
                <Link to="/login">
                <button className="text-[20px] ">Already a member?<span className="text-[20px] text-[blue]">Login Here</span></button>
                </Link>
          </div>
        </div>

    </div>

   </div>
  )
}

export default Sign
