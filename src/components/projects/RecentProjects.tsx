import { GrHistory } from 'react-icons/gr'
import { TableContainer } from '../../ui/table/TableContainer'
import { TableRow } from '../../ui/table/TableRow'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/redux/store'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { ProjectBlock } from '../../ui/createProject/ProjectBlock'

export const RecentProjects = () => {
    const user = useSelector((state: RootState) => state.user);
    const projects = useSelector((state: RootState) => state.projects);

    const recentProject = () => {
        if(projects.selectedProject) {
            return `Коллекция проекта ${projects.selectedProject}`
        }
        return `Коллекция последнего проекта ${projects.projects[projects.projects.length-1] || ''}`
    }

    return(
        <div className='flex sm:flex-row flex-col gap-[20px] dark:text-gray-200'>
            <div className='border py-4 px-2 w-full rounded-lg dark:bg-[#1B1C22] dark:border-[#27282D] bg-opacity-70 dark:bg-opacity-70'>
                <p className='flex items-center gap-[10px] mb-[20px]'> <GrHistory className='text-yellow-800'/> Недавние проекты:</p>
                <div className='mx-[auto] sm:mt-0 mt-[20px] h-full flex-col w-full'>{ user.isLoggedIn ? (
                    projects.projects.length < 1 ? <p className='text-center'>Не найдено</p> :
                        ( projects.projects.slice(projects.projects.length > 3 ? projects.projects.length - 3 : 0, projects.projects.length).map((item) => (
                            <ProjectBlock key={item} title={item}/>
                        )))
                ) : <p className='text-center opacity-50'>Войдите в аккаунт</p>}</div>
            </div>
            {
                user.isLoggedIn ? (
                    <TableContainer title={recentProject()}>
                        <TableRow rowAmount={0} rowTitle='Диалогов'></TableRow>
                        <TableRow rowAmount={0} rowTitle='Квестов'></TableRow>
                        <TableRow rowAmount={0} rowTitle='NPC'></TableRow>
                        <TableRow rowAmount={0} rowTitle='Локаций'></TableRow>
                    </TableContainer>
                ) : (
                    <div className='border py-4 w-full rounded-lg px-2 flex flex-col gap-[20px] dark:bg-[#1B1C22] dark:border-[#27282D] bg-opacity-70 dark:bg-opacity-70'>
                        <p className='flex items-center gap-[10px]'> <FaSortAmountDownAlt className='text-yellow-800'/> Недавние проекты:</p>
                        <p className='mx-[auto] h-full flex justify-center items-center w-max opacity-50'>Войдите в аккаунт</p>
                    </div>
                )
            }
        </div>
    )
}