import React, { useEffect, useState } from 'react';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [selectedPreset, setSelectedPreset] = useState<'black' | 'white' | 'custom'>('custom');
  const [customColor, setCustomColor] = useState('#007bff');

  const presets = {
    black: '#000000',
    white: '#FFFFFF',
    custom: customColor, // Здесь используем значение переменной customColor
  };

  useEffect(() => {
    onColorChange(presets[selectedPreset]);
  }, [selectedPreset, customColor]);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    setSelectedPreset('custom');
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex mb-4">
        <button
          className={`w-8 h-8 rounded-full ${selectedPreset === 'black' ? 'border-2 border-black' : ''}`}
          style={{ backgroundColor: '#000000' }}
          onClick={() => setSelectedPreset('black')}
        />
        <button
          className={`w-8 h-8 rounded-full ml-2 ${selectedPreset === 'white' ? 'border-2 border-black' : ''}`}
          style={{ backgroundColor: '#FFFFFF' }}
          onClick={() => setSelectedPreset('white')}
        />
        <button
          className={`w-8 h-8 rounded-full ml-2 ${selectedPreset === 'custom' ? 'border-2 border-black' : ''}`}
          style={{ backgroundColor: customColor }}
          onClick={() => setSelectedPreset('custom')}
        />
      </div>
      <input
        type="color"
        value={customColor}
        onChange={handleCustomColorChange}
        className="w-24 h-24 p-0 border-0 rounded-full"
        style={{ backgroundColor: customColor }}
      />
    </div>
  );
};
export default ColorPicker;