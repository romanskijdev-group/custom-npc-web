import { IoMdLogIn } from 'react-icons/io'
import { useState } from 'react'
import { validateLoginData } from '../features/validation/UserDataValidation'
import CodeInput from "../ui/input/CodeInput.tsx";
import { CheckButton } from "../ui/input/CheckButton.tsx";
import { FaTelegramPlane } from 'react-icons/fa';
import VKLogin from '../components/general/auth/VkLoginButton.tsx';

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
            <div className='bg-[#F7F7F7] py-12 px-8 w-[400px] rounded-lg border dark:bg-[#1B1C22] dark:border-[#27282D] dark:text-white flex flex-col gap-[30px]'>
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
                                     placeholder='Email' />
                              <p
                                className={`text-[12px] text-red-700 mt-2 ${validationData.isValid ? 'hidden' : ''}`}>{validationData.isValid ? '' : validationData.message}</p>
                          </div>
                          <div className="flex flex-col gap-[10px]">
                              <button onClick={() => {
                                  setValidationData(validateLoginData(formData));
                              }}
                                      className="bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg">Войти
                              </button>
                              <p className='text-center text-sm py-2 opacity-60'>или войти через сторонний сервис с использованием данных</p>
                              <div className="grid grid-cols-1 gap-[10px]">
                                  <VKLogin></VKLogin>
                                  <button
                                    className="bg-[#198DC8] text-white w-full shadow-md flex items-center justify-center relative text-sm px-4 py-2 rounded-lg gap-[10px]">
                                      <FaTelegramPlane className="text-xl" /> Telegram
                                  </button>
                              </div>
                          </div>
                          <CheckButton checkValue={rememberMe} setValue={setRememberMe}></CheckButton>
                      </>
                    )
                }
                <p className="text-sm opacity-50 flex gap-[5px] mx-[auto] text-center">Новый пользователь?
                    Введите Email и автоматически будете зарегистрированы</p>
            </div>
        </div>
    )
}

export default Auth