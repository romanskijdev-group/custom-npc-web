import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../features/redux/store'
import { FaArrowLeft } from 'react-icons/fa'
import { resetProject } from '../../features/redux/projects/projectSlice'

export const SelectedProjectDialogs = () => {
    const projects = useSelector((state: RootState) => state.projects);
    const dispatch = useDispatch<AppDispatch>();

    return(
        <div className='flex flex-col gap-[20px] border rounded-lg px-2 py-4 dark:bg-[#1B1C22]'>
            <div className='flex sm:flex-row flex-col gap-[20px]'>
                <p className='flex flex-row items-center gap-[10px] opacity-50 hover:opacity-100 transition duration-300 cursor-pointer'
                   onClick={() => { dispatch(resetProject()) }}><FaArrowLeft className='text-yellow-700'/> К проектам</p>
                <p>Проект: {projects.selectedProject}</p>
            </div>
            <p>Список диалогов</p>
        </div>
    )
}