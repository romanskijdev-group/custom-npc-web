import { PiGithubLogoFill } from 'react-icons/pi'
import { CgOrganisation } from 'react-icons/cg'
import { BiLogoTypescript, BiSupport } from 'react-icons/bi'
import { IoCodeWorkingSharp } from 'react-icons/io5'
import { IoIosHeart } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center dark:text-gray-200 mt-[150px] bg-gray-100 dark:bg-[#202126] dark:border-[#27282D] border-t border-gray-200' data-aos='fade-in'>
            <div
                className='gap-[50px] px-4 py-12 w-full flex flex-row flex-wrap justify-start sm:justify-center'>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">QuestHolder</h1>
                    <p className="dark:text-gray-300 text-gray-700 ">Ваш ключ к лучшим квест-линейкам.</p>
                    <a href='https://google.com/'
                       className='dark:hover:bg-gray-700 hover:bg-gray-200 duration-300 flex items-center justify-center w-max p-4 rounded-full border dark:border-gray-500'><PiGithubLogoFill /></a>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <CgOrganisation /> Организация</h1>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Главная</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Партнёры</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>О проекте</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Возможности</a>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <BiSupport /> Поддержка</h1>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Контакты</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>VIP-поддержка</a>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <IoCodeWorkingSharp /> Ресурсы</h1>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Панель управления</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Политика использования</a>
                    <NavLink to='/user_agreement'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'> Пользовательское соглашение</NavLink>
                </div>
            </div>
            <p className='flex items-center justify-center bg-transparent text-center py-2 border-t dark:border-gray-500/50 w-full sm:w-1/2 sm:text-sm text-[10px]'>Copyright © 2024 QuestHolder by Roman. Made with <IoIosHeart className='text-red-500'/> and <BiLogoTypescript className='text-blue-400'/> for better questing.</p>
        </div>
    )
}

