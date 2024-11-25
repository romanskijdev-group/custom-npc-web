import React from 'react'
import { ContactItem } from './ContactItem.tsx'
import { FaCode, FaHeart, FaMoneyBillWave, FaReact } from 'react-icons/fa'
import { HiMiniBugAnt } from 'react-icons/hi2'
import { FiCoffee } from 'react-icons/fi'
import { MdOutlineCookie } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const ListItem = ( { icon, text } : { icon?:React.ReactNode, text: string } ) => {
    return(
        <li
            className='my-0.5 relative rounded-md duration-300 flex items-center gap-2 '
        >{icon} {text}</li>
    )
}

export const Contacts: React.FC = () => {
    const {t} = useTranslation(); 
    return(
        <div id='contacts' className='transition-all duration-300 sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] rounded-lg p-4' data-aos='fade-up'>
            <h1 className='dark:text-gray-200 text-center text-xl sm:text-3xl'>{t('contacts.heading.title')}</h1>
            <div className='flex flex-col gap-0'>
                <ContactItem
                    icon={<FaHeart className="text-red-500" />}
                    title={t('contacts.likeProject.likeTitle')}
                    body={
                        <div>
                            <p className='mb-2'>{t('contacts.likeProject.likeBody.upperText')}</p>
                            <p className='mb-2'>{t('contacts.likeProject.likeBody.downText')}</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<HiMiniBugAnt />}
                    title={t('contacts.error.errorTitle')}
                    body={
                        <div>
                            <p className='mb-2'>{t('contacts.error.errorBody')}</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<FaMoneyBillWave className="text-green-500" />}
                    title={t('contacts.sponsor.sponsorTitle')}
                    body={
                        <div>
                            <p className='mb-2'>{t('contacts.sponsor.sponsorBody.sponsorUpper')}</p>
                            <p className='mb-2'>{t('contacts.sponsor.sponsorBody.sponsorMiddle')}</p>
                            <p className='mb-2'>{t('contacts.sponsor.sponsorBody.sponsorDown')}</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<FaCode className="text-violet-300" />}
                    title= {t('contacts.technologies.techTitle')}
                    body={
                        <div className='p-2'>
                            <p>{t('contacts.technologies.techBody')}</p>
                            <div className='grid grid-cols-3 gap-1 py-2'>
                                <ul>
                                    <p>Frontend:</p>
                                    <ListItem icon={<FaReact />} text='React'/>
                                    <li>Vite</li>
                                    <li>TypeScript</li>
                                    <li>TailwindCSS</li>
                                    <li>ReduxToolkit</li>
                                    <ListItem icon={<FiCoffee />} text='Coffee'/>
                                </ul>
                                <ul>
                                <p>Backend:</p>
                                    <li>Golang</li>
                                    <li>PostgreSQL</li>
                                    <ListItem icon={<MdOutlineCookie />} text='Cookies'/>
                                </ul>
                            </div>
                        </div>
                    } />
            </div>
        </div>
    )
}