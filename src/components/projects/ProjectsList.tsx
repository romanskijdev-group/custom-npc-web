import { SiNounproject } from 'react-icons/si'
import { ProjectEmpty } from '../../ui/createProject/ProjectEmpty'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/redux/store'
import { ProjectFilled } from '../../ui/createProject/ProjectFilled'

export const ProjectsList = ( { includeValue }: { includeValue: string } ) => {
    const projects = useSelector((state: RootState) => state.projects);
    const user = useSelector((state: RootState) => state.user);

    return(
        <div className='border dark:bg-[#1B1C22] dark:border-[#27282D] py-4 px-2 rounded-lg bg-white bg-opacity-70 dark:bg-opacity-70'>
            <p className='flex items-center gap-[10px] dark:text-gray-200'> <SiNounproject className='text-yellow-800'/> Ваши проекты:</p>
            {
                projects.projects.length > 0 && user.isLoggedIn ? ( <ProjectFilled includeValue={includeValue}/> ) : ( <ProjectEmpty/> )
            }
        </div>
    )
}