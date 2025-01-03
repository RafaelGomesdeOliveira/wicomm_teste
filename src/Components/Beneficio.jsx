import React from "react";

export default function Beneficio({ text, title }) {
    return (
        <article className="flex flex-col justify-center py-[8px] items-center w-full h-[129px]  border-[1px] mr-[-1px] mt-[-1px] border-white border-collapse">
            {/* Contêiner para o título e o ícone */}
            <div className="flex justify-between px-[18px] h-full items-center w-full text-[22px]">
                <svg
                    width="75"
                    height="100%"
                    viewBox="0 0 48 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.6889 4.08586C20.5286 -1.35862 28.2126 -1.35862 30.0524 4.08586C30.6073 5.73525 32.4871 6.51733 34.0469 5.74528C39.1863 3.1985 44.6206 8.648 42.0809 13.8017C41.311 15.3659 42.0909 17.2459 43.7357 17.8074C49.165 19.6523 49.165 27.3578 43.7357 29.2027C42.0909 29.7591 41.311 31.6442 42.0809 33.2083C44.6206 38.362 39.1863 43.8115 34.0469 41.2647C32.4871 40.4927 30.6073 41.2748 30.0524 42.9242C28.2126 48.3686 20.5286 48.3686 18.6889 42.9242C18.1339 41.2748 16.2542 40.4927 14.6944 41.2647C9.55501 43.8115 4.12069 38.362 6.66037 33.2083C7.43027 31.6442 6.65037 29.7591 5.00558 29.2027C-0.423735 27.3578 -0.423735 19.6523 5.00558 17.8074C6.65037 17.2509 7.43027 15.3659 6.66037 13.8017C4.12069 8.648 9.55501 3.1985 14.6944 5.74528C16.2542 6.51733 18.1339 5.73525 18.6889 4.08586ZM27.0928 5.08853C26.2129 2.4816 22.5334 2.4816 21.6535 5.08853C20.4886 8.53269 16.5691 10.162 13.3145 8.55274C10.8498 7.3345 8.25017 9.94144 9.46502 12.413C11.0698 15.6717 9.44502 19.6071 6.01045 20.7752C3.41078 21.6576 3.41078 25.3474 6.01045 26.2298C9.44502 27.3979 11.0698 31.3283 9.46502 34.592C8.25017 37.0636 10.8498 39.6705 13.3145 38.4523C16.5641 36.843 20.4886 38.4723 21.6535 41.9165C22.5334 44.5234 26.2129 44.5234 27.0928 41.9165C28.2576 38.4723 32.1771 36.843 35.4317 38.4523C37.8964 39.6705 40.4961 37.0636 39.2812 34.592C37.6764 31.3333 39.3012 27.3979 42.7358 26.2298C45.3355 25.3474 45.3355 21.6576 42.7358 20.7752C39.3012 19.6071 37.6764 15.6767 39.2812 12.413C40.4961 9.94144 37.8964 7.3345 35.4317 8.55274C32.1821 10.162 28.2576 8.53269 27.0928 5.08853Z"
                        fill="white"
                    />
                </svg>
                <h3 className=" leading-[27.72px] text-white font-bold first-letter:uppercase text-right">{title}</h3>
            </div>

            {/* Texto adicional */}
            <div className=" w-[85%]">
                <p className="text-[14px] font-light">{text}</p>
            </div>
        </article>
    );
}
