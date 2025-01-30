import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {RootState} from '../../features/redux/store.ts'
import {IoIosArrowDropleft} from "react-icons/io";
import {SideBarButton} from "../../ui/sidebar/SideBarButton.tsx";
import {AiFillCodeSandboxCircle} from "react-icons/ai";
import {ThemeChanger} from '../../components/general/navbar/ThemeChanger.tsx';
import { IoIosStats } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import Cookies from "js-cookie";
import { FaUsersGear } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

export const AdminSideBar = () => {
    const selected = useSelector((state: RootState) => state.projects.selectedProject);
    const [isOpen, setOpen] = React.useState(Cookies.get('sideBarOpen') === 'true');


    useEffect(() => {
        Cookies.set('sideBarOpen', String(isOpen));
    }, [isOpen]);

    return (
        <div
            className={`sm:flex flex-col gap-5 overflow-y-hidden dark:bg-[#1B1C22] hidden h-screen fixed rounded-lg top-[20px] md:left-[20px] flex-nowrap overflow-hidden shadow-xl bg-white bg-opacity-70 ${isOpen ? 'w-64 px-6' : 'w-16 px-1'} z-10 py-4 transition-all duration-300`}>
            <div className={`w-full flex ${isOpen ? 'justify-end' : 'justify-center'}`}>
                <IoIosArrowDropleft
                    onClick={() => {
                        setOpen(!isOpen)
                    }}
                    className={`text-yellow-700 text-2xl cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>
            <Link to="/" className="mt-2 text-center w-full flex flex-col gap-[10px] transition-all duration-300">
                <h6 className="flex items-center gap-[10px] dark:text-gray-200 text-xl justify-center">
                    <AiFillCodeSandboxCircle className={`${isOpen ? 'text-xl' : 'text-3xl'}`}/>
                    {isOpen && 'QuestHolder'}
                </h6>
                {selected && (
                    <Link to="/quests"
                          className='border-t text-yellow-700 text-sm pt-[10px] hover:text-[#1D1717] transition duration-300'>
                        {selected}
                    </Link>
                )}
            </Link>
            <div className='w-full border-t dark:border-[#2B2C2F]'></div>
            <div>
                <ThemeChanger
                    style={`w-max dark:bg-[#1B1C22] dark:border-[#27282D] ${isOpen ? '' : 'mx-auto'}`}></ThemeChanger>
            </div>
            <div className='w-full border-t dark:border-[#2B2C2F]'></div>
                <SideBarButton title='Пользователи' linkTo='/dashboard/analytics' isOpen={isOpen}>
                    <FaUsersGear className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                </SideBarButton>
                
                <SideBarButton title='Статистика' linkTo='/adminpanel' isOpen={isOpen}>
                <IoIosStats className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                </SideBarButton>

                <SideBarButton title='Уведомления' linkTo='/dashboard/analytics' isOpen={isOpen}>
                    <FaBell className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                </SideBarButton>

                <SideBarButton title='Администраторы' linkTo='/dashboard/analytics' isOpen={isOpen}>
                    <MdAdminPanelSettings className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                </SideBarButton>

                <SideBarButton title='Проекты' linkTo='/dashboard/analytics' isOpen={isOpen}>
                <FaProjectDiagram className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
            </SideBarButton>

            <SideBarButton title='Финансы' linkTo='/dashboard/analytics' isOpen={isOpen}>
                <FaBtc className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
            </SideBarButton>

            <SideBarButton title='Соглашения' linkTo='/dashboard/analytics' isOpen={isOpen}>
                <FaClipboardList className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
            </SideBarButton>
        </div>
    );
};