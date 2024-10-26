import React from "react";

export const ProfileHeader = ({children} : {children: React.ReactNode}) => {
    return (
        <div className='col-start-2 col-span-2 border dark:border-[#27282D] shadow-md rounded-lg relative bg-white dark:bg-[#1B1C22] bg-opacity-70'>
            {children}
        </div>
    )
}