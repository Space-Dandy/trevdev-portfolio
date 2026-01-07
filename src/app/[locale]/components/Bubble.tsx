
import { memo, useState } from 'react';

interface logos {
  firstLogo: string;
  secondLogo: string;
}
interface BubbleProps {
  hue: string;
  backEndMode: boolean;
  frontEndLogos: logos;
  backEndLogos: logos;
  gradient?: string;
  reverseAnimation?: boolean;
  style?: React.CSSProperties;
}
export const Bubble = memo(function Bubble({
  hue,
  backEndMode,
  frontEndLogos,
  backEndLogos,
  gradient,
  reverseAnimation = false,
  style,
}: BubbleProps) {
  const logo = !backEndMode ? frontEndLogos : backEndLogos;
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);

  const handleLogoChange = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };
  return (
    <>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          handleLogoChange();
        }}
        onMouseLeave={() => {
          setIsHovered(false);

          handleLogoChange();
        }}
        className={`bubble ${
          reverseAnimation ? 'bubble-animate-reverse' : 'bubble-animate'
        } flex items-center justify-center rounded-full shadow-lg p-2`}
        style={{
          width: 140,
          height: 140,
          background: gradient,
          boxShadow: `0 0 40px 10px ${hue}`,
          position: 'absolute',
          ...style,
          zIndex: 20,
        }}
      >
        <div className='flex flex-wrap items-center justify-center gap-2 w-full'>
          <img
            src={isHovered ? logo.secondLogo : logo.firstLogo}
            alt='Tech Logo'
            className={`w-full h-full rounded-full p-1 logo-animate ${
              fade ? 'fade-logo' : ''
            }`}
            style={{
              filter: `drop-shadow(0 0 6px hsl(${hue}, 70%, 60%))`,
            }}
          />
        </div>
      </div>
    </>
  );
});
