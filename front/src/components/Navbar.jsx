import React, { useState } from "react";
import Icono from "../assets/imagenes/icono.png";

const Navbar = ({ scrollToSection }) => {
    const [sectionActive, setSectionActive] = useState("home");

    const handleSection = (section) => {
        scrollToSection(section);
        setSectionActive(section);
    };

    return (
        <div className=" flex w-full h-[10vh] bg-[black] fixed z-50 text-white">
            <div className="flex items-center w-[20%] pl-5">
                <img src={Icono} alt="" className="h-[90%]" />
                <h1 className="text-2xl">NEXCODE</h1>
            </div>
            <div className="flex w-[60%] items-center justify-center">
                <p
                    onClick={() => handleSection("home")}
                    className={`px-[5%] cursor-pointer ${
                        sectionActive === "home" ? "text-purple-600" : ""
                    }`}
                >
                    Inicio
                </p>
                <p
                    onClick={() => handleSection("nosotros")}
                    className={`px-[5%] cursor-pointer ${
                        sectionActive === "nosotros" ? "text-purple-600" : ""
                    }`}
                >
                    Nosotros
                </p>
                <p
                    onClick={() => handleSection("servicios")}
                    className={`px-[5%] cursor-pointer ${
                        sectionActive === "servicios" ? "text-purple-600" : ""
                    }`}
                >
                    Servicios
                </p>
                <p
                    onClick={() => handleSection("contacto")}
                    className={`px-[5%] cursor-pointer ${
                        sectionActive === "contacto" ? "text-purple-600" : ""
                    }`}
                >
                    Contacto
                </p>
            </div>
            <div className="flex justify-center w-[20%]"></div>
        </div>
    );
};

export default Navbar;
