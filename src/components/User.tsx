import { UserAvatar } from '../ui/user/UserAvatar';
import { UserName } from '../ui/user/UserName';
import { CgProfile } from 'react-icons/cg';
import { ProfileOptionsButton } from '../ui/user/ProfileOptionsButton';
import { RxExit } from 'react-icons/rx';
import { IoMdOptions } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../features/redux/store';
import { setIsAuthenticated } from '../features/redux/user/userSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetUserProfile } from '../features/api/profile.ts';
import { Skeleton } from '@mui/material';

export const User = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();

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
    // Запускаем мутацию при монтировании компонента
    mutation.mutate();
  }, [mutation.mutate]);

  const userProfile = queryClient.getQueryData<UserProfileResponseData>(['user_profile']);

  return (
    <div className="relative">
      <div onClick={() => {
        setOpen(!open);
      }}
           className="flex items-center gap-[10px] px-4 py-2 border rounded-lg w-max bg-white dark:bg-[#1B1C22] dark:text-white dark:text-opacity-70 hover:dark:bg-[#2C2D31] transition duration-300 dark:border-[#27282D] bg-opacity-70 cursor-pointer relative">
        {
          userProfile && <UserAvatar name={userProfile.nickname}></UserAvatar> || <Skeleton animation="wave" variant="circular" width={40} height={40} />
        }
        {
          userProfile && <UserName name={userProfile.nickname}></UserName> || <Skeleton animation="wave" variant="text" width={120} height={30} />
        }
        <SlOptionsVertical />
      </div>
      <div
        className={`bg-white dark:bg-[#1B1C22] dark:border-[#27282D] dark:text-white dark:text-opacity-70 absolute -bottom-[140px] left-0 px-4 py-2 rounded-lg flex flex-col gap-[10px] ${open ? 'block' : 'hidden'}`}>
        <ProfileOptionsButton link="/dashboard/profile"> <CgProfile /> Профиль </ProfileOptionsButton>
        <ProfileOptionsButton link="/dashboard/npc"> <IoMdOptions /> Настройки </ProfileOptionsButton>
        <div className="h-[1px] border-b dark:border-[#27282D]"></div>
        <div className="w-max h-max" onClick={() => {
          dispatch(setIsAuthenticated(false));
        }}>
          <ProfileOptionsButton link="/"> <RxExit /> Выйти </ProfileOptionsButton>
        </div>
      </div>
    </div>
  );
};