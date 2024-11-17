import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa6';
import { NotificationMenu } from '../components/modal/notificationsModal';
import { User } from './User';

// Компонент UserBlock
export const UserBlock: React.FC<{ className?: string }> = ({ className }) => {
  const user = useSelector((state: RootState) => state.user);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    if (unreadCount > 0) {
      // Проигрывание анимации при наличии непрочитанных уведомлений
    }
  }, [unreadCount]);

  return (
    <div className='relative flex'> {/* relative - относительное позиционирование, flex - flex-контейнер */}
      <div 
        className={`border text-xl border-transparent dark:text-white dark:border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg p-2 mr-2 hover:opacity-60 duration-300 cursor-pointer flex items-center justify-center ${unreadCount > 0 ? 'bg-green-500' : 'bg-transparent'}`}
        onClick={handleBellClick}
        style={{ width: '40px', height: '40px' }} // Здесь можно изменить размеры кнопки с колокольчиком
      >
        <FaBell className={unreadCount > 0 ? 'animate-ring' : ''} />
      </div>
      {showNotifications && (
        <div className="absolute top-12 right-0 mt-2 w-full md:w-96 transition-transform duration-300 ease-in-out"> {/* absolute - абсолютное позиционирование, top-12 - верхний отступ, w-full - ширина 100%, md:w-96 - ширина 96 на больших экранах */}
          <NotificationMenu onUnreadCountChange={setUnreadCount} />
        </div>
      )}
      <div className='content-center'>
        <div className={`${className}`}>
          {!user.isLoggedIn ? (
            <Link className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg" to='/dashboard/login'> {/* bg-gradient-to-br - градиент, text-white - белый текст, shadow-md - тень, px-8 py-2 - внутренние отступы, rounded-lg - скругленные углы */}
              Войти
            </Link>
          ) : (
            <User name="Sansara" />
          )}
        </div>
      </div>
    </div>
  );
};
