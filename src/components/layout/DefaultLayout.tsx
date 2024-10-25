import { SideBarButton } from '../../ui/sidebar/SideBarButton';
import { FaHouse } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { FaHeart, FaUser } from 'react-icons/fa'
import { SideBar } from '../SideBar';
import { Outlet } from 'react-router';
import { Container } from '../../ui/Container';
import { SiDialogflow } from 'react-icons/si'
import DropdownMenu from '../../ui/sidebar/DropdownMenu'
import { MobileBottom } from '../MobileBottom'
import {BiCube, BiLogoTypescript} from 'react-icons/bi'
import IconBackground from "../../ui/background/IconBackground.tsx";
import {BsCompass, BsFillStarFill, BsMap} from "react-icons/bs";
import {TbDiamondFilled} from "react-icons/tb";
import {LuCoffee} from "react-icons/lu";
import {GiBattleAxe, GiSpiderWeb} from "react-icons/gi";

export const DefaultLayout = () => {
  return (
    <div className='dark:bg-gray-800'>
        <IconBackground icons={[BsCompass, BsMap, TbDiamondFilled, LuCoffee, GiSpiderWeb, GiBattleAxe, BsFillStarFill, BiCube]} iconSize={24} />
      <SideBar>
        <SideBarButton title='Главная' linkTo='/dashboard/home'><FaHouse /></SideBarButton>
        <SideBarButton title='NPC' linkTo='/dashboard/npc'><FaUser /></SideBarButton>
        <SideBarButton title='Квесты' linkTo='/dashboard/quests'><MdCategory /></SideBarButton>
        <SideBarButton title='Диалоги' linkTo='/dashboard/dialogs'><SiDialogflow /></SideBarButton>
          <DropdownMenu menuItems={["Eldritch Magic"]} title={'Ваши проекты'}/>
      </SideBar>
      <div className='md:ml-64 h-[100vh] dark:bg-gray-800'>
        <Container>
          <Outlet/>
            <div className='fixed bottom-0 left-0 bg-[#F7F7F7] dark:bg-gray-900 w-full flex justify-center items-center py-[3px] border-t dark:border-gray-500 text-sm'>
                <a href='https://github.com/roman0rama' target='_blank' className='flex items-center dark:text-gray-200 justify-center gap-[3px] opacity-30 hover:opacity-100 transition duration-300'>Developed by Roman with <FaHeart className='text-red-700'/> and <BiLogoTypescript className='text-blue-700'/></a>
            </div>
        </Container>

          <MobileBottom/>
      </div>
    </div>
  )
}