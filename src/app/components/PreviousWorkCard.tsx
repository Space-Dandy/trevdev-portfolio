import { Courier_Prime, Permanent_Marker } from 'next/font/google';
import { useEffect, useState } from 'react';

interface PreviousWorkCardProps {
  title: string;
  children?: React.ReactNode;
  techStack?: string[];
  imageUrl?: string;
  index: number;
}
const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const HightLightedText = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className={`text-yellow-400 font-bold  ${permanentMarker.className}`}>
      {children}
    </span>
  );
};

export const PreviousWorkCard = ({
  title,
  techStack,
  imageUrl,
  children,
  index,
}: PreviousWorkCardProps) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`card-${index}`);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(viewportCenter - cardCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;

      const newScale = 1 - (distanceFromCenter / maxDistance) * 0.2;
      const newOpacity = 1 - (distanceFromCenter / maxDistance) * 0.5;

      setScale(Math.max(newScale, 0.8));
      setOpacity(Math.max(newOpacity, 0.5));
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className='bg-[#0C0908] p-6 rounded-lg shadow-lg mb-6 flex transition-all duration-300 ease-out'
      id={`card-${index}`}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className='absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 animate-gradient-x -z-10'></div>
      <div className='absolute inset-[3px] bg-[#0C0908] rounded-lg -z-10'></div>
      <div className='w-full h-full mb-4 flex flex-col gap-6 rounded-lg overflow-hidden items-center p-2'>
        <h4
          className={`text-4xl font-bold ${permanentMarker.className} mb-2 text-yellow-400`}
        >
          {title}
        </h4>
        <div className={`text-white text-lg ${courierPrime.className} `}>
          {children}
        </div>
        {techStack && (
          <div>
            <p className='font-bold text-yellow-400'>Tech Stack:</p>
            <p className=''>{techStack.join(' - ')}</p>
          </div>
        )}
      </div>
      <div className='flex-grow '>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className='w-full h-full object-contain '
          />
        )}
      </div>
    </div>
  );
};
