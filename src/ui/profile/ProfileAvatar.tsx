import {CiImageOff} from "react-icons/ci";
import {ProfileHeader} from "./ProfileHeader.tsx";
import {FiCopy} from "react-icons/fi";
import {useState} from "react";

export const ProfileUser = ({name}: { name: string }) => {
    const userId = "100000";
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState<string>("Скопировать ID");

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${userId}`).then(() => {
            setTooltip('ID скопирован');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        }).catch(() => {
            setTooltip('Ошибка копирования ID');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        });
    };

    return (
        <ProfileHeader>
            <div className='flex flex-col gap-[10px] items-center p-6'>
                <div
                    className='rounded-full border dark:border-[#27282D] w-[120px] flex items-center justify-center h-[120px] '>
                    <p className='text-black text-5xl'><CiImageOff className='dark:text-white'/></p>
                </div>
                <p className='text-gray-700 font-semibold text-2xl dark:text-[#8D8E91] z-10'>{name}</p>
                <p className='text-gray-700 font-light opacity-50 text-sm z-10 dark:text-white text-center'>Roman</p>

                <div className='relative flex justify-center items-center'>
                    <p className='text-gray-700 font-light text-sm z-10 dark:text-white flex justify-center items-center gap-2'>
                        User #{userId}
                        <FiCopy
                            className='cursor-pointer'
                            onClick={handleCopy}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        />
                    </p>
                    {tooltipVisible && (
                        <div
                            className="absolute bottom-0 right-0 transform translate-x-[120%] p-1 bg-gray-700 text-white text-xs rounded transition-opacity duration-300">
                            {tooltip}
                        </div>
                    )}
                </div>

                <div className='border dark:border-[#27282D] dark:text-[#8B8B8E] w-4/5 p-2 rounded-lg text-center'>
                    <p>Привет! Меня зовут Роман, я создатель
                        сервера EldirtchMagic и по
                        совместительству разработчик данной
                        платформы. Будем знакомы!</p></div>
                <div className='absolute right-10 border rounded-lg px-4 py-1 bg-gray-700 text-white dark:text-opacity-50 dark:bg-[#202126] dark:border-[#414246]'>Creator</div>
            </div>
        </ProfileHeader>
    )
}
