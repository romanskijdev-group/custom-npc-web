import React, { useState } from 'react';
import { Button } from '../ui/buttons/Button';
import { FaCheckCircle } from 'react-icons/fa';
import { BannerStandart } from '../ui/banner/bannerStandart';
import { BannerGold } from '../ui/banner/bannerGold';
import { BannerPremium } from '../ui/banner/bannerPrem';
import { useTranslation } from 'react-i18next';
import PurchaseModal from '../components/modal/PurchaseModal';

interface SubscriptionPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  bannerComponent?: React.FC;
}

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const currentSubscription = 'User';

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      title: 'User',
      price: 0,
      features: [
        t('Subscriptions.features.creator.feature1'),
        t('Subscriptions.features.creator.feature2'),
        t('Subscriptions.features.creator.feature3'),
        t('Subscriptions.features.creator.feature4'),
      ],
      buttonText: t('Subscriptions.buttonFree'),
      bannerComponent: BannerStandart,
    },
    {
      title: 'Gold',
      price: 10,
      features: [
        t('Subscriptions.features.gold.feature1'),
        t('Subscriptions.features.gold.feature2'),
        t('Subscriptions.features.gold.feature3'),
        t('Subscriptions.features.gold.feature4'),
        t('Subscriptions.features.gold.feature5'),
        t('Subscriptions.features.gold.feature6'),
      ],
      buttonText: t('Subscriptions.buttonBuy'),
      bannerComponent: BannerGold,
    },
    {
      title: 'Premium',
      price: 20,
      features: [
        t('Subscriptions.features.premium.feature1'),
        t('Subscriptions.features.premium.feature2'),
        t('Subscriptions.features.premium.feature3'),
        t('Subscriptions.features.premium.feature4'),
        t('Subscriptions.features.premium.feature5'),
      ],
      buttonText: t('Subscriptions.buttonBuy'),
      bannerComponent: BannerPremium,
    },
  ];

  const handleButtonClick = (price: number) => {
    if (price !== 0) {
      setIsPurchaseModalOpen(true);
    }
  };

  return (
    <div className="text-white min-h-screen px-4">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          {t('Subscriptions.title')}
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          {t('Subscriptions.description')}
        </p>

        {/* Текущая подписка пользователя */}
        <div className="current-subscription-card bg-blue-100 dark:bg-[#1B1C22] p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-700 dark:text-white">Текущая подписка: {currentSubscription}</h3>
          <p className="text-gray-600 dark:text-gray-300">Вы используете {currentSubscription === 'User' ? 'базовую' : 'платную'} подписку.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => {
            const Banner = plan.bannerComponent;
            return (
              <div
                key={plan.title}
                className="relative flex flex-col justify-between dark:bg-[#1B1C22] rounded-lg shadow-md p-6 text-left hover:translate-y-[-7px] transition-transform duration-300"
              >
                {Banner && <Banner />}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">{plan.title}</h2>
                  <p className="text-xl font-semibold text-gray-400 mb-6">
                    {plan.price === 0 ? t('Subscriptions.priceFree') : `$${plan.price}/месяц`}
                  </p>
                  <ul className="list-none pl-6 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="relative mb-4 pl-10 text-gray-300">
                        <FaCheckCircle className="absolute left-0 top-0 mt-1 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {plan.price === 0 ? (
                    <a href="/dashboard/home">
                      <Button
                        title={plan.buttonText}
                        className="w-full bg-blue-500 text-white px-10 py-3 rounded-full transition transform hover:scale-105 duration-300"
                      />
                    </a>
                  ) : (
                    <Button
                      title={plan.buttonText}
                      className="w-full bg-blue-500 text-white px-10 py-3 rounded-full transition transform hover:scale-105 duration-300"
                      onClick={() => handleButtonClick(plan.price)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={() => setIsPurchaseModalOpen(false)} />
    </div>
  );
};

export default SubscriptionPage;
