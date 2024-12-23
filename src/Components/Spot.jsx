import React, { useState } from "react";
import imagem1 from '../imgs/banco.png';
import imagem2 from '../imgs/catBox.png';

import AddToCart from "./AddToCart";


export default function Spot() {

    const [mouse, setMouse] = useState(false)

    return (
        <article className=" flex flex-col items-center justify-center w-[310px] h-[436px] bg-[#EFEFEF] relative" onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)} >

            <article className={`z-30 absolute flex flex-col items-baseline top-[10px] left-[207px] ${mouse && ('top-[9px] left-[208px] transition duration-300')} gap-1`}>
                <p className={`uppercase bg-[#4DA1B1] text-center self-end text-[10px] px-[9px] py-[4px] text-white`}><strong>10%</strong>OFF</p>

                <strong className={`w-[93px] uppercase bg-[#E5675D] self-end text-[10px] px-[4px] text-center py-[4px] tracking-[0.5px] text-white`}>lançamento</strong>
            </article>
            {/* 
            <p className={`absolute top-[10px] left-[243px] w-[57px] ${mouse && ('top-[9px] left-[244px] transition duration-300')} uppercase bg-[#4DA1B1] text-center text-[10px] px-[4px] py-[4px] text-white`}><strong>10%</strong>OFF</p>

            <strong className={`absolute top-[36px] left-[207px] ${mouse && ('top-[34px] left-[208px] transition duration-300')}  w-[93px] uppercase bg-[#E5675D] text-[10px] px-[4px] text-center py-[4px] tracking-[0.5px] text-white`}>lançamento</strong> */}

            <figure className="h-[331px] w-full flex flex-col justify-center items-center relative overflow-hidden">
                {/* Imagem 1 */}
                <img
                    className={`absolute mt-[55px] transition-all duration-500 ease-in-out transform ${mouse
                            ? 'scale-110 opacity-0'
                            : 'scale-100 opacity-100'
                        }`}
                    src={imagem1}
                    alt="Imagem 1"
                />

                {/* Imagem 2 */}
                <img
                    className={`absolute h-[331px] transition-all duration-500 ease-in-out ${mouse
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                    src={imagem2}
                    alt="Imagem 2"
                />
            </figure>




            <section className="w-[93%] flex flex-col justify-start h-[105px] items-center">
                <div className="w-full flex flex-row justify-between">
                    <h3 className="uppercase text-[16px] font-bold">toca túnel <br /> módulos</h3>
                    <div className="flex items-center gap-[7px] h-[20px]">
                        <div className="w-[10.6px] rounded-full h-[10.6px] bg-[#7EABE3]"></div>
                        <div className="w-[10.6px] rounded-full h-[10.6px] bg-[#BF362E]"></div>
                        <div className="w-[10.6px] rounded-full h-[10.6px] bg-[#637C52]"></div>
                        <div className="w-[10.6px] rounded-full h-[10.6px] bg-[#433643]"></div>
                    </div>
                </div>
                <div className="w-full flex gap-1 mb-[4px]">
                    <p className="uppercase line-through text-[12px] text-[#373737]">R$ 00,00</p>
                    <p className=" uppercase text-[12px] font-['Sora'] font-bold">R$ 0000,00</p>
                </div>
                {mouse && (
                    <div className="animate-fadeIn w-full">
                        <AddToCart mouse={mouse} />
                    </div>
                )}

            </section>

        </article >
    )
}