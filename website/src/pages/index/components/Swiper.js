"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../styles/index.module.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Sliding = () => {
    return(
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.SliderContent}>
            <Image src='/Home/HomeCarousel3.png'  width = {1400} height= {500}  alt="Carousel" style={{objectFit:'cover' , width:'100%' , height:'auto'}}></Image>
        </SwiperSlide>
        <SwiperSlide className={styles.SliderContent} >
            <Image src='/Home/HomeCarousel1.png' width = {1400}  height= {500} alt="Carousel" style={{objectFit:'cover' , width:'100%' , height:'auto'}}></Image>
        </SwiperSlide>
        <SwiperSlide className={styles.SliderContent} >
            <Image src='/Home/HomeCarousel4.png' width = {1400}  height= {500} alt="Carousel" style={{objectFit:'cover' , width:'100%' , height:'auto'}}></Image>
        </SwiperSlide>
        <SwiperSlide className={styles.SliderContent} >
            <Image src='/Home/HomeCarousel5.png' width = {1400}  height= {500} alt="Carousel" style={{objectFit:'cover' , width:'100%' , height:'auto'}}></Image>
        </SwiperSlide>
        <SwiperSlide className={styles.SliderContent} >
            <Image src='/Home/HomeCarousel2.png' width = {1400}  height= {500} alt="Carousel" style={{objectFit:'cover' , width:'100%' , height:'auto'}}></Image>
        </SwiperSlide>
      </Swiper>
    )
}

export default Sliding;