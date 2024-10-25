import React from "react";

interface ProfileButtonProps {
    title: string;
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ title, icon, active, onClick }) => {
    return (
        <div onClick={onClick}
                className={`${active ? 'bg-gray-200 bg-opacity-25 border-gray-200' : 'border-transparent'} w-2/3 flex cursor-pointer justify-start items-center border gap-2 hover:border-gray-200 hover:bg-gray-200 hover:bg-opacity-25 py-2 pl-8 transition duration-300 rounded-lg`}>
            {icon} {title}
        </div>
    );
};