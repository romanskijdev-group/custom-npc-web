import React from 'react';
import { useTranslation } from 'react-i18next';

interface DeleteProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteProfileModal: React.FC<DeleteProfileModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-[#1B1C22] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">{t('profile.settings.delete.modalTitle')}</h2>
        <p className="mb-4 dark:text-gray-400">{t('profile.settings.delete.modalDesc')}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-[#27282D] rounded-lg"
          >
            {t('profile.settings.delete.accept')}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            {t('profile.settings.delete.refuse')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfileModal;
