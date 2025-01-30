import { ProfileHeader } from "../ui/profile/ProfileHeader.tsx";
import { BsCashCoin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { TonConnectButton } from '@tonconnect/ui-react';
import { useState } from 'react';

const ProfileWalletHeader = () => {
  const { t } = useTranslation();
  return (
    <ProfileHeader>
      <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
        <BsCashCoin className='absolute inset-0 w-full h-full opacity-10 text-green-700' style={{ transform: 'translate(35%, 15%)' }} />
        <div className='text-center flex flex-col gap-3'>
          <p className='text-gray-700 dark:text-[#8D8E91] font-semibold text-2xl z-10'>{t('profile.wallet.title')}</p>
          <p className='text-gray-700 font-light opacity-75 text-sm w-2/3 mx-auto z-10 dark:text-white'>{t('profile.settings.subtitle')}</p>
        </div>
      </div>
    </ProfileHeader>
  );
};

const ProfileBalance = () => {
  const { t } = useTranslation();
  const [balance] = useState(0); 
  
  return (
    <div className="w-full p-4 bg-green-600 rounded-lg shadow-md flex justify-between items-center mb-4">
      <p className='text-2xl font-semibold text-white'>Текущий баланс: {balance}₽</p>
      <button className="bg-white text-green-700 px-4 py-2 rounded-full">Пополнить</button>
    </div>
  );
};

export const ProfileWallet = () => {
  return (
    <>
      {ProfileWalletHeader()}
      <div className='col-start-2 row-start-2 col-span-2 p-2 w-full rounded-lg relative flex flex-col gap-2'>
        {ProfileBalance()}
        <div className='flex flex-row gap-3 w-full'>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Банковская карта</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Вы пока ещё не добавили карту</p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Добавить карту</button>
            </div>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">TON</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Вы не подключили TON кошелёк</p>
            <div className="flex justify-center">
              <TonConnectButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
