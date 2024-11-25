import React, { useState, useEffect } from 'react';
import { NotificationMenu } from '../components/modal/notificationsModal';
import { BellButton } from '../ui/buttons/bellButton';

interface NotificationsProps {
  unreadCount: number;
  onUnreadCountChange: (count: number) => void;
}

export const Notifications: React.FC<NotificationsProps> = ({ unreadCount, onUnreadCountChange }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    if (unreadCount > 0) {
      // Проигрывание анимации при наличии непрочитанных уведомлений
    }
  }, [unreadCount]);

  return (
    <div className='relative flex items-center'> {/* relative - относительное позиционирование, flex - flex-контейнер, items-center - выравнивание по вертикали */}
      <BellButton onClick={handleBellClick} unreadCount={unreadCount} /> {/* Используем BellButton */}
      {showNotifications && (
        <div className="absolute top-12 right-0 mt-2 w-full md:w-96 transition-transform duration-300 ease-in-out">
          <NotificationMenu onUnreadCountChange={onUnreadCountChange} />
        </div>
      )}
    </div>
  );
};
