import Icono from "../assets/imagenes/icono.png";
const Navbar = ({ scrollToSection }) => {
    return (
        <div className=" flex w-full h-[10vh] bg-[black] fixed z-50 text-white">
            <div className="flex items-center w-[20%] pl-5">
                <img src={Icono} alt="" className="h-[90%]" />
                <h1 className="text-2xl">NEXCODE</h1>
            </div>
            <div className="flex w-[60%] items-center justify-center">
                <p onClick={() => scrollToSection("home")} className="px-10">
                    Inicio
                </p>
                <p
                    onClick={() => scrollToSection("nosotros")}
                    className="px-10"
                >
                    Nosotros
                </p>
                <p
                    onClick={() => scrollToSection("servicios")}
                    className="px-10"
                >
                    Servicios
                </p>
                <p
                    onClick={() => scrollToSection("contacto")}
                    className="px-10"
                >
                    Contacto
                </p>
            </div>
            <div className="flex justify-center w-[20%]">
                
            </div>
        </div>
    );
};

export default Navbar;
