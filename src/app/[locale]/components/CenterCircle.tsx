'use client';

import { Rubik_Mono_One } from 'next/font/google';

interface CenterCircleProps {
  displayText: string;
  backEndMode: boolean;
  onClick: () => void;
}
const rubikMonoOne = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
});

export const CenterCircle = ({
  displayText,
  backEndMode,
  onClick,
}: CenterCircleProps) => {
  return (
    <div
      className={`flex items-center justify-center w-100 h-100 md:w-175 md:h-175 rounded-full bg-[#1dc9f] shadow-2xl relative transition-all duration-300 ${
        backEndMode
          ? 'bg-transparent animate-shake border border-black'
          : 'bg-[#1dc9f]'
      } hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <div className='absolute flex items-center'>
        <h1
          className={`${rubikMonoOne.className} text-5xl text-center text-white`}
        >
          {displayText}&#8203;
        </h1>
      </div>
    </div>
  );
};
