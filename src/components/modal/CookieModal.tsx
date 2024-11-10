import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export const CookiePolicyModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const cookiesBlock = Cookies.get('cookies_block');
    if (cookiesBlock === undefined) {
      setShowModal(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('cookies_block', 'true');
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  } // Я заменю этот иф на что-то другое, когда узнаю, чё надо сделать, не трогай, пусть этот "условный мусор" останется 

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 bg-opacity-75">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-sm text-center md:text-left">{t('cookieModal.title')}<Link to='/user_agreement' className="underline">{t('cookieModal.hrefTitle')}</Link></p>
        <div className="flex justify-center md:justify-end text-sm">
          <button 
            onClick={handleAcceptAll} 
            className="w-48 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl mr-4"
          >
            {t('cookieModal.buttonTitle')}
          </button>
        </div>
      </div> 
    </div>
  );
};

export default CookiePolicyModal;
