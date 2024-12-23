import React, { useState } from "react";

// COMPONENTS
import Button from "./Button";

// IMGs
import gatoLaranja from '../imgs/footer/gatoLaranja.jpg';

export default function Form() {
    const [email, setEmail] = useState("");
    const [nomePet, setNomePet] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "" || nomePet.trim() === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setEmail("");
        setNomePet("");
    };

    return (
        <section className="flex border-0 border-t border-t-black w-[97%] h-[388px] py-[40px]">
            <figure className="w-5/12 h-[347px]">
                <img className="" src={gatoLaranja} alt="Gato Laranja" />
            </figure>

            <div className="flex flex-col gap-[50px] flex-wrap w-7/12 h-[347px] pl-1">
                <h2 className="items-start w-full text-[50px] h-[31%] transform -translate-y-[-45%] uppercase">
                    NEWSLETTER
                </h2>

                <div className="flex w-full">
                    <section className="w-5/12 pl-[5px] mr-8">
                        <h3 className="text-[14px] leading-[25px] font-bold uppercase mb-[7px]">
                            Cadastre-se e ganhe 10% OFF na sua primeira compra
                        </h3>
                        <p className="text-[14px] leading-[23px] font-light">
                            Seja a primeira a receber lançamentos, novidades e promoções.
                        </p>
                    </section>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-9 w-7/12"
                        action=""
                    >
                        <div className="relative">
                            <input
                                className="peer text-[14px] bg-[#EFEFEF] placeholder-transparent text-[#373737] w-full border-0 border-b border-b-black outline-none pb-[7px]"
                                type="text"
                                placeholder="NOME DO SEU PET"
                                name="nomePet"
                                id="inomePet"
                                value={nomePet}
                                onChange={(e) => setNomePet(e.target.value)}
                            />
                            <label
                                htmlFor="inomePet"
                                className={`absolute uppercase left-0 ${nomePet ? "-top-[16px] text-[12px]" : "top-[7px] text-[14px]"
                                    } text-[#373737] transition-all peer-placeholder-shown:top-[7px] peer-placeholder-shown:text-[14px] peer-focus:top-[-16px] peer-focus:text-[12px]`}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                htmlFor="iemail"
                                className={`absolute uppercase left-0 ${email ? "-top-[16px] text-[12px]" : "top-[7px] text-[14px]"
                                    } text-[#373737] transition-all peer-placeholder-shown:top-[7px] peer-placeholder-shown:text-[14px] peer-focus:top-[-16px] peer-focus:text-[12px]`}
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

            {/* Popup */}
            {showPopup && (
                <div className="fixed top-[10%] right-[4%] z-40 bg-white text-black p-3 rounded shadow-[0px_5px_7px_0px_#ccc] flex items-center space-x-2">
                    {/* Ícone de verificado */}
                    <div className="text-green-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2l4-4"
                            />
                        </svg>
                    </div>

                    <p className="text-sm font-bold">Cadastro realizado com sucesso!</p>
                </div>
            )}
        </section>
    );
}
