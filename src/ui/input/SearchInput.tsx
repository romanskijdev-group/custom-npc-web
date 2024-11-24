import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SearchUsers } from '../../features/api/profile.ts';
import SearchUserBlock from '../user/SearchUserBlock.tsx';
import CustomLoader from '../loader/loader.tsx';

export const Search: React.FC = () => {
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState<UserProfileResponseData[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [searchValue, setSearchValue] = useState('');

  const mutation = useMutation<ApiResponse<UserProfileResponseData[]>, Error, string>({
    mutationFn: async () => {
      return await SearchUsers(searchValue);
    },
    onSuccess: (data: ApiResponse<UserProfileResponseData[]>) => {
      setUsers(data.data);
      setUsersCount(data.total_count);
    },
    onError: () => {
      console.log('Ошибка поиска');
    }
  });

  useEffect(() => {
    if (searchValue.length > 1) {
      setShow(true);
      mutation.mutate(searchValue);
    } else {
      setShow(false);
    }
  }, [searchValue]);

  return (
    <form className="sm:w-[20%] w-[90%] max-w-[350px] relative">
      <label htmlFor="default-search"
             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Поиск</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search"
               className="block w-full p-2 ps-10 text-sm dark:text-gray-400 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-[#1B1C22] dark:border-[#27282D]"
               placeholder="Искать..."
               value={searchValue}
               onChange={(e) => {
                 setSearchValue(e.target.value);
               }}
               required />
      </div>
      {
        show && <div
          className="absolute z-[1000] max-h-72 overflow-y-auto mt-2 p-2 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-[#1B1C22] dark:border-[#27282D]">
          <div className="text-gray-700 dark:text-[#8D8E91] text-sm text-center">
            {
              mutation.isPending &&
              <div
                className="text-black shadow-md rounded-lg flex items-center justify-center relative">
                <CustomLoader />
              </div>
            }
            {
              mutation.isSuccess &&
              users == undefined || users == null || users.length === 0 ? (
                <p>Результатов не найдено</p>
              ) : (
                <div className="flex flex-col items-start gap-[5px]">
                  <p>Найдено пользователей: {usersCount}</p>
                  {
                    users.map((user) => (
                      <SearchUserBlock key={user.system_id} avatar_url={user.avatar_url}
                                       email={user.email}
                                       nickname={user.nickname}
                                       system_id={user.system_id} />
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      }
    </form>
  );
};