import {ProfileMenu} from "../ui/profile/ProfileMenu.tsx";
import {FaRegSmile} from "react-icons/fa";
import {BsCashCoin} from "react-icons/bs";
import {CiShoppingBasket} from "react-icons/ci";
import {GoGear} from "react-icons/go";
import {useState} from "react";
import {ProfileUser} from "../ui/profile/ProfileAvatar.tsx";
import {ProfileSettings} from "./Settings.tsx";
import {ProfileTransactions} from "./ProfileTransactions.tsx";
import {ProfileWallet} from "./ProfileWallet.tsx";

const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const buttons = [
        {title: 'Мой профиль', icon: <FaRegSmile/>},
        {title: 'Кошелёк', icon: <BsCashCoin/>},
        {title: 'Покупки', icon: <CiShoppingBasket/>},
        {title: 'Настройки', icon: <GoGear/>},
    ];

    const renderActiveComponent = () => {
        switch (activeIndex) {
            case 0:
                return <ProfileUser name={'Sansara'}/>;
            case 1:
                return <ProfileWallet />;
            case 2:
                return <ProfileTransactions></ProfileTransactions>
            case 3:
                return <ProfileSettings/>;
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-4 gap-y-4">
            {renderActiveComponent()}
            <ProfileMenu buttons={buttons} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></ProfileMenu>
        </div>
    )
}

export default Profile