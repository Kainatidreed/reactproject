import React from "react";
import { IoIosContacts } from "react-icons/io";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Foot = () => {
  return (
    <div className="h-[760px] bg-[#d4d4d8] grid grid-cols-2 md:h-[400px] md:grid md:grid-cols-4 px-14 py-16">
      <div>
        <h1 className="font-bold text-[40px]  text-transparent bg-clip-text bg-gradient-to-l from-[#dc2626]  to-[purple] ">Collections</h1>
        <p className="text-[20px] gap-6 py-2">
          To wear dreams on one's feet is to begin to give a reality to one's
          dreams.I firmly believe that with the right footwear one can rule the
          world.” —Bette Midler, performer, recipient of wind beneath wings
        </p>
      </div>
      <div className="mx-20 text-[20px] gap-6 ">
        <p className="font-bold text-[30px]">Useful Link</p>
        <p className="py-3">Home</p>
        <p className="py-3">Man Fashion</p>
        <p className="py-3">Woman Fashion</p>
      </div>
      <div  className="mx-20 text-[20px] gap-6">
        <p className="font-bold text-[30px]">Cart</p>
        <p className="py-3">Woman Fashion</p>
        <p className="py-3">My Account</p>
        <p className="py-3">Wishlist</p>
        <p className="py-3">Terms</p>
      </div>
      <div  className="mx-20 text-[20px] gap-6">
        <p className="font-bold text-[30px]">Contact</p>
        <p className="py-3 flex flex-row "> <p><FaLocationDot size={30} /></p>623 Done Path</p>
        <p className="py-3 flex flex-row"><p><PiWhatsappLogoBold  size={30}/></p>+923144567321</p>
        <p className="py-3 flex flex-row"><p><IoIosContacts size={30} /></p>contact @collection dev </p>
      </div>
    </div>
  );
};

export default Foot;
