import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Addtocart = (props) => {
  var total=0;
  var grandtotal=0;
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
  const remove=(x)=>{
    const exist=props.cartItem.find((prod)=>{
      return prod.id===x.id
      
    })
    if(exist.quantity>0)
    {
      props.setcartItem(props.cartItem.filter((prod)=>{
        return prod.id!==x.id;
      }))
    }

  }
  
 
 

   
   
 
  
  
 
 

  
  return (
  
    <div className='h-[2000px] mt-28'>
       {props.cartItem.length==0 &&(
    <div >
      <h1 className='text-center pt-32  px-9 text-[49px] font-bold text-[#332e2e]'>Cart is Empty</h1>
      <Link to="/productt">
      <button className='px-6 py-5 bg-[black] text-[white] ml-[290px] md:ml-[650px] mt-7 text-[20px]'>Shopping Now</button>

      </Link>
      
      
    </div>
)}
<div className='  text-[25px] ml-5 mr-5 pt-28 pb-2 font-semibold grid grid-cols-5 pl-14 border-b-2 border-[#bbb6b6]  text-[black]'>
  
  <div>
    <h1>Images</h1>
  </div>
  <div>
    <h1>Name</h1>
  </div>
  <div>
    <h1>Quantity</h1>
  </div>
  <div>
    <h1>Prize</h1>
  </div>
  <div>
    <h1>Remove</h1>
  </div>
</div><hr/>


      {
   props.cartItem.map((prod)=>
   {
    
     total+=prod.quantity*prod.prize;
     grandtotal+=grandtotal+total;
    
   

   
    return(
      <div>
      
      
      <div className='grid grid-cols-5 mt-16 mb-10 ml-5 mr-5' key={prod.id}>
        
        
        <div className='h-[100px] w-[100px] md:h-[150px] md:w-[150px]'>
          
        <img src={prod.img}/>
        </div>
        <div className=' text-[16px] md:text-[20px] font-semibold uppercase'>
          
          <p>{prod.name}</p>
        </div>
        <div >
        <button  onClick={()=>inc(prod)}  className=' text-[18px]  font-bold md:px-5 md:py-3 rounded-full  md:bg-[#ccc3c3]'>+</button>
        <input type="text" value={prod.quantity} className='h-7 mx-3 w-5 text-[20px] '></input>
          <button onClick={()=>dec(prod)}  className='text-[18px] font-bold md:px-5 md:py-3 rounded-full  md:bg-[#ccc3c3]'>-</button>
          </div>
        <div className=' text-[20px] md:text-[23px] font-semibold'>
          <p>Rs.{total}</p>
         </div>
         <div>
         <button  className=' px-4 py-3 md:px-5 md:py-4 bg-[red] text-[white] text-[20px] rounded-xl' onClick={()=>remove(prod)}>Remove</button>
         </div>
</div>
  
  </div>
       
       
       

      
   )
    }
  )
    }
     <div className='h-[370px]  border-2 border-[gray] w-[600px] md:w-[700px] items-end ml-3 md:ml-[750px] py-24 px-5 my-10 text-[25px]'>
    <div className='justify-around flex '>
      <h1>Subtotal:</h1>
      <p>{grandtotal}</p>
      
    </div>
    
    <div className='justify-around flex py-10 '>
      <h1>GrandTotal:</h1>
      <p>{grandtotal}</p>
    </div> 
   
    <div>
      <Link to="/check">
    <button className='bg-[blue] text-[20px] text-[white] w-full py-4'>Checkout</button>
    </Link>
    </div>

  </div>
  
  
   
   
   
  
    </div>
  )
}

export default Addtocart

