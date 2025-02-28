import React from 'react'

interface SearchProps {
    searchValue: string;
    setValue: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({searchValue, setValue}) => {
    return(
        <form className="sm:w-[20%] w-[90%] max-w-[350px]">
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Поиск</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search"
                       className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-[#1B1C22] dark:border-[#27282D]"
                       placeholder="Искать..."
                       value={searchValue}
                       onChange={(e) => {
                           setValue(e.target.value)
                       }}
                       required />
            </div>
        </form>
    )
}