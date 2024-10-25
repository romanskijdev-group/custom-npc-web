import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next';

export const NavItem = ({link, title, className}: {link: string, title: string, className?: string}) => {
    // const path = useLocation()
    const { t } = useTranslation();

    return (
        <li>
            <NavLink to={link}
               className={`text-lg block py-2 px-3 rounded hover:text-yellow-700 dark:text-gray-300 dark:hover:text-yellow-400 duration-300 ${className}`}
               aria-current="page">{t(title)}</NavLink>
        </li>
    )
}