import { Courier_Prime, Permanent_Marker } from 'next/font/google';
import { HightLightedText, PreviousWorkCard } from './PreviousWorkCard';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const AnimatedBackground = () => {
  return (
    <>
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-yellow-400/40 rounded-full mix-blend-screen filter blur-3xl animate-blob'></div>
        <div className='absolute top-10 right-0 w-96 h-96 bg-red-400/40 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-0 left-1/2  w-96 h-96 bg-orange-400/40 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000'></div>
      </div>
    </>
  );
};

const AboutMeCard = () => {
  return (
    <div className='sticky top-24 p-8 rounded-lg shadow-lg w-1/3 h-fit  m-12 self-start relative'>
      <div className='absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 animate-gradient-x -z-10'></div>
      <div className='absolute inset-[3px] bg-[#0C0908] rounded-lg -z-10'></div>
      <h2
        className={`text-7xl font-bold ${permanentMarker.className} mb-2 text-yellow-400`}
      >
        Sobre mí
      </h2>
      <p className={`text-white text-xl mt-4 ${courierPrime.className} `}>
        <HightLightedText>Nombre:</HightLightedText> Andrés Treviño
      </p>
      <p className={`text-white text-xl mt-4 ${courierPrime.className} `}>
        <HightLightedText>Edad:</HightLightedText> 26 años
      </p>
      <p className={`text-white text-xl mt-4 ${courierPrime.className} `}>
        <HightLightedText>Estado:</HightLightedText> Aprendiendo Zig
      </p>
      <p className={`text-white text-xl mt-4 ${courierPrime.className} `}>
        <HightLightedText>De Culiacán, Sinaloa, para el mundo</HightLightedText>
      </p>
      <p className={`text-white text-xl mt-4 ${courierPrime.className} `}>
        <HightLightedText>Bio:</HightLightedText> Programador Fullstack con
        experiencia en desarrollo de aplicaciones Web, Backend y Móviles.
        Licenciado en informática y con conocimiento en bases de datos SQL,
        NoSQL, metodologías ágiles y control de versiones. Apasionado por la
        tecnología y el aprendizaje continuo.
      </p>
      <div className='mt-6 flex flex-col gap-4'>
        <a
          href='/Andres_Trevino_CV.pdf'
          download
          className='px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors text-center'
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export const PreviousWorkSection = () => {
  return (
    <div className='relative min-h-screen justify-center bg-[#0C0908] p-4 '>
      <AnimatedBackground />
      <div className='flex gap-4 items-center justify-center z-10 relative pt-12'>
        <AboutMeCard />
        <div className='w-full'>
          <h2
            className={`text-7xl font-bold ${permanentMarker.className} mb-6 text-yellow-400 flex justify-center`}
          >
            Proyectos Anteriores
          </h2>
          <PreviousWorkCard
            title='Obsidian'
            index={0}
            techStack={[
              'Flutter',
              'Dart',
              'C#',
              '.NET Core',
              'PostgreSQL',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Django',
              'Python',
              'Docker',
            ]}
            imageUrl='images/sofidesk.png'
          >
            <>
              <p className='mb-4 '>
                <HightLightedText>Obsidian</HightLightedText> es una aplicación
                de escritorio cuyo desarrollo lideré, hecha en
                <HightLightedText> Flutter / Dart</HightLightedText> utilizando
                arquitectura basada en Provider para gestión de estado.
              </p>
              <p className='mb-4'>
                {' '}
                El sistema integra servicios nativos mediante plugins
                personalizados escritos en{' '}
                <HightLightedText>C#</HightLightedText> para lectores de
                tarjetas e impresoras, implementa internacionalización (i18n),
                manejo de temas dinámicos, y comunicación con servidores
                mediante WebSockets y APIs REST. Trabajé en paralelo en una
                versión web complementaria utilizando{' '}
                <HightLightedText>TypeScript</HightLightedText> y{' '}
                <HightLightedText>React</HightLightedText>, y participé
                activamente en el desarrollo y mantenimiento del backend en{' '}
                <HightLightedText>Django</HightLightedText>, incluyendo diseño
                de APIs, autenticación, gestión de sesiones de caja, y lógica de
                negocio para operaciones de casino.{' '}
              </p>

              <p>
                En paralelo se desarrolló un sistema de{' '}
                <HightLightedText>autoservicio</HightLightedText> especializado
                para los runners y clientes del casino.
              </p>
            </>
          </PreviousWorkCard>
          <PreviousWorkCard
            index={1}
            title='Flow'
            imageUrl='images/flow.png'
            techStack={[
              'React',
              'Typescript',
              'MongoDB',
              'Express.js',
              'Node.js',
              'Chakra UI',
              'Tailwind CSS',
            ]}
          >
            <p className='mb-4'>
              <HightLightedText>Flow</HightLightedText> es una aplicación web
              tipo <HightLightedText>Jira</HightLightedText> para la gestión de
              tareas y proyectos, construida con{' '}
              <HightLightedText>React</HightLightedText> y utilizando{' '}
              <HightLightedText>Zustand</HightLightedText> para el manejo
              eficiente de estados globales.
            </p>
            <p className='mb-4'>
              Implementamos un diseño moderno y responsivo mediante{' '}
              <HightLightedText>Tailwind CSS</HightLightedText> y componentes
              accesibles de <HightLightedText>Chakra UI</HightLightedText>,
              logrando una interfaz intuitiva y adaptable. En el backend,
              trabajé con <HightLightedText>Express.js</HightLightedText> junto
              con <HightLightedText>MongoDB</HightLightedText> para la creación
              de una API robusta y escalable, permitiendo almacenamiento seguro
              y consultas ágiles de datos.
            </p>
            <p>
              {' '}
              El resultado fue una solución completa de gestión de tareas con
              arquitectura modular, rendimiento optimizado y experiencia de
              usuario fluida
            </p>
          </PreviousWorkCard>
          <PreviousWorkCard
            index={2}
            title='Floraysoft'
            imageUrl='images/floraysoft.jpeg'
            techStack={[
              'Go (Golang)',
              'Fiber',
              'MongoDB',
              'React 18',
              'TypeScript',
              'Tailwind CSS',
              'Zustand',
              'React Hook Form',
              'JWT',
              'Docker',
            ]}
          >
            <p className='mb-4'>
              {' '}
              <HightLightedText>FloraySoft</HightLightedText> es un sistema
              completo de gestión para floristerías desarrollado con
              arquitectura moderna full-stack. El backend está construido con{' '}
              <HightLightedText>Go (Golang)</HightLightedText> utilizando el
              framework <HightLightedText>Fiber</HightLightedText> para APIs
              REST de alto rendimiento y{' '}
              <HightLightedText>MongoDB</HightLightedText> como base de datos
              NoSQL, mientras que el frontend está desarrollado con{' '}
              <HightLightedText>React 18</HightLightedText>,
              <HightLightedText>TypeScript</HightLightedText>, y{' '}
              <HightLightedText>Tailwind CSS</HightLightedText> para una
              interfaz moderna y responsiva.{' '}
            </p>
            <p className='mb-4'>
              El sistema incluye gestión completa de pedidos, clientes,
              inventario de insumos, pagos multi-moneda, análisis financiero, y
              administración de usuarios con roles.{' '}
            </p>
            <p>
              Implementa manejo de estado con{' '}
              <HightLightedText>Zustand</HightLightedText>, formularios con{' '}
              <HightLightedText>React Hook Form</HightLightedText>, y soporte
              para múltiples sucursales con configuración personalizada por tipo
              de negocio (floristería o general). Cuenta con modo{' '}
              <HightLightedText>oscuro / claro</HightLightedText>, validación
              robusta de formularios, y está diseñado siguiendo principios de
              arquitectura limpia y mejores prácticas de desarrollo.
            </p>
          </PreviousWorkCard>
          <PreviousWorkCard
            index={3}
            title='Quotio'
            imageUrl='images/quotio.png'
            techStack={[
              'React 18',
              'Typescript',
              'Zustand',
              'React Hook Form',
              'Tailwind CSS',
            ]}
          >
            <p className='mb-4'>
              <HightLightedText>Quotio</HightLightedText> es una aplicación web
              integral de gestión empresarial desarrollada con una arquitectura
              moderna <HightLightedText>full-stack</HightLightedText>.
            </p>{' '}
            <p className='mb-4'>
              {' '}
              El frontend está construido con{' '}
              <HightLightedText>React 18</HightLightedText> y{' '}
              <HightLightedText>TypeScript</HightLightedText>, implementando{' '}
              <HightLightedText>Zustand</HightLightedText> para el manejo de
              estado global,{' '}
              <HightLightedText>React Hook Form</HightLightedText> para
              validación de formularios, y{' '}
              <HightLightedText>Tailwind CSS</HightLightedText> para un diseño
              responsive y consistente. La aplicación incluye módulos completos
              de cotizaciones, órdenes, productos, punto de venta (POS), gestión
              de propiedades inmobiliarias, y un sistema robusto de cupones y
              descuentos.
            </p>{' '}
            <p className='mb-4'>
              {' '}
              El backend está desarrollado en{' '}
              <HightLightedText>NestJS</HightLightedText>, proporcionando una
              API RESTful escalable con arquitectura modular. Una característica
              destacada es la implementación de una función{' '}
              <HightLightedText>Lambda</HightLightedText> optimizada para el
              procesamiento y almacenamiento de imágenes en{' '}
              <HightLightedText>AWS S3</HightLightedText>, que incluye
              redimensionamiento automático, optimización de archivos, y
              generación de URLs pre-firmadas para uploads seguros.{' '}
            </p>
            <p>
              El sistema cuenta con autenticación{' '}
              <HightLightedText>JWT</HightLightedText>, manejo de roles y
              permisos, reportes analíticos en tiempo real, y generación de
              PDFs, ofreciendo una solución completa para la gestión operativa
              de organizaciones con múltiples sucursales.
            </p>
          </PreviousWorkCard>
        </div>
      </div>
    </div>
  );
};
