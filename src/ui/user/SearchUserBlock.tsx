import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAvatar } from './UserAvatar.tsx';

interface SearchUserBlockProps {
  system_id: string;
  email: string;
  nickname: string;
  avatar_url: string;
}

const SearchUserBlock: React.FC<SearchUserBlockProps> = ({ system_id, nickname, avatar_url }) => {
  const navigate = useNavigate();

  const handleSelectUser = () => {
    navigate('/dashboard/users/' + system_id);
  };

  return (
    <div
      onClick={handleSelectUser}
      className="flex cursor-pointer items-center hover:bg-gray-200 hover:border-gray-200 hover:dark:bg-[#202126] hover:dark:border-[#414246] text-gray-700 dark:text-[#8D8E91] border dark:border-[#27282D] bg-white dark:bg-[#1B1C22] p-2 w-full gap-4 rounded-lg transition duration-300">
      <div>
        <UserAvatar className='h-[30px] w-[30px]' avatar_url={avatar_url} nickname={nickname}></UserAvatar>
      </div>
      <div className="w-full text-left">
        <p>{nickname}</p>
      </div>
    </div>
  );
};

export default SearchUserBlock;