import { ProfileAvatar } from './ProfileAvatar'
import {ProfileMenu} from "./ProfileMenu.tsx";

export const ProfileHeader = () => {
    return(
        <div className="grid grid-cols-4">
            <ProfileMenu></ProfileMenu>
            <ProfileAvatar name='Sansara'/>
        </div>
    )
}