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

  const handleClose = () => {
    setShowNotifications(false);
  };

  useEffect(() => {
    if (unreadCount > 0) {
    }
  }, [unreadCount]);

  return (
    <div className='relative flex items-center'> 
      <BellButton onClick={handleBellClick} unreadCount={unreadCount} /> 
      {showNotifications && (
        <div className="absolute top-12 right-0 mt-2 w-full md:w-96 transition-transform duration-300 ease-in-out">
          <NotificationMenu onUnreadCountChange={onUnreadCountChange} onClose={handleClose} /> 
        </div>
      )}
    </div>
  );
};
