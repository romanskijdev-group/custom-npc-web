import { Confirm } from '../modal/Confirm'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../features/redux/store'
import { deleteProjectByName, resetProject, selectProject } from '../../features/redux/projects/projectSlice'
import { FaCheck } from 'react-icons/fa'
import { GoDot } from 'react-icons/go'
import { ImCross } from 'react-icons/im'

export const ProjectBlock = ( { title }: { title: string } ) => {
    const projects = useSelector((state: RootState) => state.projects);
    const [confirm, setConfirm] = useState(false)
    const dispatch = useDispatch<AppDispatch>();

    return(
        <div className={`py-[10px] mb-[5px] border w-full text-center rounded-lg hover:bg-[#F7F7F7] ${ title == projects.selectedProject ? 'bg-[#F7F7F7]' : '' } transition duration-400 cursor-pointer grid grid-cols-2 px-[10px] sm:grid-cols-3 items-center`}
             onClick={() => {
                 projects.selectedProject == title ? dispatch(resetProject()) : dispatch(selectProject(title))
             }}>
            <div className='flex gap-[10px] items-center mx-[auto]'>
                { title == projects.selectedProject ? <FaCheck className='text-yellow-700 min-w-[20px]' /> : <GoDot className='text-gray-400 min-w-[20px]' /> }
                <p className='overflow-hidden line-clamp-1 text-sm break-all'>{title}</p>
            </div>
            <p className='text-sm w-max mx-auto opacity-50 hover:opacity-100 transition duration-300' onClick={()=> {
                setConfirm(true)
            }}><span className='sm:block hidden'>Удалить</span> <ImCross className='text-yellow-800 text-xl sm:hidden'/></p>
            <Confirm open={confirm} setOpen={setConfirm} title={title} onClick={() => {
                dispatch(deleteProjectByName(title))
                title == projects.selectedProject && dispatch(resetProject())
            }}/>
        </div>
    )
}