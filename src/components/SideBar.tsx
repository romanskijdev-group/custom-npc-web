import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {RootState} from '../features/redux/store'
import {IoIosArrowDropleft} from "react-icons/io";
import {SideBarButton} from "../ui/sidebar/SideBarButton.tsx";
import {FaHouse} from "react-icons/fa6";
import {FaUser} from "react-icons/fa";
import {MdCategory} from "react-icons/md";
import {SiDialogflow} from "react-icons/si";
import {AiFillCodeSandboxCircle} from "react-icons/ai";
import {ThemeChanger} from './general/navbar/ThemeChanger.tsx';
import {PiLightningDuotone} from "react-icons/pi";
import Cookies from "js-cookie";
import { CustomThemeSettings } from "../ui/background/CustomThemeSettings.tsx";

export const SideBar = ({children}: { children?: React.ReactNode }) => {
    const selected = useSelector((state: RootState) => state.projects.selectedProject);
    const [isOpen, setOpen] = React.useState(Cookies.get('sideBarOpen') === 'true');
    const { divStyle } = CustomThemeSettings();


    useEffect(() => {
        Cookies.set('sideBarOpen', String(isOpen));
    }, [isOpen]);

    return (
        <div
            className={`sm:flex flex-col gap-5 overflow-y-hidden dark:bg-[#1B1C22] hidden h-screen fixed rounded-lg top-[20px] md:left-[20px] flex-nowrap overflow-hidden shadow-xl bg-white bg-opacity-70 ${isOpen ? 'w-64 px-6' : 'w-16 px-1'} z-10 py-4 transition-all duration-300`} style={divStyle}>
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
            <SideBarButton title='Аналитика' linkTo='/dashboard/analytics' isOpen={isOpen}>
                <PiLightningDuotone className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
            </SideBarButton>
            <div className='w-full border-t dark:border-[#2B2C2F]'></div>
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative transition-all duration-300">
                <div className="flex flex-col gap-2">
                    <SideBarButton title='Главная' linkTo='/dashboard/home' isOpen={isOpen}>
                        <FaHouse className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                    </SideBarButton>
                    <SideBarButton title='NPC' linkTo='/dashboard/npc' isOpen={isOpen}>
                        <FaUser className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                    </SideBarButton>
                    <SideBarButton title='Квесты' linkTo='/dashboard/quests' isOpen={isOpen}>
                        <MdCategory className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                    </SideBarButton>
                    <SideBarButton title='Диалоги' linkTo='/dashboard/dialogs' isOpen={isOpen}>
                        <SiDialogflow className={`${isOpen ? 'text-xl' : 'text-2xl'}`}/>
                    </SideBarButton>
                </div>
            </div>
        </div>
    );
};