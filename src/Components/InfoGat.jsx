import React from "react";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//COMPONENT'S
import Button from "./Button";
import LikeButton from './LikeButton';

//IMG's
import circleRed from '../imgs/decArranharRelaxar/circleRed.png'
import ellipse_1 from '../imgs/decArranharRelaxar/Ellipse_1.png'
import polygon_1 from '../imgs/decArranharRelaxar/Polygon_1.png'
import gatoDeitado from '../imgs/decArranharRelaxar/gatoDeitado.png'
import banner2_01 from '../imgs/carousel2/banner_1.jpg'
import banner2_02 from '../imgs/carousel2/banner_2.jpg'
import banner2_03 from '../imgs/carousel2/banner_3.jpg'
import banner2_04 from '../imgs/carousel2/banner_4.jpg'
import banner2_05 from '../imgs/carousel2/banner_5.jpg'

export default function InfoGat() {
    return (
        <section className='flex flex-col w-full h-[1330px]'>
            <section className='box-border pt-[20px] flex items-start w-full h-[620px] gap-4'>
                <div className='w-[100%] h-[590px relative flex justify-center items-start'>
                    <h2 className='text-[70px] mt-[14%] z-10 leading-[88px] '>Decorar <br /> Arranhar & <br />Relaxar</h2>
                    <img className='absolute top-[6%] left-[46.6%]' src={circleRed} alt="" />
                </div>
                <aside className='w-[100%] h-[590px] relative flex justify-start items-center '>
                    <div className='w-[505px] gap-[45px] flex flex-col justify-center items-start box-content '>
                        <div className='relative'>
                            <img className='w-[505px] h-auto relative' src={gatoDeitado} alt="" />
                            <img className='absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2' src={ellipse_1} alt="" />
                            <img className='absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2' src={polygon_1} alt="" />
                        </div>
                        <p className='text-[14px] leading-[25px]'>Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.</p>
                        <Button
                            text='Mais sobre a gat'
                            bg='bg-[#EFEFEF]'
                            width='295px'
                            height='45px'
                            fontSize='20px'
                            transition={true}
                            
                        />
                    </div>
                </aside>
            </section>
            <section className='bg-white pt-[60px] pb-[80px] w-full flex h-[auto] flex-col items-center '>
                <p className='w-[63%] text-[20px] leading-[26px]'>Faça parte da comunidade de gatunos que amam <br /> design e papelão compartilhando a hashtag:</p>
                <article className='w-full relative mt-[45px] pl-[19px]'>
                    <h3 className='absolute transform -translate-x-1/2 -translate-y-1/2] left-[53.6%] top-[-13.5%] z-10 text-[75px] font-normal text-[#7EB4C8]'>#AdoradoresDePapelão</h3>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        speed={1000}
                        freeMode={true}
                    >
                        <SwiperSlide>
                            <div className='relative w-[270px] h-[481px]'>
                                <img className="w-full h-full object-center object-cover" src={banner2_01} alt="Slide 1 de um gato deita cinza sentado" />
                                <LikeButton />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-[270px] h-[481px]'>
                                <img className="w-full h-full object-center object-cover" src={banner2_02} alt="Slide 2 da nova coleão de móveis para o seu gato" />
                                <LikeButton />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-[270px] h-[481px]'>
                                <img className="w-full h-full object-center object-cover" src={banner2_03} alt="Slide 3 de um gato deita cinza deitado" />

                                <LikeButton />

                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-[270px] h-[481px]'>
                                <img className="w-full h-full object-center object-cover" src={banner2_04} alt="Slide 3 de um gato deita cinza deitado" />
                                <LikeButton />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative w-[270px] h-[481px]'>
                                <img className="w-full h-full object-center object-cover" src={banner2_05} alt="Slide 3 de um gato deita cinza deitado" />
                                <LikeButton />
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </article>


            </section>
        </section>
    )
}