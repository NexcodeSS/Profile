import home from "../assets/imagenes/home.jpg";

const Home = () => {
    return (
        <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${home})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent">
                    <div className="flex flex-col h-full items-center justify-center">
                        <h4 className="text-white text-2xl text-center ">
                            Transformamos
                        </h4>
                        <h1 className="text-white font-bold text-5xl text-center bold ">IDEAS</h1>
                        <h4 className="text-white text-2xl text-center ">en</h4>
                        <h1 className="text-white font-bold text-5xl text-center bold ">
                            SOLUCIONES DIGITALES
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
