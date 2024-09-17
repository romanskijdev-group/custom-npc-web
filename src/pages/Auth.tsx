import { IoMdLogIn } from 'react-icons/io'
import { useState } from 'react'
import { validateLoginData } from '../features/validation/UserDataValidation'
import CodeInput from "../ui/input/CodeInput.tsx";
import { CheckButton } from "../ui/input/CheckButton.tsx";

const Auth = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [rememberMe, setRememberMe] = useState(true);

    const [formData, setFormData] = useState({
        username: ''
    })

    const [validationData, setValidationData] = useState({
        isValid: false,
        message: ''
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return(
        <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
            <div className='bg-[#F7F7F7] py-12 px-8 w-[400px] rounded-lg border flex flex-col gap-[30px]'>
                <p className='font-semibold text-2xl flex items-center gap-[10px] justify-center'>Вход в аккаунт <IoMdLogIn
                    className='text-yellow-700'/></p>
                {
                    validationData.isValid ? (<> <CodeInput code={code} setCode={setCode}></CodeInput> </>) : (
                        <>
                            <div>
                                <input name='username' onChange={(e) => {
                                    handleChange(e)
                                }} value={formData.username} type='text'
                                       className='bg-transparent focus:outline-none border-b w-full focus:border-yellow-700 py-2'
                                       placeholder='Email'/>
                                <p className={`text-[12px] text-red-700 mt-2 ${validationData.isValid ? 'hidden' : ''}`}>{validationData.isValid ? '' : validationData.message}</p>
                            </div>
                            <button onClick={() => {
                                setValidationData(validateLoginData(formData))
                            }}
                                    className='bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg'>Войти
                            </button>
                            <CheckButton checkValue={rememberMe} setValue={setRememberMe}></CheckButton>
                        </>
                    )
                }
                <p className='text-sm opacity-50 flex gap-[5px] mx-[auto] text-center'>Новый пользователь?
                    Введите Email и автоматически будете зарегистрированы</p>
            </div>
        </div>
    )
}

export default Auth