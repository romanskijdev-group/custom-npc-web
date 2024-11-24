import { RiMenuFoldFill } from 'react-icons/ri';
import { useState } from 'react';
import { RxCross2, RxExit } from 'react-icons/rx';
import { Button } from '../ui/buttons/Button';
import { setIsAuthenticated } from '../features/redux/user/userSlice';
import { HoverButton } from '../ui/buttons/HoverButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../features/redux/store';
import { UserAvatar } from '../ui/user/UserAvatar';
import { UserName } from '../ui/user/UserName';
import { ProfileOptionsButton } from '../ui/user/ProfileOptionsButton';
import { CgProfile } from 'react-icons/cg';
import { IoMdOptions } from 'react-icons/io';
import { useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';

export const MobileNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();

  const userProfile = queryClient.getQueryData<UserProfileResponseData>(['user_profile']);

  return (
    <>
      <RiMenuFoldFill onClick={() => {
        setOpen(!open);
      }} className="text-yellow-700 sm:hidden block text-2xl" />

      {open && (
        <div
          className="fixed z-[1000] top-[10px] right-[10px] shadow-md w-45 bg-white border-gray-200 opacity-0 animate-fadeIn rounded-lg">
          <div
            className="bg-[#F7F7F7] border rounded-t-lg items-center px-5 py-5 rounded-lg relative flex flex-col gap-[10px]">
            <RxCross2 onClick={() => {
              setOpen(!open);
            }}
                      className="text-yellow-700 block h-[25px] border rounded-lg w-max text-2xl absolute left-[10px] top-[10px]" />
            <div className="flex flex-col gap-[10px] mt-[20px] w-full">
              {
                user.isLoggedIn ? (
                  <>
                    <div className="flex justify-start items-center gap-[10px] mx-[auto]">
                      {
                        userProfile &&
                        <UserAvatar className='h-[40px] w-[40px]' avatar_url={userProfile.avatar_url} nickname={userProfile.nickname}></UserAvatar> ||
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                      }
                      <UserName name="Sansara" />
                    </div>
                    <div className="h-[1px] border-b w-full mx-[auto]"></div>
                    <ProfileOptionsButton link="/dashboard/profile"> <CgProfile /> Профиль </ProfileOptionsButton>
                    <ProfileOptionsButton link="/dashboard/profile"> <IoMdOptions /> Настройки </ProfileOptionsButton>
                    <div className="h-[1px] border-b w-full mx-[auto]"></div>
                    <div onClick={() => {
                      dispatch(setIsAuthenticated(false));
                      setOpen(!open);
                    }}>
                      <ProfileOptionsButton link="/"> <RxExit /> Выйти </ProfileOptionsButton>
                    </div>
                  </>
                ) : (
                  <>
                    <Button title="Войти" onClick={() => {
                      dispatch(setIsAuthenticated(true));
                    }}></Button>
                    <HoverButton link="/signing" title="Регистрация"></HoverButton>
                  </>
                )
              }
            </div>
          </div>

          <style>
            {`
                          @keyframes fadeIn {
                            from {
                              opacity: 0;
                            }
                            to {
                              opacity: 1;
                            }
                          }
            
                          .animate-fadeIn {
                            animation: fadeIn 0.5s forwards;
                          }
                        `}
          </style>
        </div>
      )}
    </>
  );
};