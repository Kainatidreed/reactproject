import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { RiRegisteredFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import 'animate.css';
import { RxCross2 } from "react-icons/rx";

const Navbar = (props) => {
  const [sidenav, setSidenav] = useState(false);
  const display = () => {
    setSidenav(!sidenav);
  };
  
  

  return (
    <div className="bg-[#f1f5f9] fixed w-full top-0 z-50 ">
      <div className="flex flex-row justify-between h-[120px] bg-[#d4d4d8] items-center relative">
        <div>
          <h1 className="uppercase text-[35px] font-bold  mx-3">
            LA
            <span className="  uppercase text-[35px] font-bold text-transparent bg-clip-text bg-gradient-to-l px-2 from-[#dc2626]   to-[purple] ">
            
              Collection
            </span>
          </h1>
        </div>
        <div>
          <ul className=" sm:hidden md:flex flex-row gap-7  text-[23px] font-semibold text-[white] ">
            <Link to="/">
              <li className="border-b-4 border-[white] hover:text-[black] hover:border-[black] ">Home</li>
            </Link>
            <Link to="/productt">
              <li className="hover:text-[black] ">Products</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[black] ">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-[black] ">Contact</li>
            </Link>
          </ul>
        </div>
        <div className=" hidden md:block">
          <Link to="/login">
          <button className="text-[white] font-semibold gap-7 border-2 border-[gray]  py-3 px-14 mx-3 rounded-2xl text-[20px] hover:bg-[#334155] hover:text-[white] relative">
            <p className="absolute top-4 left-4  ">
              <IoLogIn />
            </p>
            Login
          </button>
          </Link>
          <Link to="/sign">

          <button
            className="text-[white]  font-semibold gap-7 border-2 border-[gray] py-3 px-14 mx-3   rounded-2xl text-[20px] hover:bg-[#334155] hover:text-[white] relative "
            
          >
            <p className="absolute top-4 left-4 ">
              <RiRegisteredFill />
            </p>
            Register
          </button>
          </Link>

          <Link to="/add">
            <button className="text-[white]  font-semibold  gap-7 border-2 border-[gray] py-3 px-14 mx-3  rounded-2xl text-[20px] hover:bg-[#334155] hover:text-[white] relative">
              <p className="absolute top-4 left-4 ">
                <FaCartPlus />
              </p>
              Cart<sup>{props.count}</sup>
            </button>
          </Link>
        </div>
        <div className="mr-10 md:hidden ">
          <p onClick={display}>
            <GiHamburgerMenu size={35} />
          </p>
        </div>
      </div>
     

         
           

          
        
      
      
    
      <div>
        {sidenav ? (
          <div className=" absolute top-32 bg-[black] text-[white] pt-5 right-0 h-[670px]  w-[600px] gap-4 text-[25px] items-center justify-center text-center ">
            <p className="absolute right-3" onClick={display}><RxCross2 size={30} /></p>
            <ul>
              <Link to="/">
              <li className="p-5 " onClick={display}>
                Home
              </li>
              </Link>
              <Link to="/productt">
              <li className="p-5 " onClick={display}>
                Products
              </li>
              </Link>
              <Link to="/about">
              <li className="p-5 " onClick={display}>
                About
              </li>
              </Link>
              <Link to="/contact">
              <li className="p-5 " onClick={display}>
                Contact
              </li>
              </Link>
            </ul>
            <div className="flex flex-col">
              <Link to="/login">
              <button className="   my-5  rounded-2xl text-[25px]  relative" onClick={display}>
                
                Login
              </button>
              </Link>
              <Link to="/sign">
              <button className="  my-5   rounded-2xl text-[25px]  relative " onClick={display}>
                
                Register
              </button>
              </Link>
              <Link to="/add">
              <button className="  my-5  rounded-2xl text-[25px]  relative" onClick={display}>
               
                Cart(0)
              </button>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
