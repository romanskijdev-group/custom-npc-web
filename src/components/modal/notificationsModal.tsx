import React, { useState, useEffect } from 'react';
import { NotificationBlock } from '../notification/notificationBlock';

interface NotificationItem {
  id: number;
  title: string;
  body: string;
  isRead: boolean;
}

interface NotificationMenuProps {
  onUnreadCountChange: (count: number) => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({ onUnreadCountChange }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // Обновление количества непрочитанных уведомлений
  useEffect(() => {
    onUnreadCountChange(notifications.filter(notification => !notification.isRead).length);
  }, [notifications, onUnreadCountChange]);

  // Функция для пометки всех уведомлений как прочитанных
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  // Функция для пометки одного уведомления как прочитанного
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => notification.id === id ? { ...notification, isRead: true } : notification));
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg bg-white animate-slide-in">
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
