import { FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import Cookies from 'js-cookie';
import { ColorPicker } from '../../../ui/profile/ColorPicker';


export const ThemeChanger = ({ style }: { style?: string }) => {
  const [isDark, setIsDark] = useState(Cookies.get('darkTheme') === 'true');
  const [customColor, setCustomColor] = useState('#007bff');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    Cookies.set('darkTheme', String(isDark));
  }, [isDark]);

  const handleColorChange = (color: string) => {
    document.documentElement.style.setProperty('--primary-color', color);
    setCustomColor(color);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`z-50 bg-gray-100 border border-transparent dark:text-white dark:border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg p-3 hover:opacity-60 duration-300 cursor-pointer ${style}`}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <FaMoon /> : <LuSunMoon />}
      </div>
      <ColorPicker onColorChange={handleColorChange} /> {/* Добавляем компонент ColorPicker */}
    </div>
  );
};
export default ThemeChanger