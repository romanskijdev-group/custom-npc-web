import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';
import { NotificationBlock } from '../notification/notificationBlock';

interface NotificationItem {
  id: number;
  title: string;
  body: string;
  isRead: boolean;
}

interface NotificationMenuProps {
  onUnreadCountChange: (count: number) => void;
  onClose: () => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({ onUnreadCountChange, onClose }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [activeTab, setActiveTab] = useState('Все');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    onUnreadCountChange(notifications.filter(notification => !notification.isRead).length);
  }, [notifications, onUnreadCountChange]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => notification.id === id ? { ...notification, isRead: true } : notification));
  };

  return (
    <div 
      ref={menuRef} 
      className="fixed top-20 right-10 w-[calc(40%-10px)] max-w-[calc(40%-10px)] lg:max-w-[calc(40%-13px)] mt-1 border dark:border-gray-800 rounded-lg shadow-lg bg-white dark:bg-[#1B1D23] text-black dark:text-gray-100 z-[1000] animate-slide-in"
    >
      <div className="m-4 px-4 py-2 border-gray-300 dark:border-gray-600 flex justify-between items-center">
        <h2 className="text-xl font-bold text-black dark:text-gray-100">Уведомления</h2>
        <button 
          className="hover:text-blue-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition duration-300"
          onClick={markAllAsRead}
        >
          Отметить все как прочитанные
        </button>
      </div>
      <div className="tabs flex space-x-4 border-b border-gray-300 dark:border-gray-600 mb-4 overflow-x-auto">
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Все' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Все')}>Все</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Личные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Личные')}>Личные</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Системные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Системные')}>Системные</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Новости' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Новости')}>Новости</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Непрочитанные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Непрочитанные')}>Непрочитанные</button>
      </div>

      <div className="flex justify-center items-center rounded-lg p-2 bg-[#1893D5] dark:bg-[#071318] mt-2 mb-4 border-gray-300 dark:border-gray-600 mx-4">
        <FaBell className="text-blue-600 mr-2" size={20} />
        <span className="text-sm font-semibold">Будьте в курсе новых событий</span>
        <button 
          className="ml-4 px-4 py-1 text-white text-xs font-semibold rounded shadow-md hover:bg-blue-700 transition duration-300"
        >
          Разрешить уведомления
        </button>
      </div>

      <div className="px-6 py-4 bg-white dark:bg-[#1B1D23]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400">Здесь пока ничего нет.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationBlock 
              key={notification.id} 
              title={notification.title}
              isRead={notification.isRead}
              onClick={() => markAsRead(notification.id)}
            >
              {notification.body}
            </NotificationBlock>
          ))
        )}
      </div>
    </div>
  );
};
