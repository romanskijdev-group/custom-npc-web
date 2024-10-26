import React from 'react';
import { Link } from 'react-router-dom';
import { GiFox } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { RootState } from '../features/redux/store'

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const selected = useSelector((state: RootState) => state.projects.selectedProject);

  return(
    <div className={`sm:block overflow-y-hidden dark:bg-[#1B1C22] dark:border-[#2B2C2F] hidden h-screen fixed rounded-lg border top-[20px] md:left-[20px] flex-row flex-nowrap overflow-hidden shadow-xl bg-white bg-opacity-70 w-64 z-10 py-4 px-6 transition-all duration-300`}>
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <Link
          to="/"
          className="mt-2 text-center w-full flex flex-col gap-[10px]"
        >
          <h6 className="flex items-center gap-[10px] dark:text-gray-200"><GiFox /> Custom NPC | Quests</h6>
          { selected ? <Link to="/quests" className='border-t text-yellow-700 text-sm pt-[10px] hover:text-[#1D1717] transition duration-300'>{selected}</Link> : '' }
        </Link>
        <div className="flex flex-col">
          <hr className="my-[10px] min-w-full" />
          {children}
        </div>
      </div>
    </div>
  )
}