import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Cont = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hh9r5e6', 'template_r817g2r', form.current, {
        publicKey: 'ZboF-a8E27_cjqkm3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  }
  return (
    <div className='mt-28'>
        <div className='bg-[url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] h-[700px] '>
        <form ref={form} onSubmit={sendEmail}>
            <div className=' h-[650px] md:h-[670px] w-[600px] md:w-[700px] bg-[white]  ml-3 md:ml-28 py-10 px-10 '>
                <h1 className='text-[35px] font-bold text-[black]'>Contact Us Form</h1>
                
            <div>
           <input type="text" placeholder="Your Name" className="my-6  h-[50px] w-[450px] px-8 text-[20px] text-[black] bg-[#f1f5f9] border-2 border-[white] rounded-xl"></input>
        </div>
        <div>
          <input type="text" placeholder="Your Email" className="my-6  h-[50px] w-[450px] px-8 text-[20px] text-[black]  bg-[#f1f5f9]  border-2 border-[white] outline-none  rounded-sm"></input>
        </div>
        <div>
          <textarea type="text" placeholder="Your Message" className="my-6  h-[200px] w-[450px] px-8 py-3 text-[20px] text-[black] bg-[#f1f5f9]  border-2 border-[white] outline-none  rounded-sm"></textarea>
        </div>
        <button className="my-6   px-6 py-4 text-[20px] bg-[black] font-semibold text-[white] outline-none rounded-md" >
              Send
            </button>

            </div>
            </form>
            
      </div>
    
      
    </div>
  )
}

export default Cont
