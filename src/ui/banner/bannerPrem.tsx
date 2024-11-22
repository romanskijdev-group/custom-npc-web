import React from 'react';
import { useTranslation } from 'react-i18next';

export const BannerPremium: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-red-400 to-red-600 text-white text-lg font-bold px-6 py-3 rounded-bl-lg rounded-tr-lg shadow-lg transform rotate-12">
      {t('Subscriptions.bannerPrem')}
    </div>
  );
};
