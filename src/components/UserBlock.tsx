import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import { Link } from 'react-router-dom';
import { Notifications } from './Notifications';
import { User } from './User';

export const UserBlock = ({ className } : { className?: string }) => {
    const user = useSelector((state: RootState) => state.user);
    const [unreadCount, setUnreadCount] = useState(0);

    return(
        <div className={`${className}`}>
            {
                !user.isLoggedIn ? (
                    <>
                        <Link className={`bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg`} to='/dashboard/login'>Войти</Link>
                    </>
                ) : (
                    <>
                        <Notifications unreadCount={unreadCount} onUnreadCountChange={setUnreadCount} />
                        <User/>
                    </>
                )
            }
        </div>
    )
}
