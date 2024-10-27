import React, { useEffect } from 'react';
import {GoOrganization} from "react-icons/go";
import {MdDriveFileRenameOutline} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {FaGamepad} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {BiOutline} from "react-icons/bi";

interface FormInputs {
    nickname: string;
    gender: string;
    email: string;
    password: string;
    repeat_password: string;
    first_name: string;
    last_name: string;
    company: string;
    bio: string;
}

interface FormProps {
    onDataChange: (data: FormInputs) => void;
    formData: FormInputs;
}

const SettingsForm: React.FC<FormProps> = ({ onDataChange, formData }) => {
    useEffect(() => {
        onDataChange(formData);
    }, [formData, onDataChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onDataChange({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="w-full">
            <InputField type="email" name="email" label="Email адрес" value={formData.email} icon={<IoIosMail />} onChange={handleChange} required />
            <InputField type="text" name="nickname" label="Никнейм" value={formData.nickname} icon={<FaGamepad />} onChange={handleChange} required />
            <InputField type="password" name="password" label="Пароль" value={formData.password} icon={<RiLockPasswordLine />} onChange={handleChange} required />
            <InputField type="password" name="repeat_password" label="Подтвердите пароль" value={formData.repeat_password} icon={<RiLockPasswordLine />} onChange={handleChange} required />
            <div className="grid md:grid-cols-2 md:gap-6">
                <InputField type="text" name="first_name" label="Имя" value={formData.first_name} icon={<MdDriveFileRenameOutline />} onChange={handleChange} required />
                <InputField type="text" name="last_name" label="Фамилия" value={formData.last_name} icon={<MdDriveFileRenameOutline />} onChange={handleChange} required />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <InputField type="text" name="company" label="Организация (Напр. Google)" value={formData.company} icon={<GoOrganization />} onChange={handleChange} required />
            </div>
            <TextAreaField name="bio" label="Bio" value={formData.bio} icon={<BiOutline />} onChange={handleChange}/>
        </form>
    );
};

interface InputFieldProps {
    type: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    required?: boolean;
    icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, label, value, onChange, pattern, required, icon }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                pattern={pattern}
                required={required}
            />
            <label
                htmlFor={name}
                className="flex gap-2 items-center peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-focus:dark:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {icon} {label}
            </label>
        </div>
    );
};

interface TextAreaFieldProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    icon?: React.ReactNode;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ name, label, value, onChange, required, icon }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
      <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={required}
      ></textarea>
            <label
                htmlFor={name}
                className="flex gap-2 items-center peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {icon} {label}
            </label>
        </div>
    )
}

    export default SettingsForm;
