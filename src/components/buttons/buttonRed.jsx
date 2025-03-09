import React from 'react';

function ButtonRed({ text }) {
    const handleClick = () => {
        alert("Click!");
    };

    return (
        <div className="flex ">
            <button 
                className="relative bg-gradient-to-bl
                 from-redSherwood to-redSherwood 
                  text-textSherwood  border-3 hover:from-redSherwood
                   border-textSherwood rounded-lg
                   px-3 py-1 
                   cursor-pointer transition-all duration-100 
                   hover:scale-105 shadow-md hover:shadow-lg"
                onClick={handleClick}
            >
                {text}
                <div className="absolute inset-0 
                border-1  border-blackSherwood
                border-b-4 border-b-redSherwood-hov
                border-r-2 border-r-redSherwood-hov
                rounded-lg pointer-events-none"></div>
            </button>
        </div>
    );
}

export default ButtonRed;