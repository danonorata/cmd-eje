import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h2 className="font-display text-2xl text-navy">{t('title')}</h2>
      <p className="mt-4 text-graphite">{t('body')}</p>
    </section>
  );
}
