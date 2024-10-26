import {ProfileHeader} from "../ui/profile/ProfileHeader.tsx";

import {FaCog, FaTrashAlt} from 'react-icons/fa';
import {LuUpload} from "react-icons/lu";
import {CgProfile} from "react-icons/cg";
import {useState} from "react";
import UploadModal from "../ui/modal/UploadFile.tsx";
import {ThemeChanger} from "../components/general/navbar/ThemeChanger.tsx";
import {SelectLanguage} from "../components/general/navbar/SelectLanguage.tsx";
import {useTranslation} from "react-i18next";

const profileSettingsHeader = () => {
    const { t } = useTranslation();

    return (
        <ProfileHeader>
            <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
                <FaCog className='absolute inset-0 w-full h-full opacity-10 text-red-500'
                       style={{transform: 'translate(-25%, 25%)'}}/>
                <div className='text-center flex flex-col gap-3'>
                    <p className='text-gray-700 dark:text-[#8D8E91] font-semibold text-2xl z-10'>{t('profile.settings.title')} </p>
                    <p className='text-gray-700 font-light opacity-50 text-sm w-2/3 mx-auto z-10 dark:text-white'>{t('profile.settings.subtitle')}</p>
                </div>
            </div>
        </ProfileHeader>
    )
}

export const ProfileSettings = () => {
    const { t } = useTranslation();

    const [isModalOpen, setModalOpen] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileURL, setFileURL] = useState<string | null>(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const handleFileSelect = (file: File) => {
        setFileName(file.name);
        setFileURL(URL.createObjectURL(file));
        closeModal();
    };
    const clearFile = () => {
        setFileName(null);
        setFileURL(null);
    };

    return (
        <>
            {profileSettingsHeader()}
                <div className='col-start-2 row-start-2 col-span-2 p-2 rounded-lg relative flex gap-8'>
                    <div className='flex flex-col gap-3 w-max'>
                        <p className='text-gray-700 font-light opacity-50 text-sm w-2/3 z-10 dark:text-white'>
                            {t('profile.settings.theme')}:
                        </p>
                        <ThemeChanger style='dark:bg-[#1B1C22] dark:border-[#27282D]'></ThemeChanger>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-700 font-light opacity-50 text-sm w-2/3 z-10 dark:text-white'>
                            {t('profile.settings.language')}:
                        </p>
                        <SelectLanguage style='dark:bg-[#1B1C22] dark:border-[#27282D]'/>
                    </div>
                </div>
                <div className='col-start-2 row-start-3 col-span-2 p-2 rounded-lg relative'>
                    <div className='flex flex-row items-center gap-8'>
                        <div
                            className={`${!fileURL ? 'border-gray-200 border-dashed dark:border-[#27282D] hover:dark:bg-[#1B1C22] hover:dark:bg-opacity-70' : ''} flex items-center dark:border-[#27282D] justify-center min-w-[120px] min-h-[120px] w-max border-[2px] rounded-full cursor-pointer transition duration-300 hover:bg-white`}
                            style={{
                                backgroundImage: fileURL ? `url(${fileURL})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {!fileURL && <CgProfile className='text-3xl dark:text-[#8B8B8E]'/>}
                        </div>
                        <div onClick={openModal}
                             className='bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 hover:dark:bg-yellow-700 transition duration-300 flex gap-4 items-center justify-center'>
                            <LuUpload className='text-xl'/>
                            {t('profile.settings.upload_avatar')}:
                        </div>
                        <UploadModal isOpen={isModalOpen} onClose={closeModal} onFileSelect={handleFileSelect}/>
                    </div>
                    {fileName && (
                        <div className="mt-4 flex items-center gap-4">
                            <p className="text-gray-700 dark:text-white">{t('profile.settings.file')}: {fileName}</p>
                            <button onClick={clearFile}
                                    className="p-2 bg-red-500 text-white dark:bg-red-700 rounded flex gap-3 items-center justify-center">
                                <FaTrashAlt/> Очистить
                            </button>
                        </div>
                    )}
                </div>
        </>
    );
};

export default ProfileSettings;