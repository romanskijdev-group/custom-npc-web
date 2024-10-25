import {ProfileHeader} from "../ui/profile/ProfileHeader.tsx";

import {BsCashCoin} from "react-icons/bs";

export const ProfileWallet = () => {
    return (
        <ProfileHeader>
            <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
                <BsCashCoin className='absolute inset-0 w-full h-full opacity-10 text-green-700' style={{ transform: 'translate(25%, -5%)', mixBlendMode: 'multiply' }}/>
                <p className='text-gray-700 font-semibold text-2xl z-10'>Покупки</p>
            </div>
        </ProfileHeader>
    )
}
