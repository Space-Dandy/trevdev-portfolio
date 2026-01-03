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
  return (
    <>
      <div className='absolute bottom-40 right-8 max-w-full'>
        <h2 className={`text-white tracking-[5px] relative z-[1]`}>
          <span key={roleIndex} className='relative inline-block'>
            <span className='relative inline-block'>
              <div className='glitch-container'>
                <span
                  className={`glitch text-4xl ${rubikMonoOne.className}`}
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
        <p className='text-white text-2xl mt-4'>
          {backEndMode
            ? 'Esta página es una ilusión óptica creada para ser contratado.'
            : 'Bienvenido a mi portafolio.'}
        </p>
      </div>
    </>
  );
};
