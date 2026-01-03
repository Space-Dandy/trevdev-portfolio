'use client';

import { useEffect, useState } from 'react';
import { BackgroundLayer } from './components/BackgroundLayer';
import { Bubble } from './components/Bubble';
import { CenterCircle } from './components/CenterCircle';
import { PreviousWorkSection } from './components/PreviousWorkSection';
import { RoleSection } from './components/RoleSection';

export default function Home() {
  const texts = ['Andrés Treviño Burgos', '_TrevDev'];
  const roles = [
    'Desarrollador',
    'Developer',
    'Programador',
    'Software Engineer',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [backEndMode, setbackEndMode] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
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

  return (
    <>
      <div className='relative min-h-screen overflow-hidden z-20'>
        <BackgroundLayer backEndMode={backEndMode} scrollY={scrollY} />
        <main className='relative z-10  min-h-screen flex items-center justify-center'>
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
            style={{ top: 150, left: 600 }}
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
            style={{ top: 400, left: 400 }}
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
            style={{ bottom: 400, left: 350 }}
          />
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
            style={{ top: 150, right: 600 }}
          />
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
            style={{ top: 400, right: 400 }}
          />
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
            style={{ bottom: 400, right: 350 }}
          />

          <CenterCircle
            displayText={displayText}
            backEndMode={backEndMode}
            onClick={() => setbackEndMode((prev) => !prev)}
          />
          <RoleSection
            role={roles[roleIndex]}
            roleIndex={roleIndex}
            backEndMode={backEndMode}
          />
        </main>
      </div>
      <PreviousWorkSection />
    </>
  );
}
