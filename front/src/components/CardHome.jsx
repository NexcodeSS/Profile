import React from "react";

const CardHome = ({ text, icon }) => {
    return (
        <div className="h-[200px] w-[250px] bg-opacity-6 border-2 border-purple-600 relative transition-transform hover:transform hover:-translate-y-2">
            <div className="w-full h-full absolute inset-0 backdrop-blur-sm"></div>
            <div className="flex flex-col items-center justify-center h-full relative z-10 py-[15%]">
                <div className= "flex h-[50%] items-center justify-center">{icon}</div>
                <div className= "h-[50%] items-center justify-center">
                    <h3 className="text-white text-3xl text-center">{text}</h3>
                </div>
            </div>
        </div>
    );
};

export default CardHome;
