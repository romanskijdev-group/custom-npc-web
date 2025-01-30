import React from 'react';

interface ModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, setOpen, title, children }) => {
    return (
        <div
            className={`z-[1000] absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] transition ${open ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="bg-[#F7F7F7] dark:bg-[#1B1C22] w-[70%] max-w-[500px] py-[10px] px-[20px] rounded-lg absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-md transition-all duration-500 ease-in-out">
                <svg
                    className='z-[1000] hover:rotate-180 absolute right-[10px] top-[10px] w-[24px] h-[24px] cursor-pointer opacity-30 hover:opacity-100 transition duration-500'
                    onClick={() => setOpen(false)}
                    height="200"
                    viewBox="0 0 200 200"
                    width="200">
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <div className='mx-[-15px] my-[-10px] w-full px-[15px] py-[10px]'>
                    <p className='font-[500] text-base dark:text-white'>{title}</p>
                </div>
                <div className='h-[1px] border-t w-full mt-[10px]' />
                <div className='py-[10px]'>
                    {children}
                </div>
            </div>
        </div>
    );
};
