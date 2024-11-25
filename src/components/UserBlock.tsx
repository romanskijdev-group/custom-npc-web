import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import { Link } from 'react-router-dom';
import { Notifications } from './Notifications';
import { User } from './User';

// Компонент UserBlock
export const UserBlock: React.FC<{ className?: string }> = ({ className }) => {
  const user = useSelector((state: RootState) => state.user);
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <div className={`relative flex items-center ${className}`}> {/* relative - относительное позиционирование, flex - flex-контейнер, items-center - выравнивание по вертикали */}
      {!user.isLoggedIn ? (
        <Link className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg" to='/dashboard/login'>
          Войти
        </Link>
      ) : (
        <>
          <Notifications unreadCount={unreadCount} onUnreadCountChange={setUnreadCount} /> 
          <User name="Sansara"/> 
        </>
      )}
    </div>
  );
};
