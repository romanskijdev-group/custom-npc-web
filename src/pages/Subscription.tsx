import React from 'react';
import { Button } from '../ui/buttons/Button';
import { FaCheckCircle } from 'react-icons/fa';
import { BannerStandart } from '../ui/banner/bannerStandart';
import { BannerGold } from '../ui/banner/bannerGold';
import { BannerPremium } from '../ui/banner/bannerPrem';
import { useTranslation } from 'react-i18next';


interface SubscriptionPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  bannerComponent?: React.FC;
}
const SubscriptionPage: React.FC = () => { 
  const { t } = useTranslation();

const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: 'Standart',
    price: 0,
    features: [
      'Создание простых квестов с ограниченным количеством шагов.',
      'Создание ограниченного количества квестов и персонажей.',
      'Возможность добавить до 2 участников в команду',
      'Базовая техническая поддержка',
    ],
    buttonText: t('Subscriptions.buttonFree'),
    bannerComponent: BannerStandart,
  },
  {
    title: 'Gold',
    price: 10,
    features: [
      'Создание более сложных квестов с большим количеством шагов и условий.',
      'Возможность создавать квесты с более сложными диалогами, включая ветвление.',
      'Создание 10 персонажей',
      'Приоритетная поддержка',
      'Возможность экспорта квестов с большей скоростью',
      'Возможность добавить до 5 участников в свою команду.',
    ],
    buttonText: t('Subscriptions.buttonBuy'),
    bannerComponent: BannerGold,
  },
  {
    title: 'Premium',
    price: 20,
    features: [
      'Создание квестов без ограничений по сложности, количеству шагов и условий.',
      'Доступ к эксклюзивному контенту платформы',
      'Возможность экспорта квестов в разные форматы без ограничений.',
      'Персональные консультации и поддержка от разработчиков с максимально быстрым временем ответа.',
      'Неограниченное количество участников в команде.',
    ],
    buttonText: t('Subscriptions.buttonBuy'),
    bannerComponent: BannerPremium,
  },
];

  return (
    <div className="bg-transparent min-h-screen px-4">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          {t('Subscriptions.title')}
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          {t('Subscriptions.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => {
            const Banner = plan.bannerComponent;
            return (
              <div
                key={plan.title}
                className="relative flex flex-col justify-between bg-white rounded-lg shadow-md p-6 text-left hover:translate-y-[-7px] transition-transform duration-300"
              >
                {Banner && <Banner />}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h2>
                  <p className="text-xl font-semibold text-gray-700 mb-6">
                    {plan.price === 0 ? 'Базовая подписка' : `$${plan.price}/месяц`}
                  </p>
                  <ul className="list-none opacity-75 pl-6 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative mb-4 pl-10"
                      >
                        <FaCheckCircle className="absolute left-0 top-0 mt-1 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button title={plan.buttonText} className="w-full px-10 py-3 transition transform hover:scale-105 duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
