import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="bg-navy px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="font-display text-3xl text-white md:text-4xl">{t('headline')}</h1>
          <p className="mt-4 text-sky/90">{t('subhead')}</p>
          <a
            href="#cta-final"
            className="mt-8 inline-block rounded-md bg-sky px-6 py-3 text-sm font-medium text-navy"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
