import { UnderscoreLink } from '../UnderscoreLink'

export const ProfileAvatar = ( { name } : { name: string } ) => {
    return(
        <div className='flex gap-[80px] items-center'>
            <div className='rounded-full border w-[180px] flex items-center justify-center h-[180px] mt-[20px] ml-[20px] bg-[#FFF] text-[#000] opacity-50'>
                <p className='text-3xl'>{ name[0] }</p>
            </div>
            <div className=''>
                <p className='text-gray-700 font-light font-semibold text-2xl'>{ name }</p>
                <p className='opacity-50'>Roman</p>
                <p className='font-semibold text-base text-center opacity-50'>Авторизован через <UnderscoreLink link='/' title='Elician.ru'/></p>
            </div>
        </div>
    )
}
