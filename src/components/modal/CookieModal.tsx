import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export const CookiePolicyModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const cookiesAllowed = Cookies.get('cookies_allowed');
    if (cookiesAllowed === undefined) {
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
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 overflow-hidden">
        <p className="mb-4 md:mb-0 text-sm text-center md:text-left w-full md:w-auto">
          {t('cookieModal.title')}
          <Link to='/user_agreement' className="underline ml-1">
            {t('cookieModal.hrefTitle')}
          </Link>
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-end text-sm mt-4 md:mt-0 w-full md:w-auto">
          <button 
            onClick={handleAcceptAll} 
            className="w-full md:w-48 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl"
          >
            {t('cookieModal.buttonTitle')}
          </button>
        </div>
      </div> 
    </div>
  );
};

export default CookiePolicyModal;
