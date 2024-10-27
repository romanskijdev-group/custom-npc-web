import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Stepper: React.FC = () => (
    <ol className="flex items-center w-full text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base justify-between">
        <StepItem stepNumber={1} isActive={true} label="Аватар" />
        <StepItem stepNumber={2} isActive={false} label="Заполнение профиля" />
        <StepItem stepNumber={3} isActive={false} label="Получение уведомлений" showDivider={false} />
    </ol>
);

const StepItem: React.FC<{ stepNumber: number; isActive: boolean; label: string; showDivider?: boolean }> = ({ stepNumber, isActive, label, showDivider = true }) => (
    <>
        <li className={`flex items-center ${isActive ? 'text-blue-600 dark:text-yellow-500' : 'text-gray-500 dark:text-gray-400'}`}>
      <span className="flex items-center gap-3">
        {isActive && stepNumber === 1 ? (
            <FaCheck className="text-lg" />
        ) : (
            <span className="me-2">{stepNumber}</span>
        )}
          {label}
      </span>
        </li>
        {showDivider && <li className="flex-grow border-b border-gray-200 dark:border-gray-700 mx-6 xl:mx-10"></li>}
    </>
);

export default Stepper;
