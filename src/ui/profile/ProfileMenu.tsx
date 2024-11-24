import { ProfileButton } from '../buttons/ProfileButton.tsx';
import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { useTranslation } from 'react-i18next';

interface ProfileMenuProps {
  buttons: { title: string; icon: React.ReactNode }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ buttons, activeIndex, setActiveIndex }) => {
  const [openBottom, setOpenBottom] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden row-start-1 md:col-start-4 col-start-1 col-span-4 md:flex md:items-end md:flex-col gap-1">
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

      <div className="md:hidden row-start-1 md:col-start-4 col-start-1 col-span-4 md:items-end md:flex-col gap-1">
        <button
          className='bg-gray-200 bg-opacity-25 border-gray-200 dark:text-white dark:bg-[#202126] dark:border-[#414246] w-full flex cursor-pointer justify-center items-center py-2 border gap-2 hover:border-gray-200 hover:dark:text-white hover:dark:bg-[#2C2D31]  hover:dark:border-[#414246] hover:bg-gray-200 hover:bg-opacity-25 transition duration-300 rounded-lg'
          onClick={() => {
          setOpenBottom(true);
        }}>
          {buttons[activeIndex].icon} {t(buttons[activeIndex].title)}
        </button>
        <BottomSheet
          style={{
            zIndex: 1000
          }}
          onDismiss={() => setOpenBottom(false)}
          open={openBottom}>
          <div className="w-full flex flex-col px-[38px]">
            {buttons.map((button, index) => (
              <ProfileButton
                key={index}
                title={button.title}
                icon={button.icon}
                active={index === activeIndex}
                onClick={() => {
                  setActiveIndex(index)
                  setOpenBottom(false)
                }}
              />
            ))}
          </div>
        </BottomSheet>
      </div>
    </>
  );
};