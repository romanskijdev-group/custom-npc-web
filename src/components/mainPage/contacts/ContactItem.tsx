import React, { useState } from 'react'
import { EmailCopy } from '../../EmailCopy.tsx'



export const ContactItem = ({icon, title, body, mail}: {icon: React.ReactNode, title: string, body?: React.ReactNode, mail?:boolean}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="z-51 relative overflow-hidden dark:text-gray-200 w-full sm:w-3/4 mx-auto mt-0 p-4"
             data-aos="fade-left">
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-[10px] cursor-pointer border duration-300 dark:hover:bg-gray-700/10 bg-white/10 hover:bg-gray-400/10 rounded-lg p-4 dark:bg-[#1B1C22] dark:border-[#27282D]"
            >
                { icon }
                <div className="w-[1px] h-[35px] border-r dark:border-gray-500" />
                <p>{title}</p>
            </div>
            <div
                className={`z-10 overflow-hidden border-b border-r border-l bg-white/10 duration-300 dark:bg-[#202126] dark:border-[#27282D] rounded-b-lg p-4 -mt-1 ${
                    open ? 'opacity-100 max-h-full static' : 'opacity-0 max-h-0 hidden'
                }`}
            >
                {body}

                {
                    mail ? (
                        <div>
                            <p>Наш E-Mail:</p>
                            <EmailCopy/>
                        </div>
                    ) : (<></>)
                }
            </div>

        </div>
    );
};
