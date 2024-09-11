import { AiFillGithub, AiFillGitlab, AiOutlineQq } from 'react-icons/ai'

export const DevTogether = ({ aos } : { aos?:string }) => {
    return (
        <div data-aos={aos}
            className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-500 dark:bg-gray-700">
            <div className="h-full grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div
                        className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                        <svg className="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                             viewBox="0 0 24 24">
                            <g fill="none">
                                <path stroke="currentColor"
                                      d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"></path>
                                <path fill="currentColor" fillRule="evenodd"
                                      d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                                      clipRule="evenodd"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Разрабатывайте вместе</h2>
                        <p className="dark:text-gray-300 text-gray-700">Приглайшайте друзей и коллег в созданные проекты, чтобы вести разработку плечом к плечу.</p>
                    </div>
                </div>
                <div
                    className="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-500">
                    <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                        <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span
                                className="h-fit text-xs block px-2 py-1 shadow-md border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white ">MrFoxHD</span>
                            <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                <AiFillGitlab className="dark:text-gray-200 rounded-full  border border-gray-950/5 dark:border-white/5 size-full"/>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                            <div className="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                <AiFillGithub className="dark:text-gray-200 rounded-full  border border-gray-950/5 dark:border-white/5 size-full"/>
                            </div>
                            <span
                                className="h-fit text-xs block px-2 py-1 shadow-md border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">Sansara</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                            <span
                                className="h-fit text-xs block px-2 py-1 shadow-md border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">Justie</span>
                            <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                                <AiOutlineQq className="dark:text-gray-200 rounded-full  border border-gray-950/5 dark:border-white/5 size-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}