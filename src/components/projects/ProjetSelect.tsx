import { useSelector } from 'react-redux'
import { RootState } from '../../features/redux/store'
import { LiaGetPocket } from 'react-icons/lia'
import { ProjectBlock } from '../../ui/createProject/ProjectBlock'

export const ProjectSelect = ( { includeValue } : { includeValue: string } ) => {
    const projects = useSelector((state: RootState) => state.projects.projects);
    const user = useSelector((state: RootState) => state.user);

    return(
        <div className='flex flex-col gap-[20px] dark:text-gray-200 dark:bg-[#1B1C22] dark:border-[#27282D]'>
            <div className='w-full py-4 px-2 border rounded-lg'>
                <p className='flex items-center mx-[auto] w-max gap-[10px] mb-[20px] '> <LiaGetPocket className='text-yellow-800'/> Выбор проекта:</p>
                <div className='mx-[auto] sm:mt-0 mt-[20px] h-full flex-col w-full'>{ user.isLoggedIn ? (
                    projects.length < 1 ? <p className='text-center'>Не найдено</p> :
                        ( projects.filter((item) => {
                            return item.toLowerCase().includes(includeValue.toLowerCase())
                        }).map((item) => (
                            <ProjectBlock key={item} title={item}/>
                        )))
                ) : <p className='text-center dark:text-gray-200'>Войдите в аккаунт</p>}</div>
            </div>
        </div>
    )
}