import { FC } from 'react'
import { Custom } from './capability_cards/Custom.tsx'
import { Secure } from './capability_cards/Secure.tsx'
import { Faster } from './capability_cards/Faster.tsx'
import { DevTogether } from './capability_cards/DevTogether.tsx'

export const Capability: FC = () => {
    return(
        <div id='capabilities' className='sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] rounded-lg p-4' data-aos='fade-up'>
            <h1 className='dark:text-gray-200 text-center py-5 text-xl sm:text-3xl'>Возможности</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center flex-wrap flex-row gap-[30px]'>
                <Custom aos='fade-right'></Custom>
                <Secure aos='fade-left'></Secure>
                <Faster aos='fade-right'></Faster>
                <DevTogether aos="fade-in"></DevTogether>
            </div>
        </div>
    )
}