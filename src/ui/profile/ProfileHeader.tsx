import { ProfileAvatar } from './ProfileAvatar'

export const ProfileHeader = () => {
    return(
        <div className='w-full bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md h-[15vh] rounded-lg relative'>
            <ProfileAvatar name='Ananas'/>
        </div>
    )
}