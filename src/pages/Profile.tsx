import {ProfileMenu} from "../ui/profile/ProfileMenu.tsx";
import {ProfileAvatar} from "../ui/profile/ProfileAvatar.tsx";

const Profile = () => {
    return (
        <div className="grid grid-cols-4">
            <ProfileMenu></ProfileMenu>
            <ProfileAvatar name='Sansara'/>
        </div>
    )
}

export default Profile