import { useEffect, useState } from 'react';

export const UserAvatar = ({ avatar_url, nickname, className }: { avatar_url: string, nickname: string, className?: string }) => {
  const gradients = [
    'bg-gradient-to-r from-green-400 to-blue-500',
    'bg-gradient-to-r from-pink-500 to-yellow-500',
    'bg-gradient-to-r from-purple-400 to-red-500',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-blue-400 to-indigo-500'
  ];

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  };

  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    setGradient(getRandomGradient());
  }, []);

  return (
    <div
      className={`flex items-center justify-center gap-5 border dark:border-[#27282D] rounded-full ${className} ${avatar_url ? '' : gradient}`}> {avatar_url ? (
      <img src={avatar_url} alt="Avatar" className="h-full w-full rounded-full bg-cover" />) : (
      <span className="text-white text-sm">{nickname[0]}</span>)}
    </div>
  );
};