import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Включение поддержки темной темы
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.3s ease-out', // Анимация появления
        'slide-out': 'slide-out 0.3s ease-out', // Анимация исчезновения
        'ring': 'ring 1s linear infinite', // Анимация звонка
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' }, // Начальное состояние
          '100%': { transform: 'translateY(0)', opacity: '1' }, // Конечное состояние
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' }, // Начальное состояние
          '100%': { transform: 'translateY(-20px)', opacity: '0' }, // Конечное состояние
        },
        ring: {
          '0%': { transform: 'rotate(0deg)' }, // Начальное состояние
          '25%': { transform: 'rotate(30deg)' }, // Поворот на 30 градусов
          '75%': { transform: 'rotate(-30deg)' }, // Поворот на -30 градусов
          '100%': { transform: 'rotate(0deg)' }, // Возврат в начальное положение
        },
      },
    },
  },
  plugins: [],
};

export default config