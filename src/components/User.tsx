import { UserAvatar } from '../ui/user/UserAvatar';
import { UserName } from '../ui/user/UserName';
import { CgProfile } from 'react-icons/cg';
import { ProfileOptionsButton } from '../ui/user/ProfileOptionsButton';
import { RxExit } from 'react-icons/rx';
import { IoMdOptions } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../features/redux/store';
import { setIsAuthenticated } from '../features/redux/user/userSlice';

export const User = ({ name }: { name: string }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={menuRef}>
            <div onClick={() => {
                setOpen(!open);
            }}
                className='flex items-center gap-[10px] px-4 py-2 border rounded-lg w-max dark:border-[#27282D] hover:opacity-60 bg-transparent dark:bg-[#1B1C22] cursor-pointer relative'>
                <UserAvatar name={name}></UserAvatar>
                <UserName name={name}></UserName>
                <SlOptionsVertical className="dark:text-gray-400" />
            </div>
            <div className={`absolute bg-[#F7F7F7] dark:bg-[#1B1C22] dark:text-white -bottom-[140px] left-0 px-4 py-2 rounded-lg flex flex-col gap-[10px] ${open ? 'block' : 'hidden'}`}>
                <ProfileOptionsButton link='/dashboard/profile'> <CgProfile className="dark:text-white" /> Профиль </ProfileOptionsButton>
                <ProfileOptionsButton link='/dashboard/profile'> <IoMdOptions className="dark:text-white" /> Настройки </ProfileOptionsButton>
                <div className='h-[1px] border-b dark:border-gray-700'></div> 
                <div className='w-max h-max' onClick={() => {
                    dispatch(setIsAuthenticated(false));
                }}>
                    <ProfileOptionsButton link='/'> <RxExit className="dark:text-gray-400" /> Выйти </ProfileOptionsButton>
                </div>
            </div>
        </div>
    );
};
