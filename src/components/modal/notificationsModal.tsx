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
    <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg bg-white animate-slide-in"> {/* w-full - ширина 100%, max-w-md - максимальная ширина, mx-auto - центрирование по горизонтали, border - рамка, border-gray-300 - цвет рамки, rounded-lg - скругленные углы, shadow-lg - тень, bg-white - белый фон, animate-slide-in - анимация появления */}
      <div className="bg-gray-100 px-6 py-4 border-b border-gray-300 rounded-t-xl"> {/* bg-gray-100 - светло-серый фон, px-6 py-4 - внутренние отступы по горизонтали и вертикали, border-b - нижняя рамка, rounded-t-xl - скругленные углы сверху */}
        <h2 className="text-xl font-semibold">Уведомления</h2> {/* text-xl - размер текста, font-semibold - полужирный шрифт */}
      </div>
      <div className="px-6 py-4 max-h-96 overflow-y-auto"> {/* px-6 py-4 - внутренние отступы, max-h-96 - максимальная высота, overflow-y-auto - автоскролл по вертикали */}
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
      <div className="px-6 py-4 rounded-b-xl"> {/* px-6 py-4 - внутренние отступы, rounded-b-xl - скругленные углы снизу */}
        <button 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={markAllAsRead}
        > {/* w-full - ширина 100%, bg-blue-500 - синий фон, hover:bg-blue-700 - синий фон при наведении, text-white - белый текст, font-bold - жирный шрифт, py-2 px-4 - внутренние отступы, rounded - скругленные углы, transition - плавные переходы, duration-300 - продолжительность 300 мс */}
          Отметить все как прочитанные
        </button>
      </div>
    </div>
  );
};
