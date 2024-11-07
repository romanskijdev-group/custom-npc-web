import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CookiePolicyModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handleAcceptAll = () => {
    // Логика принятия всех cookies
    setShowModal(false);
  };

  const handleManageSettings = () => {
  };

  if (!showModal) {
    return null;
  } // Я заменю этот иф на что-то другое, когда узнаю, чё надо сделать, не трогай, пусть этот "условный мусор" останется

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-sm text-center md:text-left">
          Мы используем собственные файлы cookie, а также файлы cookie третьих лиц на наших веб-сайтах для улучшения вашего опыта, анализа нашего трафика, а также для обеспечения безопасности и маркетинга. Выберите «Принять все», чтобы разрешить их использование. Прочитайте нашу <Link to = '/user_agreement' className="underline">Политику использования файлов cookie</Link>.
        </p>
        <div className="flex justify-center md:justify-end text-sm">
            <button 
                onClick={handleManageSettings} 
                className="text-white font-bold py-2 px-4"
            >
                Управление настройками
            </button>
            <button 
                onClick={handleAcceptAll} 
                className="w-48 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl"
             >
                Принять все
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
