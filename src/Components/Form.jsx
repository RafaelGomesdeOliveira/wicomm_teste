import React from "react";

//COMPONNENT's
import Button from "./Button";

//IMG's
import gatoLaranja from '../imgs/footer/gatoLaranja.jpg'


export default function Form() {
    return (
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
                        <div className="relative">
                            <input
                                className="peer text-[14px] bg-[#EFEFEF] placeholder-transparent text-[#373737] w-full border-0 border-b border-b-black outline-none pb-[7px]"
                                type="text"
                                placeholder="NOME DO SEU PET"
                                name="nomePet"
                                id="inomePet"
                            />
                            <label
                                htmlFor="inomePet"
                                className=" uppercase absolute left-0 top-[0px] text-[#373737] text-[14px] transition-all peer-placeholder-shown:top-[0px] peer-placeholder-shown:text-[14px] peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-[#373737]"
                            >
                                nome do seu pet
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="peer pb-2 bg-[#EFEFEF] placeholder-transparent text-[#373737] text-[14px] w-full border-0 border-b border-b-black outline-none"
                                type="email"
                                name="email"
                                id="iemail"
                                placeholder="SEU EMAIL"
                            />
                            <label
                                htmlFor="iemail"
                                className=" uppercase absolute left-0 top-[0px] text-[#373737] text-[14px] transition-all peer-placeholder-shown:top-[0px] peer-placeholder-shown:text-[14px] peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-[#373737]"
                            >
                                seu email
                            </label>
                        </div>

                        <Button
                            width="188px"
                            height="39px"
                            bg="bg-[#EFEFEF]"
                            text="cadastrar"
                            transition={true}
                            fontSize="20px"
                        />
                    </form>

                </div>

            </div>
        </section>
    )
}