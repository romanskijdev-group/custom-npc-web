import { ProfileHeader } from "../ui/profile/ProfileHeader.tsx";
import { BsCashCoin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { TonConnectButton } from '@tonconnect/ui-react';

export const ProfileWallet = () => {
    const { t } = useTranslation();

    return (
        <>
            <ProfileHeader>
                <div className='relative flex flex-col justify-center items-center w-full h-full overflow-hidden'>
                    <BsCashCoin className='absolute inset-0 w-full h-full opacity-10 text-green-700' style={{ transform: 'translate(35%, 15%)' }}/>
                    <p className='text-gray-700 font-semibold text-2xl z-10 dark:text-[#8D8E91]'>{t('profile.wallet.title')}</p>
                </div>
                
            <div className='flex-col bg-gray-200 dark:bg-gray-800 rounded-lg'>
                <TonConnectButton/>
            </div>
            </ProfileHeader>
            
        </>
    );
};
