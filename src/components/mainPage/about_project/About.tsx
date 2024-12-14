import React from 'react';
import { FaCrown, FaRocket, FaHandsHelping, FaKeyboard, FaExchangeAlt, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about' className='relative -top-[15px] flex flex-col gap-6 sm:max-w-screen-lg w-[90%] mx-auto mt-[120px] rounded-xl bg-white bg-opacity-5 border border-gray-200 dark:border-[#27282D] p-8' data-aos='fade-up'>
      <h1 className='text-2xl font-bold text-gray-800 transition dark:text-white text-center mb-6'>
        {t('about.title')}
      </h1>
      <div className='flex flex-col gap-6 dark:text-gray-300 text-gray-700 text-base'>
        <p>{t('about.description')}</p>

        <div className='flex items-start gap-4'>
          <FaCrown className='text-yellow-400' size={20} />
          <p>{t('about.feature1')}</p>
        </div>

        <div className='flex items-start gap-4'>
          <FaRocket className='text-red-400' size={20} />
          <p>{t('about.feature2')}</p>
        </div>
        
        <div className='flex items-start gap-4'>
          <FaHandsHelping className='text-green-400' size={20} />
          <p>{t('about.feature3')}</p>
        </div>

        <h2 className='text-lg font-semibold'>{t('about.offer_title')}</h2>
        
        <div className='flex items-start gap-4'>
          <FaKeyboard className='text-blue-400' size={20} />
          <p>{t('about.offer1')}</p>
        </div>

        <div className='flex items-start gap-4'>
          <FaExchangeAlt className='text-purple-400' size={20} />
          <p>{t('about.offer2')}</p>
        </div>
        
        <div className='flex items-start gap-4'>
          <FaUsers className='text-pink-400' size={20} />
          <p>{t('about.offer3')}</p>
        </div>
        
        <p>{t('about.call_to_action')}</p>
      </div>
    </div>
  );
}

export default About;
