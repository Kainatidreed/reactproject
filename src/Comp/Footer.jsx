import React from 'react'
import emailjs from '@emailjs/browser';


const Footer = () => {
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
    <div>
        <div className='bg-[#fee2e2] h-[360px] w-[full] px-6 md:h-[370px] md:w-[full] mt-16 pt-5'>
            <h1 className='text-[42px] text-center font-bold my-5 md:my-10'>Newsletter</h1>
            <p className='text-[30px] text-center italic'>Get timely updates from your favorite products.</p>
            <input type="text" placeholder='Your Email' className='w-[500px]  h-[55px]  md:ml-[440px] md:w-[570px] text-[20px] px-4 my-11 bg-[white]'></input>
            <button className='py-5 px-9 bg-[green] text-[white]'onClick={sendEmail}>Search</button>
            </div>
      
    </div>
  )
}

export default Footer
