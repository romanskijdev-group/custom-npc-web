import { useSelector } from 'react-redux'
import { BottomMenuButton } from '../ui/buttons/BottomMenuButton'
import { FaHouse } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { SiDialogflow } from 'react-icons/si'
import { useEffect, useState } from 'react'
import { RootState } from '../features/redux/store'

export const MobileBottom = () => {
    const user = useSelector((state: RootState) => state.user);
    const selected = useSelector((state: RootState) => state.projects.selectedProject);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 0 && currentScrollPos > scrollPos) {
                setIsHidden(true); // Скрываем блок при скроллинге вниз
            } else {
                setIsHidden(false); // Показываем блок при скроллинге вверх
            }
            scrollPos = currentScrollPos;
        };

        let scrollPos = 0;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        user.isLoggedIn && (
            <div className={`fixed flex flex-col bottom-0 w-full py-2 border dark:border-[#27282D] bg-white dark:bg-[#202126] sm:hidden text-center transition-transform duration-300 ${isHidden ? 'transform translate-y-full' : 'transform translate-y-0'}`}>
                { selected ? <p className='border-b pb-2 text-yellow-700 opacity-50'>{selected}</p> : '' }
                <div className='grid grid-cols-4 pt-2'>
                    <BottomMenuButton title='Главная' link='/dashboard'>
                        <FaHouse className='text-gray-700 dark:text-white text-lg'/>
                    </BottomMenuButton>
                    <BottomMenuButton title='NPC' link='/dashboard/npc'>
                        <FaUser className='text-gray-700 dark:text-white text-lg'/>
                    </BottomMenuButton>
                    <BottomMenuButton title='Квесты' link='/dashboard/quests'>
                        <MdCategory className='text-gray-700 dark:text-white text-lg'/>
                    </BottomMenuButton>
                    <BottomMenuButton title='Диалоги' link='/dashboard/dialogs'>
                        <SiDialogflow className='text-gray-700 dark:text-white text-lg'/>
                    </BottomMenuButton>
                </div>
            </div>
        )
    );
};

export default MobileBottom;

