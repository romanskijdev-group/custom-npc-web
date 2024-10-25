import {ProfileButton} from "../buttons/ProfileButton.tsx";
import {FaRegSmile} from "react-icons/fa";
import {BsCashCoin} from "react-icons/bs";
import {CiShoppingBasket} from "react-icons/ci";
import { GoGear } from "react-icons/go";

export const ProfileMenu = () => {
    return (
        <div className="flex flex-col gap-0.5">
            <ProfileButton title={'Мой профиль'} active={true}> <FaRegSmile /> </ProfileButton>
            <ProfileButton title={'Кошелёк'}> <BsCashCoin /> </ProfileButton>
            <ProfileButton title={'Покупки'}> <CiShoppingBasket /> </ProfileButton>
            <ProfileButton title={'Настройки'}> <GoGear/> </ProfileButton>
        </div>
    )
}