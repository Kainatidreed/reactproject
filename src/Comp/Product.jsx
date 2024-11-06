
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {Link} from "react-router-dom"
import { RiStarSFill } from "react-icons/ri";
import { show } from "../Api/index";




const Product = (props) => {
  const [items, setItems] = useState(show);
  const[data,setdata]=useState(false)
  const[prev,setprev]=useState(0)
  
  
  
  
 
  const[detail,setdetail]=useState([])
  const detailpage=(show)=>{
    setdetail([{...show}])
    setdata(true)
  }
  
   const plus=()=>{
    
    setprev((prevtemp)=>{
      const newtemp=prevtemp+1;
      return newtemp;

    })
  }
const Minus=()=>{
  setprev((prevtemp)=>{
    const newtemp=prevtemp-1;
 
    return newtemp;
  })
}
const product=props.propsdata.map((product)=>{
  return(
    <div>
       <div className="rounded-2xl h-[550px] bg-[white]  shadow-[#57534e] px-3 shadow-2xl ">
            <img
              src={product.img}
              className="h-[300px] w-[390px] mx-10 "
            />
            <h1 className="text-center text-[23px] font-bold my-5 uppercase">Nike {product.name} </h1>
            <p className="text-center text-[20px] my-5">{product.prize}</p>

            <button
              className="border-2 border-[gray] w-full  py-4  bg-[black]  text-[white]   hover:bg-[gray] hover:text-[white]" onClick={()=>detailpage(index)} >
              Buy Now
            </button>
           </div>

    </div>
  )
})



  return (
    <div className="bg-[#f1f5f9] ">
      <h1 className="uppercase text-center my-14 text-[40px] font-bold line-clamp-2">
        Latest Products
      </h1>
      <hr />
     
     
    
    
      <div>
        {
        data?
        
                <div className="fixed top-8 mx-20 ">
                <button className="absolute top-5 right-6 z-10" onClick={()=>setdata(false)}><RxCross1  size={30}/></button>

                     { detail.map((x)=>(
                <div className="flex h-[680px] w-[1200px]  py-6 px-6 shadow-[gray] shadow-2xl rounded-lg bg-[white]">
                 
                <img src={x.img} className="h-[360px] w-[600px] my-2 " />
                   
                
                <div className=" mt-16 ml-20">
                  <button className="uppercase text-[white] text-[20px] bg-purple-950 py-3 px-4">Secial Offer</button>
                    <h1 className=" uppercase font-bold text-[35px] my-3">Nike {x.name}</h1>
                    <span className="text-[yellow] flex flex-row my-2"><RiStarSFill size={30}/><RiStarSFill size={30} /><RiStarSFill size={30}/><RiStarSFill size={30}/></span>
                    <div className="flex flex-row">
                    <p className=" font-semibold text-[27px]">{x.prize}</p>
                   <p className="font-semibold text-[20px] bg-purple-900  ml-2 p-3 text-[white]">50% OFF</p>
                    </div>
                    <p className="text-[20px] mt-2">100% Original Product</p>
                    <p  className="text-[20px] mt-2">Cash on delivery is available on this product</p>
                    <p  className="text-[20px] mt-2">Easy return and exchange policy within 7 days</p>
                   
                    <button className="py-3 px-5 text-[23px] bg-[#f4f4f5] rounded-full" onClick={plus}>+</button>
                    <span className="mx-2 text-[23px] text-[black] ">{prev}</span>
                    <button  className="py-3 px-5 bg-[#f4f4f5] rounded-full text-[23px]"  onClick={Minus}>-</button>
                    
                    
                    <button className="mt-6 ml-2 py-4 px-6 border-2 border-[gray]">Add to card</button>
                    
                    <button className="mt-6 ml-4 py-4 px-6 border-2 border-[gray]">Go to card</button>
                      <div className="flex flex-row absolute left-8 mt-12 gap-5">
                       
                   <img src={x.img} className="h-[150px] w-[150px] rotate-90 mx-3" />
                         
                    <img src={x.img} className="h-[150px] w-[150px] -rotate-90 mx-3  "/>
                    <img src={x.img} className="h-[150px] w-[150px] rotate-180  mx-3 "/>
                     <img src={x.img} className="h-[150px] w-[150px] -rotate-60 mx-3 "/>
                    
                </div>
                   
                </div>
              
                </div>
               

                
            ))
        }

                </div>
                :""
    }

            
     
      </div>
       


      <div className="ml-[120px] my-5">
        <button
          className="btn-outline-dark py-5 px-7  bg-[#a855f7] text-[20px] hover:bg-[black] text-[white] mx-3 outline-none rounded-xl"
          onClick={() => setItems(show)}
        >
          All
        </button>

        <button
          className="btn-outline-dark py-5 text-[20px] outline-none rounded-xl px-7 bg-[#a855f7] hover:bg-[black] text-[white] mx-3"
          onClick={() => filterItem("Men's Shoes")}
        >
          Men's Shoes
        </button>
        <button
          className="btn-outline-dark py-5 text-[20px] px-7 outline-none rounded-xl bg-[#a855f7] hover:bg-[rgb(0,0,0)] text-[white] mx-3"
          onClick={() => filterItem("Women's Shoes")}
        >
          Women's Shoes
        </button>
        <button
          className="btn-outline-dark py-5  text-[20px] px-7 outline-none rounded-xl bg-[#a855f7] hover:bg-[black] text-[white] mx-3"
          onClick={() => filterItem("Men's Flat")}
        >
          Men's Flat
        </button>
        <button
          className="btn-outline-dark py-5 text-[20px] px-7 outline-none rounded-xl bg-[#a855f7] hover:bg-[black] text-[white] mx-3"
          onClick={() => filterItem("Women's Flats")}
        >
          Women's Flats
        </button>
        <button
          className="btn-outline-dark py-5 text-[20px] px-7 outline-none rounded-xl bg-[#a855f7] hover:bg-[black] text-[white] mx-3"
          onClick={() => filterItem("Women's Heels")}
        >
          Women's Heels
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10 my-40  ">
        {product}



  

        
      </div>
  </div>
  )
}


export default Product;
