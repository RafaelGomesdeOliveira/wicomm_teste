import React from "react";

export default function ButtonIMG(props){
    return(
        <button className={`absolute ${props.position} text-[20px] w-[28px] h-[28px] rounded-full bg-[#EFEFEF] text-black`}>
            {props.text}
        </button>
    )
}