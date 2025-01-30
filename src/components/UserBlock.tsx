import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import { Link } from 'react-router-dom';
import { BellButton } from '../ui/buttons/bellButton';
import { NotificationMenu } from '../components/modal/notificationsModal';
import { User } from './User';

// Компонент UserBlock
export const UserBlock: React.FC<{ className?: string }> = ({ className }) => {
  const user = useSelector((state: RootState) => state.user);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`relative flex items-center dark:text-white ${className}`}>
      {!user.isLoggedIn ? (
        <Link className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg" to='/dashboard/login'>
          Войти
        </Link>
      ) : (
        <>
          <BellButton onClick={handleMenuToggle} unreadCount={unreadCount} />
          {isMenuOpen && (
            <NotificationMenu 
              onUnreadCountChange={setUnreadCount}
              onClose={handleClose}
            />
          )}
          <User name="Sansara" />
        </>
      )}
    </div>
  );
};
