import { useIntlayer } from 'next-intlayer';
import { Courier_Prime, Permanent_Marker } from 'next/font/google';
import { useParams } from 'next/navigation';
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
  const { aboutMe } = useIntlayer('previousWork');
  const params = useParams();
  const locale = params.locale as 'en' | 'es';

  return (
    <div className='relative md:sticky md:top-24 p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/3 h-fit m-4 md:m-12 md:self-start'>
      <div className='absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 animate-gradient-x -z-10'></div>
      <div className='absolute inset-[3px] bg-[#0C0908] rounded-lg -z-10'></div>
      <h2
        className={`text-4xl md:text-7xl font-bold ${permanentMarker.className} mb-2 text-yellow-400`}
      >
        {aboutMe.title}
      </h2>
      <p
        className={`text-white text-base md:text-xl mt-4 ${courierPrime.className}`}
      >
        <HightLightedText>{aboutMe.name}</HightLightedText> {aboutMe.fullName}
      </p>
      <p
        className={`text-white text-base md:text-xl mt-4 ${courierPrime.className}`}
      >
        <HightLightedText>{aboutMe.age}</HightLightedText> {aboutMe.ageValue}
      </p>
      <p
        className={`text-white text-base md:text-xl mt-4 ${courierPrime.className}`}
      >
        <HightLightedText>{aboutMe.status}</HightLightedText>{' '}
        {aboutMe.statusValue}
      </p>
      <p
        className={`text-white text-base md:text-xl mt-4 ${courierPrime.className}`}
      >
        <HightLightedText>{aboutMe.location}</HightLightedText>
      </p>
      <p
        className={`text-white text-base md:text-xl mt-4 ${courierPrime.className}`}
      >
        <HightLightedText>{aboutMe.bio}</HightLightedText> {aboutMe.bioText}
      </p>
      <div className='mt-6 flex flex-col gap-4'>
        <a
          href={`/cvs/AndresTrevino_Resume${locale === 'es' ? 'ES' : 'EN'}.pdf`}
          download
          className='px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors text-center'
        >
          {aboutMe.downloadCV}
        </a>
      </div>
    </div>
  );
};
const HighlightedDescription = ({ text }: { text: string }) => {
  const techTerms = [
    'Flutter',
    'Dart',
    'C#',
    'TypeScript',
    'React',
    'Django',
    'autoservicio',
    'Jira',
    'Zustand',
    'Tailwind CSS',
    'Chakra UI',
    'Next.js',
    'Node.js',
    'Python',
    'Express.js',
    'NestJS',
    'Go (Golang)',
    'Fiber',
    'React 18',
    'Hook Form',
    ' oscuro / claro',
    'dark / light',
    'full-stack',
    'Lambda',
    'AWS S3',
    'JWT',
    'MongoDB',
  ];

  let result: React.ReactNode[] = [];
  let remainingText = text;
  let key = 0;

  while (remainingText.length > 0) {
    let earliestMatch = { index: remainingText.length, term: '' };

    techTerms.forEach((term) => {
      const index = remainingText.indexOf(term);
      if (index !== -1 && index < earliestMatch.index) {
        earliestMatch = { index, term };
        if (index !== -1 && index < earliestMatch.index) {
          earliestMatch = { index, term };
        }
      }
    });

    if (earliestMatch.term) {
      if (earliestMatch.index > 0) {
        result.push(remainingText.substring(0, earliestMatch.index));
      }
      result.push(
        <HightLightedText key={key++}>{earliestMatch.term}</HightLightedText>,
      );
      remainingText = remainingText.substring(
        earliestMatch.index + earliestMatch.term.length,
      );
    } else {
      result.push(remainingText);
      break;
    }
  }
  return <>{result}</>;
};

export const PreviousWorkSection = () => {
  const { title, obsidian, flow, floraysoft, quotio } =
    useIntlayer('previousWork');

  return (
    <div className='relative min-h-screen justify-center bg-[#0C0908] p-4 '>
      <AnimatedBackground />
      <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-center z-10 relative pt-12'>
        <AboutMeCard />
        <div className='w-full'>
          <h2
            className={`text-4xl md:text-7xl font-bold ${permanentMarker.className} mb-6 text-yellow-400 flex justify-center`}
          >
            {title}
          </h2>
          <PreviousWorkCard
            title={obsidian.title.value}
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
            <HighlightedDescription text={obsidian.description.value} />
          </PreviousWorkCard>
          <PreviousWorkCard
            index={1}
            title={flow.title.value}
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
            <HighlightedDescription text={flow.description.value} />
          </PreviousWorkCard>
          <PreviousWorkCard
            index={2}
            title={floraysoft.title.value}
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
            <HighlightedDescription text={floraysoft.description.value} />
          </PreviousWorkCard>
          <PreviousWorkCard
            index={3}
            title={quotio.title.value}
            imageUrl='images/quotio.png'
            techStack={[
              'React 18',
              'Typescript',
              'Zustand',
              'React Hook Form',
              'Tailwind CSS',
              'AWS S3',
              'NestJS',
              'Lambda',
              'Node.js',
              'MongoDB',
              'Docker',
            ]}
          >
            <HighlightedDescription text={quotio.description.value} />
          </PreviousWorkCard>
        </div>
      </div>
    </div>
  );
};
