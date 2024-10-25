import {CiImageOff} from "react-icons/ci";

export const ProfileAvatar = ( { name } : { name: string } ) => {
    return(
        <div className='col-span-2 border shadow-md rounded-lg relative'>
            <div className='flex flex-col gap-[10px] items-center p-6'>
                <div
                    className='rounded-full border w-[120px] flex items-center justify-center h-[120px] '>
                    <p className='text-black text-5xl'><CiImageOff /></p>
                </div>
                <p className='text-gray-700 font-light font-semibold text-2xl'>{name}</p>
                <p className='opacity-50'>Roman</p>
            </div>
        </div>
    )
}