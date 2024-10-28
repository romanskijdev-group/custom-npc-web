import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ColorPickerProps {
  colorType: string; // Уникальный идентификатор для элемента
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ colorType }) => {
  const initialColor = Cookies.get(colorType) || '#ffffff';
  const [customBGColor, setCustomBGColor] = useState(initialColor);
  const customTextColor = Cookies.get('textColor') || '#000000';

  useEffect(() => {
    if (customBGColor) {
      Cookies.set(colorType, customBGColor);
    }
  }, [customBGColor, colorType]);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomBGColor(e.target.value);
  };

  return (
    <div>
      {[
        { label: 'Выбор цвета фона', color: customBGColor, key: customBGColor },
        { label: 'Выбор цвета текста', color: customTextColor, key: customTextColor },
      ].map(({ label, color, key }) => (
        <div key={key} className="flex flex-col items-center mt-4">
          <label className="mb-2 text-center">{label}</label>
          <input
            type="color"
            value={color}
            onChange={handleCustomColorChange}
            className="w-12 h-12 p-0 border-0 rounded-full"
            style={{ backgroundColor: color, color: color }}
            title={label}
          />
        </div>
      ))}
      <div className="mt-8 p-4 rounded-lg shadow-md" style={{ backgroundColor: customBGColor, color: customTextColor }}>
        <p className="font-semibold text-2xl z-10">
          ПАПАП
        </p>
      </div>
    </div>
  );
};
