import React, { useState, useEffect, useRef } from 'react';
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
    <div ref={menuRef} className="fixed top-[85px] right-[50px] w-full max-w-md border border-gray-300 rounded-lg shadow-lg bg-white z-[1000] animate-slide-in">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t-xl">
        <div className='flex flex-col'>
          <div className='flex mt-5'>
            <h2 className="text-xl font-bold">Уведомления</h2>
          </div>
          <div className="rounded-b-xl px-2 py-1 mt-2 border-t-2 flex justify-end">
            <button 
              className="w-50 hover:text-blue-700 text-gray-700 text-sm font-semibold rounded transition duration-300"
              onClick={markAllAsRead}
            >
              Отметить все как прочитанные
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <NotificationBlock 
            key={notification.id} 
            title={notification.title}
            isRead={notification.isRead}
            onClick={() => markAsRead(notification.id)}
          >
            {notification.body}
          </NotificationBlock>
        ))}
      </div>
    </div>
  );
};
