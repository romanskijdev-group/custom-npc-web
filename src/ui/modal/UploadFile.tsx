import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCloudUploadAlt } from 'react-icons/fa';
import {useTranslation} from "react-i18next";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileSelect: (file: File) => void;
}

const UploadModal: React.FC<ModalProps> = ({ isOpen, onClose, onFileSelect }) => {
    if (!isOpen) return null;

    const { t } = useTranslation();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        const input = document.getElementById('dropzone-file') as HTMLInputElement;
        if (input) {
            input.click();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="bg-white dark:bg-[#1B1C22] rounded-lg p-2 pt-8 w-3/12 z-60 relative">
                <button onClick={onClose} className="absolute top-1 right-1 text-black dark:text-white hover:rotate-180 transition duration-500">
                    <IoClose className='text-2xl' />
                </button>
                <div
                    onClick={handleClick}
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-90 dark:bg-opacity-20 dark:bg-gray-800 hover:bg-gray-100 dark:border-[#27282D] dark:hover:border-gray-700 transition duration-300">
                    <div className="flex flex-col items-center justify-center gap-3 pt-5 pb-6 dark:text-white">
                        <FaCloudUploadAlt className='text-3xl' />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">{t('upload_file.bold_title')}</span> {t('upload_file.light_title')}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, WEBM (MAX 5 Mb.)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </div>
            </div>
        </div>
    );
};

export default UploadModal;
