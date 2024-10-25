import React from "react";

export const ProfileHeader = ({children} : {children: React.ReactNode}) => {
    return (
        <div className='col-start-2 col-span-2 border shadow-md rounded-lg relative bg-white bg-opacity-70'>
            {children}
        </div>
    )
}