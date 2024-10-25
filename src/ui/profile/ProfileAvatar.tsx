import {CiImageOff} from "react-icons/ci";

export const ProfileAvatar = ( { name } : { name: string } ) => {
    return(
        <div className='col-span-2 border shadow-md rounded-lg relative'>
            <div className='flex flex-col gap-[10px] items-center p-6'>
                <div
                    className='rounded-full border w-[120px] flex items-center justify-center h-[120px] '>
                    <p className='text-black text-5xl'><CiImageOff/></p>
                </div>
                <p className='text-gray-700 font-semibold text-2xl'>{name}</p>
                <p className='opacity-50'>Roman</p>
                <div className='border w-4/5 p-2 rounded-lg text-center'><p>Привет! Меня зовут Роман, я создатель сервера EldirtchMagic и по
                    совместительству разработчик данной
                    платформы. Будем знакомы!</p></div>
                <div className='absolute right-10 border rounded-lg px-4 py-1 bg-gray-700 text-white'>Creator</div>
            </div>
        </div>
    )
}
