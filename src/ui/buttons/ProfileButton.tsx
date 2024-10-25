import React, {MouseEventHandler} from "react";
import {Link} from "react-router-dom";

export const ProfileButton = ({ title, onClick, link, children, active } :
                                  { title: string, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, link?: string, children: React.ReactNode, active?: boolean }) => {
    return (
        <>
            {link ? (
                <Link to={link} className='border text-center border-yellow-700 text-[#1D1717] shadow-md px-8 py-2 rounded-lg'>{children} {title}</Link>
            ) : (
                <button onClick={onClick} className={`${active ? 'bg-gray-200 bg-opacity-25 border-gray-200' : 'border-transparent'} w-2/3 flex justify-start items-center border gap-2 hover:border-gray-200 hover:bg-gray-200 hover:bg-opacity-25 py-2 pl-8 transition duration-100 rounded-lg`}>{children} {title}</button>
            )}
        </>
    )
}