import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade} from 'swiper/modules';

//COMPONENT's
import Button from "./Button";

/*IMG's*/
import banner1_01 from '../imgs/carousel1/banner_01.png'
import banner1_02 from '../imgs/carousel1/banner_02.png'
import banner1_03 from '../imgs/carousel1/banner_03.png'

export default function Carousel() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                slidesPerView={1.09}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    renderBullet: (index, className) =>
                        `<span class="${className} w-[10px] h-[10px] bg-black rounded-full !mx-[10px]"></span>`,
                }}

                centeredSlides={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                initialSlide={1}
            >
                <SwiperSlide>
                    <img className="w-[1179px] object-top h-[559px] object-cover" src={banner1_01} alt="Slide 1 de um gato deita cinza sentado" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className="w-[1179px] object-top h-[559px] object-cover" src={banner1_02} alt="Slide 2 da nova coleão de móveis para o seu gato" />
                        <Button
                            position="absolute top-[83%] right-1/2 transform -translate-y-[62%] translate-x-[23%]"
                            bg="bg-black"
                            color="text-white"
                            text="ver coleção"
                            fontSize="16px"
                            width="157px"
                            height="46px"
                            effect={false}
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-[1179px] object-top h-[559px] object-cover" src={banner1_03} alt="Slide 3 de um gato deita cinza deitado" />
                </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination absolute !w-[100px] !left-[9%] !bottom-[6%] flex"></div>


            <button className="custom-prev absolute left-[10%] top-[56%] transform -translate-y-1/2 z-10">
                <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976333 8.31662 0.292893 8.70714L6.65684 15.0711C7.04737 15.4616 7.68053 15.4616 8.07106 15.0711C8.46158 14.6806 8.46158 14.0474 8.07106 13.6569L2.41422 8.00004L8.07107 2.34319C8.4616 1.95267 8.4616 1.3195 8.07108 0.928977C7.68055 0.538452 7.04739 0.538452 6.65686 0.928975L0.292892 7.29293ZM60 7.00012L1 7.00003L1 9.00003L60 9.00012L60 7.00012Z" fill="black" />
                </svg>
            </button>
            <button className="custom-next absolute right-[10%] top-[56%] transform -translate-y-1/2 z-10">
                <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.7071 8.7072C60.0976 8.31668 60.0976 7.68351 59.7071 7.29299L53.3432 0.929016C52.9526 0.538491 52.3195 0.53849 51.9289 0.929014C51.5384 1.31954 51.5384 1.9527 51.9289 2.34323L57.5858 8.00009L51.9289 13.6569C51.5384 14.0475 51.5384 14.6806 51.9289 15.0711C52.3194 15.4617 52.9526 15.4617 53.3431 15.0712L59.7071 8.7072ZM-1.56916e-06 9L59 9.00009V7.00009L1.56916e-06 7L-1.56916e-06 9Z" fill="black" />
                </svg>
            </button>
        </>
    )
}