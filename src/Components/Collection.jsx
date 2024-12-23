import React from "react";

//IMG's
import setorCircular from '../imgs/minimalismo/setorCircular.png'
import circulo from '../imgs/minimalismo/circulo.png'
import bancoCortado from '../imgs/minimalismo/bancoCortado.png'
import catBox2 from '../imgs/catBox2.jpg'

//COMPONENT's
import Button from "./Button";
import ButtonIMG from "./ButtonIMG";

export default function Colletion() {
    return (
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
                transition={true}
            />


            <div className='w-[483px] h-[210px] bg-[#4DA1B1] flex items-center justify-end absolute top-[9.5%] left-[9.9%] '>

                <h2 className='uppercase text-[50px] font-bold text-white pr-[60px] z-30 leading-[57px]'>minima<br />lismo</h2>

            </div>

            <img className='absolute top-[19%] left-0' src={bancoCortado} alt="" />

        </section>
    )
}