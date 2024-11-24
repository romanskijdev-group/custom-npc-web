import { Search } from '../ui/input/SearchInput'
import { UserBlock } from '../components/UserBlock'
import { ProjectsList } from '../components/projects/ProjectsList'
import { RecentProjects } from '../components/projects/RecentProjects'
import { MobileNavigation } from '../components/MobileNavigation'

export default function Dashboard() {
    return(
        <div className='flex flex-col gap-[20px]'>
            <div className='flex w-full justify-between items-center'>
                <Search></Search>
                <UserBlock className='sm:flex hidden gap-[20px]'/>
                <MobileNavigation/>
            </div>
            <ProjectsList includeValue={'searchValue'}/>
            <RecentProjects/>
        </div>
    )
}