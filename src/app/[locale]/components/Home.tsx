'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';
import { useEffect, useState } from 'react';
import { BackgroundLayer } from './BackgroundLayer';
import { Bubble } from './Bubble';
import { CenterCircle } from './CenterCircle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PreviousWorkSection } from './PreviousWorkSection';
import { RoleSection } from './RoleSection';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  url?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  details,
  url,
}) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300'
    >
      <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all'>
        {icon}
      </div>
      <div className='flex-1'>
        <p className='text-white/50 text-sm '>{title}</p>
        <p className='text-white font-medium'>{details}</p>
        <svg
          className='w-5 h-5 text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </div>
    </a>
  );
};
const ContactSection = () => {
  const content = useIntlayer('page');

  return (
    <div className='relative min-h-screen flex items-center justify-center p-8'>
      <div className='relative w-full max-w-5xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl flex flex-col items-center'>
        <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10' />
        <div className='relative z-10 flex flex-col items-center gap-8'>
          {/* PFP */}
          <div className='flex shrink-0'>
            <div className='relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl'>
              <img
                src='/images/pfp.png'
                alt='Andrés Treviño Burgos'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 mix-blend-overlay' />
            </div>
          </div>
          <div className='text-center space-y-2'>
            <h2 className='text-3xl font-bold text-white'>
              {content.contact.title.value}
            </h2>
            <p className='text-white/70 max-w-md'>
              {content.contact.description.value}
            </p>

            <p className='text-gray-300/40 max-w-md text-left'>
              {content.contact.proTip}
            </p>
          </div>
          {/* Contact Infooo */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
            <ContactCard
              icon={
                <Github className='w-6 h-6 text-white/70 group-hover:text-yellow-400' />
              }
              details='@Space-Dandy'
              title={content.contact.github.value}
              url='https://github.com/Space-Dandy'
            />{' '}
            <ContactCard
              icon={
                <Linkedin className='w-6 h-6 text-white/70 group-hover:text-yellow-400' />
              }
              details='Andrés Treviño Burgos'
              title={content.contact.linkedin.value}
              url='https://www.linkedin.com/in/andrés-treviño-burgos-610316208'
            />{' '}
            <ContactCard
              icon={
                <Mail className='w-6 h-6 text-white/70 group-hover:text-yellow-400' />
              }
              details='a.trevdev@gmail.com'
              title={content.contact.email.value}
              url='mailto:a.trevdev@gmail.com'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopBubbles = ({ backEndMode }: { backEndMode: boolean }) => {
  return (
    <div className='hidden md:flex absolute inset-0 pointer-events-none'>
      <div className='flex flex-col justify-center gap-12 ml-8 lg:ml-16 pointer-events-auto'>
        <Bubble
          hue='#00fff7'
          backEndMode={backEndMode}
          frontEndLogos={{
            firstLogo: '/logos/react.png',
            secondLogo: '/logos/nextjs.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/go.png',
            secondLogo: '/logos/github.png',
          }}
          gradient={`radial-gradient(circle at 100% 100%, ${'#00fff7'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />

        <Bubble
          hue='#d4a26dff'
          backEndMode={backEndMode}
          reverseAnimation={true}
          frontEndLogos={{
            firstLogo: '/logos/postman.png',
            secondLogo: '/logos/jira.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/python.png',
            secondLogo: '/logos/flask.png',
          }}
          gradient={`radial-gradient(circle at 50% 50%, ${'#EAD046'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />

        <Bubble
          hue='#3178C6'
          backEndMode={backEndMode}
          reverseAnimation={true}
          frontEndLogos={{
            firstLogo: '/logos/ts.png',
            secondLogo: '/logos/js.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/nodejs.png',
            secondLogo: '/logos/express.png',
          }}
          gradient={`radial-gradient(circle at 100% 50%, ${'#3178C6'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />
      </div>

      <div className='flex flex-col justify-center gap-12 ml-auto mr-8 lg:mr-16 pointer-events-auto'>
        <Bubble
          hue='#11b4ffff'
          backEndMode={backEndMode}
          reverseAnimation={true}
          frontEndLogos={{
            firstLogo: '/logos/flutter.png',
            secondLogo: '/logos/dart.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/mysql.png',
            secondLogo: '/logos/mongo.png',
          }}
          gradient={`radial-gradient(circle at 50% 50%, ${'#d4a26dff'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />

        <Bubble
          hue='#229da3ff'
          backEndMode={backEndMode}
          reverseAnimation={true}
          frontEndLogos={{
            firstLogo: '/logos/html.png',
            secondLogo: '/logos/css.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/csharp.png',
            secondLogo: '/logos/netcore.png',
          }}
          gradient={`radial-gradient(circle at 50% 50%, ${'#d4a26dff'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />

        <Bubble
          hue='#00eeffff'
          backEndMode={backEndMode}
          reverseAnimation={true}
          frontEndLogos={{
            firstLogo: '/logos/tailwind.png',
            secondLogo: '/logos/angular.png',
          }}
          backEndLogos={{
            firstLogo: '/logos/java.png',
            secondLogo: '/logos/spring.png',
          }}
          gradient={`radial-gradient(circle at 50% 50%, ${'#b97021ff'} 0%, transparent 70%)`}
          style={{ position: 'relative' }}
        />
      </div>
    </div>
  );
};

const MobileBubbles = ({
  backEndMode,
  isMobile,
}: {
  backEndMode: boolean;
  isMobile: boolean;
}) => {
  if (!isMobile) return null;
  return (
    <div className='md:hidden absolute top-20 left-0 right-0 overflow-x-auto overflow-y-hidden scrollbar-hide'>
      <div className='flex gap-4 px-4 py-6 min-w-max'>
        <div className='relative w-20 h-20'>
          <Bubble
            hue='#00fff7'
            backEndMode={backEndMode}
            frontEndLogos={{
              firstLogo: '/logos/react.png',
              secondLogo: '/logos/nextjs.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/go.png',
              secondLogo: '/logos/github.png',
            }}
            gradient={`radial-gradient(circle at 100% 100%, ${'#00fff7'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>

        <div className='relative w-20 h-20'>
          <Bubble
            hue='#3178C6'
            backEndMode={backEndMode}
            frontEndLogos={{
              firstLogo: '/logos/ts.png',
              secondLogo: '/logos/js.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/nodejs.png',
              secondLogo: '/logos/express.png',
            }}
            gradient={`radial-gradient(circle at 100% 50%, ${'#3178C6'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>

        <div className='relative w-20 h-20'>
          <Bubble
            hue='#d4a26dff'
            backEndMode={backEndMode}
            reverseAnimation={true}
            frontEndLogos={{
              firstLogo: '/logos/flutter.png',
              secondLogo: '/logos/dart.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/mysql.png',
              secondLogo: '/logos/mongo.png',
            }}
            gradient={`radial-gradient(circle at 50% 50%, ${'#d4a26dff'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>

        <div className='relative w-20 h-20'>
          <Bubble
            hue='#EAD046'
            backEndMode={backEndMode}
            reverseAnimation={true}
            frontEndLogos={{
              firstLogo: '/logos/postman.png',
              secondLogo: '/logos/jira.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/python.png',
              secondLogo: '/logos/flask.png',
            }}
            gradient={`radial-gradient(circle at 50% 50%, ${'#EAD046'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>

        <div className='relative w-20 h-20'>
          <Bubble
            hue='#d4a26dff'
            backEndMode={backEndMode}
            reverseAnimation={true}
            frontEndLogos={{
              firstLogo: '/logos/html.png',
              secondLogo: '/logos/css.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/csharp.png',
              secondLogo: '/logos/netcore.png',
            }}
            gradient={`radial-gradient(circle at 50% 50%, ${'#d4a26dff'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>

        <div className='relative w-20 h-20'>
          <Bubble
            hue='#b97021ff'
            backEndMode={backEndMode}
            reverseAnimation={true}
            frontEndLogos={{
              firstLogo: '/logos/tailwind.png',
              secondLogo: '/logos/angular.png',
            }}
            backEndLogos={{
              firstLogo: '/logos/java.png',
              secondLogo: '/logos/spring.png',
            }}
            gradient={`radial-gradient(circle at 50% 50%, ${'#b97021ff'} 0%, transparent 70%)`}
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const content = useIntlayer('page');

  const texts = [content.hero.name.value, content.hero.altName.value];
  const roles = [
    content.hero.roles.developer.value,
    'Developer',
    content.hero.roles.programmer.value,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [backEndMode, setbackEndMode] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () =>
      setWindowHeight(window.innerHeight),
    );
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () =>
        setWindowHeight(window.innerHeight),
      );
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <LanguageSwitcher />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Andrés Treviño Burgos',
            alternateName: 'TrevDev',
            url: 'https://trevdev.com',
            image: 'https://trevdev.com/images/pfp.png',
            jobTitle: 'Desarrollador Full Stack',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Culiacán',
              addressRegion: 'Sinaloa',
              addressCountry: 'MX',
            },
            sameAs: [
              'https://github.com/Space-Dandy',
              'https://www.linkedin.com/in/andrés-treviño-burgos-610316208',
            ],
            knowsAbout: [
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Python',
              'Go',
              'Flutter',
              'Dart',
              'C#',
              'C++',
              'C',
              'Full Stack Development',
              'Web Development',
              'Backend Development',
            ],
          }),
        }}
      />
      <BackgroundLayer backEndMode={backEndMode} scrollY={scrollY} />
      <div className='relative min-h-screen overflow-hidden z-20'>
        <main className='relative z-10  min-h-screen flex items-center justify-center px-4 pt-48 md:pt-0'>
          <DesktopBubbles backEndMode={backEndMode} />

          <CenterCircle
            displayText={displayText}
            backEndMode={backEndMode}
            onClick={() => setbackEndMode((prev) => !prev)}
          />
          <MobileBubbles backEndMode={backEndMode} isMobile={isMobile} />
          <RoleSection
            role={roles[roleIndex]}
            roleIndex={roleIndex}
            backEndMode={backEndMode}
          />
        </main>
      </div>
      <PreviousWorkSection />
      <div className='relative min-h-screen overflow-hidden z-20'>
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
