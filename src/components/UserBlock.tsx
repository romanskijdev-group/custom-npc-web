import { User } from './User'
import { useSelector } from 'react-redux'
import { RootState } from '../features/redux/store'
import {Link} from "react-router-dom";

export const UserBlock = ({ className } : { className?: string }) => {
    const user = useSelector((state: RootState) => state.user);
    return(
        <div className={`${className}`}>
            {
                !user.isLoggedIn ? (
                    <>
                        <Link className={`bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg`} to='/dashboard/login'>Войти</Link>
                    </>
                ) : (
                    <User/>
                )
            }
        </div>
    )
}