import { useEffect, useState } from 'react'
import ruFlag from '../../../assets/russia-flag-icon.svg'
import usFlag from '../../../assets/united-states-flag-icon.svg'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';

export const SelectLanguage = ({aos}: {aos?:string}) => {
    const { i18n } = useTranslation();

    const langList = {
        ru: "Русский",
        en: "English",
    }

    const [lang, setLang] = useState(Cookies.get('lang') || 'ru');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        Cookies.set('lang', lang)
    }, [lang])

    const selectLanguage = ({selected}: {selected: string}) => {
        setOpen(false)
        setLang(selected)
        i18n.changeLanguage(selected);
    }

    return(
        <div className='relative text-lg flex rounded-lg'>
            <div data-aos={aos} className='bg-gray-100 dark:bg-gray-700 dark:border-gray-500 border dark:text-gray-100 py-2.5 sm:py-1.5 px-4 rounded-lg shadow-sm cursor-pointer' onClick={() => {
                setOpen(!open)
            }}>
                <p className='flex flex-row items-center h-max gap-2'>
                    <img src={lang == 'ru' ? ruFlag : usFlag} className='h-5' alt='' /> <span className='hidden md:flex'>{langList[lang as 'ru' | 'en']}</span>
                </p>
            </div>

            <div
                className={`z-[1000] absolute w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg py-1.5 px-2 border dark:border-gray-500 top-[120%] flex flex-col sm:items-start items-center justify-center gap-2 ${open ? '' : 'hidden'}`}>
                <p onClick={() => {
                    selectLanguage({selected: "ru"})
                }} className='flex flex-row items-center h-max gap-2 cursor-pointer opacity-60 duration-300 hover:opacity-100'>
                    <img src={ruFlag} className='h-5' alt='' /> <span className='hidden md:flex'>Русский</span>
                </p>
                <p onClick={() => {
                    selectLanguage({selected: "en"})
                }}
                   className='flex flex-row items-center h-max gap-2 cursor-pointer opacity-60 duration-300 hover:opacity-100'>
                    <img src={usFlag} className='h-5' alt=''/> <span className='hidden md:flex'>English</span>
                </p>
            </div>
        </div>
    )
}
