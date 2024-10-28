import { SideBar } from '../SideBar';
import { Outlet } from 'react-router';
import { Container } from '../../ui/Container';
import { MobileBottom } from '../MobileBottom'
import {BiCube} from 'react-icons/bi'
import IconBackground from "../../ui/background/IconBackground.tsx";
import {BsCompass, BsFillStarFill, BsMap} from "react-icons/bs";
import {TbDiamondFilled} from "react-icons/tb";
import {LuCoffee} from "react-icons/lu";
import {GiBattleAxe, GiSpiderWeb} from "react-icons/gi";

export const DefaultLayout = () => {
  return (
    <div className=''>
        <IconBackground icons={[BsCompass, BsMap, TbDiamondFilled, LuCoffee, GiSpiderWeb, GiBattleAxe, BsFillStarFill, BiCube]} iconSize={24} iconOpacity={0.05} />
      <SideBar>
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