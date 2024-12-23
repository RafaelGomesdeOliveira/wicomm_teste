import React from "react";
//IMG's
import bolaAmarela from '../imgs/bolaAmarela.png'
import clasico from '../imgs/category/image_30.png'
import minimalismo from '../imgs/category/image_29.png'
import maximalismo from '../imgs/category/image_28.png'
import boho from '../imgs/category/image_27.png'

//COMPONENT's
import Spot from "./Spot";
import Button from "./Button";


export default function Category() {
    return (
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
                        transition={true}
                        effect={true}
                    />
                    <Button
                        text='minimalismo'
                        img={minimalismo}
                        width='254px'
                        height='59px'
                        bg='bg-[#EFEFEF]'
                        fontSize='20px'
                        transition={true}
                        effect={true}
                    />
                    <Button
                        text='maximalismo'
                        img={maximalismo}
                        width='254px'
                        height='59px'
                        bg='bg-[#EFEFEF]'
                        fontSize='20px'
                        transition={true}
                        effect={true}
                    />

                    <Button
                        text='boho'
                        img={boho}
                        width='254px'
                        height='59px'
                        bg='bg-[#EFEFEF]'
                        fontSize='20px'
                        transition={true}
                        effect={true}
                    />
                    <Button
                        text='ver tudo'
                        width='154px'
                        height='59px'
                        bg='bg-[#EFEFEF]'
                        fontSize='20px'
                        transition={true}
                        effect={true}
                    />


                </nav>
            </article>
        </section>
    )
}