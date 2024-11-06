import React, { useState } from 'react'
import Navbar from "./Comp/Navbar"
import Home from "./Comp/Home"
import Addtocart from './Comp/Addtocart'
import Productt from './Comp/Productt'
import About from "./Comp/About"
import {show} from "./Api/index"
import Detail from "./Comp/Detail"
import Footer from "./Comp/Footer"
import Foot from "./Comp/Foot"
import Sign from "./Comp/Sign"
import Login from "./Comp/Login"
import Cont from "./Comp/Cont"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Check from "./Comp/Check"







import {BrowserRouter,Route,Routes } from 'react-router-dom'

 



  


 const mydata=show;
 const App=()=>{
  const[cartItem,setcartItem]=useState([])
  const handle=(x)=>{
    const exist=cartItem.find((prod)=>{
      return prod.id===x.id;
    })
    if(exist)
    {
      toast.warning("Your product is already added")
    }
    else{
      setcartItem([...cartItem,{...x,quantity:1}])
      toast.success("Your product is successfully added")
    }

  }
  const[detail,setdetail]=useState([])
  const detailpage=(show)=>{
    
    setdetail([{...show}])
    console.log(setdetail)
    
  }
  const[data,setdata]=useState(show)
  const filterResult=(y)=>{
    const result=show.filter((curdata)=>{
      return curdata.Catgeory===y
    })
    setdata(result)


  }
  
 
    return (
   <div className='bg-[white]'>
    <BrowserRouter>
    <Navbar count={cartItem.length}/>
    
    
    
  
    <Routes>
      <Route path="/Myreactweb/" element={<Home />}/>
      <Route path="/Myreactweb/detail" element={<Detail  detailpage={detailpage} detail={detail} setdetail={setdetail}  handle={handle}  cartItem={cartItem}   setcartItem={setcartItem}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Cont/>}/>
      <Route path="/productt" element={<Productt propsdata={data} filterResult={filterResult} setdata={setdata} handle={handle} detailpage={detailpage} />}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/check" element={<Check  handle={handle} cartItem={cartItem}   setcartItem={setcartItem}/>}/>
      <Route path="/add" element={<Addtocart handle={handle} cartItem={cartItem}   setcartItem={setcartItem}/>}/>

      
      
      
     
      
      
      
      
    </Routes>
    
    
    
    <Foot/>
    
    
    
    
    
    
   
    </BrowserRouter>
      
      
      
    </div>
    
    
  )
}


export default App
