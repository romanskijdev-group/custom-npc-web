import React, { useState, useEffect } from 'react';
import { Notification } from '../notification/notificationBlock';

interface NotificationItem {
  title: string;
  body: React.ReactNode;
  isRead: boolean;
}

interface NotificationMenuProps {
  onUnreadCountChange: (count: number) => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({ onUnreadCountChange }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { title: "текст", body: <span>дата</span>, isRead: false }, 
    { title: "текст", body: <span>дата</span>, isRead: false },
    { title: "текст", body: <span>дата</span>, isRead: false },
  ]);

  // Используем useEffect для обновления количества непрочитанных уведомлений при изменении notifications
  useEffect(() => {
    onUnreadCountChange(notifications.filter(notification => !notification.isRead).length);
  }, [notifications, onUnreadCountChange]);

  // Функция для пометки всех уведомлений как прочитанных
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  // Функция для пометки одного уведомления как прочитанного
  const markAsRead = (index: number) => {
    setNotifications(notifications.map((notification, i) => i === index ? { ...notification, isRead: true } : notification));
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg bg-white animate-slide-in">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 rounded-t-xl">
        <h2 className="text-xl font-semibold">Уведомления</h2>
        <div className="rounded-b-xl px-2 py-1 mt-2 border-t-2 flex justify-end">
          <button 
            className="w-50 hover:text-blue-700 text-black text-sm font-bold rounded transition duration-300"
            onClick={markAllAsRead}
          >
            Отметить все как прочитанные
          </button>
        </div>
      </div>
      <div className="px-6 py-4 max-h-96 overflow-y-auto">
        {notifications.map((notification, index) => (
          <Notification 
            key={index} 
            title={notification.title} 
            body={notification.body} 
            isRead={notification.isRead} 
            onClick={() => markAsRead(index)} 
          />
        ))}
      </div>
    </div>
  );
};
