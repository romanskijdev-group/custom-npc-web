import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import gif from '../assets/404.gif'
import { TbFaceIdError } from 'react-icons/tb'

const Error = () => {
    return(
        <div className='flex sm:flex-row dark:text-[#8D8E91] flex-col gap-[50px] w-full mx-[auto] h-[100vh] pl-[10%] items-center justify-center'>
            <div className='flex flex-col gap-[20px]'>
                <p className='font-semibold sm:text-[24px] text-lg'>404</p>
                <p className='font-bold sm:text-[48px] text-2xl flex gap-[10px] items-center'>Страница не найдена <TbFaceIdError className='text-yellow-700'/></p>
                <p className='w-[70%] opacity-50'>Извините, мы не нашли ту страницу, что вы искали. Возможно, такой страницы не существует или она находится в разработке.</p>
                <Link to='/'>
                    <p className='flex items-center gap-[10px]'><FaArrowLeftLong /> Назад на главную</p>
                </Link>
            </div>
            <img className='w-[250px] h-[250px]' src={gif} alt='404 Gif' />
        </div>
    )
}

export default Error