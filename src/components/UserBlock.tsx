import { User } from './User'
import { useSelector } from 'react-redux'
import { RootState } from '../features/redux/store'
import {Link} from "react-router-dom";
import { FaBell} from 'react-icons/fa6';

export const UserBlock = ({ className } : { className?: string }) => {
    const user = useSelector((state: RootState) => state.user);
    return(
        <div className='flex'>
            <div className="bg-gray-100 border border-transparent dark:text-white dark:border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg p-5 mr-2 hover:opacity-60 duration-300 cursor-pointer ">
                <FaBell></FaBell>
            </div>
        <div className='content-center'>
        <div className= {`${className}`}>
            {
                !user.isLoggedIn ? (
                    <>
                        <Link className={`bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg`} to='/dashboard/login'>Войти</Link>
                    </>
                ) : (
                    <User name="Sansara"/>
                )
            }
        </div>
        </div>
  </div>

    )
}