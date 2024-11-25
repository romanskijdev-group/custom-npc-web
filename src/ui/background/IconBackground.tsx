import React, { useState } from 'react';
import { IconType } from 'react-icons';
import Cookies from 'js-cookie';

interface IconBackgroundProps {
  icons: IconType[];
  iconSize?: number;
  iconOpacity?: number;
}

const IconBackground: React.FC<IconBackgroundProps> = ({
  icons,
  iconSize = 24,
  iconOpacity = 0.1,
}) => {
  const storedBGColor = Cookies.get('bgColor');
  const [customBGColor] = useState<string | null>(storedBGColor || null); 
  
  const storedAccentColor = Cookies.get('accentColor');
  const [customAccentColor] = useState<string>(storedAccentColor || '#14151B');
  
  const divStyle = {
      backgroundColor: customBGColor && customBGColor !== '' ? customBGColor : undefined,
      AccentColor: customAccentColor && customAccentColor !== '' ? customAccentColor : undefined,
  };

  function getRandomPosition(minOffset = 0, maxOffset = 100): number {
    return Math.floor(Math.random() * (maxOffset - minOffset + 1)) + minOffset;
  }


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={divStyle}>
      <div className="grid grid-cols-12 grid-rows-12 gap-0 h-full w-full">
        {Array.from({ length: 12 * 12 }).map((_, index) => (
          <div
            key={index}
            className="relative"
            style={{
              gridColumn: `${(index % 12) + 1}`,
              gridRow: `${Math.floor(index / 12) + 1}`,
            }}
          >
            {icons[Math.floor(Math.random() * icons.length)] && (
              <div
                className="absolute fade-in-enter dark:text-white"
                style={{
                  top: `${getRandomPosition(10, 90)}%`,
                  left: `${getRandomPosition(10, 90)}%`,
                  opacity: iconOpacity,
                  transform: `translate(-50%, -50%) rotate(${getRandomPosition() * 3.6}deg)`,
                  animationDelay: `${index * 0.005}s`,
                }}
              >
                {React.createElement(
                  icons[Math.floor(Math.random() * icons.length)],
                  {
                    size: iconSize,
                  }
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBackground;
