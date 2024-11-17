import React from 'react';

interface NotificationProps {
  title: string;
  body: React.ReactNode; 
  isRead: boolean;
  onClick: () => void;
}

// Компонент Notification
export const Notification: React.FC<NotificationProps> = ({ title, body, isRead, onClick }) => {
  return (
    <div 
      className={`border-b border-gray-300 py-4 px-6 hover:bg-gray-100 transition duration-200 rounded-xl ${isRead ? 'bg-white' : 'bg-gray-200'} mb-4`} // border-b - нижняя рамка, border-gray-300 - цвет рамки, py-4 px-6 - внутренние отступы, hover:bg-gray-100 - фон при наведении, transition - плавные переходы, duration-200 - продолжительность 200 мс, rounded-xl - скругленные углы, mb-4 - нижний отступ
      onClick={onClick}
    >
      <div className="flex justify-between items-center"> {/* flex - flex-контейнер, justify-between - выравнивание по ширине, items-center - выравнивание по высоте */}
        <h3 className="text-lg font-bold">{title}</h3> {/* text-lg - размер текста, font-bold - жирный шрифт */}
        {!isRead && <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />} {/* w-2.5 h-2.5 - ширина и высота, bg-blue-500 - синий фон, rounded-full - круглая форма */}
      </div>
      <div className="text-gray-700 mt-2">{body}</div> {/* text-gray-700 - серый цвет текста, mt-2 - верхний отступ */}
    </div>
  );
};
