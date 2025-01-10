import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">{t('PurchaseModal.title')}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('PurchaseModal.cardNumber')}</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={t('PurchaseModal.cardNumberPlaceholder')}
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">{t('PurchaseModal.expirationDate')}</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t('PurchaseModal.expirationDatePlaceholder')}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">{t('PurchaseModal.cvc')}</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t('PurchaseModal.cvcPlaceholder')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t('PurchaseModal.currency')}</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="USDT">USDT</option>
              <option value="TON">TON</option>
              <option value="NOT">NOT</option>
              <option value="RUB">RUB</option>
              <option value="DOGS">DOGS</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <FaCcVisa size={24} className="text-gray-700" />
            <FaCcMastercard size={24} className="text-gray-700" />
            <FaCcAmex size={24} className="text-gray-700" />
            <FaCcDiscover size={24} className="text-gray-700" />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {t('PurchaseModal.pay')}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default PurchaseModal;
