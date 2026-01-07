import { useIntlayer } from 'next-intlayer';
import { Rubik_Mono_One } from 'next/font/google';

interface RoleSectionProps {
  role: string;
  roleIndex: number;
  backEndMode: boolean;
}
const rubikMonoOne = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
});

export const RoleSection = ({
  role,
  roleIndex,
  backEndMode,
}: RoleSectionProps) => {
  const content = useIntlayer('page');

  return (
    <>
      <div className='absolute bottom-8 left-4 right-4 md:bottom-40 md:right-8 md:left-auto max-w-full md:max-w-2xl'>
        <h2
          className={`text-white tracking-[2px] md:tracking-[5px] relative z-[1]`}
        >
          <span key={roleIndex} className='relative inline-block'>
            <span className='relative inline-block'>
              <div className='glitch-container'>
                <span
                  className={`glitch text-xl sm:text-2xl md:text-3xl lg:text-4xl ${rubikMonoOne.className}`}
                  data-text={`${role} ${
                    !backEndMode ? 'front-end' : 'back-end'
                  }`}
                >
                  {role} {!backEndMode ? 'front-end' : 'back-end'}
                </span>
              </div>
            </span>
          </span>
        </h2>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-4'>
          {backEndMode
            ? content.hero.altWelcomeMessage.value
            : content.hero.welcomeMessage.value}
        </p>
      </div>
    </>
  );
};
