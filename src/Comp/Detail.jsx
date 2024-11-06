import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = (props) => {
  const inc=(x)=>{
    const exist=props.cartItem.find((y)=>{
      return y.id===x.id;
    })
    props.setcartItem(props.cartItem.map((prod)=>{
      return prod.id===x.id?{...exist,quantity: exist.quantity+1}:prod;
      
      
    }))

  }
  const dec=(x)=>{
    const exist=props.cartItem.find((y)=>{
      return y.id===x.id;
    })
    props.setcartItem(props.cartItem.map((prod)=>{
      return prod.id===x.id?{...exist,quantity: exist.quantity-1}:prod;
      

    }))

  }
  const detailitem=props.detail.map((detailitem)=>{
    return(
      <div className='h-[1600px] md:h-[1200px] mt-28'>
         <div className=" flex flex-col md:flex  md:flex-row mt-12 py-7 px-6 ">
         
                       <div className=' sm:hidden md:flex md:flex-col md:gap-5'>
                       <img src={detailitem.img} className="h-[150px] w-[150px] rotate-90 mx-3 shadow-2xl shadow-[#a21caf]" />
                             
                        <img src={detailitem.img} className="h-[150px] w-[150px] -rotate-90 mx-3 shadow-2xl shadow-[#a21caf] "/>
                        <img src={detailitem.img} className="h-[150px] w-[150px] rotate-180  mx-3 shadow-2xl shadow-[#a21caf] "/>
                         <img src={detailitem.img} className="h-[150px] w-[150px] -rotate-60 mx-3  shadow-2xl shadow-[#a21caf]"/>
                               
                         </div>
                 
                 <img src={detailitem.img} className="h-[1000px] w-[740px] my-2 shadow-2xl shadow-[#a21caf]  " />
                    
                 
                 <div className=" mt-16 ml-10">
                   <button className="uppercase text-[white] text-[20px] bg-purple-950 py-3 px-4">Secial Offer</button>
                     <h1 className=" uppercase font-bold text-[35px] my-3">Nike {detailitem.name}</h1>
                     <span className="text-[yellow] flex flex-row my-2"><RiStarSFill size={30}/><RiStarSFill size={30} /><RiStarSFill size={30}/><RiStarSFill size={30}/></span>
                     <div className="flex flex-row">
                     <p className=" font-semibold text-[27px]">{detailitem.prize}</p>
                    <p className="font-semibold text-[20px] bg-purple-900  ml-2 p-3 text-[white]">50% OFF</p>
                     </div>
                     <p className="text-[20px] mt-2">100% Original Product</p>
                     <p  className="text-[20px] mt-2">Cash on delivery is available on this product</p>
                     <p  className="text-[20px] mt-2">Easy return and exchange policy within 7 days</p>
                     <button  onClick={()=>inc(detailitem)}  className=' text-[18px] px-5 py-3 rounded-full  bg-[#ccc3c3]'>+</button>
                      <input type="text" value={detailitem.quantity} className='h-7 mx-3 w-5 text-[20px] '></input>
                       <button onClick={()=>dec(detailitem)}  className='text-[18px] px-5 py-3 rounded-full  bg-[#ccc3c3]'>-</button>
                   
                   
                    
                    
                    <button className="mt-6 ml-2 py-4 px-6 border-2 text-[20px] text-[white] bg-[black] border-[gray]"onClick={()=>props.handle(detailitem)}>Add to card </button>
                    <ToastContainer/>
                    
                    
                     
                   
                   </div>
                 
                   </div>
        
      </div>
    )
  })
  
  return (
    <div>
      {detailitem}
      
      
        
      
    </div>
  )
}

export default Detail
