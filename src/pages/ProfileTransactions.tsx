import {ProfileHeader} from "../ui/profile/ProfileHeader.tsx";

import {CiShoppingBasket} from "react-icons/ci";
import {useTranslation} from "react-i18next";

export const ProfileTransactions = () => {
    const { t } = useTranslation();

    return (
        <ProfileHeader>
            <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
                <CiShoppingBasket className='absolute inset-0 w-full h-full opacity-10 text-blue-700' style={{ transform: 'translate(-35%, -25%)' }}/>
                <p className='text-gray-700 font-semibold text-2xl z-10 dark:text-[#8D8E91]'>{t('profile.transaction.title')}</p>
            </div>
        </ProfileHeader>
    )
}
