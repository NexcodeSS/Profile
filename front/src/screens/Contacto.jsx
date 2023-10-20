import logo from '../assets/imagenes/logo.png';
import { Icon } from '@iconify/react';

const Contacto = () => {
    return(
        <div className="bg-[white] h-[100vh] flex justify-center items-center">
            <div className="w-[65vw] h-[62vh] bg-[#d2d2d2] mt-[10vh] flex justify-center items-center rounded-[1rem]">
                <div className=" w-[60%] h-full flex flex-col justify-evenly items-center">
                    <h1 className='mr-[47%] text-[1.3rem] font-bold'>¡Estamos para escucharte!</h1>
                    <div className=' w-[35vw] h-[6vh] border-2 border-[black] rounded-[0.1rem] flex justify-center items-center'>
                        <div className='bg-[#d2d2d2] h-full w-[10%] flex justify-center items-center rounded-tl-[0.1rem] rounded-bl-[0.1rem]'>
                            <Icon icon="iconamoon:profile-fill" width="25" />
                        </div>
                        <div className='bg-[#d2d2d2] h-full w-[90%] flex justify-center items-center rounded-tr-[0.1rem] rounded-br-[0.1rem]'>
                            <input className=' focus:outline-none focus:border-transparent w-full h-full rounded-tr-[0.1rem] rounded-br-[0.1rem] bg-[#d2d2d2] placeholder-black' type='text' placeholder='Nombre'/>
                        </div>
                    </div>
                    <div className=' w-[35vw] h-[6vh] border-2 border-[black] rounded-[0.1rem] flex justify-center items-center'>
                        <div className='bg-[#d2d2d2] h-full w-[10%] flex justify-center items-center rounded-tl-[0.1rem] rounded-bl-[0.1rem]'>
                            <Icon icon="subway:at" width="25" />
                        </div>
                        <div className='bg-[#d2d2d2] h-full w-[90%] flex justify-center items-center rounded-tr-[0.1rem] rounded-br-[0.1rem]'>
                            <input className=' focus:outline-none focus:border-transparent w-full h-full rounded-tr-[0.1rem] rounded-br-[0.1rem] bg-[#d2d2d2] placeholder-black' type='text' placeholder='Email'/>
                        </div>
                    </div>
                    <div className=' w-[35vw] h-[6vh] border-2 border-[black] rounded-[0.1rem] flex justify-center items-center'>
                        <div className='bg-[#d2d2d2] h-full w-[10%] flex justify-center items-center rounded-tl-[0.1rem] rounded-bl-[0.1rem]'>
                            <Icon icon="ic:round-phone" width="25" />
                        </div>
                        <div className='bg-[#d2d2d2] h-full w-[90%] flex justify-center items-center rounded-tr-[0.1rem] rounded-br-[0.1rem]'>
                            <input className=' focus:outline-none focus:border-transparent w-full h-full rounded-tr-[0.1rem] rounded-br-[0.1rem] bg-[#d2d2d2] placeholder-black' type='text' placeholder='Celular'/>
                        </div>
                    </div>
                    <div className=' w-[35vw] h-[6vh] border-2 border-[black] rounded-[0.1rem] flex justify-center items-center'>
                        <div className='bg-[#d2d2d2] h-full w-[10%] flex justify-center items-center rounded-tl-[0.1rem] rounded-bl-[0.1rem]'>
                            <Icon icon="solar:clipboard-bold" width="25" />
                        </div>
                        <div className='bg-[#d2d2d2] h-full w-[90%] flex justify-center items-center rounded-tr-[0.1rem] rounded-br-[0.1rem]'>
                            <input className='focus:outline-none focus:border-transparent w-full h-full rounded-tr-[0.1rem] rounded-br-[0.1rem] bg-[#d2d2d2] placeholder-black' type='text' placeholder='Asunto'/>
                        </div>
                    </div>
                    <div className=' w-[35vw] h-[20vh] border-2 border-[black] rounded-[0.1rem] flex justify-center items-center'>
                        <div className='bg-[#d2d2d2] h-full w-[10%] flex justify-center items-start rounded-tl-[0.1rem] rounded-bl-[0.1rem]'>
                            <Icon icon="mdi:pencil" width="25" />
                        </div>
                        <div className='bg-[#d2d2d2] h-full w-[90%] flex justify-center items-center rounded-tr-[0.1rem] rounded-br-[0.1rem]'>
                            <textarea className=' focus:outline-none focus:border-transparent w-full h-full rounded-tr-[0.1rem] rounded-br-[0.1rem] bg-[#d2d2d2] placeholder-black' type='text' placeholder='Mensaje'/>
                        </div>
                    </div>
                </div>
                <div className=" w-[40%] h-full flex justify-center items-center">
                    <img className='w-[40vw]' src={logo} alt='logo-nexcode'/>
                </div>
            </div>
        </div>
    )
}

export default Contacto;