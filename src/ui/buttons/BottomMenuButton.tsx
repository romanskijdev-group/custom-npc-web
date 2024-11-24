import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import React from 'react'

export const BottomMenuButton = ( { link, title, children }: { link: string, title: string, children: React.ReactNode } ) => {
    const path = useLocation()
    return(
        <Link to={link} className={`flex flex-col justify-between items-center text-sm gap-[5px] text-gray-700 dark:text-white ${path.pathname == link ? 'opacity-100' : 'opacity-50'}`}> { children } { title } </Link>
    )
}