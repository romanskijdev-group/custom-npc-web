import React, {useRef, useEffect, useState} from 'react';
import {setIsAuthenticated} from "../../features/redux/user/userSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../features/redux/store.ts";
import {useNavigate} from "react-router-dom";

interface CodeInputProps {
    code: string[];
    setCode: React.Dispatch<React.SetStateAction<string[]>>;
}

const CodeInput: React.FC<CodeInputProps>= ({ code, setCode }) => {
    const navigate = useNavigate();
    const codeLength = code.length;
    const [isValidCode, setIsValidCode] = useState(false); // Состояние валидации
    const [buttonClicked, setButtonClicked] = useState(false); // Состояние валидации

    const inputRefs = useRef<HTMLInputElement[]>([]);

    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (index: number, value: string) => {
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
        }

        setButtonClicked(false)

        // Переход к следующему input, только если ввели новый символ
        if (value && index < codeLength - 1) {
            if (inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const validateCode = () => {
        const isValid = code.every((digit) => digit !== '');
        setIsValidCode(isValid); // Обновляем состояние валидации
        return isValid;
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Backspace':
                if (inputRefs.current[index].selectionStart === 0 && index > 0 && inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1].focus();
                    // Устанавливаем курсор в конец предыдущего инпута
                    setTimeout(() => {
                        inputRefs.current[index - 1].setSelectionRange(1, 1);
                    }, 0);
                }
                break;
            case 'ArrowLeft':
                if (index > 0 && inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1].focus();
                    // Устанавливаем курсор в конец предыдущего инпута
                    setTimeout(() => {
                        inputRefs.current[index - 1].setSelectionRange(1, 1);
                    }, 0);
                }
                break;
            case 'ArrowRight':
                if (index < codeLength - 1 && inputRefs.current[index + 1]) {
                    inputRefs.current[index + 1].focus();
                    // Устанавливаем курсор в конец следующего инпута
                    setTimeout(() => {
                        inputRefs.current[index - 1].setSelectionRange(1, 1);
                    }, 0);
                }
                break;
            default:
                break;
        }
    };

    // Выделяем текст при фокусе на инпуте
    useEffect(() => {
        const handleFocus = (index: number) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].setSelectionRange(0, 1);
            }
        };

        inputRefs.current.forEach((input, index) => {
            if (input) {
                input.addEventListener('focus', () => handleFocus(index));
            }
        });

        return () => {
            inputRefs.current.forEach((input, index) => {
                if (input) {
                    input.removeEventListener('focus', () => handleFocus(index));
                }
            });
        };
    }, []);

    return (
        <>
            <div>
                <p className={`text-[12px] text-center mb-2 text-red-700 ${isValidCode || buttonClicked ? '' : 'hidden'}`}>{isValidCode || buttonClicked ? 'Неверный код' : ''}</p>
                <div className="flex space-x-2 w-full justify-center">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-10 h-10 text-center border rounded-lg border-gray-300 focus:outline-none focus:border-yellow-600 dark:bg-[#1B1C22] dark:border-[#27282D]"
                        />
                    ))}
                </div>
                <p className={`text-[12px] text-center mt-2`}>Пожалуйста, введите код, который мы отправили вам на
                    введённый E-Mail.</p>
            </div>
            <button onClick={() => {
                setButtonClicked(true)
                if (validateCode()) {
                    dispatch(setIsAuthenticated(true))
                    // Код валидный, перенаправляем пользователя
                    navigate('/dashboard/home');
                }
            }}
                    className='bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg'>Подтвердить код
            </button>
        </>
    );
};

export default CodeInput;

