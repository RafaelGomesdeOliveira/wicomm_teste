import React, { useState } from "react";

export default function Button({
    text,
    color = "text-black",
    bg = "bg-white",
    transition = '',
    position = '',
    fontSize = "16px",
    width = "157px",
    height = "46px",
    img = '',
    effect = true
}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // Define cores alternadas com base no estado e na cor inicial
    const toggleStyles = () => {
        if (effect === false) {
            return `${bg} ${color}`;
        } else if (bg === "bg-white") {
            return isClicked ? "bg-black text-white" : "bg-white text-black";
        } else if (bg === 'bg-[#EFEFEF]') {
            console.log(bg)
            return isClicked ? "bg-black text-white" : "bg-[#EFEFEF] text-black"
        } else if (bg === "bg-black") {
            return isClicked ? "bg-white text-black" : "bg-black text-white";
        }
        return `${bg} ${color}`;
    };

    return (
        <button
            style={{
                fontSize: fontSize,
                width: width,
                height: height,
            }}
            onClick={() => handleClick()}
            className={`${toggleStyles()} flex justify-center gap-[10px] items-center cursor-pointer text-center border border-1 border-black tracking-[0.5px] rounded-full ${(transition && !isClicked) && ("hover:bg-white hover:translate-y-[-0.5px] hover:shadow-[0px_2px_3px_#ccc] transition-transform duration-300 ease-in-out")} 
                        ${position && (position)}`}
        >
            {img && (
                <img src={img} alt="" />
            )}

            {text.toUpperCase()}
        </button>
    );
}
