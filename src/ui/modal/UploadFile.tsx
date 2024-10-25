import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileSelect: (file: File) => void;
}

const UploadModal: React.FC<ModalProps> = ({ isOpen, onClose, onFileSelect }) => {
    if (!isOpen) return null;

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
            <div className="bg-white dark:bg-gray-800 rounded-lg p-2 pt-8 w-3/12 z-60 relative">
                <button onClick={onClose} className="absolute top-1 right-1 text-black dark:text-white hover:rotate-180 transition duration-500">
                    <IoClose className='text-2xl' />
                </button>
                <div
                    onClick={handleClick}
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaCloudUploadAlt className='text-3xl' />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Нажмите для загрузки</span> или перетащите и отпустите
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, WEBM, (MAX.</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </div>
            </div>
        </div>
    );
};

export default UploadModal;
