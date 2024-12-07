import React from 'react';
import { FaBell } from 'react-icons/fa6';

interface BellButtonProps {
  onClick: () => void;
  unreadCount: number;
}

export const BellButton: React.FC<BellButtonProps> = ({ onClick, unreadCount }) => {
  return (
    <div 
      className={`relative border text-xl border-md rounded-lg p-2 hover:opacity-60 duration-300 cursor-pointer flex items-center justify-center bg-transparent dark:bg-[#1B1C22] dark:border-[#27282D] text-black dark:text-white`}
      onClick={onClick}
      style={{ width: '40px', height: '40px' }}
    >
      <FaBell />
      {unreadCount > 0 && (
        <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500 dark:bg-blue-500 animate-ping"></div>
      )}
    </div>
  );
};
