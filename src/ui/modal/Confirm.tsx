import React, { MouseEventHandler } from 'react';
import { Button } from '../buttons/Button';

interface ConfirmProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
}

export const Confirm: React.FC<ConfirmProps> = ({ open, setOpen, onClick, title }) => {
  return (
    <div
      className={`z-[1000] absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] transition ${open ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="bg-[#F7F7F7] dark:bg-[#1B1C22] sm:w-[70%] w-[90%] max-w-[500px] py-[40px] sm:px-[30px] px-[10px] rounded-lg absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-md transition-all duration-500 ease-in-out">
        <svg
          className='z-[1000] hover:rotate-180 absolute right-[10px] top-[10px] w-[24px] h-[24px] cursor-pointer opacity-30 hover:opacity-100 transition duration-500'
          onClick={() => setOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <div className="p-4 md:p-5 text-center">
          <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Вы уверены что хотите удалить запись {title}?</h3>
          <div className='flex sm:flex-row w-max mx-[auto] flex-col justify-around items-center gap-[10px]'>
            <Button title='Да, я уверен' onClick={onClick}/>
            <button
                onClick={() => {setOpen(false)}}
                data-modal-hide="popup-modal" type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 dark:text-white focus:outline-none bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 hover:dark:bg-gray-600 hover:text-blue-700 focus:z-10">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
