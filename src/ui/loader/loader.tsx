import React from 'react';

interface CustomLoaderProps {
  style?: string;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ style }: { style?: string }) => {
  return (
    <div className={`scale-50 absolute right-5 ${style}`}>
      <div className={`loader relative`}>
      </div>
    </div>
  );
};

export default CustomLoader;
