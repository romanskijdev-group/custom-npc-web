import React, { useEffect } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';

interface AlertProps {
  alertType: string;
  alertTitle: string;
  alertText: string;
  lifeTime?: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomTypedAlert: React.FC<AlertProps> = (
  {
    alertType = 'info',
    alertTitle = 'Title',
    alertText = 'Text',
    lifeTime = 5,
    isVisible,
    setIsVisible
  }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, lifeTime * 1000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className="fixed inset-0 flex items-start justify-center z-[2001] pointer-events-none">
      <div
        className={`pointer-events-auto border dark:border-[#27282D] z-[2001] min-w-[10%] md:max-w-[30%] max-w-[90%] mt-8 bg-white dark:bg-[#1B1C22] shadow-md rounded-lg transition duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className={`w-full h-[4px] rounded-t-lg ${alertType == 'info' ? 'bg-[#EBF5FF] dark:bg-[#202937]' : 'bg-[#F8B4B4] dark:bg-[#9B1C1C]'}`}></div>
        <div className="p-4 flex items-center justify-around gap-5">
          {
            alertType == 'info' ? (
              <FaCircleInfo className="text-3xl text-[#76A9FA]" />
            ) : (
              <MdOutlineReportGmailerrorred className="text-3xl text-[#9B1C1C]" />
            )
          }
          <div>
            <h1 className="text-xl text-gray-700 dark:text-[#8D8E91]">{alertTitle}</h1>
            <p className="text-sm text-gray-700 dark:text-[#8D8E91]">{alertText}</p>
          </div>
          <IoCloseSharp
            onClick={() => {
              setIsVisible(false);
            }}
            className="text-xl hover:rotate-180 cursor-pointer duration-300 transition text-gray-700 dark:text-[#8D8E91]" />
        </div>
      </div>
    </div>
  );
};

export default CustomTypedAlert;