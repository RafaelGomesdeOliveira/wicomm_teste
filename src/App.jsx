
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Marquee from 'react-fast-marquee';

import { useState } from 'react';

/*COMPONENT's*/
import Button from "./Components/Button";
import Header from "./Components/Header";
import AddToCart from "./Components/AddToCart";
import Spot from "./Components/Spot";
import Beneficio from './Components/Beneficios';
import ButtonIMG from './Components/ButtonIMG';
import LikeButton from './Components/LikeButton';
import Footer from './Components/Footer';


/*IMG's*/
import banner1_01 from './imgs/carousel1/banner_01.png'
import banner1_02 from './imgs/carousel1/banner_02.png'
import banner1_03 from './imgs/carousel1/banner_03.png'
import bolaAmarela from './imgs/bolaAmarela.png'
import clasico from './imgs/category/image_30.png'
import minimalismo from './imgs/category/image_29.png'
import maximalismo from './imgs/category/image_28.png'
import boho from './imgs/category/image_27.png'
import gatoConforto from './imgs/gatoConforto.png'
import circleRed from './imgs/decArranharRelaxar/circleRed.png'
import ellipse_1 from './imgs/decArranharRelaxar/Ellipse_1.png'
import polygon_1 from './imgs/decArranharRelaxar/Polygon_1.png'
import gatoDeitado from './imgs/decArranharRelaxar/gatoDeitado.png'
import banner2_01 from './imgs/carousel2/banner_1.jpg'
import banner2_02 from './imgs/carousel2/banner_2.jpg'
import banner2_03 from './imgs/carousel2/banner_3.jpg'
import banner2_04 from './imgs/carousel2/banner_4.jpg'
import banner2_05 from './imgs/carousel2/banner_5.jpg'
import gatoLaranja from './imgs/footer/gatoLaranja.jpg'
import setorCircular from './imgs/minimalismo/setorCircular.png'
import circulo from './imgs/minimalismo/circulo.png'
import bancoCortado from './imgs/minimalismo/bancoCortado.png'
import catBox2 from './imgs/catBox2.jpg'



export default function App() {

  return (
    <>

      <main className='flex w-full  flex-col justify-center'>

        <section className='relative flex justify-center border border-t-[10px] border-[#EFEFEF] '>
          <Header />
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
        </section>

        <section className='bg-[#EFEFEF] w-full flex flex-col items-center justify-center text-white '>

          <article className='flex justify-center items-center bg-[#DE5A53] w-[1170px] h-[245px] border-t-[10px] border-black'>

            {/*caixa*/}
            <div className=' flex w-[1029px] z-40 h-[181px] border border-white'>
              {/*Benefício*/}
              <div className='flex flex-row mr-[-1px] items-center h-full w-[440px] border-r border-white border-collapse '>
                <p className='w-[45%] text-[140px] text-center font-Oswald font-light'>10</p>

                <article className='w-[55%] flex flex-col justify-between px-[1px]'>
                  <h2 className='text-[30px] font-bold'>Benefício Principal</h2>
                  <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </article>

              </div>

              <div className='w-full flex flex-col'>
                <div className='flex'>
                  <Beneficio text='Lorem ipsum dolor sit amet, consectetur al muad’ib.' title='beneficio secundário' />
                  <Beneficio text='Lorem ipsum dolor sit amet, consectetur al muad’ib.' title='beneficio secundário' />
                  <Beneficio text='Lorem ipsum dolor sit amet, consectetur al muad’ib.' title='beneficio secundário' />
                </div>
                <Marquee>
                  <div className='flex w-3/3 h-[51px] flex-row gap-4 items-center text-white '>
                    <svg width="15" height="15" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0778 3.83119C12.7365 4.39756 12.5775 5.66259 11.7227 6.65672C10.8679 7.65085 9.64101 7.99763 8.98232 7.43126C8.32363 6.8649 8.4826 5.59987 9.33738 4.60574C10.1922 3.61161 11.4191 3.26483 12.0778 3.83119ZM5.5647 5.45843C6.38453 5.74569 7.4006 4.97551 7.83415 3.73817C8.2677 2.50084 7.95456 1.26492 7.13473 0.977655C6.3149 0.690394 5.29884 1.46058 4.86529 2.69791C4.43174 3.93525 4.74488 5.17117 5.5647 5.45843ZM8.25069 11.8153C7.82028 11.0286 7.62086 10.1332 7.67976 9.23889C7.72253 8.39582 7.41477 7.65308 6.78665 7.29043C6.15853 6.92779 5.36393 7.03408 4.65268 7.4912C3.90764 7.98936 3.03245 8.26438 2.13599 8.28496C1.50698 8.28505 1.02531 8.46102 0.814133 8.82679C0.289827 9.73492 1.56729 11.4546 3.67111 12.6692C5.77493 13.8839 7.90293 14.1303 8.42724 13.2222C8.65181 12.8507 8.57929 12.3413 8.25069 11.8153ZM11.7594 11.2898C12.6022 10.6955 12.9659 9.76084 12.5719 9.20209C12.1779 8.64334 11.1753 8.67213 10.3326 9.26638C9.48988 9.86064 9.12612 10.7953 9.52013 11.3541C9.91414 11.9128 10.9167 11.884 11.7594 11.2898ZM3.29746 5.20714C3.20418 6.23409 2.57659 7.01646 1.8957 6.95461C1.2148 6.89277 0.738448 6.01012 0.831727 4.98317C0.925006 3.95623 1.5526 3.17386 2.23349 3.2357C2.91439 3.29755 3.39074 4.18019 3.29746 5.20714Z" fill="white" />
                    </svg>
                    <p className='font-[18px]'>Benefício Terciário</p>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49429 4.32574C9.21184 3.83608 10.3926 4.31704 11.1316 5.40001C11.8707 6.48297 11.8881 7.75783 11.1705 8.24749C10.453 8.73715 9.2722 8.25618 8.53318 7.17322C7.79416 6.09026 7.77675 4.8154 8.49429 4.32574ZM8.38038 11.038C8.87004 10.3205 8.38907 9.13972 7.30611 8.40069C6.22315 7.66167 4.94829 7.64426 4.45863 8.3618C3.96897 9.07935 4.44994 10.2601 5.5329 10.9992C6.61586 11.7382 7.89072 11.7556 8.38038 11.038ZM15.2158 10.0889C14.3446 10.301 13.428 10.2619 12.5794 9.97351C11.7762 9.71399 10.9791 9.81903 10.4662 10.3319C9.95336 10.8447 9.85038 11.6398 10.1078 12.4451C10.3962 13.2937 10.4353 14.2102 10.2232 15.0815C10.0605 15.6891 10.1058 16.1999 10.4044 16.4985C11.1459 17.24 13.1376 16.4512 14.8554 14.7334C16.5731 13.0156 17.362 11.0239 16.6205 10.2825C16.3198 9.96939 15.809 9.9076 15.2158 10.0889ZM15.6164 6.56366C15.2605 5.59584 14.4518 5.00257 13.8101 5.23853C13.1684 5.4745 12.9367 6.45036 13.2926 7.41817C13.6485 8.38599 14.4572 8.97927 15.0989 8.7433C15.7406 8.50733 15.9722 7.53147 15.6164 6.56366ZM7.55084 13.163C8.51866 13.5189 9.11194 14.3276 8.87597 14.9693C8.64 15.611 7.66414 15.8426 6.69633 15.4867C5.72852 15.1308 5.13524 14.3221 5.3712 13.6805C5.60717 13.0388 6.58303 12.8071 7.55084 13.163Z" fill="white" />
                    </svg>
                    <p className='font-[18px]'>Lisan AI Gaib</p>
                    <svg width="15" height="15" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0778 3.83119C12.7365 4.39756 12.5775 5.66259 11.7227 6.65672C10.8679 7.65085 9.64101 7.99763 8.98232 7.43126C8.32363 6.8649 8.4826 5.59987 9.33738 4.60574C10.1922 3.61161 11.4191 3.26483 12.0778 3.83119ZM5.5647 5.45843C6.38453 5.74569 7.4006 4.97551 7.83415 3.73817C8.2677 2.50084 7.95456 1.26492 7.13473 0.977655C6.3149 0.690394 5.29884 1.46058 4.86529 2.69791C4.43174 3.93525 4.74488 5.17117 5.5647 5.45843ZM8.25069 11.8153C7.82028 11.0286 7.62086 10.1332 7.67976 9.23889C7.72253 8.39582 7.41477 7.65308 6.78665 7.29043C6.15853 6.92779 5.36393 7.03408 4.65268 7.4912C3.90764 7.98936 3.03245 8.26438 2.13599 8.28496C1.50698 8.28505 1.02531 8.46102 0.814133 8.82679C0.289827 9.73492 1.56729 11.4546 3.67111 12.6692C5.77493 13.8839 7.90293 14.1303 8.42724 13.2222C8.65181 12.8507 8.57929 12.3413 8.25069 11.8153ZM11.7594 11.2898C12.6022 10.6955 12.9659 9.76084 12.5719 9.20209C12.1779 8.64334 11.1753 8.67213 10.3326 9.26638C9.48988 9.86064 9.12612 10.7953 9.52013 11.3541C9.91414 11.9128 10.9167 11.884 11.7594 11.2898ZM3.29746 5.20714C3.20418 6.23409 2.57659 7.01646 1.8957 6.95461C1.2148 6.89277 0.738448 6.01012 0.831727 4.98317C0.925006 3.95623 1.5526 3.17386 2.23349 3.2357C2.91439 3.29755 3.39074 4.18019 3.29746 5.20714Z" fill="white" />
                    </svg>
                    <p className='font-[18px]'>Benefício Terciário</p>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49429 4.32574C9.21184 3.83608 10.3926 4.31704 11.1316 5.40001C11.8707 6.48297 11.8881 7.75783 11.1705 8.24749C10.453 8.73715 9.2722 8.25618 8.53318 7.17322C7.79416 6.09026 7.77675 4.8154 8.49429 4.32574ZM8.38038 11.038C8.87004 10.3205 8.38907 9.13972 7.30611 8.40069C6.22315 7.66167 4.94829 7.64426 4.45863 8.3618C3.96897 9.07935 4.44994 10.2601 5.5329 10.9992C6.61586 11.7382 7.89072 11.7556 8.38038 11.038ZM15.2158 10.0889C14.3446 10.301 13.428 10.2619 12.5794 9.97351C11.7762 9.71399 10.9791 9.81903 10.4662 10.3319C9.95336 10.8447 9.85038 11.6398 10.1078 12.4451C10.3962 13.2937 10.4353 14.2102 10.2232 15.0815C10.0605 15.6891 10.1058 16.1999 10.4044 16.4985C11.1459 17.24 13.1376 16.4512 14.8554 14.7334C16.5731 13.0156 17.362 11.0239 16.6205 10.2825C16.3198 9.96939 15.809 9.9076 15.2158 10.0889ZM15.6164 6.56366C15.2605 5.59584 14.4518 5.00257 13.8101 5.23853C13.1684 5.4745 12.9367 6.45036 13.2926 7.41817C13.6485 8.38599 14.4572 8.97927 15.0989 8.7433C15.7406 8.50733 15.9722 7.53147 15.6164 6.56366ZM7.55084 13.163C8.51866 13.5189 9.11194 14.3276 8.87597 14.9693C8.64 15.611 7.66414 15.8426 6.69633 15.4867C5.72852 15.1308 5.13524 14.3221 5.3712 13.6805C5.60717 13.0388 6.58303 12.8071 7.55084 13.163Z" fill="white" />

                    </svg>

                  </div>

                </Marquee>
              </div>

            </div>

          </article>

        </section>

        <section className='w-full h-[840px] relative flex justify-center'>

          <h3 className='uppercase absolute top-[9%] right-[40%] font-bold text-[20px] z-40'>coleções</h3>

          <a className='uppercase underline text-[14px] absolute top-[9.8%] right-[23.9%] font-light ' href="#">Ver todas</a>

          <button className='absolute top-[9.8%] right-[1.6%] '>

            <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.7071 8.7072C60.0976 8.31668 60.0976 7.68351 59.7071 7.29299L53.3432 0.929016C52.9526 0.538491 52.3195 0.53849 51.9289 0.929014C51.5384 1.31954 51.5384 1.9527 51.9289 2.34323L57.5858 8.00009L51.9289 13.6569C51.5384 14.0475 51.5384 14.6806 51.9289 15.0711C52.3194 15.4617 52.9526 15.4617 53.3431 15.0712L59.7071 8.7072ZM-1.56916e-06 9L59 9.00009V7.00009L1.56916e-06 7L-1.56916e-06 9Z" fill="black" />
            </svg>

          </button>

          <button className='absolute top-[9.8%] right-[8.6%] '>

            <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976333 8.31662 0.292893 8.70714L6.65684 15.0711C7.04737 15.4616 7.68053 15.4616 8.07106 15.0711C8.46158 14.6806 8.46158 14.0474 8.07106 13.6569L2.41422 8.00004L8.07107 2.34319C8.4616 1.95267 8.4616 1.3195 8.07108 0.928977C7.68055 0.538452 7.04739 0.538452 6.65686 0.928975L0.292892 7.29293ZM60 7.00012L1 7.00003L1 9.00003L60 9.00012L60 7.00012Z" fill="black" />
            </svg>

          </button>

          <p className='absolute bottom-[43.8%] text-[20px] left-[29.2%] w-[338px]'>
            Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.
          </p>

          <img className=' absolute bottom-[13%] left-[21.2%] w-[568px] h-auto ' src={setorCircular} alt="" />

          <img className='absolute top-[17.6%] right-[12.2%] w-[298px] h-auto ' src={circulo} alt="" />

          <img className='absolute bottom-0 right-[5.7%] w-[465px] h-auto ' src={catBox2} alt="" />

          <ButtonIMG
            text='+'
            position='bottom-[36.9%] right-[31.3%]'
          />

          <Button
            text='explorar'
            bg='bg-[#EFEFEF]'
            width='182px'
            height='45px'
            fontSize='20px'
            position='absolute bottom-[34.3%] left-[29.2%]'
          />


          <div className='w-[483px] h-[210px] bg-[#4DA1B1] flex items-center justify-end absolute top-[9.5%] left-[9.9%] '>

            <h2 className='uppercase text-[50px] font-bold text-white pr-[60px] z-30 leading-[57px]'>minima<br />lismo</h2>

          </div>

          <img className='absolute top-[19%] left-0' src={bancoCortado} alt="" />

        </section>

        <section className='flex flex-col gap-[28px] w-full mt-[77px] bg-[#EFEFEF] pb-[72px]'>
          {/*caixas/texto*/}

          <article className='w-full flex flex-row justify-between'>
            <div className="relative flex">
              <img
                className="absolute z-0 top-[-71px]"
                src={bolaAmarela}
                alt="Círculo Amarelo"
              />

              {/* Texto sobre a imagem */}
              <div className="pt-[32px] pl-[20px] flex flex-col justify-start gap-7 relative z-10 text-center mr-[53px]">

                <h2 className=" flex flex-col justify-start text-left text-[70px] leading-[1.07] uppercase">
                  <span className="font-bold">Queri<br />dinho</span>
                  <span className="font-light ">deles</span>
                </h2>

                <Button
                  bg="bg-[#EFEFEF]"
                  width='182px'
                  height='45px'
                  fontSize='20px'
                  color="text-black"
                  text="ver tudo"
                  transition={true}
                />
              </div>
              <div className='flex'>
                <Spot />
                <Spot />
                <Spot />
              </div>
            </div>
          </article>

          {/*botoes*/}
          <article className='flex flex-col items-center gap-2'>
            <h3 className='uppercase tracking-[8px] text-[18px] mb-[20px] font-bold'>navegue pelas categorias</h3>

            <nav className='flex gap-[20px] w-[1241px]'>
              <Button
                text='clássico'
                img={clasico}
                width='255px'
                height='59px'
                bg='bg-[#EFEFEF]'
                fontSize='20px'
                effect={false}
              />
              <Button
                text='minimalismo'
                img={minimalismo}
                width='254px'
                height='59px'
                bg='bg-[#EFEFEF]'
                fontSize='20px'
                effect={false}
              />
              <Button
                text='maximalismo'
                img={maximalismo}
                width='254px'
                height='59px'
                bg='bg-[#EFEFEF]'
                fontSize='20px'
                effect={false}
              />

              <Button
                text='boho'
                img={boho}
                width='254px'
                height='59px'
                bg='bg-[#EFEFEF]'
                fontSize='20px'
                effect={false}
              />
              <Button
                text='ver tudo'
                width='154px'
                height='59px'
                bg='bg-[#EFEFEF]'
                fontSize='20px'
                effect={false}
              />


            </nav>
          </article>
        </section>

        <section className={`w-[1280px] h-[660px] relative`}>
          <img className='w-full object-cover' src={gatoConforto} alt="Gatos brincando em uma casinha" />
          <aside className='bg-white border pl-[32px] pr-[19px] border-black w-[282px] h-[322px] absolute top-[20px] right-[20px] z-10 '>
            <div className='w-full h-full flex flex-col justify-center items-start gap-[22px]'>
              <h2 className='text-[30px] font-bold text-start leading-[38px]'>Lorem Ipsum
                Dolor Sit
              </h2>
              <div className="text-[14px] font-light flex flex-col leading-[18px] space-y-[19px]">
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className=''>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
              <Button
                text='ver seleção'
                width='182px'
                height='45px'
                fontSize='17px'
              />
            </div>
          </aside>
          <ButtonIMG
            text='1'
            position='bottom-[45.9%] left-[21.3%]'
          />
          <ButtonIMG
            text='2'
            position='bottom-[41.8%] left-[34.5%]'
          />
          <ButtonIMG
            text='3'
            position='top-[12%] left-[42.3%]'
          />
          <ButtonIMG
            text='4'
            position='top-[23.3%] right-[36%]'
          />
          <ButtonIMG
            text='5'
            position='bottom-[46%] right-[29.5%]'
          />

        </section>

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
                />
              </div>
            </aside>
          </section>
          <section className='bg-white pt-[60px] pb-[80px] w-full flex h-[auto] flex-col items-center '>
            <p className='w-[63%] text-[20px] leading-[26px]'>Faça parte da comunidade de gatunos que amam <br /> design e papelão compartilhando a hashtag:</p>
            <article className='w-full relative mt-[45px] pl-[19px]'>
              <h3 className='absolute transform -translate-x-1/2 -translate-y-1/2] left-[53.6%] top-[-13.5%] z-10 text-[75px] font-normal text-[#7EB4C8]'>#AdoradoresDePapelão</h3>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                slidesPerView={4.5}
                spaceBetween={40}
                centeredSlides={false}
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

        <section className="flex flex-col items-center pb-[20px] justify-between">

          <section className="flex border-0 border-t border-t-black w-[97%] h-[388px] py-[40px]">

            <figure className="w-5/12 h-[347px] ">
              <img className="" src={gatoLaranja} alt="" />
            </figure>

            <div className="flex flex-col gap-[50px]  flex-wrap w-7/12 h-[347px] pl-1 ">

              <h2 className="items-start w-full text-[50px] h-[31%] transform -translate-y-[-45%] uppercase">NEWSLETTER</h2>

              <div className=" flex w-full">
                <section className="w-5/12 pl-[5px] mr-8">
                  <h3 className="text-[14px] leading-[25px] font-bold uppercase  mb-[7px]">Cadastre-se e ganhe 10% OFF na sua primeira compra</h3>
                  <p className="text-[14px] leading-[23px] font-light">Seja a primeira a receber lançamentos, novidades e promoções.</p>
                </section>

                <form className="flex flex-col space-y-9 w-7/12" action="">
                  <input
                    className="text-[14px] bg-[#EFEFEF] placeholder-[#373737] text-[#373737] w-full border-0 border-b border-b-black outline-none pb-[7px]"
                    type="text"
                    placeholder="NOME DO SEU PET"
                    name="nomePet"
                    id="inomePet"
                  />

                  <input
                    className="pb-2 bg-[#EFEFEF] placeholder-[#373737] text-[#373737] text-[14px] w-full border-0 border-b border-b-black outline-none"
                    type="email"
                    name="email"
                    id="iemail"
                    placeholder="SEU EMAIL"
                  />

                  <Button
                    width="188px"
                    height="39px"
                    bg='bg-[#EFEFEF]'
                    text='cadastrar'
                    transition={true}
                    fontSize="20px"
                  />
                </form>

              </div>

            </div>
          </section>
          <Footer />
        </section>

      </main>
    </>
  )
}


