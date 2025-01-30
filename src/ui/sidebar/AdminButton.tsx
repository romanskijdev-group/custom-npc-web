import React from 'react'

import { useLocation, NavLink } from 'react-router-dom';

export const AdminButton = ({ title, linkTo, children, className, isOpen }: {title: string, linkTo: string, children: React.ReactNode, className?: string, isOpen: boolean }) => {
    const path = useLocation();

    return (
        <li className="rounded-lg list-none">
            <NavLink
                to={linkTo}
                className={`${className} flex ${isOpen ? 'justify-start' : 'justify-center'} items-center gap-4 text-sm text-gray-700 hover:dark:text-white font-light px-2 py-3 rounded-lg hover:bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 hover:text-white hover:shadow-lg 
        ${path.pathname == linkTo ? 'bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md' : 'dark:text-[#8D8E91]'}`}
            >
                {children}
                {isOpen && title}
            </NavLink>
        </li>
    );
};