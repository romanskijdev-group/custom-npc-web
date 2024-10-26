import { SideBarButton } from '../../ui/sidebar/SideBarButton';
import { FaHouse } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { SideBar } from '../SideBar';
import { Outlet } from 'react-router';
import { Container } from '../../ui/Container';
import { SiDialogflow } from 'react-icons/si'
import DropdownMenu from '../../ui/sidebar/DropdownMenu'
import { MobileBottom } from '../MobileBottom'
import {BiCube} from 'react-icons/bi'
import IconBackground from "../../ui/background/IconBackground.tsx";
import {BsCompass, BsFillStarFill, BsMap} from "react-icons/bs";
import {TbDiamondFilled} from "react-icons/tb";
import {LuCoffee} from "react-icons/lu";
import {GiBattleAxe, GiSpiderWeb} from "react-icons/gi";
import {FaUser} from "react-icons/fa";

export const DefaultLayout = () => {
  return (
    <div className=''>
        <IconBackground icons={[BsCompass, BsMap, TbDiamondFilled, LuCoffee, GiSpiderWeb, GiBattleAxe, BsFillStarFill, BiCube]} iconSize={24} />
      <SideBar>
        <SideBarButton title='Главная' linkTo='/dashboard/home'><FaHouse /></SideBarButton>
        <SideBarButton title='NPC' linkTo='/dashboard/npc'><FaUser /></SideBarButton>
        <SideBarButton title='Квесты' linkTo='/dashboard/quests'><MdCategory /></SideBarButton>
        <SideBarButton title='Диалоги' linkTo='/dashboard/dialogs'><SiDialogflow /></SideBarButton>
          <DropdownMenu menuItems={["Eldritch Magic"]} title={'Ваши проекты'}/>
      </SideBar>
      <div className='md:ml-64 h-[100vh]'>
        <Container>
          <Outlet/>
        </Container>

          <MobileBottom/>
      </div>
    </div>
  )
}