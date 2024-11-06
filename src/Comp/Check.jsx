import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Check = (props) => {
  var total = 0;
  var grandtotal = 0;
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const inform = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const [error, seterror] = useState({});
  const newerror = {};
  const submit = () => {
    if (user.firstname == "") {
      newerror.firstname = "This field is required";
    }
    if (user.firstname == "") {
      newerror.firstname = "Please fill this field";
    } else if (user.firstname.length <= 3 || user.firstname.length > 10) {
      newerror.firstname = "Your name must be between 3 and 10 ";
    }
    if (user.lastname == "") {
      newerror.lastname = "Please fill this field";
    } else if (user.lastname.length <= 3 || user.lastname.length > 10) {
      newerror.lastname = "Your name must be between 3 and 10 ";
    }
    if(user.phone=="")
    {
      newerror.phone="This field is required"
    }
    if (user.email == "") {
      newerror.email = "Please fill this field";
    } else if (user.email.indexOf("@") <= 0) {
      newerror.email = "@ invalid position";
    } 
    else if((user.email.charAt(user.email.length-4)!=".") && (user.email.charAt(user.email.length-3)!="."))
    {
      newerror.email=". invalid position"
    }
    if (user.address == "") {
      newerror.address = "This field is required";
    }
    if (user.city == "") {
      newerror.city = "This field is required";
    }
    if (user.state == "") {
      newerror.state = "This field is required";
    }
    if (user.zip == "") {
      newerror.zip = "This field is required";
    }
    else{
      
        toast.success('You are successfully Place Order!')
         
        
    }
    seterror(newerror);
  };
  return (
    <div className="mt-28 py-10 flex  flex-col gap-5 md:flex-row mx-5 md:mx-10">
      <div className=" h-[1300px] w-[580px] md:h-[850px] md:w-[1200px] md:px-1 py-7 px-10  ">
        <h1 className="text-[33px]  py-5 px-4 font-bold  text-[black]">
          Basic Information
        </h1>
        <hr />
        <div className="md:flex md:justify-around">
          <div className="text-[20px] mx-2 my-4">
            
            
            <input
              type="text"
              value={user.firstname}
              placeholder="FirstName"
              onChange={inform}
            
              name="firstname"
              className=" h-[50px] w-[500px] md:w-[380px]  md:px-4 px-7 bg-[#f1f5f9] outline-none  my-4   rounded-full"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.firstname}</span>
          </div>
          <div className="text-[20px] mx-5 my-4">
            
            <input
              type="text"
              value={user.lastname}
              placeholder="LastName"
              onChange={inform}
              
              name="lastname"
              className=" h-[50px] w-[500px] md:w-[380px] bg-[#f1f5f9] outline-none  my-4  rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.lastname}</span>
          </div>
        </div>
        <div className="md:flex md:justify-around">
          <div className="text-[20px] mx-5 my-4">
           
            <input
              type="text"
              value={user.phone}
              placeholder="Phone Number"
              onChange={inform}
            
              name="phone"
              className=" h-[50px] w-[500px] md:w-[380px]  md:px-4 bg-[#f1f5f9] outline-none  my-4  rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.phone}</span>
          </div>
          <div className="text-[20px] mx-5 my-4">
           
            <input
              type="text"
              value={user.email}
              placeholder="Email"
              onChange={inform}
              
              name="email"
              className=" h-[50px] w-[500px] bg-[#f1f5f9] outline-none md:w-[380px]  md:px-4 my-4   rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.email}</span>
          </div>
        </div>
        <br/>
        <div className="text-[20px] ">
          
          <textarea
            type="text"
            value={user.address}
            onChange={inform}
            placeholder="Address"
      
            name="address"
            className="mx-4 md:mx-8  h-[140px] py-3 w-[500px]  my-4  md:w-[800px] bg-[#f1f5f9]  outline-none  rounded-sm px-7"
          ></textarea>
          <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.address}</span>
        </div>
        <div className="text-[20px] md:flex md:justify-around mx-5 my-4">
          <div>
           
            <input
              type="text"
              value={user.city}
              placeholder="City"
              onChange={inform}
              name="city"
              
              className=" h-[50px] w-[500px] md:w-[250px]  my-4   bg-[#f1f5f9] outline-none  md:px-4  rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.city}</span>
          </div>
          <div>
           
            <input
              type="text"
              value={user.state}
                placeholder="State"
              onChange={inform}
              
              name="state"
              
              className="w-[500px]  h-[50px] md:w-[250px]  my-4  bg-[#f1f5f9] outline-none  rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.state}</span>
          </div>
          <div>
           
            <input
              type="text"
              value={user.zip}
              onChange={inform}
              name="zip"
              placeholder="Zip Code"
            
              className=" w-[500px] h-[50px] my-4  md:w-[250px] bg-[#f1f5f9] outline-none  rounded-full px-7"
            ></input>
            <br/>
            <span style={{color:"red", fontSize:"20px"}}>{error.zip}</span>
          </div>
        </div>
        <div>
          <button className="bg-[blue] text-[white] text-[20px] ml-[50px] md:ml-[680px] rounded-md py-4 px-5" onClick={submit}>
            Place Order
          </button>
          <ToastContainer/>
        </div>
      </div>
      <div className="h-[450px] w-[600px] md:w-[1100px]  md:ml-16">
        <div className="flex justify-around text-[27px] font-bold py-9 text-[black] ">
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Qty</h1>
          <h1>Total</h1>
        </div>
        <hr />
        <div>
          {props.cartItem.map((index) => {
            total += index.quantity * index.prize;
            grandtotal += grandtotal + total;
            return (
              <div className="flex justify-around text-[20px] text-[gray] py-3 my-2 bg-[#f1f5f9] outline-none  rounded-full ">
                <div>
                  <p>{index.name}</p>
                </div>
                <div>
                  <p>{index.prize}</p>
                </div>
                <div>
                  <p>{index.quantity}</p>
                </div>
                <div>
                  <p>{total}</p>
                </div>
              </div>
            );
          })}{" "}
          <hr />
          <div className="text-[25px] font-semibold pt-6 flex justify-around">
            <h1>GrandTotal</h1>
            <p>{grandtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
