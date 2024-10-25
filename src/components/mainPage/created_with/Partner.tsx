import {useTranslation} from "react-i18next";

export const PartnerItem = ({image, title, description, link}: {image: string, title: string, description: string, link?:string}) => {
    const { t } = useTranslation();

    return(
        <div className='flex gap-[10px] bg-white dark:bg-gray-600 flex-col items-center justify-center border dark:border-gray-500 rounded-lg'>
            <img src={image} alt='partner logo' className='w-[150px] p-4'/>
            <div className='hover:bg-gray-100 dark:hover:bg-gray-700 w-full border-t dark:border-gray-500 text-center duration-300 cursor-pointer p-2'>
                <div className='w-full text-xl font-semibold dark:text-white'>
                    {
                        link ? (<a target="_blank" href={link}>{t(title)}</a>) : (<p>{t(title)}</p>)
                    }
                </div>
                <p className='opacity-60 text-sm dark:text-white'>{t(description)}</p>
            </div>
        </div>
    )
}