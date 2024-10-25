import {ProfileButton} from "../buttons/ProfileButton.tsx";
import React from "react";

interface ProfileMenuProps {
    buttons: { title: string; icon: React.ReactNode }[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ buttons, activeIndex, setActiveIndex }) => {
    return (
        <div className="flex items-end flex-col gap-1">
            {buttons.map((button, index) => (
                <ProfileButton
                    key={index}
                    title={button.title}
                    icon={button.icon}
                    active={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
};