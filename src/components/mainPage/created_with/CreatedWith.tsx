import { PartnerItem } from './Partner.tsx'
import pelicanLogo from '../../../assets/elician.svg'
import {useTranslation} from "react-i18next";

export const CreatedWith = () => {
    const { t } = useTranslation();

    return(
        <div data-aos='fade-up' id='created-with' className="z-50">
            <div
                className="w-full bg-[#fff] bg-opacity-25 dark:bg-opacity-5 border dark:border-gray-500 flex flex-col flex-wrap items-center justify-between mx-auto sm:px-5 py-5 mt-10">
                <p className='text-2xl sm:text-3xl font-bold mb-[30px] text-center dark:text-gray-200'>{t('create_with.supported')}</p>

                <div className='flex flex-row flex-wrap items-center justify-between gap-[30px]'>
                    <PartnerItem title='Elician.ru' link='https://elician.ru/' image={pelicanLogo} description='create_with.minecraft'/>
                </div>
            </div>
        </div>
    )
}