import { Data, ValidationResult } from './interface'

export const validateLoginData = (data: Data): ValidationResult => {
    const { email } = data;
    const regex = /[!#$%^&*()_+\-=[\]{};':"\\|<>/?]/; //наличие спецсимволов
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        return { isValid: false, message: "Email обязателен для заполнения." };
    }

    if (!isNaN(parseInt(email[0]))) {
        return { isValid: false, message: "Email не может начинаться с цифры." };
    }

    if (email.includes(' ')) {
        return { isValid: false, message: "Email не может иметь пробелы." };
    }

    if (regex.test(email)) {
        return { isValid: false, message: "Email содержит некорректные символы." };
    }

    if (!emailRegex.test(email)) {
        return { isValid: false, message: "Некорректный Email." };
    }

    return { isValid: true, message: "Валидация прошла успешно." };
}