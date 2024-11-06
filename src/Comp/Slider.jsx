import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Style.css';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={false}
    centeredSlides={false}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 20,
      
      depth: 50,
      modifier: 3,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
       
    <img src="https://m.economictimes.com/thumb/msid-94865122,width-1200,height-1200,resizemode-4,imgsize-192806/best-sports-shoes-for-women.jpg" className='h-[400px] w-[350px]' />
      
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://png.pngtree.com/background/20230612/original/pngtree-black-high-heel-shoes-on-a-chrome-surface-picture-image_3176651.jpg" className='h-[400px] w-[350px]' />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://png.pngtree.com/png-clipart/20220419/original/pngtree-poster-material-design-of-sports-shoes-with-black-background-png-image_7536852.png" className='h-[400px] w-[350px]' />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7Mu6GdP-2KBuFNYibwo9-hGGSIt53ndf42MdZxTEPXwi583gbVtK3tKJyEpeOTgWKCk&usqp=CAU" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://img.ltwebstatic.com/images3_pi/2023/02/15/1676425623b0921d4c22990a9bbf35a8cb89f1af3f_thumbnail_720x.jpg" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i5.walmartimages.com/asr/c23c0a8e-6a00-4fc5-9c31-8fa8e1dde6f9.702022fb4f84ea3e6f6ab2cf25efc2f2.jpeg" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i.ebayimg.com/images/g/MaQAAOSwuY9kCAE9/s-l1200.jpg" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBdOXHU7ppPzzEvLgCNs6bPSvqQr-ZCp7bIfs7qeomXQQkfhU2TDY43C_mAmCc3lKRyA&usqp=CAU" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://ae01.alicdn.com/kf/H375bc92d2fb448a4a74c0ff3112da3f3L.jpg_640x640q90.jpg?width=750&height=651&hash=1401" className='h-[400px] w-[350px]'/>
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
