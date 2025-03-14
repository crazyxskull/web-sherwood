import React from 'react';

function ButtonBrown({ text }) {
    const handleClick = () => {
        // alert("Click!");
    };

    return (
        <div className="flex ">
            <button
                className="relative bg-gradient-to-bl 
                 from-Brown-700 to-Brown-950 shadow-2xl pt-1
                  text-amber-200 pr-3 pl-3 border-3 hover:from-Brown-500
                   border-Brown-700 rounded-lg text-sm
                    font-TrajanProBold
                   cursor-pointer transition-all duration-100 hover:scale-105 hover:shadow-lg"
                onClick={handleClick}
            >
                {text}
                <div className="absolute inset-0  
                border-1  border-blackSherwood
                border-b-8 border-b-Brown-700
                border-r-2 border-r-amber-900 border-button
                rounded-lg pointer-events-none"></div>
            </button>
        </div>
    );
}

export default ButtonBrown;