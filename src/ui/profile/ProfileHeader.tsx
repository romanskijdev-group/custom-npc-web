import React from "react";
import { CustomThemeSettings } from "../background/CustomThemeSettings";

export const ProfileHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { divStyle } = CustomThemeSettings();

    return (
        <div style={divStyle} className='col-start-1 col-span-4 md:col-start-2 md:col-span-2 border dark:border-[#27282D] shadow-md rounded-lg relative bg-white dark:bg-[#1B1C22]'>
            {children}
        </div>
    )
}