import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const CustomThemeSettings = () => {
    const storedBGColor = Cookies.get('bgColor'); 
    const [customBGColor] = useState<string | null>(storedBGColor || null); 
     
    const storedTextColor = Cookies.get('textColor'); 
    const [customTextColor] = useState<string | null>(storedTextColor || null); 
     
    const pStyle: React.CSSProperties = { color: customTextColor && customTextColor !== '' ? customTextColor : undefined, }; 
     
    const storedAccentColor = Cookies.get('accentColor'); 
    const [customAccentColor] = useState<string>(storedAccentColor || '#14151B'); 
     
    const divStyle = { 
        backgroundColor: customBGColor && customBGColor !== '' ? customBGColor : undefined, 
        AccentColor: customAccentColor && customAccentColor !== '' ? customAccentColor : undefined,
    }
  return {divStyle, pStyle};
}
  