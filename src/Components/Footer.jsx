import React from "react";

/*COMPONENT'S*/
import Button from "./Button";

/*IMG's*/

import logoVertical from '../imgs/footer/logoVertical.png'
import visa from '../imgs/footer/metPagamento/visa.jpg'
import masterCard from '../imgs/footer/metPagamento/mastercard.jpg'
import opcao3 from '../imgs/footer/metPagamento/opcao3.jpg'
import elo from '../imgs/footer/metPagamento/elo.jpg'
import hipercard from '../imgs/footer/metPagamento/hipecard.jpg'
import american from '../imgs/footer/metPagamento/american.jpg'
import pix from '../imgs/footer/metPagamento/pix.jpg'
import empresaCertificada from '../imgs/footer/certSeguranca/empresaCertificada.png'
import secure from '../imgs/footer/certSeguranca/secure.jpg'
import verificado from '../imgs/footer/certSeguranca/verificado.png'
import instagram from '../imgs/footer/redesSociais/instagram.svg'



export default function Footer() {
    return (
        <footer className="mt-[50px] flex flex-col w-[97%] ">
            <div className="flex flex-row w-[100%] h-[189px]">
                <figure className="w-[17%] flex justify-center items-center h-[189px] bg-[#373737] ">
                    <img src={logoVertical} alt="" />
                </figure>
                <div className="flex flex-wrap w-[42.4%] h-[189px] border border-black">
                    <nav className="flex justify-around items-center w-full text-[12px] font-bold h-[47px] border-0 border-b border-b-black uppercase">
                        <a href="#">produtos</a>
                        <a href="#">Coleções</a>
                        <a href="#">LookBook</a>
                        <a href="#">Sobre</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Blog</a>
                    </nav>
                    <div className="flex flex-col w-[40%] border-0 border-r border-r-black h-[140px] p-[16px]">
                        <h3 className="uppercase text-[12px] h-[30px] font-bold">Formas de pagamento</h3>
                        <figure className="flex flex-wrap gap-x-[3px] gap-y-[3px]">
                            <img src={visa} alt="" />
                            <img src={masterCard} alt="" />
                            <img src={opcao3} alt="" />
                            <img src={elo} alt="" />
                            <img src={hipercard} alt="" />
                            <img src={american} alt="" />
                            <img src={pix} alt="" />
                        </figure>
                    </div>
                    <div className="flex flex-col w-[60%] border-0 h-[140px] p-[16px]">
                        <h3 className="uppercase text-[12px] h-[30px] font-bold">certificado e segurança</h3>
                        <figure className="flex items-center space-x-[14px] ">
                            <img src={empresaCertificada} alt="" />
                            <img className="filter grayscale " src={verificado} alt="" />
                            <img src={secure} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="px-[17px] py-[16px] w-[17%] h-full flex-col border border-l-0 border-black ">
                    <h3 className="uppercase text-[12px] font-bold">Ajuda</h3>
                    <nav className="flex flex-col text-[12px] space-y-[7px]">
                        <a href=""></a>
                        <a href="#">FAQ</a>
                        <a href="#">Sobre nossos arodutos</a>
                        <a href="#">Trocas e decoluções</a>
                        <a href="#">Entregas</a>
                        <a href="#">Indique e ganhe</a>
                        <a href="#">Garantias</a>
                    </nav>
                </div>
                <div className=" w-[23.6%] h-full flex-col border border-l-0 border-black">
                    <div className="px-[8px] py-[16px] h-[53%] space-y-[6px] border-0 border-b border-b-black">
                        <h3 className="uppercase text-[12px] font-bold">Contato</h3>
                        <p className="text-[12px]">WhatsApp - (51) 9999-9999</p>
                        <p className="text-[12px]">E-mail - ajuda@gat.com.br</p>
                    </div>
                    <div className="px-[8px] py-[20px] h-[47%] space-y-[12px]">
                        <h3 className="uppercase text-[12px] font-bold">Redes Sociais</h3>
                        <nav className="flex space-x-[23px]">
                            <a href="">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9466 5.58287C18.901 4.57126 18.7376 3.8791 18.5057 3.27442C18.2625 2.65072 17.9394 2.11829 17.4111 1.59347C16.8828 1.06865 16.3545 0.73779 15.7312 0.498199C15.1269 0.26241 14.4351 0.102682 13.4241 0.0570456C12.4093 0.0114091 12.0862 0 9.50933 0C6.92861 0 6.60555 0.0114091 5.59455 0.0570456C4.58354 0.102682 3.89181 0.266213 3.28749 0.498199C2.66036 0.741593 2.12825 1.06485 1.60375 1.59347C1.07924 2.1221 0.748578 2.65072 0.50913 3.27442C0.277284 3.8791 0.113851 4.57126 0.0682419 5.58287C0.0226327 6.59828 0.0112305 6.92154 0.0112305 9.5C0.0112305 12.0823 0.0226327 12.4055 0.0682419 13.4171C0.113851 14.4287 0.277284 15.1209 0.50913 15.7256C0.752379 16.3493 1.07544 16.8817 1.60375 17.4065C2.12825 17.9351 2.66036 18.2622 3.28368 18.5018C3.88801 18.7376 4.57974 18.8973 5.59075 18.943C6.60555 18.9886 6.92861 19 9.50553 19C12.0862 19 12.4093 18.9886 13.4203 18.943C14.4313 18.8973 15.1231 18.7338 15.7274 18.5018C16.3507 18.2584 16.8828 17.9351 17.4073 17.4065C17.9318 16.8779 18.2625 16.3493 18.5019 15.7256C18.7376 15.1209 18.8972 14.4287 18.9428 13.4171C18.9884 12.4017 18.9998 12.0785 18.9998 9.5C18.9998 6.92154 18.9922 6.59448 18.9466 5.58287ZM17.2401 13.3411C17.1983 14.269 17.0424 14.7748 16.9132 15.1057C16.7422 15.5468 16.5331 15.8663 16.1987 16.201C15.8642 16.5356 15.5487 16.7372 15.104 16.9159C14.7696 17.0452 14.2641 17.2012 13.3405 17.243C12.3409 17.2886 12.0406 17.3 9.50173 17.3C6.96282 17.3 6.66256 17.2886 5.66296 17.243C4.73558 17.2012 4.23007 17.0452 3.89941 16.9159C3.45852 16.7448 3.13926 16.5356 2.80479 16.201C2.47032 15.8663 2.26888 15.5506 2.09025 15.1057C1.96102 14.771 1.80519 14.2652 1.76338 13.3411C1.71777 12.3409 1.70637 12.0404 1.70637 9.5C1.70637 6.95957 1.71777 6.65913 1.76338 5.65893C1.80519 4.73099 1.96102 4.22518 2.09025 3.89432C2.26128 3.45316 2.47032 3.13371 2.80479 2.79904C3.13926 2.46437 3.45472 2.26281 3.89941 2.08407C4.23387 1.95476 4.73938 1.79884 5.66296 1.75701C6.66256 1.71137 6.96282 1.69996 9.50173 1.69996C12.0406 1.69996 12.3409 1.71137 13.3405 1.75701C14.2679 1.79884 14.7734 1.95476 15.104 2.08407C15.5449 2.2552 15.8642 2.46437 16.1987 2.79904C16.5331 3.13371 16.7346 3.44936 16.9132 3.89432C17.0424 4.22898 17.1983 4.73479 17.2401 5.65893C17.2857 6.65913 17.2971 6.95957 17.2971 9.5C17.2971 12.0404 17.2819 12.3409 17.2401 13.3411Z" fill="#373737" />
                                    <path d="M9.50176 4.61694C6.80322 4.61694 4.62158 6.80369 4.62158 9.50005C4.62158 12.2002 6.80702 14.3832 9.50176 14.3832C12.1965 14.3832 14.3819 12.1926 14.3819 9.50005C14.3819 6.79989 12.2003 4.61694 9.50176 4.61694ZM9.50176 12.668C7.75341 12.668 6.33572 11.2494 6.33572 9.50005C6.33572 7.75065 7.75341 6.33212 9.50176 6.33212C11.2501 6.33212 12.6678 7.75065 12.6678 9.50005C12.6678 11.2494 11.2501 12.668 9.50176 12.668Z" fill="#373737" />
                                    <path d="M14.5719 5.56771C15.2016 5.56771 15.7121 5.05691 15.7121 4.4268C15.7121 3.79669 15.2016 3.28589 14.5719 3.28589C13.9421 3.28589 13.4316 3.79669 13.4316 4.4268C13.4316 5.05691 13.9421 5.56771 14.5719 5.56771Z" fill="#373737" />
                                    <path d="M0 9.5C0 12.0823 0.0114023 12.4055 0.0570114 13.4171C0.102621 14.4287 0.266053 15.1209 0.4979 15.7256C0.741148 16.3493 1.06421 16.8817 1.59252 17.4065C2.11702 17.9313 2.64913 18.2622 3.27245 18.5018C3.87678 18.7376 4.56851 18.8973 5.57952 18.943C6.59432 18.9886 6.91738 19 9.4943 19C12.075 19 12.3981 18.9886 13.4091 18.943C14.4201 18.8973 15.1118 18.7338 15.7161 18.5018C16.3395 18.2584 16.8716 17.9351 17.3961 17.4065C17.9206 16.8817 18.2513 16.3493 18.4907 15.7256C18.7263 15.1209 18.886 14.4287 18.9316 13.4171C18.9772 12.4017 18.9886 12.0785 18.9886 9.5C18.9886 6.91773 18.9772 6.59448 18.9316 5.58287C18.886 4.57126 18.7225 3.8791 18.4907 3.27442C18.2474 2.65072 17.9244 2.11829 17.3961 1.59347C16.8754 1.06485 16.3433 0.73779 15.7199 0.498199C15.1156 0.26241 14.4239 0.102682 13.4129 0.0570456C12.3981 0.0114091 12.075 0 9.4981 0C6.91738 0 6.59432 0.0114091 5.58332 0.0570456C4.57231 0.102682 3.88058 0.266213 3.27626 0.498199C2.65293 0.741593 2.12082 1.06485 1.59632 1.59347C1.07181 2.1221 0.741148 2.65072 0.5017 3.27442C0.266053 3.8791 0.102621 4.57126 0.0570114 5.58287C0.0114023 6.59448 0 6.91773 0 9.5ZM1.71414 9.5C1.71414 6.96337 1.72555 6.65913 1.77115 5.65893C1.81296 4.73099 1.96879 4.22518 2.09802 3.89432C2.26905 3.45316 2.4781 3.13371 2.81256 2.79904C3.14703 2.46437 3.46249 2.26281 3.90718 2.08407C4.24165 1.95476 4.74715 1.79884 5.67073 1.75701C6.67033 1.71137 6.97059 1.69996 9.5095 1.69996C12.0484 1.69996 12.3487 1.71137 13.3483 1.75701C14.2757 1.79884 14.7812 1.95476 15.1118 2.08407C15.5527 2.2552 15.872 2.46437 16.2064 2.79904C16.5409 3.13371 16.7423 3.44936 16.921 3.89432C17.0502 4.22898 17.206 4.73479 17.2478 5.65893C17.2935 6.65913 17.3049 6.95957 17.3049 9.5C17.3049 12.0404 17.2935 12.3409 17.2478 13.3411C17.206 14.269 17.0502 14.7748 16.921 15.1057C16.75 15.5468 16.5409 15.8663 16.2064 16.201C15.872 16.5356 15.5565 16.7372 15.1118 16.9159C14.7774 17.0452 14.2719 17.2012 13.3483 17.243C12.3487 17.2886 12.0484 17.3 9.5095 17.3C6.97059 17.3 6.67033 17.2886 5.67073 17.243C4.74335 17.2012 4.23785 17.0452 3.90718 16.9159C3.46629 16.7448 3.14703 16.5356 2.81256 16.201C2.4781 15.8663 2.27666 15.5506 2.09802 15.1057C1.96879 14.771 1.81296 14.2652 1.77115 13.3411C1.72174 12.3409 1.71414 12.0366 1.71414 9.5Z" fill="#373737" />
                                </svg>
                            </a>
                            <a href="">
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_7838_135)">
                                        <path d="M19.3587 4.93164C19.1395 4.1178 18.4979 3.47612 17.684 3.25702C16.1972 2.8501 10.25 2.8501 10.25 2.8501C10.25 2.8501 4.3027 2.8501 2.81589 3.24136C2.0177 3.46047 1.36038 4.1178 1.14127 4.93164C0.75 6.41845 0.75 9.50163 0.75 9.50163C0.75 9.50163 0.75 12.6005 1.14127 14.0716C1.36038 14.8855 2.00205 15.5271 2.81589 15.7463C4.31835 16.1532 10.25 16.1532 10.25 16.1532C10.25 16.1532 16.1972 16.1532 17.684 15.7619C18.4979 15.5428 19.1395 14.9011 19.3587 14.0873C19.7499 12.6005 19.7499 9.51728 19.7499 9.51728C19.7499 9.51728 19.7656 6.41845 19.3587 4.93164Z" fill="#373737" />
                                        <path d="M8.35645 12.3502L13.3021 9.50174L8.35645 6.65332V12.3502Z" fill="#EFEFEF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7838_135">
                                            <rect x="0.75" width="19" height="19" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="">
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 2.10907C0.5 1.49774 0.71397 0.993392 1.14189 0.596042C1.56981 0.198675 2.12613 0 2.81081 0C3.48328 0 4.02734 0.195612 4.44305 0.586873C4.87097 0.990347 5.08494 1.51608 5.08494 2.16409C5.08494 2.75096 4.8771 3.24001 4.46139 3.63127C4.03347 4.03475 3.47104 4.23649 2.77413 4.23649H2.75579C2.08333 4.23649 1.53926 4.03475 1.12355 3.63127C0.707845 3.2278 0.5 2.72039 0.5 2.10907ZM0.738417 18.1564V5.90541H4.80985V18.1564H0.738417ZM7.06564 18.1564H11.1371V11.3156C11.1371 10.8877 11.186 10.5576 11.2838 10.3253C11.4549 9.90958 11.7148 9.55806 12.0632 9.27075C12.4117 8.98342 12.8488 8.83977 13.3745 8.83977C14.7439 8.83977 15.4286 9.76286 15.4286 11.6091V18.1564H19.5V11.1322C19.5 9.32271 19.0721 7.95029 18.2162 7.01496C17.3604 6.07963 16.2294 5.61197 14.8234 5.61197C13.2461 5.61197 12.0174 6.29054 11.1371 7.64768V7.68436H11.1187L11.1371 7.64768V5.90541H7.06564C7.09008 6.29665 7.10232 7.51318 7.10232 9.55502C7.10232 11.5968 7.09008 14.464 7.06564 18.1564Z" fill="#373737" />
                                </svg>
                            </a>
                            <a href="">
                                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.12751 10.0765L9.61986 6.83446H6.53995V4.73155C6.53995 3.84439 6.96941 2.97913 8.34886 2.97913H9.75V0.219053C9.75 0.219053 8.479 0 7.26438 0C4.72671 0 3.06963 1.55309 3.06963 4.36354V6.83446H0.25V10.0765H3.06963V17.9142C3.63573 18.004 4.21484 18.05 4.80479 18.05C5.39475 18.05 5.97386 18.004 6.53995 17.9142V10.0765H9.12751Z" fill="#373737" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-[10px] pt-[18px]">
                <p>© 2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
                <p>GAT  LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
            </div>
        </footer>

    )
}