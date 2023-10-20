import about from '../assets/imagenes/about.jpg';
import { Icon } from '@iconify/react';

const Nosotros = () => {
    return(
        <div className="bg-[white] h-[100vh] flex justify-center items-center">
            <div className="w-[80vw] h-[65vh] mt-[10vh] flex justify-center items-center">
                <div className="w-[55%] h-full flex flex-col justify-evenly items-start">
                    <h2 className='font-bold text-[1.5rem]'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h2>
                    <h4 className='text-[1.1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
                    <div className='flex justify-start items-center'>
                        <Icon className='ml-[1rem]' icon="ci:check-all" color="#663dbb" width="25" />
                        <h6 className='text-[1.1rem]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat</h6>
                    </div>
                    <div className='flex justify-start items-center'>
                        <Icon className='ml-[1rem]' icon="ci:check-all" color="#663dbb" width="25" />
                        <h6 className='text-[1.1rem]'>Duis aute irure dolor in reprehenderit in voluptate velit</h6>
                    </div>
                    <div className='flex justify-center items-start'>
                        <Icon className='w-[3vw]  ml-[1rem]' icon="ci:check-all" color="#663dbb" width="25" />
                        <h6 className='text-[1.1rem]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur</h6>
                    </div>
                    <h4 className='text-[1.1rem]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</h4>
                    
                </div>
                <div className="w-[45%] h-full flex justify-center items-center">
                    <img src={about} alt='about us' className="h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;