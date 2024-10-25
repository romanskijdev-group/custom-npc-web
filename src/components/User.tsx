import { UserAvatar } from '../ui/user/UserAvatar'
import { UserName } from '../ui/user/UserName'
import { CgProfile } from 'react-icons/cg'
import { ProfileOptionsButton } from '../ui/user/ProfileOptionsButton'
import { RxExit } from 'react-icons/rx'
import { IoMdOptions } from 'react-icons/io'
import { SlOptionsVertical } from 'react-icons/sl'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../features/redux/store'
import { setIsAuthenticated } from '../features/redux/user/userSlice'

export const User = ( {name}: { name: string } ) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className='relative'>
            <div onClick={() => {
                setOpen(!open)
            }}
                className='flex items-center gap-[10px] px-4 py-2 border rounded-lg w-max hover:bg-[#F7F7F7] cursor-pointer relative'>
                <UserAvatar name={name}></UserAvatar>
                <UserName name={name}></UserName>
                <SlOptionsVertical />
            </div>
            <div className={`absolute bg-[#F7F7F7] -bottom-[140px] left-0 px-4 py-2 rounded-lg flex flex-col gap-[10px] ${open ? 'block' : 'hidden'}`}>
                <ProfileOptionsButton link='/dashboard/profile'> <CgProfile /> Профиль </ProfileOptionsButton>
                <ProfileOptionsButton link='/dashboard/npc'> <IoMdOptions /> Настройки </ProfileOptionsButton>
                <div className='h-[1px] border-b'></div>
                <div className='w-max h-max' onClick={() => {
                    dispatch(setIsAuthenticated(false))
                }}>
                    <ProfileOptionsButton link='/'> <RxExit /> Выйти </ProfileOptionsButton>
                </div>
            </div>
        </div>
    )
}