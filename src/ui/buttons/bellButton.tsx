import React from 'react';
import { FaBell } from 'react-icons/fa6';

interface BellButtonProps {
  onClick: () => void;
  unreadCount: number;
}

export const BellButton: React.FC<BellButtonProps> = ({ onClick, unreadCount }) => {
  return (
    <div 
      className={`border text-xl border-transparent dark:text-white dark:border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg p-2 hover:opacity-60 duration-300 cursor-pointer flex items-center justify-center ${unreadCount > 0 ? 'bg-green-500' : 'bg-transparent'}`}
      onClick={onClick}
      style={{ width: '40px', height: '40px' }} // Здесь можно изменить размеры кнопки с колокольчиком
    >
      <FaBell className={unreadCount > 0 ? 'animate-ring ' : ''} />
    </div>
  );
};
