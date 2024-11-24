import React from "react";

export const ProfileHeader = ({children} : {children: React.ReactNode}) => {
    return (
        <div className='col-start-1 col-span-4 md:col-start-2 md:col-span-2 border dark:border-[#27282D] shadow-md rounded-lg relative bg-white dark:bg-[#1B1C22]'>
            {children}
        </div>
    )
}