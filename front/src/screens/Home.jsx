import home from "../assets/imagenes/home.jpg";
import CardHome from "../components/CardHome";
import { Icon } from "@iconify/react";

const Home = () => {
    return (
        <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${home})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent">
                    <div className="flex flex-col h-[50%] w-full items-center justify-end">
                        <h4 className="text-white text-2xl text-center ">
                            <span className="font-thin">Transformamos</span>
                        </h4>
                        <h1 className="text-white font-bold text-5xl text-center bold ">
                            IDEAS
                        </h1>
                        <h4 className="text-white text-2xl text-center ">
                            <span className="font-thin">en</span>
                        </h4>
                        <h1 className="text-white font-bold text-5xl text-center bold ">
                            SOLUCIONES DIGITALES
                        </h1>
                    </div>
                    <div className="flex h-[50%] items-center justify-evenly">
                        <CardHome
                            text="Paginas web"
                            icon={
                                <Icon
                                    icon="fluent-mdl2:world"
                                    color="#663BDD"
                                    width="50"
                                    height="50"
                                />
                            }
                        />
                        <CardHome
                            text="Aplicaciones moviles"
                            icon={
                                <Icon
                                    icon="bi:phone"
                                    color="#663BDD"
                                    width="50"
                                    height="50"
                                />
                            }
                        />
                        <CardHome
                            text="Despliegue y mantenimiento"
                            icon={
                                <Icon
                                    icon="material-symbols:rocket"
                                    color="#663BDD"
                                    width="50"
                                    height="50"
                                />
                            }
                        />
                        <CardHome
                            text="Optimizacion del rendimiento"
                            icon={
                                <Icon
                                    icon="mingcute:tool-line"
                                    color="#663BDD"
                                    width="50"
                                    height="50"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
