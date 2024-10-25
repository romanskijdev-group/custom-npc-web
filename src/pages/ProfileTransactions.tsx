import {ProfileHeader} from "../ui/profile/ProfileHeader.tsx";

import {CiShoppingBasket} from "react-icons/ci";

export const ProfileTransactions = () => {
    return (
        <ProfileHeader>
            <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
                <CiShoppingBasket className='absolute inset-0 w-full h-full opacity-10 text-blue-900' style={{ transform: 'translate(25%, -25%)', mixBlendMode: 'multiply' }}/>
                <p className='text-gray-700 font-semibold text-2xl z-10'>Покупки</p>
            </div>
        </ProfileHeader>
    )
}
