'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as 'en' | 'es';

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
  ];

  const handleLocaleChange = (newLocale: 'en' | 'es') => {
    if (newLocale === currentLocale) return;
    if (pathname === '/' || !pathname.startsWith(`/${currentLocale}`)) {
      router.push(`/${newLocale}`);
      return;
    }
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className='fixed top-4 left-4 md:top-8 md:left-8 z-50'>
      <div className='relative backdrop-blur-xl bg-white/white/10 border border-white/20 rounded-xl md:rounded-2xl p-1 md:p-2 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300'>
        <div className='absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ' />
        <div className='absolute inset-0 rounded-xl md:rounded-2xl shadow-[inset_0_0_20px_rgba(234,208,70,0.3)]' />
        <div className='relative flex gap-1 md:gap-2'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLocaleChange(lang.code as 'en' | 'es')}
              className={`relative px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 overflow-hidden ${
                currentLocale === lang.code
                  ? 'text-black shadow-lg shadow-yellow-400/50'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {currentLocale === lang.code && (
                <>
                  <div className='absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 animate-pulse' />
                  <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/80 to-orange-400/80 blur-md' />
                </>
              )}

              <span className='relative z-10 flex items-center gap-1 md:gap-2'>
                <span className='text-base md:text-lg'>{lang.flag}</span>
                <span className='hidden sm:inline'>{lang.label}</span>
              </span>
              {currentLocale !== lang.code && (
                <div className='absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute inset-0 bg-white/5 rounded-lg md:rounded-xl' />
                  <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-lg md:rounded-xl' />
                </div>
              )}
            </button>
          ))}
        </div>
        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent blur-sm' />
      </div>
    </div>
  );
};
