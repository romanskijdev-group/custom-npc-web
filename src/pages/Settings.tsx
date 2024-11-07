import {ProfileHeader} from "../ui/profile/ProfileHeader.tsx";

import {FaCog, FaTrashAlt} from 'react-icons/fa';
import {LuUpload} from "react-icons/lu";
import {CgProfile} from "react-icons/cg";
import React, {useState} from "react";
import UploadModal from "../ui/modal/UploadFile.tsx";
import {ThemeChanger} from "../components/general/navbar/ThemeChanger.tsx";
import {SelectLanguage} from "../components/general/navbar/SelectLanguage.tsx";
import {useTranslation} from "react-i18next";
import Stepper from "../ui/profile/Stepper.tsx";
import SettingsForm from "../ui/profile/SettingsForm.tsx";
import Toggle from "../ui/input/Toggle.tsx";
import {IoSaveOutline} from "react-icons/io5";
import {ColorPicker} from "../ui/profile/ColorPicker.tsx";
import Cookies from 'js-cookie';
import { CustomThemeSettings } from "../ui/background/CustomThemeSettings.tsx";

interface SettingsFormData {
    nickname: string;
    gender: string;
    email: string;
    password: string;
    repeat_password: string;
    first_name: string;
    last_name: string;
    company: string;
    bio: string;
}

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

export const ProfileSettings: React.FC = () => {// Коммент чтобы ошибку не било, на всякий | const { pStyle, BGStyle, divStyle } = CustomThemeSettings();
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

    const [formData, setFormData] = useState<SettingsFormData>({
        bio: "",
        gender: "", nickname: "",
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        company: ''
    });

    const handleFormSubmit = (data: SettingsFormData) => {
        setFormData(data);
        console.log('Полученные данные:', data);
    };

    const [toggleChecked, setToggleChecked] = useState(true);

    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToggleChecked(e.target.checked);
    };

    return (
      <>
          {profileSettingsHeader()}
          <div
            className='col-start-2 row-start-2 col-span-2 p-2 w-128 rounded-lg relative flex place-content-between gap-8'>
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
                  <SelectLanguage />
              </div>
          </div>
          
          <div
            className="col-start-2 row-start-3 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full items-start">
              <p className="text-gray-700 font-bold opacity-50 text-lg w-2/3 z-10 dark:text-yellow-300">
                 Создание собственной цветовой схемы
              </p>
              <div className='flex gap-5'>
                  <ColorPicker title={'Цвет текста'} colorKey="textColor"></ColorPicker>
                  <ColorPicker title={'Цвет фона'} colorKey="bgColor"></ColorPicker>
                  <ColorPicker title={'Цвет акцентов'} colorKey="accentColor"></ColorPicker>
              </div>
            <button className='bg-green-700 text-white p-2 rounded-lg' onClick={() => {
              Cookies.set('textColor', '')
              Cookies.set('bgColor', '')
              Cookies.set('accentColor', '')
            }}>
              Сбросить
            </button>
          </div>

          <div className="col-start-2 row-start-4 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full">
              <Stepper></Stepper>
          </div>
          <div className='col-start-2 row-start-5 col-span-2 p-2 rounded-lg relative'>
              <div className='flex flex-row items-center gap-8'>
                  <div
                    className={`${!fileURL ? 'border-gray-200 border-dashed dark:border-[#27282D] hover:dark:bg-[#1B1C22] hover:dark:bg-opacity-70' : ''} flex items-center dark:border-[#27282D] justify-center min-w-[120px] min-h-[120px] w-max border-[2px] rounded-full cursor-pointer transition duration-300 hover:bg-white`}
                    style={{
                        backgroundImage: fileURL ? `url(${fileURL})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                  >
                      {!fileURL && <CgProfile className='text-3xl dark:text-[#8B8B8E]' />}
                  </div>
                  <div onClick={openModal}
                       className='bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 hover:dark:bg-yellow-700 transition duration-300 flex gap-4 items-center justify-center'>
                      <LuUpload className='text-xl' />
                      {t('profile.settings.upload_avatar')}:
                  </div>
                  <UploadModal isOpen={isModalOpen} onClose={closeModal} onFileSelect={handleFileSelect} />
              </div>
              {fileName && (
                <div className="mt-4 flex items-center gap-4">
                    <p className="text-gray-700 dark:text-white">{t('profile.settings.file')}: {fileName}</p>
                    <button onClick={clearFile}
                            className="p-2 bg-red-500 text-white dark:bg-red-700 rounded flex gap-3 items-center justify-center">
                        <FaTrashAlt /> Очистить
                    </button>
                </div>
              )}
          </div>
          <div className='col-start-2 row-start-6 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full'>
              <SettingsForm onDataChange={handleFormSubmit} formData={formData}></SettingsForm>
          </div>
          <div className='col-start-2 row-start-7 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full'>
              <Toggle
                checked={toggleChecked}
                onChange={handleToggleChange}
                label="Получать уведомления"
              />
          </div>
          <div
            className='col-start-2 row-start-8 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full items-end'>
              <button onClick={clearFile}
                      className="p-2 bg-green-500 w-max text-white dark:bg-green-700 rounded flex gap-3 items-center justify-center">
                  <IoSaveOutline /> Сохранить
              </button>
          </div>
      </>

    );
};

export default ProfileSettings;