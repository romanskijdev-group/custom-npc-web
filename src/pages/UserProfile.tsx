import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetUserProfileByID } from '../features/api/profile.ts';
import { useEffect, useState } from 'react';
import { CiImageOff } from 'react-icons/ci';
import { Skeleton } from '@mui/material';
import { FiCopy } from 'react-icons/fi';
import { ProfileHeader } from '../ui/profile/ProfileHeader.tsx';
import { Search } from '../ui/input/SearchInput.tsx';
import { UserBlock } from '../components/UserBlock.tsx';
import { MobileNavigation } from '../components/MobileNavigation.tsx';

const UserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<UserProfileResponseData>();
  const queryClient = useQueryClient();

  let userId = '100000';
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<string>('Скопировать ID');

  const handleCopy = () => {
    navigator.clipboard.writeText(`#${userId}`).then(() => {
      setTooltip('ID скопирован');
      setTimeout(() => setTooltip('Скопировать ID'), 2000);
    }).catch(() => {
      setTooltip('Ошибка копирования ID');
      setTimeout(() => setTooltip('Скопировать ID'), 2000);
    });
  };

  const mutation = useMutation<ApiResponse<UserProfileResponseData>, Error, string | undefined>({
    mutationFn: async () => {
      return await GetUserProfileByID(id);
    },
    onSuccess: (data: ApiResponse<UserProfileResponseData>) => {
      setUser(data.data);
    },
    onError: () => {
      console.log('Ошибка поиска');
    }
  });

  useEffect(() => {
    mutation.mutate(id);
  }, [id]);

  useEffect(() => {
    const userProfile = queryClient.getQueryData<UserProfileResponseData>(['user_profile']);

    if (userProfile && userProfile.system_id == user?.system_id) {
      navigate('/dashboard/profile');
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex w-full justify-between items-center">
        <Search></Search>
        <UserBlock className="sm:flex hidden gap-[20px]" />
        <MobileNavigation />
      </div>
      <div className=''>
        <ProfileHeader>
          <div className="flex flex-col gap-[10px] items-center p-6">
            <div
              className="rounded-full border dark:border-[#27282D] w-[120px] flex items-center justify-center h-[120px] ">
              <p className="text-black text-5xl"><CiImageOff className="dark:text-white" /></p>
            </div>
            <p className="text-gray-700 font-semibold text-2xl dark:text-[#8D8E91] z-10">
              {
                user && user.nickname || <Skeleton animation="wave" variant="text" width={120} height={30} />
              }
            </p>
            <p className="text-gray-700 font-light opacity-50 text-sm z-10 dark:text-white text-center">
              {
                user != undefined ?
                  user.first_name && user.first_name || 'Имя не задано' : (
                  <Skeleton animation="wave" variant="text" width={120} height={30} />
                )
              }
            </p>

            <div className="relative flex justify-center items-center">
              <p className="text-gray-700 font-light text-sm z-10 dark:text-white flex justify-center items-center gap-2">
                User #{user && user.serial_id || <Skeleton animation="wave" variant="text" width={120} height={30} />}
                <FiCopy
                  className="cursor-pointer"
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

            <div className="border dark:border-[#27282D] dark:text-[#8B8B8E] w-4/5 p-2 rounded-lg text-center">
              <p>
                {
                  user != undefined ?
                    user.bio && user.bio || 'Люблю вечеринки 🎉' : (
                    <div>
                      <Skeleton className="bg-red-700" animation="wave" variant="text" height={30} />
                      <Skeleton animation="wave" variant="text" height={30} />
                    </div>
                  )
                }
              </p>
            </div>
            <div
              className="absolute right-10 border rounded-lg px-4 py-1 bg-gray-700 text-white dark:text-opacity-50 dark:bg-[#202126] dark:border-[#414246]">Creator
            </div>
          </div>
        </ProfileHeader>
      </div>
    </div>
  );
};

export default UserProfile;