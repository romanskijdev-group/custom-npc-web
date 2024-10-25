import React from "react"
import { IoArrowBack } from "react-icons/io5";
import { ProfileButton } from "../ui/buttons/ProfileButton";

const Settings = () => {
    return (
        <div className="">
            <div className="">
                <ProfileButton title={'Вернуться на главную'}><IoArrowBack/></ProfileButton>
            </div>

            <div className="">
                <h1 className="">Настройки</h1>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Settings