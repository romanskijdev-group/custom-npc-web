import React from 'react';

interface NotificationBlockProps {
  title: string;
  children: React.ReactNode;
  isRead: boolean;
  onClick: () => void;
}

export const NotificationBlock: React.FC<NotificationBlockProps> = ({ title, children, isRead, onClick }) => {
  return (
    <div 
      className={`border-b border-gray-300 py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 rounded-xl mb-4 ${isRead ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-900'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
        {!isRead && <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
      </div>
      <div className="text-gray-700 dark:text-gray-300 mt-2">{children}</div>
    </div>
  );
};
