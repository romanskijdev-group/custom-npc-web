import React from 'react'
import { ContactItem } from './ContactItem.tsx'
import { FaCode, FaHeart, FaMoneyBillWave, FaReact } from 'react-icons/fa'
import { HiMiniBugAnt } from 'react-icons/hi2'
import { FiCoffee } from 'react-icons/fi'
import { MdOutlineCookie } from 'react-icons/md'

const ListItem = ( { icon, text } : { icon?:React.ReactNode, text: string } ) => {
    return(
        <li
            className='my-0.5 relative rounded-md duration-300 flex items-center gap-2 '
        >{icon} {text}</li>
    )
}

export const Contacts: React.FC = () => {
    return(
        <div id='contacts' className='transition-all duration-300 sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] rounded-lg p-4' data-aos='fade-up'>
            <h1 className='dark:text-gray-200 text-center text-xl sm:text-3xl'>Связь с нами</h1>
            <div className='flex flex-col gap-0'>
                <ContactItem
                    icon={<FaHeart className="text-red-500" />}
                    title="Мне понравился ваш продукт! (или сайт)"
                    body={
                        <div>
                            <p className='mb-2'>Мы рады, что вам понравился наш продукт! QuestHolder создан для того, чтобы объединять творческих людей, которые хотят создавать уникальные квест-линейки для CustomNPC в Minecraft.</p>
                            <p className='mb-2'>Мы стремимся сделать процесс создания квестов увлекательным и доступным для всех! Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам. Ваше мнение действительно важно для нас, и мы всегда готовы улучшать наш продукт для вас!</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<HiMiniBugAnt />}
                    title="Хочу сообщить об ошибке"
                    body={
                        <div>
                            <p className='mb-2'>Нашли визуальную или техническую ошибку при использовании QuestHolder? Сообщите об ошибке письмом на электронную почту и мы обязательно её исправим!</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<FaMoneyBillWave className="text-green-500" />}
                    title="Хочу быть спонсором"
                    body={
                        <div>
                            <p className='mb-2'>Поддержите наш проект и станьте спонсором!</p>
                            <p className='mb-2'>QuestHolder позволяет пользователям совместно создавать увлекательные квест-линейки. Благодаря вашей поддержке мы можем продолжать предоставлять этот уникальный и инновационный продукт для творческого сообщества Minecraft.</p>
                            <p className='mb-2'>Станьте частью нашего видения и помогите нам сделать сервера Minecraft ещё более захватывающим и увлекательным!</p>
                        </div>
                    }
                    mail={true}/>
                <ContactItem
                    icon={<FaCode className="text-violet-300" />}
                    title="С помощью чего разработан проект?"
                    body={
                        <div className='p-2'>
                            <p>Проект QuestHolder разработан с использованием следующих инструментальных средств:</p>
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