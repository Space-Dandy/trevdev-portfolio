import { t, type DeclarationContent } from 'intlayer';

const pageContent = {
  key: 'page',
  content: {
    hero: {
      name: t({
        en: 'Andrés Treviño Burgos',
        es: 'Andrés Treviño Burgos',
      }),
      altName: t({
        en: '_TrevDev',
        es: '_TrevDev',
      }),
      roles: {
        developer: t({
          en: 'Developer',
          es: 'Desarrollador',
        }),
        programmer: t({
          en: 'Programmer',
          es: 'Programador',
        }),
      },
      welcomeMessage: t({
        en: 'Welcome to my portfolio!',
        es: '¡Bienvenido a mi portafolio!',
      }),
      altWelcomeMessage: t({
        en: 'Made in Next.js with 💛 and Tailwind CSS.',
        es: 'Hecho en Next.js con 💛 y Tailwind CSS.',
      }),
    },
    contact: {
      title: t({
        en: 'Contact Me',
        es: 'Contáctame',
      }),
      description: t({
        en: 'Here you can find me on different platforms, as well as check out my previous work on Github. Thanks for visiting my portfolio',
        es: 'Aquí puedes encontrarme en diferentes plataformas, además de checar mis trabajos previos en Github. Gracias por visitar mi portafolio',
      }),
      proTip: t({
        en: 'Pro tip: Click the center circle on the hero section to switch between Frontend and Backend mode!',
        es: 'Pro tip: ¡Haz click en el círculo en la sección hero para cambiar entre modo Frontend y Backend!',
      }),
      github: t({
        en: 'Github',
        es: 'Github',
      }),
      linkedin: t({
        en: 'LinkedIn',
        es: 'LinkedIn',
      }),
      email: t({
        en: 'Email',
        es: 'Correo Electrónico',
      }),
    },
  },
} satisfies DeclarationContent;

export default pageContent;
