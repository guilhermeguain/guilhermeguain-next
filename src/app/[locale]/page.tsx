import { Home } from '@components/Home';
import { metaCopy } from '@lib/meta';
import { isLocale } from '@lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export const revalidate = 86400;

const HomePage = async ({ params }: Props) => {
  const { locale } = await params;
  const copy = metaCopy[isLocale(locale) ? locale : 'pt-BR'];

  return <Home title={copy.title} />;
};

export default HomePage;
