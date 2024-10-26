import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import React from 'react'

export const SideBarButton = ({ title, linkTo, children, className }: {title: string, linkTo: string, children: React.ReactNode, className?: string }) => {
  const path = useLocation()
  return(
    <li className="rounded-lg mb-4 list-none">
      <NavLink
        to={linkTo}
        className={`${className} flex items-center gap-4 text-sm text-gray-700 dark:text-[#8D8E91] hover:dark:text-white font-light px-4 py-3 rounded-lg hover:bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 hover:text-white hover:shadow-lg
        ${path.pathname == linkTo ? 'bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md' : ''}`}
      >
        {children}
        {title}
      </NavLink>
    </li>
  )
}