import {CiImageOff} from "react-icons/ci";
import {ProfileHeader} from "./ProfileHeader.tsx";
import {FiCopy} from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';
import { GetUserProfile } from '../../features/api/profile.ts';

export const ProfileUser = () => {
    const queryClient = useQueryClient();
    const userProfile = queryClient.getQueryData<UserProfileResponseData>(['user_profile']);

    let userId = "100000";
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState<string>("Скопировать ID");

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${userId}`).then(() => {
            setTooltip('ID скопирован');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        }).catch(() => {
            setTooltip('Ошибка копирования ID');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        });
    };

    const mutation = useMutation<ApiResponse<UserProfileResponseData>, Error>({
        mutationFn: async () => {
            return await GetUserProfile();
        },
        onSuccess: (data: ApiResponse<UserProfileResponseData>) => {
            queryClient.setQueryData(['user_profile'], data.data);
            console.log('Пароль успешно отправлен:', data.data);
        },
        onError: (error: Error) => {
            console.error('Ошибка отправки пароля:', error);
        }
    });

    useEffect(() => {
        // Запускаем мутацию при монтировании компонента только в том случае, если профиль запрашивается впервые
        if(userProfile == undefined) {
            mutation.mutate();
        }
    }, [mutation.mutate]);

    return (
        <ProfileHeader>
            <div className='flex flex-col gap-[10px] items-center p-6'>
                <div
                    className='rounded-full border dark:border-[#27282D] w-[120px] flex items-center justify-center h-[120px] '>
                    <p className='text-black text-5xl'><CiImageOff className='dark:text-white'/></p>
                </div>
                <p className='text-gray-700 font-semibold text-2xl dark:text-[#8D8E91] z-10'>
                    {
                      userProfile && userProfile.nickname || <Skeleton animation="wave" variant="text" width={120} height={30} />
                    }
                </p>
                <p className='text-gray-700 font-light opacity-50 text-sm z-10 dark:text-white text-center'>
                    {
                        userProfile != undefined ?
                          userProfile.first_name && userProfile.first_name || 'Имя не задано' : (
                          <Skeleton animation="wave" variant="text" width={120} height={30} />
                        )
                    }
                </p>

                <div className='relative flex justify-center items-center'>
                    <p className='text-gray-700 font-light text-sm z-10 dark:text-white flex justify-center items-center gap-2'>
                        User #{userProfile && userProfile.serial_id || <Skeleton animation="wave" variant="text" width={120} height={30} />}
                        <FiCopy
                            className='cursor-pointer'
                            onClick={handleCopy}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        />
                    </p>
                    {tooltipVisible && (
                        <div
                            className="absolute bottom-0 right-0 transform translate-x-[120%] p-1 bg-gray-700 text-white text-xs rounded transition-opacity duration-300">
                            {tooltip}
                        </div>
                    )}
                </div>

                <div className='border dark:border-[#27282D] dark:text-[#8B8B8E] w-4/5 p-2 rounded-lg text-center'>
                    <p>
                        {
                            userProfile != undefined ?
                              userProfile.bio && userProfile.bio || 'Люблю вечеринки 🎉' : (
                              <div>
                                  <Skeleton className='bg-red-700' animation="wave" variant="text" height={30}/>
                                  <Skeleton animation="wave" variant="text" height={30}/>
                              </div>
                            )
                        }
                    </p>
                </div>
                <div className='absolute right-10 border rounded-lg px-4 py-1 bg-gray-700 text-white dark:text-opacity-50 dark:bg-[#202126] dark:border-[#414246]'>Creator</div>
            </div>
        </ProfileHeader>
    )
}
