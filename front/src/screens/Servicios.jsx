import heart from "../assets/imagenes/fontisto_earth.png"
import phone from "../assets/imagenes/Vector.png"
import pc from "../assets/imagenes/compu.png"
import co from "../assets/imagenes/co.png"
import tool from "../assets/imagenes/tabler_tool.png"
import cerebro from "../assets/imagenes/cerebro.png"

const Servicios = () => {
	return (
		<div className="h-[100vh] items-center flex justify-center">
			<div className="w-[85%] h-[75%] space-y-10">
				<div className=" w-[40%] h-[15vh] items-center justify-center flex flex-col space-y-2">
					<div className="flex w-full items-center space-x-3">
						<h1 className="text-gray-600 text-sm">SERVICIOS</h1>
						<div className="bg-gray-600 h-[.1vh] w-[35%]"></div>
					</div>
					<div className="w-full">
						<h1 className="font-bold text-2xl">
							MIRÁ NUESTRO SERVICIOS
						</h1>
					</div>
				</div>
				<div className=" h-[80%] w-[100%] grid grid-cols-3">
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[15%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={heart} alt="" className="w-[6vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[70%]">
							<h1 className="font-bold">Páginas web</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[20%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={phone} alt="" className="w-[4vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[80%]">
							<h1 className="font-bold">
								Aplicaciones móviles
							</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[20%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={pc} alt="" className="w-[6vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[80%]">
							<h1 className="font-bold">
								Aplicaciones de escritorio
							</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[20%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={co} alt="" className="w-[6vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[80%]">
							<h1 className="font-bold">
								Despliegue y mantenimiento
							</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[20%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={tool} alt="" className="w-[6vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[80%]">
							<h1 className="font-bold">
								Optimización del rendimiento
							</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-5 w-[382px] h-[160px]">
						<div className="bg-[#663BDD] flex-grow w-[20%] h-[10vh] rounded-lg flex items-center justify-center">
							<img src={cerebro} alt="" className="w-[6vh] h-[6vh]" />
						</div>
						<div className="flex-grow space-y-4 w-[80%]">
							<h1 className="font-bold">
								Implementación de Inteligencia Artificial
							</h1>
							<div className="w-[80%]">
								<p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Servicios;