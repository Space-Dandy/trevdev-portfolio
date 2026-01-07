import { IntlayerClientProvider, NextPageIntlayer } from 'next-intlayer';
import { IntlayerServerProvider } from 'next-intlayer/server';
import Home from './components/Home';

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <Home />
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Page;
