import React, { useState } from 'react'
import {Link} from "react-router-dom"
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {show} from "../Api/index"


const Contact = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
const product=props.propsdata.map((product)=>{
    return(
      
        <div>
      
        
     
       <div className='rounded-xl h-[590px] w-[580px] md:h-[590px] md:w-[470px] bg-[#f5f3ff]  shadow-[#57534e] overflow-hidden shadow-2xl ' key={product.id}>
            <img
              src={product.img}
              className="h-[350px] w-[580px] md:w-[480px] bg-[#f0fdfa]  cursor-pointer hover:scale-125 duration-1000"
            />
            <h1 className=" text-[20px] font-semibold my-11 mx-9 ">Title: {product.name} </h1>
            <button className=' py-4 px-5 text-[blue] bg-[#ddd6fe] mx-9'>{product.prize}</button>
            <div className='flex flex-row justify-between mx-9'>
            <p className="text-center text-[20px] my-5 font-bold">Price:{product.prize}Rs.</p>
           

           
            <Link to="/detail">
            <button
              className="border-2 border-[gray]   py-4 px-8 bg-[black]  text-[white]   hover:bg-[gray] hover:text-[white]" onClick={()=>props.detailpage(product)}>
              Buy Now
             </button>
            

            </Link>
            </div>
           </div>
           </div>
      
      
      
    )
    
  })
 
 
  
  return (
    <div className='h-[7100px] mt-28'>
      <div className='relative'>
        <img src='https://img.freepik.com/free-photo/satisfied-women-after-shopping_23-2147669988.jpg?w=740&t=st=1727518833~exp=1727519433~hmac=93a9affab969060ef44242cc2b15556cf02f3bab3ebb752dd2250d50ddcc8705' className='h-[550px] w-full'/>
        <div className=' '>
          <h1 className='absolute animate__animated animate__fadeInDown   animate__slow animate__infinite top-64 text-[100px] font-bold left-14 text-[white] bg-clip-text text-transparent bg-gradient-to-l from-[red]   to-[purple]'>50% OFF</h1>
          <p className='absolute animate__animated animate__fadeInDown   animate__slow animate__infinite top-96 text-[40px] font-bold left-14 text-[white]'><span className='text-[purple]'>12</span> Hours and <span className='text-[purple]'>20</span> min</p>
        </div>
      </div>
      
        
        <h1 className="  uppercase text-center my-14 italic text-transparent text-[40px] font-bold line-clamp-2 bg-clip-text bg-gradient-to-tr from-[gray]   to-[black]  ">
          <span className='font-bold'>Latest</span>Product
        </h1>
        <hr />
       
        
        
           
   <div className="ml-2  my-5  ">
   <Slider {...settings}>
    <div>
        <p
          className="btn-outline-dark  py-5 px-8 text-[black] rounded-sm text-[20px]  mx-1 border-2 border-black hover:bg-[black] hover:text-[white]"
          
          onClick={()=>props.setdata(show)}>
          All
        </p>
        </div>
        <div>

        <p
          className="btn-outline-dark py-5 px-8 border-2 border-black text-[20px] outline-none rounded-sm  text-[black] mx-1 hover:bg-[black] hover:text-[white]" onClick={()=>props.filterResult("Men's Shoes")}>
          Mens Shoes
        </p>
        </div>
        <div>
        <p
         className="btn-outline-dark py-5 px-8 text-[20px]  outline-none rounded-sm   text-[black] border-2 border-black mx-1 hover:bg-[black] hover:text-[white]"
         
         onClick={()=>props.filterResult("Women's Shoes")}>
         Womens Shoes
       </p>
       </div>
       <div>
       <p
         className="btn-outline-dark py-5  text-[20px] px-8 border-2 border-black outline-none rounded-sm  text-[black] mx-1 hover:bg-[black] hover:text-[white]"
      
         onClick={()=>props.filterResult("Men's Flat")}>
         Mens Flat
       </p>
       </div>
       <div>
       <p
         className="btn-outline-dark py-5 text-[20px] px-8 outline-none border-2 border-black rounded-sm  text-[black] mx-1 hover:bg-[black] hover:text-[white]"
    
         onClick={()=>props.filterResult("Women's Flat")}>
         Womens Flats
       </p>
       </div>
       <div>
       <p
          className="btn-outline-dark py-5  border-2 border-black text-[20px] px-8 outline-none rounded-sm text-[black] mx-1 hover:bg-[black] hover:text-[white] "
          
          onClick={()=>props.filterResult("Women's Heels")}>
          Womens Heels
        </p>
        </div>
        </Slider>
      </div>
      
      
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 w-[95vw] mx-9 gap-5 h-[300px] my-20'> 
   {product}
   
   
   </div>
   
 
 </div>
  )
}

export default Contact



