import React from 'react'
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const About = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
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
  
  return (
    <div className='mt-28  h-[2600px] md:h-[1800px]'>
     <div className='font-bold text-[45px] py-16 text-center animate__animated animate__fadeInDown '>
      <h1>Collections</h1> <hr className='font-bold '/>
      
     </div>
    

<div class="grid gap-4">
    <div>
        <img class="h-[600px] bg-cover w-full rounded-lg" src="https://png.pngtree.com/thumb_back/fw800/background/20240621/pngtree-running-shoes-with-mesh-and-black-and-white-soles-close-up-image_15805469.jpg" alt=""/>
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-[300px] w-[300px] rounded-lg" src="https://www.batabd.com/cdn/shop/files/1_79062a1f-5cf4-45d4-a62f-078efbb11d9e_1024x1024.jpg?v=1687253111" alt=""/>
        </div>
        <div>
            <img class="h-[240px] w-[300px] rounded-lg" src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/07052024/ab-808-black-1_1700553744-808912761227.jpg" alt=""/>
        </div>
        <div>
            <img class="h-[240px] w-[300px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfBkjIOlNOe47l17cNYVV00DCZybNIdPZhvv8C_X49QWzxM3pcnmn-JIStywBxBw9Mwk&usqp=CAU" alt=""/>
        </div>
        <div>
            <img class="h-[240px] w-[300px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8FdwvDlW4eyk5Gagj_7HIziZnM9bW0iKjA&s" alt=""/>
        </div>
        <div>
            <img class="h-[240px] w-[300px] rounded-lg" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/7635622/1.jpg?4406" alt=""/>
        </div>
    </div>
</div>
<div>
  <h1 className='text-[blue] text-[25px] text-center mt-9'>What our customer are saying</h1>
  <h1 className='text-[35px] text-center my-4 font-bold' >Testimonials</h1>
  <h1  className='text-[25px] text-center my-2 '>You can see what our customer are saying for us</h1>
</div>
<div className=' flex flex-col mx-20 md:flex md:flex-row gap-5'>

  
   
  

  <div className='h-[360px] w-[510px] bg-[#ddd6fe] rounded-xl py-6 px-4 mt-8 '>
    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80" className='h-[100px] w-[100px] rounded-full'/>
    <p className='text-[20px] my-3 mx-4 '>The purpose of studying online shopping is to understand the factors that affect consumers' behavior and to identify the relationship between online shopping behavior and customer </p>
    <h1 className='text-[22px] font-bold my-4 mx-4'>Sonia</h1>

  </div>
 
  
  <div className='h-[360px] w-[510px] bg-[#ddd6fe] rounded-xl py-6 px-4 mt-8 '>
    <img src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649" className='h-[100px] w-[100px] rounded-full'/>
    <p className='text-[20px] my-3 mx-4 '>The purpose of studying online shopping is to understand the factors that affect consumers' behavior and to identify the relationship between online shopping behavior and customer </p>
    <h1 className='text-[22px] font-bold my-4 mx-4'>Hania</h1>

  
  </div>
  <div className='h-[360px] w-[510px] bg-[#ddd6fe] rounded-xl py-6 px-4 mt-8'>
    <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww" className='h-[100px] w-[100px] rounded-full'/>
    <p className='text-[20px] my-3 mx-4 '>The purpose of studying online shopping is to understand the factors that affect consumers' behavior and to identify the relationship between online shopping behavior and customer </p>
    <h1 className='text-[22px] font-bold my-4 mx-4'>Salman</h1>

  </div>
 
 
 
 


</div>

    
   
       
      
    
        
        
      
    </div>
  )
}

export default About
