import React, { useEffect, useState } from 'react'
import Slider from "./Slider"
import Footer from "./Footer"
import 'animate.css';
import {Link} from "react-router-dom"






const Home = () => {
    const images=[
        {
            url:"https://as2.ftcdn.net/v2/jpg/08/57/42/93/1000_F_857429365_KMxXKIb9fPpvvxXNlhIQHaOJYqeeZFWY.jpg"
        },
        {
            url:"https://png.pngtree.com/thumb_back/fw800/background/20240705/pngtree-sports-shoes-made-of-black-perforated-leather-in-a-dark-key-image_15859832.jpg"
        },
        {
            url:"https://img.freepik.com/premium-photo/athlete-with-white-high-tech-trainer-shoe-running-through-puddle-water-with-splash_1129551-31.jpg"
        }
    ]
    const[slide,setslide]=useState(0)
    const handlePlus=()=>{
       setslide(slide==images.length-1?0:slide+1) 
    }
    const handleMinus=()=>{
        setslide(slide==0?images.length-1:slide-1)
    }
    useEffect(()=>
  {
    const map=setInterval(()=>{
      handlePlus();
    },2000);
    return()=>clearInterval(map)
  },[slide]
)


   
  return (
    
    <div>
        <div>
        
        {
          images.map((item,i)=>(
            <div key={i} className={`${slide===i?"block":"hidden"}`}>
            <img src={item.url} className="rounded-xl h-[600px] w-[100vw] relative mt-28 md:h-[600px] md:w-[100vw]"/>
            </div>
          ))
        }
        </div>
        <div>
          <h1 className='absolute uppercase text-[white] top-[200px] font-bold text-[45px] md:text-[56px] md:top-[200px] left-10  animate__animated animate__fadeInDown '>New Session Arrivals</h1>
          <div  className='text-[26px] uppercase text-[white] absolute left-10  top-[270px] md:text-[32px] ' >
          
          
          <p className=' animate__animated animate__fadeInDown'>Check out our all trends <span className=' py-3 px-5 rounded-xl font-bold  animate__animated animate__slideInRight text-transparent bg-clip-text bg-gradient-to-l  from-[orange]   to-[purple] text-[50px] '>Collections</span></p>
          </div>
          <div>
            <Link to="/productt">
            <button  className='absolute flex flex-row top-[370px] md:top-[330px] left-10  bg-[#6b21a8]  py-3  px-9 text-[20px] rounded-full text-[white]  animate__animated animate__fadeInLeft'>Latest Products</button>
            </Link>
            
           </div>
           <div>
           <Link to="/add">
            <button  className='absolute flex flex-row top-[370px] md:top-[330px] left-64  bg-[#6b21a8]  py-3  px-9 text-[20px] rounded-full text-[white] animate__animated animate__fadeInLeft'>Add to Cart</button>
            </Link>
           </div>
         
    
        </div>
       
       
        <div className='font-bold text-[45px] text-center mt-20 pt-7  pb-7 mb-20 bg-[#d4d4d8]'>
          <span className=' animate__animated animate__fadeInDown   animate__slow animate__infinite'>Trending Snikkers</span>
        </div>
        <Slider/>
        <Footer/>
        
      
    </div>
  )
}

export default Home
