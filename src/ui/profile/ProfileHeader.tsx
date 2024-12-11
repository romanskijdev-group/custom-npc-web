import React from "react";

export const ProfileHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className='col-start-2 col-span-2 shadow-md rounded-lg relative bg-white dark:bg-[#1B1C22] bg-opacity-70'>
            {children}
        </div>
    )
}