import React from 'react'
import { BurgerMenu } from '../../../ui/buttons/BurgerMenu.tsx'
import { NavMenu } from '../../../ui/navbar/NavMenu.tsx'
import { NavItem } from '../../../ui/navbar/NavItem.tsx'
import 'aos/dist/aos.css'
import { SelectLanguage } from './SelectLanguage.tsx'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ThemeChanger } from './ThemeChanger.tsx'
import { useTranslation } from 'react-i18next';

export const Navigation: React.FC = () => {
    const { t } = useTranslation();

    return(
        <div className='z-50'>
            <nav className='bg-black border-gray-200 px-2 sm:py-1.5'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a href='' className='flex items-center space-x-3 rtl:space-x-reverse'
                       data-aos='fade-right'>
                        <p
                            className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>QuestHolder</p>
                    </a>
                    <NavMenu aos='fade-in'>
                        <NavItem link='#' title={'navigation.main'} />
                        <NavItem link='#' title={'navigation.about'} />
                        <NavItem link='#' title={'navigation.capability'} />
                        <NavItem link='#' title={'navigation.contacts'} />
                    </NavMenu>
                    <BurgerMenu></BurgerMenu>
                    <NavLink data-aos='fade-in' to='/dashboard/home'
                             className='hidden sm:flex items-center gap-[20px] text-lg border bg-gray-100 dark:bg-[#1B1C22] dark:border-[#27282D] dark:text-gray-200 py-1.5 px-4 rounded-lg shadow-sm cursor-pointer hover:bg-gradient-to-br hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:text-white'>
                        <FaArrowRightLong /> {t('general.start')}</NavLink>
                    <ThemeChanger></ThemeChanger>
                    <SelectLanguage aos='fade-left'/>
                </div>
            </nav>

        </div>
    )
}