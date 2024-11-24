import React from "react";
import {useTranslation} from "react-i18next";

interface ProfileButtonProps {
    title: string;
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ title, icon, active, onClick }) => {
    const { t } = useTranslation();

    return (
        <div onClick={onClick}
                className={`${active ? 'bg-gray-200 bg-opacity-25 border-gray-200 dark:text-white dark:bg-[#202126] dark:border-[#414246]' : 'border-transparent dark:text-[#8B8B8E]'} w-full md:w-2/3 flex cursor-pointer justify-start items-center border gap-2 hover:border-gray-200 hover:dark:text-white hover:dark:bg-[#2C2D31]  hover:dark:border-[#414246] hover:bg-gray-200 hover:bg-opacity-25 py-2 pl-[30%] md:pl-8 transition duration-300 rounded-lg`}>
            {icon} {t(title)}
        </div>
    );
};