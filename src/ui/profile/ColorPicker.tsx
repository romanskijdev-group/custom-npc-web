import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ColorPickerProps {
  colorKey: string; // Уникальный идентификатор для элемента
  title: string; // Название
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ colorKey, title }) => {
  const [customColor, setCustomColor] = useState(Cookies.get(colorKey) || '');

  useEffect(() => {
    if (customColor) {
      Cookies.set(colorKey, customColor);
    }
  }, [customColor]);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
  };

  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
      <p className='text-gray-700 font-light opacity-50 text-sm dark:text-white'>{title}</p>
      <input
        type="color"
        className="w-12 h-12 rounded-full outline-none bg-transparent focus:outline-none dark:border-[#27282D]"
        value={customColor || '#fff'}
        onChange={handleCustomColorChange}
      />
    </div>
  );
};
