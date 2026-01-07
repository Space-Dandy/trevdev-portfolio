import { t, type DeclarationContent } from 'intlayer';

const previousWorkContent = {
  key: 'previousWork',
  content: {
    title: t({
      en: 'Previous Projects',
      es: 'Proyectos Anteriores',
    }),
    aboutMe: {
      title: t({
        en: 'About Me',
        es: 'Sobre mí',
      }),
      name: t({
        en: 'Name:',
        es: 'Nombre:',
      }),
      fullName: t({
        en: 'Andrés Treviño',
        es: 'Andrés Treviño',
      }),
      age: t({
        en: 'Age:',
        es: 'Edad:',
      }),
      ageValue: t({
        en: '26 years old',
        es: '26 años',
      }),
      status: t({
        en: 'Status:',
        es: 'Estado:',
      }),
      statusValue: t({
        en: 'Learning Zig',
        es: 'Aprendiendo Zig',
      }),
      location: t({
        en: 'From Culiacán, Sinaloa, to the world',
        es: 'De Culiacán, Sinaloa, para el mundo',
      }),
      bio: t({
        en: 'Bio:',
        es: 'Bio:',
      }),
      bioText: t({
        en: "Full Stack Programmer with experience in Web, Backend and Mobile application development. Bachelor's degree in Computer Science with knowledge in SQL and NoSQL databases, agile methodologies and version control. Passionate about technology and continuous learning.",
        es: 'Programador Fullstack con experiencia en desarrollo de aplicaciones Web, Backend y Móviles. Licenciado en informática y con conocimiento en bases de datos SQL, NoSQL, metodologías ágiles y control de versiones. Apasionado por la tecnología y el aprendizaje continuo.',
      }),
      downloadCV: t({
        en: 'Download CV',
        es: 'Descargar CV',
      }),
    },
    obsidian: {
      title: t({
        en: 'Obsidian',
        es: 'Obsidian',
      }),
      description: t({
        en: 'Obsidian is a desktop application whose development I led, built with Flutter / Dart using Provider-based architecture for state management. The system integrates native services through custom plugins written in C# for card readers and printers, implements internationalization (i18n), dynamic theme handling, and server communication via WebSockets and REST APIs. I worked in parallel on a complementary web version using TypeScript and React, and actively participated in the development and maintenance of the backend in Django, including API design, authentication, cash session management, and business logic for casino operations. In parallel, a self-service system was developed specialized for casino runners and clients.',
        es: 'Obsidian es una aplicación de escritorio cuyo desarrollo lideré, hecha en Flutter / Dart utilizando arquitectura basada en Provider para gestión de estado. El sistema integra servicios nativos mediante plugins personalizados escritos en C# para lectores de tarjetas e impresoras, implementa internacionalización (i18n), manejo de temas dinámicos, y comunicación con servidores mediante WebSockets y APIs REST. Trabajé en paralelo en una versión web complementaria utilizando TypeScript y React, y participé activamente en el desarrollo y mantenimiento del backend en Django, incluyendo diseño de APIs, autenticación, gestión de sesiones de caja, y lógica de negocio para operaciones de casino. En paralelo se desarrolló un sistema de autoservicio especializado para los runners y clientes del casino.',
      }),
    },
    flow: {
      title: t({
        en: 'Flow',
        es: 'Flow',
      }),
      description: t({
        en: 'Flow is a Jira-type web application for task and project management, built with React and using Zustand for efficient global state management. We implemented a modern and responsive design using Tailwind CSS and accessible components from Chakra UI, achieving an intuitive and adaptable interface. On the backend, I worked with Express.js along with MongoDB to create a robust and scalable API, enabling secure storage and agile data queries. The result was a complete task management solution with modular architecture, optimized performance, and smooth user experience.',
        es: 'Flow es una aplicación web tipo Jira para la gestión de tareas y proyectos, construida con React y utilizando Zustand para el manejo eficiente de estados globales. Implementamos un diseño moderno y responsivo mediante Tailwind CSS y componentes accesibles de Chakra UI, logrando una interfaz intuitiva y adaptable. En el backend, trabajé con Express.js junto con MongoDB para la creación de una API robusta y escalable, permitiendo almacenamiento seguro y consultas ágiles de datos. El resultado fue una solución completa de gestión de tareas con arquitectura modular, rendimiento optimizado y experiencia de usuario fluida.',
      }),
    },
    floraysoft: {
      title: t({
        en: 'Floraysoft',
        es: 'Floraysoft',
      }),
      description: t({
        en: 'FloraySoft is a complete management system for flower shops developed with modern full-stack architecture. The backend is built with Go (Golang) using the Fiber framework for high-performance REST APIs and MongoDB as a NoSQL database, while the frontend is developed with React 18, TypeScript, and Tailwind CSS for a modern and responsive interface. The system includes complete management of orders, customers, supplies inventory, multi-currency payments, financial analysis, and user administration with roles. It implements state management with Zustand, forms with React Hook Form, and support for multiple branches with customized configuration by business type (flower shop or general). It features dark / light mode, robust form validation, and is designed following clean architecture principles and best development practices.',
        es: 'FloraySoft es un sistema completo de gestión para floristerías desarrollado con arquitectura moderna full-stack. El backend está construido con Go (Golang) utilizando el framework Fiber para APIs REST de alto rendimiento y MongoDB como base de datos NoSQL, mientras que el frontend está desarrollado con React 18, TypeScript, y Tailwind CSS para una interfaz moderna y responsiva. El sistema incluye gestión completa de pedidos, clientes, inventario de insumos, pagos multi-moneda, análisis financiero, y administración de usuarios con roles. Implementa manejo de estado con Zustand, formularios con React Hook Form, y soporte para múltiples sucursales con configuración personalizada por tipo de negocio (floristería o general). Cuenta con modo oscuro / claro, validación robusta de formularios, y está diseñado siguiendo principios de arquitectura limpia y mejores prácticas de desarrollo.',
      }),
    },
    quotio: {
      title: t({
        en: 'Quotio',
        es: 'Quotio',
      }),
      description: t({
        en: 'Quotio is a comprehensive business management web application developed with a modern full-stack architecture. The frontend is built with React 18 and TypeScript, implementing Zustand for global state management, React Hook Form for form validation, and Tailwind CSS for a responsive and consistent design. The application includes complete modules for quotes, orders, products, point of sale (POS), real estate property management, and a robust coupon and discount system. The backend is developed in NestJS, providing a scalable RESTful API with modular architecture. A standout feature is the implementation of a Lambda function optimized for image processing and storage in AWS S3, which includes automatic resizing, file optimization, and generation of pre-signed URLs for secure uploads. The system features JWT authentication, role and permission management, real-time analytical reports, and PDF generation, offering a complete solution for operational management of organizations with multiple branches.',
        es: 'Quotio es una aplicación web integral de gestión empresarial desarrollada con una arquitectura moderna full-stack. El frontend está construido con React 18 y TypeScript, implementando Zustand para el manejo de estado global, React Hook Form para validación de formularios, y Tailwind CSS para un diseño responsive y consistente. La aplicación incluye módulos completos de cotizaciones, órdenes, productos, punto de venta (POS), gestión de propiedades inmobiliarias, y un sistema robusto de cupones y descuentos. El backend está desarrollado en NestJS, proporcionando una API RESTful escalable con arquitectura modular. Una característica destacada es la implementación de una función Lambda optimizada para el procesamiento y almacenamiento de imágenes en AWS S3, que incluye redimensionamiento automático, optimización de archivos, y generación de URLs pre-firmadas para uploads seguros. El sistema cuenta con autenticación JWT, manejo de roles y permisos, reportes analíticos en tiempo real, y generación de PDFs, ofreciendo una solución completa para la gestión operativa de organizaciones con múltiples sucursales.',
      }),
    },
  },
} satisfies DeclarationContent;

export default previousWorkContent;
