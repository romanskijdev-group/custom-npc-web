import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const CustomThemeSettings = () => {
    const storedBGColor = Cookies.get('bgColor'); 
    const [customBGColor] = useState<string | null>(storedBGColor || null); 
     
    const storedTextColor = Cookies.get('textColor'); 
    const [customTextColor] = useState<string | null>(storedTextColor || null); 
     
    const storedAccentColor = Cookies.get('accentColor'); 
    const [customAccentColor] = useState<string | null>(storedAccentColor || null); 
     
    const BGStyle = { 
        backgroundColor: customBGColor && customBGColor !== '' ? customBGColor : undefined, 
    }
    const pStyle: React.CSSProperties = { 
      color: customTextColor && customTextColor !== '' ? customTextColor : undefined, 
    }; 
    const divStyle = {
      backgroundColor: customAccentColor && customAccentColor !== '' ? customAccentColor : undefined,
    }
  return {BGStyle, divStyle, pStyle};
}
  